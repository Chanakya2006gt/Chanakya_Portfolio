import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";

interface ContactPayload {
  name: string;
  emailOrPhone: string;
  workflowDescription: string;
  company?: string; // honeypot — real people never fill this
}

// 5 submissions per hour per IP, in memory (per serverless instance).
const submissions = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = submissions.get(ip);
  if (!rec || now - rec.windowStart > 3_600_000) {
    submissions.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (rec.count >= 5) return true;
  rec.count += 1;
  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const looksLikeEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const json = (data: unknown, status = 200) =>
          new Response(JSON.stringify(data), {
            status,
            headers: { "Content-Type": "application/json" },
          });

        const ip =
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

        if (isRateLimited(ip)) {
          return json(
            {
              success: false,
              error: "Too many submissions. Please message on WhatsApp instead.",
            },
            429
          );
        }

        let body: Partial<ContactPayload>;
        try {
          body = (await request.json()) as Partial<ContactPayload>;
        } catch {
          return json({ success: false, error: "Invalid request." }, 400);
        }

        // Honeypot: silently accept and discard, so bots don't learn.
        if (body.company && body.company.trim().length > 0) {
          return json({ success: true, intakeId: "ok" });
        }

        const name = body.name?.trim() || "";
        const emailOrPhone = body.emailOrPhone?.trim() || "";
        const workflowDescription = body.workflowDescription?.trim() || "";

        if (!name || !emailOrPhone || !workflowDescription) {
          return json(
            {
              success: false,
              error:
                "Please provide your name, contact information, and what you need built.",
            },
            400
          );
        }

        if (
          name.length > 120 ||
          emailOrPhone.length > 160 ||
          workflowDescription.length > 4000
        ) {
          return json({ success: false, error: "That's longer than expected. Please shorten it." }, 400);
        }

        const intakeId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        const receivedAt = new Date().toISOString();

        const apiKey = getEnvVar("RESEND_API_KEY");
        const to = getEnvVar("LEAD_NOTIFY_EMAIL");
        const from = getEnvVar("LEAD_FROM_EMAIL", "onboarding@resend.dev");

        if (!apiKey || !to) {
          console.error("[contact] email not configured — enquiry not delivered", { intakeId });
          return json(
            {
              success: false,
              error:
                "Something went wrong on my side. Please message me on WhatsApp — I'll see it straight away.",
            },
            500
          );
        }

        const subject = `New enquiry from ${name} — ${emailOrPhone}`;
        const text = [
          `New enquiry from the website.`,
          ``,
          `Name:     ${name}`,
          `Contact:  ${emailOrPhone}`,
          `Received: ${receivedAt}`,
          `Ref:      ${intakeId}`,
          ``,
          `What they need:`,
          workflowDescription,
        ].join("\n");

        const html = `
          <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#111">
            <p style="margin:0 0 16px"><strong>New enquiry from the website.</strong></p>
            <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin:0 0 4px"><strong>Contact:</strong> ${escapeHtml(emailOrPhone)}</p>
            <p style="margin:0 0 16px;color:#666"><strong>Received:</strong> ${receivedAt} · <strong>Ref:</strong> ${intakeId}</p>
            <p style="margin:0 0 8px"><strong>What they need:</strong></p>
            <p style="margin:0;white-space:pre-wrap">${escapeHtml(workflowDescription)}</p>
          </div>
        `;

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: `Website enquiry <${from}>`,
              to: [to],
              subject,
              text,
              html,
              // Hitting Reply in Gmail answers the visitor directly.
              ...(looksLikeEmail(emailOrPhone) ? { reply_to: emailOrPhone } : {}),
            }),
          });

          if (!res.ok) {
            const detail = await res.text();
            console.error(`[contact] send failed ${res.status}`, detail.slice(0, 500), { intakeId });
            // Backstop so the lead is not lost entirely.
            console.error("[contact] undelivered lead", { intakeId, name, emailOrPhone, workflowDescription });
            return json(
              {
                success: false,
                error:
                  "I couldn't send that just now. Please message me on WhatsApp — I'll see it straight away.",
              },
              502
            );
          }
        } catch (err) {
          console.error("[contact] network error", err, { intakeId });
          console.error("[contact] undelivered lead", { intakeId, name, emailOrPhone, workflowDescription });
          return json(
            {
              success: false,
              error:
                "I couldn't send that just now. Please message me on WhatsApp — I'll see it straight away.",
            },
            502
          );
        }

        console.info("[contact] delivered", { intakeId, receivedAt });
        return json({ success: true, intakeId });
      },
    },
  },
});

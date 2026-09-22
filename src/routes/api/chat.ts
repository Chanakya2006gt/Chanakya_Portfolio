import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { assertEnvGuards } from "@/lib/boot-guards";
import {
  STUDIO_NAME,
  FOUNDER_NAME,
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/data/studio";

function buildSystemPrompt(): string {
  return `You are the assistant on the ${STUDIO_NAME} website. ${STUDIO_NAME} is a small software studio run by ${FOUNDER_NAME}. You answer visitors' questions about how ${STUDIO_NAME} works and whether it fits their business.

WHAT ${STUDIO_NAME} BUILDS
Custom software for businesses where work starts with a quote or an approval: the system that takes a job from quote, to confirmation, to delivery, built around the business's own rates and rules. Examples of fitting businesses: fabrication, interiors, printing, packaging, events, equipment rental, contracting. Simple websites are also built; those get a free quote after one conversation.

HOW A PROJECT RUNS
1. Intro call: 20 minutes, free. The visitor shows how a quote or job moves today and gets an honest yes or no on whether custom software is worth it.
2. Workflow Diagnosis: about 3 days, paid. ${FOUNDER_NAME} maps the rules and rates and builds one working screen on real data. The visitor gets that screen, a written spec, and a fixed quote for the build.
3. Build: up to 8 weeks, with weekly check-ins. The team tries it on real jobs before launch. The client gets the system live on their own domain and owns the code.
4. Keep it running: optional monthly support. Fourteen days of bug fixes after launch are included.

WORK
- Trelio (trelio.in): a live product ${FOUNDER_NAME} built and runs. Clients approve and pay for each stage of work before the next stage unlocks.
- Apex Packaging & Converting: a reference build showing a quoting system for an industrial packaging converter. It is a demonstration, not a client project.

HOW TO START
- Book a call: [Book a call](/book)
- WhatsApp: [${WHATSAPP_DISPLAY}](${WHATSAPP_URL})
- Email: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})

RULES (follow all of them)
- Never state a price, a price range, a ballpark, a day rate or a monthly fee. If asked about cost, say that cost depends on the workflow, that the first call is free, and that the diagnosis ends in a fixed quote. Then offer the booking link.
- If the visitor suggests a number ("is it around X?"), do not confirm, deny or react to the number. Give the answer above.
- Never mention education, college, degrees, age or being a student.
- Never invent clients, testimonials, results, statistics or timelines. Only mention Trelio and Apex, as described above.
- Never promise a faster timeline than "up to 8 weeks" for a build.
- Only share the contact details listed under HOW TO START. Never produce any other phone number, email or link.
- If you do not know something, say so and suggest a call.
- Keep answers under 80 words. Plain sentences. No emoji. No headings.`;
}

function getFallbackReply(_messages: any[]): string {
  return `I can't answer right now. The quickest way to talk is a free 20-minute call: [Book a call](/book). You can also message [WhatsApp ${WHATSAPP_DISPLAY}](${WHATSAPP_URL}) or email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).`;
}

// Simple in-memory rate limiter: max 20 requests per minute per IP
const chatRateLimits = new Map<string, { count: number; windowStart: number }>();

function isChatRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = chatRateLimits.get(ip);
  if (!record || now - record.windowStart > 60000) {
    chatRateLimits.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (record.count >= 20) {
    return true;
  }

  record.count += 1;
  return false;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        assertEnvGuards();

        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
        if (isChatRateLimited(ip)) {
          return new Response(
            JSON.stringify({
              reply: "You're sending messages a bit too fast. Please wait a moment before trying again.",
            }),
            {
              status: 429,
              headers: {
                "Content-Type": "application/json",
                "Retry-After": "60",
              },
            }
          );
        }

        let messages: any[] = [];
        try {
          const body = await request.json();
          const rawMessages = Array.isArray(body.messages) ? body.messages : [];

          // Payload Validation:
          // 1. Cap message history to maximum 25 items
          // 2. Validate role is 'user' or 'assistant'
          // 3. Cap each message content to 1000 characters
          messages = rawMessages
            .slice(-25)
            .filter((m: any) => m && (m.role === "user" || m.role === "assistant"))
            .map((m: any) => ({
              role: m.role,
              content: String(m.content || "").slice(0, 1000).trim(),
            }))
            .filter((m: any) => m.content.length > 0);

          const apiKey = getEnvVar("OPENAI_API_KEY");
          const model = getEnvVar("OPENAI_MODEL", "gpt-5.6-terra");
          const systemPrompt = buildSystemPrompt();

          if (apiKey && apiKey !== "your_openai_api_key_here" && !apiKey.includes("placeholder")) {
            try {
              // Call OpenAI Chat Completions API
              const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                  model,
                  messages: [
                    { role: "system", content: systemPrompt },
                    ...messages,
                  ],
                  temperature: 1,
                  max_completion_tokens: 500,
                }),
              });

              if (response.ok) {
                const resData = await response.json();
                const reply = resData.choices?.[0]?.message?.content;
                if (reply) {
                  return new Response(JSON.stringify({ reply }), {
                    headers: { "Content-Type": "application/json" },
                  });
                }
              }

              const errText = await response.text();
              console.error(`[OpenAI API Error ${response.status}]:`, errText);

              // Return clean, user-facing fallback without leaking internal API response details
              const fallbackAnswer = getFallbackReply(messages);
              return new Response(JSON.stringify({ reply: fallbackAnswer }), {
                headers: { "Content-Type": "application/json" },
              });
            } catch (openAiErr: any) {
              console.error("[OpenAI Network Error]:", openAiErr);
              const fallbackAnswer = getFallbackReply(messages);
              return new Response(
                JSON.stringify({ reply: fallbackAnswer }),
                { headers: { "Content-Type": "application/json" } }
              );
            }
          }

          // Fallback response using structured, concise bullet points
          const reply = getFallbackReply(messages);
          return new Response(JSON.stringify({ reply }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Chat API route error:", error);
          const reply = getFallbackReply(messages);
          return new Response(JSON.stringify({ reply }), {
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});

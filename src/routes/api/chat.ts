import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { assertEnvGuards } from "@/lib/boot-guards";
import {
  STUDIO_NAME,
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/data/studio";

function buildSystemPrompt(): string {
  return `You are the assistant on the ${STUDIO_NAME} website. ${STUDIO_NAME} is a boutique software studio that designs and builds bespoke quoting engines (CPQ), stage-locked operational workflows, and internal systems for growing businesses. You answer visitors' questions about how ${STUDIO_NAME} works and whether it fits their workflow.

WHAT ${STUDIO_NAME} BUILDS
Custom software for businesses where work starts with a quote or an approval: quoting engines that model exact rates and floor specs, milestone stage locks that prevent unpaid work, and internal tools that replace spreadsheets and WhatsApp threads. Fitting businesses include manufacturing, fabrication, trade services, distribution, and creative studios.

HOW A PROJECT RUNS
1. Discovery call: 20 minutes, free. We review how quotes or jobs move today and give an honest yes or no on whether custom software makes business sense.
2. Scope & Fixed Quote: Based on the client's problem size and workflow complexity, we provide a transparent, fixed-price quote and timeline before any build begins.
3. Build & Handover: We engineer the system around real data, stress-test it with the team, and deploy to the client's cloud. The client owns 100% of the repository and database.

WORK
- Trelio (trelio.in): a live studio product built and operated in-house. A client portal and milestone payment authorization platform.
- Apex Packaging & Converting: a reference build demonstrating an industrial CPQ estimating platform for packaging converters.

HOW TO START
- Book a call: [Book a call](/book)
- WhatsApp: [${WHATSAPP_DISPLAY}](${WHATSAPP_URL})
- Email: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})

RULES (follow all of them)
- Never state a price, a price range, a ballpark, a day rate or a monthly fee. If asked about cost, say that cost is scoped on the free 20-minute call based on the client's problem size and workflow complexity, resulting in a fixed quote. Then offer the booking link (/book).
- If the visitor suggests a number, do not confirm, deny or react to the number. Give the answer above.
- Never mention education, college, degrees, age or being a student.
- Never invent clients, testimonials, results, statistics or timelines. Only mention Trelio and Apex, as described above.
- Only share the contact details listed under HOW TO START. Never produce any other phone number, email or link.
- If you do not know something, say so and suggest booking a call.
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

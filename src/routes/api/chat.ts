import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { getPortfolioData } from "@/data/store";

function buildDynamicSystemPrompt(): string {
  const data = getPortfolioData();

  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const githubUrl = getEnvVar("PUBLIC_GITHUB_URL", "https://github.com/Chanakya2006gt");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const summary = data.resumeOverride?.summary || "Computer and Information Science student with hands-on experience building and shipping a full-stack, security-conscious SaaS product.";
  const education = data.resumeOverride?.education || "SR University — B.Tech CIS (Expected 2028)";
  const status = data.availabilityStatus || "Open for collaborations & full-time roles";

  const businessList = data.businesses
    .map(
      (b) =>
        `- ${b.title} (${b.badge || "Product"}): ${b.description}. Stack: ${b.stack.join(", ")}.${b.liveUrl ? ` Live URL: ${b.liveUrl}` : ""}`
    )
    .join("\n");

  const sideProjectList = data.sideProjects
    .map(
      (p) =>
        `- ${p.title}: ${p.description}. Stack: ${p.stack.join(", ")}.`
    )
    .join("\n");

  return `
You are the AI Customer Care & Support Companion for Nagulagam Chanakya's portfolio website.

NAGULAGAM CHANAKYA - RESUME & PROFESSIONAL PROFILE:
Location: Warangal, Telangana, India
Email: ${email}
GitHub: ${githubUrl}
LinkedIn: ${linkedinUrl}
Current Availability Status: ${status}

SUMMARY:
${summary}

EDUCATION:
${education}

TECHNICAL SKILLS:
- Languages: JavaScript, Java, SQL, TypeScript
- Frontend: React, Tailwind CSS, React Query, Vite, shadcn/ui
- Backend: Node.js, Express, PostgreSQL, Drizzle ORM, Redis
- Infrastructure & Security: REST APIs, Razorpay, AES-256-GCM encryption, HMAC webhooks, Clerk auth
- Practices: System design, software security, additive migrations, Playwright e2e testing, AI-assisted development workflows

FEATURED BUSINESSES & SAAS PRODUCTS:
${businessList}

SIDE PROJECTS & EXPERIMENTS:
${sideProjectList}

GUIDELINES FOR RESPONSES:
- Use exact facts from Chanakya's dynamic profile above.
- Be direct, professional, concise, and helpful.
- If asked about hiring or contacting Chanakya, mention email: ${email} and LinkedIn. Do NOT provide any phone number.
`;
}

function getFallbackReply(messages: any[]): string {
  const data = getPortfolioData();
  const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");

  if (lastUserMsg.includes("resume") || lastUserMsg.includes("cv") || lastUserMsg.includes("education")) {
    return `Nagulagam Chanakya — ${data.resumeOverride?.summary || "Computer & Information Science student building full-stack products."} Education: ${data.resumeOverride?.education || "SR University (2028)"}. Contact: ${email}`;
  } else if (lastUserMsg.includes("trelio") || lastUserMsg.includes("project") || lastUserMsg.includes("business")) {
    const bizSummary = data.businesses.map((b) => `${b.title} (${b.description})`).join("; ");
    return `Featured Projects & SaaS: ${bizSummary}.`;
  } else if (lastUserMsg.includes("tech") || lastUserMsg.includes("stack") || lastUserMsg.includes("skill")) {
    return "Skills summary: Languages (JavaScript, Java, SQL, TypeScript), Frontend (React, Tailwind CSS, React Query, Vite), Backend (Node.js, Express, PostgreSQL, Drizzle ORM, Redis), Security (REST APIs, Razorpay, AES-256-GCM, HMAC webhooks, Clerk auth).";
  } else if (lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("role") || lastUserMsg.includes("work")) {
    return `Chanakya is ${data.availabilityStatus || "open for software engineering roles"}! Contact: ${email}`;
  } else if (lastUserMsg.includes("contact") || lastUserMsg.includes("email") || lastUserMsg.includes("phone")) {
    return `Contact Chanakya at ${email}. LinkedIn: linkedin.com/in/nagulagam-chanakya-b93514315.`;
  }

  return `Thanks for asking! Chanakya is a Full-Stack Builder & SaaS Founder. Contact: ${email}. Reach out directly for work or collaborations!`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let messages: any[] = [];
        try {
          const body = await request.json();
          messages = body.messages || [];

          const apiKey = getEnvVar("OPENAI_API_KEY");
          const model = getEnvVar("OPENAI_MODEL", "gpt-5.6-terra");
          const systemPrompt = buildDynamicSystemPrompt();

          if (apiKey && apiKey !== "your_openai_api_key_here") {
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
                  temperature: 0.7,
                  max_tokens: 500,
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
              
              let apiErrMessage = `OpenAI API Error (${response.status}): Could not complete request.`;
              try {
                const parsed = JSON.parse(errText);
                if (parsed.error?.message) {
                  apiErrMessage = `OpenAI API (${parsed.error.type || response.status}): ${parsed.error.message}`;
                }
              } catch (_) {}

              return new Response(JSON.stringify({ reply: apiErrMessage }), {
                headers: { "Content-Type": "application/json" },
              });
            } catch (openAiErr: any) {
              console.error("[OpenAI Network Error]:", openAiErr);
              const fallbackAnswer = getFallbackReply(messages);
              return new Response(
                JSON.stringify({
                  reply: `${fallbackAnswer}\n\n*(Note: Live OpenAI API connection unavailable — getaddrinfo ENOTFOUND api.openai.com)*`,
                }),
                { headers: { "Content-Type": "application/json" } }
              );
            }
          }

          // Fallback response using dynamic data (never throws 500)
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

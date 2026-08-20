import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { getPortfolioData } from "@/data/store";

function buildDynamicSystemPrompt(): string {
  const data = getPortfolioData();

  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const githubUrl = getEnvVar("PUBLIC_GITHUB_URL", "https://github.com/Chanakya2006gt");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const summary = data.resumeOverride?.summary || "Hands-on experience building and shipping full-stack, security-conscious SaaS products with multi-tenant architecture and secure payment workflows.";
  const education = data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)";
  const status = data.availabilityStatus || "Open for collaborations & full-time roles";

  const businessList = data.businesses
    .map(
      (b) =>
        `* **${b.title}** (${b.badge || "Live Product"}): ${b.description} | Tech: ${b.stack.join(", ")}${b.liveUrl ? ` | Live: ${b.liveUrl}` : ""}`
    )
    .join("\n");

  const sideProjectList = data.sideProjects
    .map(
      (p) =>
        `* **${p.title}**: ${p.description} | Tech: ${p.stack.join(", ")}`
    )
    .join("\n");

  return `
You are the AI Customer Care & Support Assistant on Nagulagam Chanakya's portfolio website.

Your job is to speak from a crisp, business-oriented perspective for recruiters, clients, and technical leaders who visit the site.

# WHO IS CHANAKYA:
* **Name**: Nagulagam Chanakya
* **Role**: Full-Stack Developer & SaaS Founder (Trelio)
* **Education**: ${education}, Warangal, Telangana, India
* **Current Status**: ${status}
* **Email**: ${email}
* **LinkedIn**: ${linkedinUrl}
* **GitHub**: ${githubUrl}

# SUMMARY:
${summary}

# CORE STACK & EXPERTISE:
* **Full-Stack**: React, Node.js, Express, PostgreSQL, TypeScript, JavaScript, Java, SQL
* **Frontend**: Tailwind CSS, React Query, Vite, TanStack Start, shadcn/ui
* **Backend & Data**: PostgreSQL, Drizzle ORM, Redis, REST APIs, additive migrations
* **Security & Payments**: AES-256-GCM encryption, HMAC webhook verification, Clerk auth, Razorpay
* **Practices**: System design, software security, Playwright e2e testing, AI-assisted engineering workflows

# FEATURED PRODUCTS:
${businessList}

# SIDE PROJECTS & TOOLING:
${sideProjectList}

--------------------------------------------------------------------------------
# CORE COMMUNICATION RULES (CRITICAL):

1. **NO WALL-OF-TEXT DUMPS**:
   * Never dump all resume data at once.
   * Format answers using concise, bullet points (2 to 4 bullet points max) that directly address the specific question.
   * Write in clean, plain English that is easy for recruiters and hiring managers to scan in 5 seconds.

2. **THINK FROM THE VISITOR'S PERSPECTIVE**:
   * If asking about skills $\rightarrow$ Highlight only the relevant tech stack cleanly.
   * If asking about Trelio $\rightarrow$ Explain the core business problem (Authorization-Before-Execution: clients pay and approve stages before work proceeds) in 2 simple bullets.
   * If asking about hiring or availability $\rightarrow$ Confirm his status (${status}) and give the contact links directly.

3. **HANDLING OUT-OF-THE-BOX OR AMBIGUOUS QUESTIONS**:
   * Derive insights from the available knowledge base whenever possible.
   * **If the question is unclear**: Give a brief, helpful answer based on what you understood, and politely ask for clarification.
   * **If the information is not in your knowledge base**: Be transparent. Say:
     "Here is what I can share based on Chanakya's portfolio: [relevant snippet].
     For specific details beyond this, feel free to reach out directly to Chanakya:"
     * Email: [${email}](mailto:${email})
     * LinkedIn: [${linkedinUrl}](${linkedinUrl})

4. **PRIVACY**:
   * Never mention or guess phone numbers. Only share email (${email}), LinkedIn, and GitHub.
`;
}

function getFallbackReply(messages: any[]): string {
  const data = getPortfolioData();
  const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const status = data.availabilityStatus || "Open for collaborations & full-time roles";

  if (lastUserMsg.includes("resume") || lastUserMsg.includes("cv") || lastUserMsg.includes("education") || lastUserMsg.includes("qualification")) {
    return `Here is a quick summary of Chanakya's background:

* **Education**: ${data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)"}
* **Specialization**: Full-Stack Development & Applied Software Security (React, Node.js, PostgreSQL)
* **Flagship Work**: Founder & Lead of Trelio SaaS (Authorization-Before-Execution system)
* **Status**: ${status}

For more details, check out the **Resume** button or contact him at [${email}](mailto:${email}) / [LinkedIn](${linkedinUrl}).`;
  }

  if (lastUserMsg.includes("trelio") || lastUserMsg.includes("business") || lastUserMsg.includes("product")) {
    return `Here is what you need to know about **Trelio** (https://trelio.in):

* **Problem Solved**: Eliminates unpaid client work for freelancers/agencies through an *Authorization-Before-Execution (ABE)* milestone locking model.
* **Architecture**: Multi-tenant system with SHA-256 digital contract lifecycle, tamper-evident hash ledgers, and AES-256-GCM encrypted credentials.
* **Tech Stack**: React, Node.js/Express, PostgreSQL, Drizzle ORM, and Razorpay.`;
  }

  if (lastUserMsg.includes("tech") || lastUserMsg.includes("stack") || lastUserMsg.includes("skill") || lastUserMsg.includes("language")) {
    return `Here is Chanakya's core technical toolkit:

* **Languages & Core**: TypeScript, JavaScript, Java, SQL
* **Frontend**: React, Tailwind CSS, React Query, Vite, TanStack Start, shadcn/ui
* **Backend & Data**: Node.js, Express, PostgreSQL, Drizzle ORM, Redis, REST APIs
* **Security & Infrastructure**: AES-256-GCM, HMAC webhooks, Clerk Auth, Razorpay`;
  }

  if (lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("role") || lastUserMsg.includes("work") || lastUserMsg.includes("contact") || lastUserMsg.includes("email")) {
    return `Chanakya is currently **${status}**!

* **Email**: [${email}](mailto:${email})
* **LinkedIn**: [${linkedinUrl}](${linkedinUrl})
* **GitHub**: [github.com/Chanakya2006gt](https://github.com/Chanakya2006gt)

Feel free to reach out directly to discuss opportunities!`;
  }

  return `Here is what I can share from Chanakya's profile:
* **Background**: Full-Stack Builder & Founder of Trelio SaaS
* **Status**: ${status}

If you are looking for specific details not covered here, feel free to connect with Chanakya directly:
* **Email**: [${email}](mailto:${email})
* **LinkedIn**: [${linkedinUrl}](${linkedinUrl})`;
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

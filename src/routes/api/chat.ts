import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { getPortfolioData } from "@/data/store";
import { assertEnvGuards } from "@/lib/boot-guards";


function buildDynamicSystemPrompt(): string {
  const data = getPortfolioData();

  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const githubUrl = getEnvVar("PUBLIC_GITHUB_URL", "https://github.com/Chanakya2006gt");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const summary = data.resumeOverride?.summary || "Hands-on experience building and shipping full-stack, security-conscious SaaS products with multi-tenant architecture and secure payment workflows.";
  const education = data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)";
  const workAvailability = data.workAvailability || data.availabilityStatus || "Open for contract work, consulting & software engineering roles";
  const hiringStatus = data.hiringStatus || "Not currently hiring team members (Chanakya is open to being hired for contracts/work)";

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
* **Work / Contract Availability (When someone wants to hire Chanakya)**: ${workAvailability}
* **Team Hiring Status (Is Chanakya hiring anyone for his team?)**: ${hiringStatus}
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

# PROJECTS & TOOLING:
${sideProjectList}

--------------------------------------------------------------------------------
# CORE COMMUNICATION RULES (CRITICAL):

1. **DISTINGUISH CLEARLY BETWEEN TWO DIFFERENT HIRING CONCEPTS**:
   * **If someone asks if they can hire Chanakya for work/contracts/roles**: Answer that Chanakya is **${workAvailability}** and provide contact links ([${email}](mailto:${email}) / [LinkedIn](${linkedinUrl})).
   * **If someone asks if Chanakya or Trelio is hiring candidates/interns**: Answer that Chanakya is **${hiringStatus}**.

2. **NO WALL-OF-TEXT DUMPS**:
   * Never dump all resume data at once.
   * Format answers using concise, bullet points (2 to 4 bullet points max) that directly address the specific question.
   * Write in clean, plain English that is easy for recruiters and hiring managers to scan in 5 seconds.

3. **THINK FROM THE VISITOR'S PERSPECTIVE**:
   * If asking about skills $\rightarrow$ Highlight only the relevant tech stack cleanly.
   * If asking about Trelio $\rightarrow$ Explain the core business problem (Authorization-Before-Execution: clients pay and approve stages before work proceeds) in 2 simple bullets.

4. **HANDLING OUT-OF-THE-BOX OR AMBIGUOUS QUESTIONS**:
   * Derive insights from the available knowledge base whenever possible.
   * **If the question is unclear**: Give a brief, helpful answer based on what you understood, and politely ask for clarification.
   * **If the information is not in your knowledge base**: Be transparent. Say:
     "Here is what I can share based on Chanakya's portfolio: [relevant snippet].
     For specific details beyond this, feel free to reach out directly to Chanakya:"
     * Email: [${email}](mailto:${email})
     * LinkedIn: [${linkedinUrl}](${linkedinUrl})

5. **PRIVACY**:
   * Never mention or guess phone numbers. Only share email (${email}), LinkedIn, and GitHub.
`;
}

function getFallbackReply(messages: any[]): string {
  const data = getPortfolioData();
  const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const workAvailability = data.workAvailability || data.availabilityStatus || "Open for contract work, consulting & software engineering roles";
  const hiringStatus = data.hiringStatus || "Not currently hiring team members";

  if (lastUserMsg.includes("resume") || lastUserMsg.includes("cv") || lastUserMsg.includes("education") || lastUserMsg.includes("qualification")) {
    return `Here is a quick summary of Chanakya's background:

* **Education**: ${data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)"}
* **Specialization**: Full-Stack Development & Applied Software Security (React, Node.js, PostgreSQL)
* **Flagship Work**: Founder & Lead of Trelio SaaS (Authorization-Before-Execution system)
* **Availability**: ${workAvailability}

For more details, check out the **Resume** button or contact him at [${email}](mailto:${email}) / [LinkedIn](${linkedinUrl}).`;
  }

  if (lastUserMsg.includes("apex") || lastUserMsg.includes("packaging") || lastUserMsg.includes("converting") || lastUserMsg.includes("cpq") || lastUserMsg.includes("finat")) {
    return `Here is what you need to know about **Apex Packaging & Converting** (https://industrial-packaging-platform.vercel.app):

* **System Overview**: Enterprise cloud-native B2B manufacturing & CPQ platform connecting procurement clients with industrial converting and offset print lines.
* **Key Innovations**: Interactive 5-step CAD & FINAT 1–8 technical reel visualizer, isomorphic linear-meter estimating math with 100% test parity, and a role-based sales CRM with 4-hour SLA monitors.
* **Tech Stack**: React 18, TypeScript, Supabase (PostgreSQL 15 + RLS), Node.js, Tailwind CSS, and GSAP.`;
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
* **Frontend**: React, Tailwind CSS, React Query, Vite, TanStack Start, shadcn/ui, GSAP
* **Backend & Data**: Node.js, Express, PostgreSQL, Supabase RLS, Drizzle ORM, Redis, REST APIs
* **Security & Infrastructure**: AES-256-GCM, HMAC webhooks, Clerk Auth, Supabase RLS, Razorpay`;
  }

  // Check if visitor is asking about hiring candidates vs hiring Chanakya
  if (lastUserMsg.includes("are you hiring") || lastUserMsg.includes("is trelio hiring") || lastUserMsg.includes("open positions") || lastUserMsg.includes("job openings") || lastUserMsg.includes("internship")) {
    return `Regarding team openings:

* **Status**: ${hiringStatus}
* **Note**: Chanakya is personally ${workAvailability}.

If you want to reach out or discuss collaborations, contact him at [${email}](mailto:${email}) / [LinkedIn](${linkedinUrl}).`;
  }

  if (lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("role") || lastUserMsg.includes("work") || lastUserMsg.includes("contract") || lastUserMsg.includes("contact") || lastUserMsg.includes("email")) {
    return `Chanakya is currently **${workAvailability}**!

* **Email**: [${email}](mailto:${email})
* **LinkedIn**: [${linkedinUrl}](${linkedinUrl})
* **GitHub**: [github.com/Chanakya2006gt](https://github.com/Chanakya2006gt)

Feel free to reach out directly to discuss contracts or opportunities!`;
  }

  return `Here is what I can share from Chanakya's profile:
* **Background**: Full-Stack Builder & Founder of Trelio SaaS
* **Availability**: ${workAvailability}

If you are looking for specific details not covered here, feel free to connect with Chanakya directly:
* **Email**: [${email}](mailto:${email})
* **LinkedIn**: [${linkedinUrl}](${linkedinUrl})`;
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
          const systemPrompt = buildDynamicSystemPrompt();

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

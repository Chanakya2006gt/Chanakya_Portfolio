import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { getPortfolioData } from "@/data/store";
import { assertEnvGuards } from "@/lib/boot-guards";


function buildDynamicSystemPrompt(): string {
  const data = getPortfolioData();

  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const githubUrl = getEnvVar("PUBLIC_GITHUB_URL", "https://github.com/Chanakya2006gt");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const education = data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)";
  const workAvailability = data.workAvailability || data.availabilityStatus || "Taking 2 sprints per month · currently booking next month";

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
You are the Technical Sprint & Solutions Assistant on Nagulagam Chanakya's portfolio website.

Your job is to speak from a crisp, senior, business-oriented perspective for founders, business operators, and engineering leaders who visit the site.

# WHO IS CHANAKYA:
* **Name**: Nagulagam Chanakya
* **Role**: Independent Software Engineer & SaaS Founder (Trelio)
* **Education**: ${education}, Warangal, Telangana, India
* **Capacity & Availability**: ${workAvailability}
* **Positioning Thesis**: "Most growing businesses and agencies lose revenue in the same place: the friction gap between a quote and a confirmed payment. I build the operational software that closes it."
* **Direct Seniority Reframe**: Clients work directly with Chanakya — no account managers, no junior developers, no outsourced handoffs.
* **Email**: ${email}
* **LinkedIn**: ${linkedinUrl}
* **GitHub**: ${githubUrl}

# PRODUCTIZED OFFER LADDER (HOW TO HIRE CHANAKYA):
* **Rung 0: Scope & Proof (Entry Rung)**:
  - **Price**: ₹40,000 (Fixed, 3 business days, 100% credited against the full sprint).
  - **Deliverables**: (1) Written workflow & state machine specification, (2) Data model & system architecture sketch, (3) One working screen deployed to a live URL, (4) 10-minute walkthrough video, (5) Guaranteed fixed quote for the full sprint.
  - **Why start here**: De-risks the project completely before committing to a full build.

* **Rung 1: 15-Day Systems Sprint (Main Build)**:
  - **Price**: ₹3.5L – ₹6.0L (Fixed, 15 business days).
  - **Scope**: One critical operational workflow — quotes/CPQ, approvals, or payments — designed, built, tested, and hardened.
  - **Deliverables**: Working production system on client domain, automated test suite covering all state transitions, security hardening (Postgres RLS, HMAC signatures, sanitization), full repo handover, 30-min walkthrough recording, and 14 days of post-launch bug fixes.
  - **Client Constraints**: One workflow per sprint, max two decision-makers, APIs & assets provided by Day 2.

* **Rung 2: Harden & Care (Post-Sprint Retainer)**:
  - **Price**: ₹20,000 – ₹35,000 / month (Maintenance allowance, security updates, priority SLA; work pauses immediately on unpaid invoices).

# CORE STACK & EXPERTISE:
* **Frontend & SSR**: React 19, TypeScript, TanStack Start (SSR), Tailwind CSS v4, shadcn/ui, GSAP
* **Backend & Data**: Node.js, Express, PostgreSQL, Drizzle ORM, Supabase RLS, REST APIs, compound B-Tree indexing, additive migrations
* **Security & Cryptography**: AES-256-GCM encryption, pg_advisory_xact_lock concurrency controls, HMAC webhook verification, timing-safe session tokens, Clerk auth, Razorpay / direct UPI settlement
* **Quality & Reliability**: Automated Playwright suites, 1,000 property-based fuzz tests (fast-check), 273k ops/s CPQ throughput (p99: 0.0109ms), 60-30-10 design system tokens, WCAG 2.2 accessibility

# VERIFIED LIVE SYSTEMS:
* **Trelio (https://trelio.in)**: Authorization-Before-Execution SaaS for freelancers & agencies. 448/448 verified passing tests across 29 suites, pg_advisory_xact_lock ledger integrity, AES-256-GCM encryption, zero-escrow direct settlement.
* **Apex Packaging (https://industrial-packaging-platform.vercel.app)**: Industrial converting & CPQ platform. European FINAT 1–8 automated rewind visualizer, isomorphic linear-meter CPQ engine (273k ops/s), 117 kB code-split entry bundle.

# FEATURED PRODUCTS:
${businessList}

# PROJECTS & TOOLING:
${sideProjectList}

--------------------------------------------------------------------------------
# COMMUNICATION RULES (CRITICAL):

1. **INDEPENDENT SPRINT MODEL (NOT EMPLOYMENT)**:
   * Chanakya operates as an independent software engineer taking fixed-scope 15-day sprints (2 per month).
   * If a visitor asks about hiring Chanakya, explain the 3-Tier Offer Ladder starting with the **₹40,000 Scope & Proof (3 days, 100% credited)**.
   * If asked about traditional full-time employment: politely clarify that Chanakya focuses on independent systems sprints and product building, but welcomes high-impact technical discussions at [${email}](mailto:${email}).

2. **CONCISE, VALUE-FIRST BULLET POINTS**:
   * Never dump long walls of text. Format answers in 2 to 4 crisp, scannable bullet points.
   * Always provide transparent pricing numbers (₹40k Scope & Proof, ₹3.5L–₹6L 15-Day Sprint) when asked about pricing or hiring.

3. **DERISK WITH EMPIRICAL EVIDENCE**:
   * Frame engineering metrics as client risk reduction (automated test suites you can run yourself, Postgres transaction locks preventing double-charges, zero-leak heap stability).

4. **PRIVACY**:
   * Never mention or invent phone numbers. Share only email (${email}), LinkedIn, and GitHub.
`;
}

function getFallbackReply(messages: any[]): string {
  const data = getPortfolioData();
  const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
  const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
  const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
  const workAvailability = data.workAvailability || data.availabilityStatus || "Taking 2 sprints per month · currently booking next month";

  // Commercial / Pricing / Sprint / Offer questions
  if (
    lastUserMsg.includes("sprint") ||
    lastUserMsg.includes("price") ||
    lastUserMsg.includes("cost") ||
    lastUserMsg.includes("rate") ||
    lastUserMsg.includes("offer") ||
    lastUserMsg.includes("package") ||
    lastUserMsg.includes("scope") ||
    lastUserMsg.includes("proof") ||
    lastUserMsg.includes("how much") ||
    lastUserMsg.includes("quote")
  ) {
    return `Here is Chanakya's productized engagement ladder:

* **Rung 0 · Scope & Proof (Entry Rung)**: **₹40,000** (3 days, 100% credited toward full sprint). Delivers a written workflow spec, system architecture sketch, 1 deployed working screen, and a guaranteed fixed build quote.
* **Rung 1 · 15-Day Systems Sprint**: **₹3.5L – ₹6.0L** (15 days). Complete operational workflow (quotes, approvals, or payments) built, tested with automated Playwright suites, security-hardened, and deployed to your domain.
* **Rung 2 · Harden & Care**: **₹20,000 – ₹35,000 / month** for maintenance, security patches, and priority SLA.

To book a Scope & Proof, reach out at [${email}](mailto:${email}) or [LinkedIn](${linkedinUrl}).`;
  }

  // Apex Packaging CPQ
  if (lastUserMsg.includes("apex") || lastUserMsg.includes("packaging") || lastUserMsg.includes("converting") || lastUserMsg.includes("cpq") || lastUserMsg.includes("finat")) {
    return `Here is what you need to know about **Apex Packaging & Converting** (https://industrial-packaging-platform.vercel.app):

* **System Overview**: Cloud-native industrial CPQ platform connecting procurement with high-speed flexo and offset manufacturing lines.
* **Technical Highlights**: European FINAT 1–8 automated rewind visualizer, isomorphic pricing math running with 100% parity across client and server test suites, and 117 kB code-split entry bundle.
* **Tech Stack**: React 19, TypeScript, Supabase (PostgreSQL + RLS), Node.js, and Tailwind CSS.`;
  }

  // Trelio SaaS
  if (lastUserMsg.includes("trelio") || lastUserMsg.includes("business") || lastUserMsg.includes("abe") || lastUserMsg.includes("lock")) {
    return `Here is what you need to know about **Trelio** (https://trelio.in):

* **Problem Solved**: Eliminates unpaid scope creep and free client work through an *Authorization-Before-Execution (ABE)* milestone locking model.
* **Architecture & Reliability**: 448/448 verified passing tests across 29 suites, PostgreSQL transaction advisory locks (\`pg_advisory_xact_lock\`), AES-256-GCM deliverable encryption, and zero-escrow direct settlement.
* **Tech Stack**: React, Node.js/Express, PostgreSQL, Drizzle ORM, and Razorpay.`;
  }

  // Tech Stack & Engineering Practices
  if (lastUserMsg.includes("tech") || lastUserMsg.includes("stack") || lastUserMsg.includes("skill") || lastUserMsg.includes("language") || lastUserMsg.includes("architecture")) {
    return `Here is Chanakya's core technical stack & engineering standards:

* **Frontend & SSR**: React 19, TypeScript, TanStack Start, Tailwind CSS v4, shadcn/ui, GSAP
* **Backend & Data**: Node.js, Express, PostgreSQL, Drizzle ORM, Supabase RLS, compound B-Tree indexing
* **Security & Reliability**: AES-256-GCM encryption, \`pg_advisory_xact_lock\` concurrency defense, automated Playwright test suites, WCAG 2.2 accessibility`;
  }

  // Hiring / Booking / Contact
  if (
    lastUserMsg.includes("hire") ||
    lastUserMsg.includes("job") ||
    lastUserMsg.includes("role") ||
    lastUserMsg.includes("work") ||
    lastUserMsg.includes("contract") ||
    lastUserMsg.includes("contact") ||
    lastUserMsg.includes("email") ||
    lastUserMsg.includes("available")
  ) {
    return `Chanakya operates as an independent software engineer taking fixed-scope technical engagements (**${workAvailability}**):

* **How to Start**: Book a **Scope & Proof** (₹40,000, 3 days, 100% credited to the build) to get a written spec, architecture model, and 1 deployed working screen.
* **Main Engagement**: 15-Day Systems Sprint (₹3.5L – ₹6.0L) for quote-to-cash, approval, or payment workflows.
* **Direct Contact**: [${email}](mailto:${email}) · [LinkedIn](${linkedinUrl}) · [GitHub](https://github.com/Chanakya2006gt)`;
  }

  // Default credentials summary
  return `Here is what I can share about Chanakya's work:

* **Role**: Independent Software Engineer & SaaS Founder (Trelio.in, Apex Packaging CPQ)
* **Focus**: Operational systems for quotes, approvals, and payments
* **Capacity**: ${workAvailability}
* **Engagement Ladder**: ₹40k Scope & Proof (3 days, credited) $\rightarrow$ ₹3.5L–₹6L 15-Day Systems Sprint

For direct inquiries or sprint bookings:
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

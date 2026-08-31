import { i as __toESM } from "../_runtime.mjs";
import { n as put, t as head } from "../_libs/@vercel/blob+[...].mjs";
import { a as getPortfolioData, i as writeContent, n as readContent, r as restoreBackup, s as __exportAll } from "./content.server-BolRseyh.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { L as ArrowLeft, T as Compass, i as TriangleAlert, u as RotateCw } from "../_libs/lucide-react.mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { i as string, n as object, r as record, t as array } from "../_libs/zod.mjs";
import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-K5QXP8B8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	(0, import_react.useEffect)(() => {
		console.error("[app error]", error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-6",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-2xl font-bold tracking-tight",
				children: "Something went wrong on our side"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "Sorry about that — this one is on us, not you. Refreshing usually sorts it out. If it keeps happening, I'd genuinely like to know."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => window.location.reload(),
					className: "inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-foreground transition-opacity hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4" }), " Try again"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to the portfolio"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "mailto:nagulagamchanakya2211@gmail.com?subject=Something%20broke%20on%20your%20portfolio",
				className: "mt-2 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-sage",
				children: "Tell me what happened"
			})
		]
	});
}
function AppNotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
					className: "size-6",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-sage",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-2xl font-bold tracking-tight",
				children: "This page doesn't exist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "The link may be out of date, or the page may have moved. Everything worth seeing is back on the main page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/",
				className: "mt-2 inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-foreground transition-opacity hover:opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to the portfolio"]
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-[var(--shadow-border)] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var styles_default = "/assets/styles-DRtOZ31_.css";
var APP_NAME = "Nagulagam Chanakya — Quote-to-Job Systems for Plants & Agencies";
var APP_DESC = "I build the systems plants and agencies actually run: quote → confirm → work. Fixed price. You keep the repository. Live on an industrial converting workflow and on Trelio.";
var SITE_URL = "https://chanakya-portfolio-orcin.vercel.app";
var JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			"name": "Nagulagam Chanakya",
			"url": SITE_URL,
			"jobTitle": "Quote-to-Job Systems Engineer & Founder",
			"worksFor": {
				"@type": "Organization",
				"name": "Trelio",
				"url": "https://trelio.in"
			},
			"hasOccupation": {
				"@type": "Occupation",
				"name": "Quote-to-Job Systems Engineer",
				"skills": "Quote-to-Job Systems, Industrial CPQ Engines, FINAT Standards, Authorization-Before-Execution, Stage Locks, Payment Gateways, Multi-tenant Architecture, React, Node.js, PostgreSQL"
			},
			"sameAs": ["https://github.com/Chanakya2006gt", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315"],
			"knowsAbout": [
				"Quote-to-Job Systems",
				"Industrial CPQ Engines",
				"Converting Plant Workflows",
				"FINAT 1-8 Rewind Standards",
				"Authorization-Before-Execution",
				"Payment Settlement Architecture",
				"PostgreSQL Data Modeling",
				"React",
				"Node.js",
				"TypeScript"
			]
		},
		{
			"@type": "SoftwareApplication",
			"@id": "https://trelio.in/#app",
			"name": "Trelio",
			"url": "https://trelio.in",
			"applicationCategory": "BusinessApplication",
			"operatingSystem": "Web",
			"description": "Authorization-before-execution SaaS ensuring verified stage locks, client milestone authorization, and direct settlement.",
			"author": { "@id": `${SITE_URL}/#person` }
		},
		{
			"@type": "SoftwareApplication",
			"@id": "https://industrial-packaging-platform.vercel.app/#app",
			"name": "Apex Packaging & Converting",
			"url": "https://industrial-packaging-platform.vercel.app",
			"codeRepository": "https://github.com/Chanakya2006gt/Industrial-packaging-platform",
			"applicationCategory": "ManufacturingApplication",
			"operatingSystem": "Web",
			"description": "B2B CPQ and sales estimating platform for industrial packaging converters with FINAT 1–8 rewind standards engine.",
			"author": { "@id": `${SITE_URL}/#person` }
		}
	]
};
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0a0a0b"
			},
			{
				name: "description",
				content: APP_DESC
			},
			{
				name: "keywords",
				content: "Quote-to-job systems, industrial CPQ platform, packaging converting quoting, FINAT unwind standards, milestone authorization SaaS, Trelio, Nagulagam Chanakya, fixed-price software build, plants and agencies"
			},
			{
				name: "author",
				content: "Nagulagam Chanakya"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: APP_NAME
			},
			{
				property: "og:description",
				content: APP_DESC
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og.jpg`
			},
			{
				property: "og:url",
				content: SITE_URL
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Nagulagam Chanakya — Quote-to-Job Systems"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: APP_NAME
			},
			{
				name: "twitter:description",
				content: APP_DESC
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og.jpg`
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(JSON_LD)
		}, { children: `(function(){try{var stored=localStorage.getItem("theme");if(stored==="light"||(!stored&&window.matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}}catch(e){}})();` }],
		links: [
			{
				rel: "canonical",
				href: SITE_URL
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-noise min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
				delayDuration: 200,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "bottom-right",
					theme: "dark"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	})
});
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchContent = createServerFn({ method: "GET" }).handler(createSsrRpc("2b99909e19342163fb9618a3b1f343b57fe68205625d940d83a174e978667293"));
var $$splitComponentImporter$3 = () => import("./routes-CPHCX0Um.mjs");
var Route$12 = createFileRoute("/")({
	loader: () => fetchContent(),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./method-XhJzcCej.mjs");
var Route$11 = createFileRoute("/method")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "The 15-Day Method — Quote-to-Job Systems for Plants & Agencies" }, {
		name: "description",
		content: "The 5-phase method used by Nagulagam Chanakya to build, test, and ship hardened quote-to-job operational software in 15 days."
	}] })
});
var $$splitComponentImporter$1 = () => import("./admin-zUkVTY5H.mjs");
var Route$10 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./login-DMKVWb2W.mjs");
var Route$9 = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var envCache = null;
var lastCacheTime = 0;
var CACHE_TTL_MS = 5e3;
function loadEnvFile() {
	const now = Date.now();
	if (envCache && now - lastCacheTime < CACHE_TTL_MS) return envCache;
	const envPath = path.join(process.cwd(), ".env");
	const result = {};
	try {
		if (fs.existsSync(envPath)) {
			const lines = fs.readFileSync(envPath, "utf-8").replace(/\r\n/g, "\n").split("\n");
			for (const line of lines) {
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith("#")) continue;
				const equalsIndex = trimmed.indexOf("=");
				if (equalsIndex > 0) {
					const key = trimmed.slice(0, equalsIndex).trim();
					let value = trimmed.slice(equalsIndex + 1).trim();
					if (!value.startsWith("\"") && !value.startsWith("'") && value.includes("#")) value = value.split("#")[0].trim();
					if (value.startsWith("\"") && value.endsWith("\"") || value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1).trim();
					result[key] = value;
				}
			}
		}
	} catch (error) {
		console.error("Error parsing .env file:", error);
	}
	envCache = result;
	lastCacheTime = now;
	return result;
}
function getEnvVar(key, defaultValue = "") {
	const fileVars = loadEnvFile();
	if (fileVars[key] && fileVars[key].trim()) return fileVars[key].trim();
	if (process.env[key] && process.env[key]?.trim()) return process.env[key].trim();
	return defaultValue;
}
/**
* src/lib/boot-guards.ts
*
* Inspired by Trelio's config/bootGuards.js.
*
* Validates required environment variables at server startup.
* In production: hard-fails with a clear error message listing every missing var.
* In development: warns to console but continues (so you can run locally with a
* partial .env without the server refusing to start).
*
* Call this once at the top of your server entry point (or in a Nitro plugin).
* Because TanStack Start / Nitro doesn't expose a "startup hook" in the same way
* Express does, we call this lazily on the first real request via
* src/lib/server-init.ts — which is fine because Vercel cold-starts per-request.
*/
var ENV_SPECS = [
	{
		key: "ADMIN_USERNAME",
		description: "Admin panel username",
		required: true
	},
	{
		key: "ADMIN_PASSWORD",
		description: "Admin panel password",
		required: true
	},
	{
		key: "ADMIN_SESSION_SECRET",
		description: "HMAC-SHA256 session signing secret (32+ chars)",
		required: true
	},
	{
		key: "OPENAI_API_KEY",
		description: "OpenAI API key for the AI companion chatbot",
		required: false
	},
	{
		key: "OPENAI_MODEL",
		description: "OpenAI model name (default: gpt-5.6-terra)",
		required: false
	}
];
var PLACEHOLDER_VALUES = /* @__PURE__ */ new Set([
	"your_admin_username_here",
	"your_strong_password_here",
	"your_random_32_character_secret_key_here",
	"your_openai_api_key_here",
	"placeholder",
	""
]);
function isPlaceholder(value) {
	return PLACEHOLDER_VALUES.has(value.trim().toLowerCase()) || !value.trim();
}
var checked = false;
/**
* Run env validation. Idempotent — only runs once per process.
*/
function assertEnvGuards() {
	if (checked) return;
	checked = true;
	const missing = [];
	const placeholder = [];
	const warnings = [];
	for (const spec of ENV_SPECS) {
		const value = getEnvVar(spec.key);
		if (!value || isPlaceholder(value)) {
			if (spec.required) missing.push(`  ✗ ${spec.key} — ${spec.description}`);
			else warnings.push(`  ⚠ ${spec.key} — ${spec.description} (optional — feature may be limited)`);
		} else if (spec.key === "ADMIN_SESSION_SECRET" && value.trim().length < 32) placeholder.push(`  ✗ ${spec.key} — must be at least 32 characters (got ${value.trim().length})`);
	}
	if (warnings.length > 0) console.warn(`[boot-guard] Optional env vars not set:\n${warnings.join("\n")}\n  Some features (e.g. AI chatbot) will use fallback behaviour.`);
	const errors = [...missing, ...placeholder];
	if (errors.length > 0) {
		const message = `[boot-guard] Required environment variables are missing or use placeholder values:\n${errors.join("\n")}\n\n  Set these in your .env file (local dev) or Vercel project settings (production).\n  See .env.example for the full list and format.`;
		throw new Error(message);
	} else console.log("[boot-guard] All required env vars present ✓");
}
function buildDynamicSystemPrompt() {
	const data = getPortfolioData();
	const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
	const githubUrl = getEnvVar("PUBLIC_GITHUB_URL", "https://github.com/Chanakya2006gt");
	const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
	const education = data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)";
	const workAvailability = data.workAvailability || data.availabilityStatus || "Taking 2 sprints per month · currently booking next month";
	data.businesses.map((b) => `* **${b.title}** (${b.badge || "Live Product"}): ${b.description} | Tech: ${b.stack.join(", ")}${b.liveUrl ? ` | Live: ${b.liveUrl}` : ""}`).join("\n");
	data.sideProjects.map((p) => `* **${p.title}**: ${p.description} | Tech: ${p.stack.join(", ")}`).join("\n");
	return `
You are the Technical Solutions Assistant on Nagulagam Chanakya's portfolio website.

Your job is to speak from a crisp, direct, business-oriented perspective for plant managers, agency operators, and engineering leaders who visit the site.

# WHO IS CHANAKYA:
* **Name**: Nagulagam Chanakya
* **Role**: Independent Software Engineer & SaaS Founder (Trelio)
* **Education**: ${education}, Warangal, Telangana, India
* **Capacity & Availability**: ${workAvailability}
* **Positioning**: "Quotes and jobs shouldn't live on WhatsApp. I build the system a plant or an agency actually runs: quote → confirm → work. Fixed price. You keep the repository."
* **Direct Seniority**: Clients work directly with Chanakya — no account managers, no junior developers, no outsourced handoffs.
* **Email**: ${email}
* **LinkedIn**: ${linkedinUrl}
* **GitHub**: ${githubUrl}

# FIXED-PRICE ENGAGEMENTS (HOW TO WORK WITH CHANAKYA):
* **Step 1 · Paid Diagnosis**:
  - **Price**: ₹40,000 (Fixed, 3 business days, 100% credited against the build).
  - **Deliverables**: (1) Written workflow spec & state boundaries, (2) Data model & database schema layout, (3) 1 deployed working screen on a live URL, (4) 10-minute walkthrough video, (5) Guaranteed fixed quote for the 15-day build.
  - **Why start here**: De-risks the project completely before committing to a full build.

* **Step 2 · One Workflow Built**:
  - **Price**: ₹3.5L – ₹6.0L (Fixed, 15 business days).
  - **Scope**: The whole of one live process — e.g. RFQ through confirmed order — not a brochure, not the entire company.
  - **Deliverables**: Working system deployed on client custom domain, automated test suite covering all state transitions, security hardening (Postgres RLS, webhook verification), full repo handover, and 14 days of post-launch bug fixes.
  - **Constraints**: One workflow per build, max two decision-makers, APIs & assets provided by Day 2.

* **Step 3 · Keep It Running (Retainer)**:
  - **Price**: ₹20,000 – ₹35,000 / month (Maintenance allowance, security updates, priority SLA; direct engineer access).

# TWO TYPES OF WORKFLOWS:
1. **For Plants & Converting Lines**: Replaces quoting spreadsheets & WhatsApp chains with an exact quoting path a clerk can finish in one pass — calculating linear meters, substrate area, and rates directly from floor specs (e.g. Apex Packaging).
2. **For Agencies & Studios**: Stage locks where the next phase of work stays locked until the current milestone is paid directly into your merchant account (e.g. Trelio).

# VERIFIED LIVE SYSTEMS:
* **Trelio (https://trelio.in)**: Authorization-Before-Execution SaaS for freelancers & agencies. 448/448 verified passing tests, PostgreSQL advisory locks, and direct client settlement.
* **Apex Packaging (https://industrial-packaging-platform.vercel.app)**: Industrial converting & CPQ platform with FINAT 1–8 rewind visualizer and exact linear-meter quoting engine.

--------------------------------------------------------------------------------
# COMMUNICATION RULES (CRITICAL):

1. **DIRECT COMMERCIAL MODEL (NOT EMPLOYMENT)**:
   * Chanakya builds fixed-price quote-to-job systems (taking 2 builds a month).
   * If a visitor asks about hiring Chanakya, explain the 3 steps starting with the **₹40,000 Paid Diagnosis (3 days, 100% credited)**.
   * If asked about traditional full-time employment: politely clarify that Chanakya focuses on fixed-price technical builds and product building, but welcomes high-impact technical discussions at [${email}](mailto:${email}).

2. **CONCISE, VALUE-FIRST BULLET POINTS**:
   * Never dump long walls of text. Format answers in 2 to 4 crisp, scannable bullet points.
   * Always provide transparent pricing numbers (₹40k Paid Diagnosis, ₹3.5L–₹6L One Workflow Built) when asked about rates.

3. **GROUNDED JOB UNITS**:
   * Talk in plant and agency outcomes (rates from the same spec the floor uses, client pays into your account before stage unlocks).

4. **PRIVACY**:
   * Never mention or invent phone numbers. Share only email (${email}), LinkedIn, and GitHub.
`;
}
function getFallbackReply(messages) {
	const data = getPortfolioData();
	const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
	const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
	const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
	const workAvailability = data.workAvailability || data.availabilityStatus || "Taking 2 builds a month · booking the next slot";
	if (lastUserMsg.includes("sprint") || lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("rate") || lastUserMsg.includes("offer") || lastUserMsg.includes("package") || lastUserMsg.includes("scope") || lastUserMsg.includes("proof") || lastUserMsg.includes("diagnosis") || lastUserMsg.includes("how much") || lastUserMsg.includes("quote")) return `Here is Chanakya's fixed-price engagement model:

* **Step 1 · Paid Diagnosis**: **₹40,000** (3 days, 100% credited against the build). Delivers a written workflow spec, data model layout, 1 deployed working screen, and a guaranteed fixed build quote.
* **Step 2 · One Workflow Built**: **₹3.5L – ₹6.0L** (15 business days). Complete operational workflow (quotes, approvals, or payments) built, tested with automated test suites, security-hardened, and deployed to your domain.
* **Step 3 · Keep It Running**: **₹20,000 – ₹35,000 / month** for maintenance, security patches, and direct engineer access.

To book a Paid Diagnosis, reach out at [${email}](mailto:${email}) or [LinkedIn](${linkedinUrl}).`;
	if (lastUserMsg.includes("apex") || lastUserMsg.includes("packaging") || lastUserMsg.includes("converting") || lastUserMsg.includes("cpq") || lastUserMsg.includes("finat")) return `Here is what you need to know about **Apex Packaging & Converting** (https://industrial-packaging-platform.vercel.app):

* **System Overview**: Cloud-native industrial CPQ platform connecting procurement with high-speed flexo and offset manufacturing lines.
* **Technical Highlights**: European FINAT 1–8 automated rewind visualizer, isomorphic pricing math running with 100% parity across client and server test suites, and 117 kB code-split entry bundle.
* **Tech Stack**: React 19, TypeScript, Supabase (PostgreSQL + RLS), Node.js, and Tailwind CSS.`;
	if (lastUserMsg.includes("trelio") || lastUserMsg.includes("business") || lastUserMsg.includes("abe") || lastUserMsg.includes("lock")) return `Here is what you need to know about **Trelio** (https://trelio.in):

* **Problem Solved**: Eliminates unpaid scope creep and free client work through an *Authorization-Before-Execution (ABE)* milestone locking model.
* **Architecture & Reliability**: 448/448 verified passing tests across 29 suites, PostgreSQL transaction advisory locks (\`pg_advisory_xact_lock\`), AES-256-GCM deliverable encryption, and zero-escrow direct settlement.
* **Tech Stack**: React, Node.js/Express, PostgreSQL, Drizzle ORM, and Razorpay.`;
	if (lastUserMsg.includes("tech") || lastUserMsg.includes("stack") || lastUserMsg.includes("skill") || lastUserMsg.includes("language") || lastUserMsg.includes("architecture")) return `Here is Chanakya's core technical stack & engineering standards:

* **Frontend & SSR**: React 19, TypeScript, TanStack Start, Tailwind CSS v4, shadcn/ui, GSAP
* **Backend & Data**: Node.js, Express, PostgreSQL, Drizzle ORM, Supabase RLS, compound B-Tree indexing
* **Security & Reliability**: AES-256-GCM encryption, \`pg_advisory_xact_lock\` concurrency defense, automated Playwright test suites, WCAG 2.2 accessibility`;
	if (lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("role") || lastUserMsg.includes("work") || lastUserMsg.includes("contract") || lastUserMsg.includes("contact") || lastUserMsg.includes("email") || lastUserMsg.includes("available")) return `Chanakya operates as an independent software engineer taking fixed-price technical builds (**${workAvailability}**):

* **How to Start**: Book a **Paid Diagnosis** (₹40,000, 3 days, 100% credited to the build) to get a written spec, data model layout, 1 deployed working screen, and a fixed build quote.
* **Main Engagement**: One Workflow Built (₹3.5L – ₹6.0L, 15 days) for quote-to-job, approval, or payment workflows.
* **Direct Contact**: [${email}](mailto:${email}) · [LinkedIn](${linkedinUrl}) · [GitHub](https://github.com/Chanakya2006gt)`;
	return `Here is what I can share about Chanakya's work:

* **Role**: Independent Software Engineer & SaaS Founder (Trelio.in, Apex Packaging CPQ)
* **Focus**: Operational quote-to-job and payment systems for plants & agencies
* **Capacity**: ${workAvailability}
* **Fixed-Price Model**: Step 1 · Paid Diagnosis (₹40k, 3 days, credited) → Step 2 · One Workflow Built (₹3.5L–₹6L, 15 days)

For direct inquiries or to book a paid diagnosis:
* **Email**: [${email}](mailto:${email})
* **LinkedIn**: [${linkedinUrl}](${linkedinUrl})`;
}
var chatRateLimits = /* @__PURE__ */ new Map();
function isChatRateLimited(ip) {
	const now = Date.now();
	const record = chatRateLimits.get(ip);
	if (!record || now - record.windowStart > 6e4) {
		chatRateLimits.set(ip, {
			count: 1,
			windowStart: now
		});
		return false;
	}
	if (record.count >= 20) return true;
	record.count += 1;
	return false;
}
var Route$8 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	assertEnvGuards();
	if (isChatRateLimited(request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1")) return new Response(JSON.stringify({ reply: "You're sending messages a bit too fast. Please wait a moment before trying again." }), {
		status: 429,
		headers: {
			"Content-Type": "application/json",
			"Retry-After": "60"
		}
	});
	let messages = [];
	try {
		const body = await request.json();
		messages = (Array.isArray(body.messages) ? body.messages : []).slice(-25).filter((m) => m && (m.role === "user" || m.role === "assistant")).map((m) => ({
			role: m.role,
			content: String(m.content || "").slice(0, 1e3).trim()
		})).filter((m) => m.content.length > 0);
		const apiKey = getEnvVar("OPENAI_API_KEY");
		const model = getEnvVar("OPENAI_MODEL", "gpt-5.6-terra");
		const systemPrompt = buildDynamicSystemPrompt();
		if (apiKey && apiKey !== "your_openai_api_key_here" && !apiKey.includes("placeholder")) try {
			const response = await fetch("https://api.openai.com/v1/chat/completions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${apiKey}`
				},
				body: JSON.stringify({
					model,
					messages: [{
						role: "system",
						content: systemPrompt
					}, ...messages],
					temperature: 1,
					max_completion_tokens: 500
				})
			});
			if (response.ok) {
				const reply = (await response.json()).choices?.[0]?.message?.content;
				if (reply) return new Response(JSON.stringify({ reply }), { headers: { "Content-Type": "application/json" } });
			}
			const errText = await response.text();
			console.error(`[OpenAI API Error ${response.status}]:`, errText);
			const fallbackAnswer = getFallbackReply(messages);
			return new Response(JSON.stringify({ reply: fallbackAnswer }), { headers: { "Content-Type": "application/json" } });
		} catch (openAiErr) {
			console.error("[OpenAI Network Error]:", openAiErr);
			const fallbackAnswer = getFallbackReply(messages);
			return new Response(JSON.stringify({ reply: fallbackAnswer }), { headers: { "Content-Type": "application/json" } });
		}
		const reply = getFallbackReply(messages);
		return new Response(JSON.stringify({ reply }), { headers: { "Content-Type": "application/json" } });
	} catch (error) {
		console.error("Chat API route error:", error);
		const reply = getFallbackReply(messages);
		return new Response(JSON.stringify({ reply }), { headers: { "Content-Type": "application/json" } });
	}
} } } });
/**
* GET /api/health
*
* Lightweight health check endpoint inspired by Trelio's /healthz pattern.
* Reports whether required env vars are present so misconfigurations surface
* immediately — useful for uptime monitors (UptimeRobot, BetterStack, etc.)
* and for debugging Vercel deployments.
*
* Always returns HTTP 200. Monitor on the JSON `status` field:
*   "ok"       — all required env vars present
*   "degraded" — at least one required env var is missing
*/
var Route$7 = createFileRoute("/api/health")({ server: { handlers: { GET: async () => {
	const required = {
		ADMIN_USERNAME: getEnvVar("ADMIN_USERNAME"),
		ADMIN_PASSWORD: getEnvVar("ADMIN_PASSWORD"),
		ADMIN_SESSION_SECRET: getEnvVar("ADMIN_SESSION_SECRET"),
		OPENAI_API_KEY: getEnvVar("OPENAI_API_KEY")
	};
	const status = Object.values(required).every((val) => val && val.trim() && !val.includes("placeholder")) ? "ok" : "degraded";
	return new Response(JSON.stringify({
		service: "chanakya-portfolio",
		status,
		timestamp: (/* @__PURE__ */ new Date()).toISOString()
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
} } } });
var Route$6 = createFileRoute("/api/resume")({ server: { handlers: { GET: async () => {
	try {
		const blobDetails = await head("resume.pdf");
		if (blobDetails && blobDetails.url) return Response.redirect(blobDetails.url, 307);
	} catch (err) {
		console.error("[api/resume] Blob head failed:", err);
	}
	return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Résumé unavailable</title>
<style>
  body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;
    justify-content:center;gap:14px;background:#0c0e0d;color:#f2f4f1;text-align:center;padding:24px;
    font-family:Figtree,"Segoe UI",system-ui,sans-serif}
  h1{font-size:20px;margin:0;font-weight:700}
  p{margin:0;max-width:26rem;font-size:14px;line-height:1.6;color:#9aa39c}
  a{color:#a3c2ab;font-size:14px;text-decoration:underline;text-underline-offset:4px}
</style></head><body>
  <h1>The résumé isn&rsquo;t available right now</h1>
  <p>Sorry about that &mdash; it looks like the file is being updated. Please check
     back in a moment, or email me and I&rsquo;ll send it over straight away.</p>
  <a href="mailto:nagulagamchanakya2211@gmail.com?subject=Résumé%20request">Email me for a copy</a>
  <a href="/">Back to the portfolio</a>
</body></html>`, {
		status: 404,
		headers: { "Content-Type": "text/html; charset=utf-8" }
	});
} } } });
var COOKIE_NAME = "admin_session";
var SESSION_MAX_AGE_SEC = 86400;
function getSessionSecret() {
	const secret = getEnvVar("ADMIN_SESSION_SECRET");
	if (!secret || secret === "your_random_32_character_secret_key_here" || secret === "placeholder") throw new Error("[auth-session] ADMIN_SESSION_SECRET is not configured in production. Cannot sign or verify sessions.");
	return secret;
}
/**
* Creates a cryptographically signed HMAC-SHA256 session token.
* Format: `<base64Payload>.<hexSignature>`
*/
function createSignedSessionToken(username) {
	const secret = getSessionSecret();
	const payload = {
		username,
		exp: Date.now() + SESSION_MAX_AGE_SEC * 1e3
	};
	const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
	return `${payloadB64}.${crypto.createHmac("sha256", secret).update(payloadB64).digest("hex")}`;
}
/**
* Verifies the HMAC-SHA256 signature and checks expiration of a session token.
*/
function verifySignedSessionToken(token) {
	if (!token || typeof token !== "string" || !token.includes(".")) return false;
	const [payloadB64, signature] = token.split(".");
	if (!payloadB64 || !signature) return false;
	const secret = getSessionSecret();
	const expectedSignature = crypto.createHmac("sha256", secret).update(payloadB64).digest("hex");
	const sigBuffer = Buffer.from(signature, "hex");
	const expectedBuffer = Buffer.from(expectedSignature, "hex");
	if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return false;
	try {
		const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf-8"));
		if (Date.now() > payload.exp) return false;
		return true;
	} catch {
		return false;
	}
}
/**
* Extracts and parses a cookie value by name from a Cookie header string.
*/
function getCookieValue(cookieHeader, name) {
	if (!cookieHeader) return null;
	const parts = cookieHeader.split(";");
	for (const part of parts) {
		const trimmed = part.trim();
		if (trimmed.startsWith(`${name}=`)) return trimmed.slice(name.length + 1);
	}
	return null;
}
function getAdminSessionCookie(request) {
	return getCookieValue(request.headers.get("cookie"), COOKIE_NAME);
}
function createSetCookieHeader(token, isProduction = false) {
	return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SEC}${isProduction ? "; Secure" : ""}`;
}
function createClearCookieHeader() {
	return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
var Route$5 = createFileRoute("/api/admin/check")({ server: { handlers: { GET: async ({ request }) => {
	assertEnvGuards();
	const authenticated = verifySignedSessionToken(getAdminSessionCookie(request) || void 0);
	return new Response(JSON.stringify({ authenticated }), { headers: { "Content-Type": "application/json" } });
} } } });
var Route$4 = createFileRoute("/api/admin/data")({ server: { handlers: {
	GET: async ({ request }) => {
		if (!verifySignedSessionToken(getAdminSessionCookie(request) || void 0)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" }
		});
		const data = await readContent();
		return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		assertEnvGuards();
		if (!verifySignedSessionToken(getAdminSessionCookie(request) || void 0)) return new Response(JSON.stringify({ error: "Unauthorized: Invalid or expired admin session" }), {
			status: 401,
			headers: { "Content-Type": "application/json" }
		});
		try {
			const newData = await request.json();
			if (await writeContent(newData)) return new Response(JSON.stringify({
				success: true,
				data: newData
			}), { headers: { "Content-Type": "application/json" } });
			return new Response(JSON.stringify({ error: "Failed to save portfolio data" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		} catch (error) {
			return new Response(JSON.stringify({ error: "Invalid payload" }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
var loginAttempts = /* @__PURE__ */ new Map();
function isRateLimited(ip) {
	const now = Date.now();
	const record = loginAttempts.get(ip);
	if (!record) return false;
	if (now - record.firstAttempt > 3e5) {
		loginAttempts.delete(ip);
		return false;
	}
	return record.count >= 5;
}
function recordAttempt(ip, success) {
	if (success) {
		loginAttempts.delete(ip);
		return;
	}
	const now = Date.now();
	const record = loginAttempts.get(ip);
	if (!record || now - record.firstAttempt > 3e5) loginAttempts.set(ip, {
		count: 1,
		firstAttempt: now
	});
	else record.count += 1;
}
/**
* Constant-time string comparison to prevent timing attacks
*/
function safeCompare(a, b) {
	const bufA = Buffer.from(a);
	const bufB = Buffer.from(b);
	if (bufA.length !== bufB.length) {
		crypto.timingSafeEqual(bufA, bufA);
		return false;
	}
	return crypto.timingSafeEqual(bufA, bufB);
}
var Route$3 = createFileRoute("/api/admin/login")({ server: { handlers: { POST: async ({ request }) => {
	assertEnvGuards();
	const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
	if (isRateLimited(ip)) return new Response(JSON.stringify({ error: "Too many failed attempts. Please wait 5 minutes." }), {
		status: 429,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const body = await request.json();
		const username = String(body.username || "").trim();
		const password = String(body.password || "").trim();
		const envUser = getEnvVar("ADMIN_USERNAME");
		const envPass = getEnvVar("ADMIN_PASSWORD");
		if (!envUser || !envPass) {
			console.error("[Admin Auth] ADMIN_USERNAME or ADMIN_PASSWORD is not configured in .env");
			return new Response(JSON.stringify({ error: "Server authentication not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in .env." }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		const userMatch = safeCompare(username, envUser);
		const passMatch = safeCompare(password, envPass);
		if (userMatch && passMatch) {
			recordAttempt(ip, true);
			const setCookie = createSetCookieHeader(createSignedSessionToken(username), true);
			return new Response(JSON.stringify({ success: true }), { headers: {
				"Content-Type": "application/json",
				"Set-Cookie": setCookie
			} });
		}
		recordAttempt(ip, false);
		return new Response(JSON.stringify({ error: "Invalid username or password" }), {
			status: 401,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to process login" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var Route$2 = createFileRoute("/api/admin/logout")({ server: { handlers: { POST: async () => {
	return new Response(JSON.stringify({ success: true }), { headers: {
		"Content-Type": "application/json",
		"Set-Cookie": createClearCookieHeader()
	} });
} } } });
var Route$1 = createFileRoute("/api/admin/restore")({ server: { handlers: { POST: async ({ request }) => {
	if (!verifySignedSessionToken(getAdminSessionCookie(request) || void 0)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	try {
		if (await restoreBackup()) return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
		return new Response(JSON.stringify({ error: "We couldn't restore the previous version." }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		console.error("[restore] Failed:", err);
		return new Response(JSON.stringify({ error: "We couldn't restore the previous version." }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var resumeSectionSchema = object({
	title: string(),
	badge: string().optional(),
	subtitle: string().optional(),
	url: string().optional(),
	bullets: array(string())
});
var resumeContentSchema = object({
	fullName: string().optional(),
	title: string().optional(),
	location: string().optional(),
	email: string().optional(),
	summary: string().optional(),
	education: object({
		institution: string().optional(),
		location: string().optional(),
		degree: string().optional(),
		coursework: string().optional()
	}).optional(),
	sections: array(resumeSectionSchema).optional(),
	leadership: array(string()).optional(),
	practices: array(string()).optional(),
	skills: record(string(), array(string())).optional()
});
/** Pull a JSON object out of a model reply that may be fenced or padded with prose. */
function extractJsonObject(raw) {
	const cleaned = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
	const start = cleaned.indexOf("{");
	const end = cleaned.lastIndexOf("}");
	if (start === -1 || end === -1 || end <= start) return null;
	try {
		return JSON.parse(cleaned.slice(start, end + 1));
	} catch {
		return null;
	}
}
/**
* Redact details that must never reach the public site, even if the model
* returns them despite the prompt. Applied to every extracted string.
* Order matters: score/contact patterns first, separator cleanup last.
*/
var SENSITIVE_PATTERNS = [
	/\s*[|·,;—–-]?\s*\b(?:C?GPA|SGPA)\b\s*[:=-]?\s*\d+(?:\.\d+)?\s*(?:\/\s*\d+(?:\.\d+)?)?/gi,
	/\s*[|·,;—–-]?\s*\b(?:percentage|marks|aggregate)\b\s*[:=-]?\s*\d+(?:\.\d+)?\s*%?/gi,
	/\s*[|·,;—–-]\s*\d{1,3}(?:\.\d+)?\s*%/g,
	/\s*[|·,;—–-]?\s*(?:\+\d{1,3}[\s-]?)?(?:\(\d{2,5}\)[\s-]?)?\d{3,5}[\s-]?\d{3,5}(?:[\s-]?\d{2,5})?(?=\s|$|[|·,;])/g,
	/\s*[|·,;—–-]?\s*\b(?:D\.?O\.?B\.?|date of birth|age)\b\s*[:=-]?\s*[^|·,;\n]{0,24}/gi
];
function redactSensitive(value) {
	let out = value;
	for (const pattern of SENSITIVE_PATTERNS) out = out.replace(pattern, "");
	return out.replace(/\s{2,}/g, " ").replace(/\s*([|·])\s*([|·])\s*/g, " $1 ").replace(/^[\s|·,;—–-]+/, "").replace(/[\s|·,;—–-]+$/, "").trim();
}
/** Deep-clean every string in the extracted object, preserving its shape. */
function scrubDeep(input) {
	if (typeof input === "string") return redactSensitive(input);
	if (Array.isArray(input)) return input.map((item) => scrubDeep(item)).filter((item) => !(typeof item === "string" && item.trim() === ""));
	if (input && typeof input === "object") {
		const out = {};
		for (const [key, val] of Object.entries(input)) {
			const cleaned = scrubDeep(val);
			if (typeof cleaned === "string" && cleaned.trim() === "") continue;
			out[key] = cleaned;
		}
		return out;
	}
	return input;
}
var RESUME_INSTRUCTION = `You are extracting structured data from a résumé PDF.

Return ONLY a raw JSON object. No markdown, no code fences, no commentary.

Use exactly this shape (omit any key you cannot find in the document — do NOT guess):
{
  "fullName": string,
  "title": string,
  "location": string,
  "email": string,
  "summary": string,
  "education": { "institution": string, "location": string, "degree": string, "coursework": string },
  "sections": [ { "title": string, "badge": string, "subtitle": string, "url": string, "bullets": [string] } ],
  "leadership": [string],
  "practices": [string],
  "skills": { "<Category>": [string] }
}

Rules:
- Copy wording from the document. Do not invent, embellish, or add achievements that are not written there.
- "sections" is for jobs/projects. Each bullet should start with a short bold-able label followed by a colon, e.g. "Multi-Tenant Architecture: Designed ...". Preserve the document's own phrasing.
- If the document is unreadable or is not a résumé, return {}.

NEVER include the following, even if they appear in the document. This content is
published on a public website, so omit them entirely rather than paraphrasing:
- Academic scores of any kind: CGPA, SGPA, GPA, percentage, marks, grades, class rank.
- Phone numbers, WhatsApp numbers, or any other contact number.
- Postal/street address, house number, or PIN/ZIP code. A city and state are fine.
- Date of birth, age, gender, nationality, marital status, or father's/mother's name.
- Government or institutional ID numbers (Aadhaar, PAN, passport, roll number, registration number).
- Salary, CTC, or compensation figures.
- Any third party's personal contact details (e.g. a referee's phone or email).

If a line contains both allowed and disallowed content, return only the allowed part.
For example "B.Tech CSE, 2028 | CGPA: 8.1/10" must be returned as "B.Tech CSE, 2028".`;
var Route = createFileRoute("/api/admin/resume")({ server: { handlers: { POST: async ({ request }) => {
	if (!verifySignedSessionToken(getAdminSessionCookie(request) || void 0)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	if (!(request.headers.get("content-type") || "").includes("application/pdf")) return new Response(JSON.stringify({ error: "Please choose a PDF file." }), {
		status: 415,
		headers: { "Content-Type": "application/json" }
	});
	const bytes = await request.arrayBuffer();
	if (bytes.byteLength === 0) return new Response(JSON.stringify({ error: "Empty file." }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	if (bytes.byteLength > 4e6) return new Response(JSON.stringify({ error: "That PDF is over 4 MB. Please upload a smaller file." }), {
		status: 413,
		headers: { "Content-Type": "application/json" }
	});
	let blobUrl = "";
	try {
		blobUrl = (await put("resume.pdf", bytes, {
			access: "public",
			addRandomSuffix: false,
			allowOverwrite: true,
			contentType: "application/pdf",
			cacheControlMaxAge: 60
		})).url;
	} catch (err) {
		console.error("[resume upload] Blob put failed:", err);
		return new Response(JSON.stringify({ error: "We couldn't save the résumé just now. Please try again in a moment." }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
	try {
		const apiKey = getEnvVar("OPENAI_API_KEY");
		if (!apiKey || apiKey === "your_openai_api_key_here" || apiKey.includes("placeholder")) return new Response(JSON.stringify({
			success: true,
			url: blobUrl,
			parsed: false
		}), { headers: { "Content-Type": "application/json" } });
		const model = getEnvVar("OPENAI_RESUME_MODEL", getEnvVar("OPENAI_MODEL", "gpt-5.6-terra"));
		const base64 = Buffer.from(bytes).toString("base64");
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model,
				messages: [{
					role: "user",
					content: [{
						type: "file",
						file: {
							filename: "resume.pdf",
							file_data: `data:application/pdf;base64,${base64}`
						}
					}, {
						type: "text",
						text: RESUME_INSTRUCTION
					}]
				}],
				max_completion_tokens: 4e3
			})
		});
		if (!response.ok) {
			const errText = await response.text();
			console.error("[resume extraction] OpenAI API error:", response.status, errText);
			return new Response(JSON.stringify({
				success: true,
				url: blobUrl,
				parsed: false,
				parseError: "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually."
			}), { headers: { "Content-Type": "application/json" } });
		}
		const rawContent = (await response.json()).choices?.[0]?.message?.content || "";
		const extractedJson = extractJsonObject(rawContent);
		if (!extractedJson) {
			console.error("[resume extraction] Failed to extract JSON from AI response:", rawContent);
			return new Response(JSON.stringify({
				success: true,
				url: blobUrl,
				parsed: false,
				parseError: "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually."
			}), { headers: { "Content-Type": "application/json" } });
		}
		const result = resumeContentSchema.safeParse(extractedJson);
		if (!result.success) {
			console.error("[resume extraction] Schema validation failed:", result.error);
			return new Response(JSON.stringify({
				success: true,
				url: blobUrl,
				parsed: false,
				parseError: "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually."
			}), { headers: { "Content-Type": "application/json" } });
		}
		const current = await readContent();
		const ai = scrubDeep(result.data);
		const mergedResume = {
			...current.resume ?? {},
			...Object.fromEntries(Object.entries(ai).filter(([key, value]) => key !== "skills" && value !== void 0 && value !== null && !(typeof value === "string" && value.trim() === "") && !(Array.isArray(value) && value.length === 0)))
		};
		const next = {
			...current,
			resume: mergedResume,
			...ai.skills && Object.keys(ai.skills).length > 0 ? { skills: ai.skills } : {},
			resumeOverride: {
				...current.resumeOverride ?? {},
				...ai.summary ? { summary: ai.summary } : {},
				...ai.email ? { email: ai.email } : {},
				...ai.education?.degree ? { education: ai.education.degree } : {}
			}
		};
		await writeContent(next);
		const fields = Object.keys(ai).filter((k) => ai[k] !== void 0);
		return new Response(JSON.stringify({
			success: true,
			url: blobUrl,
			parsed: true,
			fields
		}), { headers: { "Content-Type": "application/json" } });
	} catch (aiErr) {
		console.error("[resume extraction] AI parsing threw error:", aiErr);
		return new Response(JSON.stringify({
			success: true,
			url: blobUrl,
			parsed: false,
			parseError: "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually."
		}), { headers: { "Content-Type": "application/json" } });
	}
} } } });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var MethodRoute = Route$11.update({
	id: "/method",
	path: "/method",
	getParentRoute: () => Route$13
});
var AdminIndexRoute = Route$10.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute,
	MethodRoute,
	AdminLoginRoute: Route$9.update({
		id: "/admin/login",
		path: "/admin/login",
		getParentRoute: () => Route$13
	}),
	ApiChatRoute: Route$8.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$13
	}),
	ApiHealthRoute: Route$7.update({
		id: "/api/health",
		path: "/api/health",
		getParentRoute: () => Route$13
	}),
	ApiResumeRoute: Route$6.update({
		id: "/api/resume",
		path: "/api/resume",
		getParentRoute: () => Route$13
	}),
	AdminIndexRoute,
	ApiAdminCheckRoute: Route$5.update({
		id: "/api/admin/check",
		path: "/api/admin/check",
		getParentRoute: () => Route$13
	}),
	ApiAdminDataRoute: Route$4.update({
		id: "/api/admin/data",
		path: "/api/admin/data",
		getParentRoute: () => Route$13
	}),
	ApiAdminLoginRoute: Route$3.update({
		id: "/api/admin/login",
		path: "/api/admin/login",
		getParentRoute: () => Route$13
	}),
	ApiAdminLogoutRoute: Route$2.update({
		id: "/api/admin/logout",
		path: "/api/admin/logout",
		getParentRoute: () => Route$13
	}),
	ApiAdminRestoreRoute: Route$1.update({
		id: "/api/admin/restore",
		path: "/api/admin/restore",
		getParentRoute: () => Route$13
	}),
	ApiAdminResumeRoute: Route.update({
		id: "/api/admin/resume",
		path: "/api/admin/resume",
		getParentRoute: () => Route$13
	})
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: AppNotFoundComponent
	});
}
//#endregion
export { Route$12 as n, cn as r, router_exports as t };

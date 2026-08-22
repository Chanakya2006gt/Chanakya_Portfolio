import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DwUm-KBW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
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
var styles_default = "/assets/styles-COY7FlSe.css";
var APP_NAME = "Nagulagam Chanakya — Full-Stack Developer & SaaS Founder";
var APP_DESC = "Official portfolio of Nagulagam Chanakya — Full-Stack Developer & Founder of Trelio. Specializing in React, Node.js, TypeScript, PostgreSQL, and applied software security.";
var JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Nagulagam Chanakya",
	"url": "https://chanakya.dev",
	"jobTitle": "Full-Stack Developer & Founder",
	"worksFor": {
		"@type": "Organization",
		"name": "Trelio",
		"url": "https://trelio.in"
	},
	"alumniOf": {
		"@type": "CollegeOrUniversity",
		"name": "SR University"
	},
	"sameAs": ["https://github.com/Chanakya2006gt", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315"],
	"knowsAbout": [
		"React",
		"Node.js",
		"TypeScript",
		"PostgreSQL",
		"Tailwind CSS",
		"Software Security",
		"SaaS Architecture",
		"Payment Systems"
	]
};
var Route$9 = createRootRoute({
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
				content: "Nagulagam Chanakya, Chanakya, Full-Stack Developer, Trelio, React, Node.js, TypeScript, PostgreSQL, Portfolio, Software Engineer, Warangal, SR University"
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
				content: "/og.jpg"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Nagulagam Chanakya Portfolio"
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
				content: "/og.jpg"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(JSON_LD)
		}, { children: `(function(){try{var stored=localStorage.getItem("theme");if(stored==="light"||(!stored&&window.matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}}catch(e){}})();` }],
		links: [
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
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
				delayDuration: 200,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "bottom-right",
					theme: "dark"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-B9WWaMlM.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin-lbdJTgVR.mjs");
var Route$7 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./login-Dizw-bJ8.mjs");
var Route$6 = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
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
var businesses = [{
	id: "trelio",
	title: "Trelio",
	description: "Authorization-before-execution SaaS for freelancers and agencies. Work is broken into stages that clients approve and pay one at a time, so execution never runs ahead of payment.",
	liveUrl: "https://trelio.in",
	stack: [
		"React",
		"Node.js",
		"Multi-tenant",
		"Payments",
		"Audit logs"
	],
	featured: true,
	badge: "Live product",
	kind: "business"
}];
var sideProjects = [{
	id: "portfolio",
	title: "This site",
	description: "Personal developer portfolio built with TanStack Start, React 19 SSR, and Tailwind CSS v4 with full theme synchronization and Nitro serverless deployment.",
	stack: [
		"TanStack Start",
		"React 19",
		"Tailwind v4",
		"shadcn/ui"
	],
	liveUrl: "https://github.com/Chanakya2006gt/Chanakya_Portfolio",
	kind: "side"
}];
var skills = {
	Frontend: [
		"React",
		"TypeScript",
		"Tailwind",
		"shadcn/ui",
		"Vite"
	],
	Backend: [
		"Node.js",
		"Express",
		"PostgreSQL",
		"REST APIs"
	],
	Product: [
		"Multi-tenant",
		"Payments",
		"Audit logs",
		"Auth flows"
	],
	Tools: [
		"Git",
		"Playwright",
		"Vercel",
		"Razorpay"
	]
};
var navLinks = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "portfolio-data.json");
function getPortfolioData() {
	try {
		if (fs.existsSync(DATA_FILE_PATH)) {
			const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
			return JSON.parse(fileContent);
		}
	} catch (error) {
		console.error("Error reading portfolio-data.json:", error);
	}
	return {
		businesses,
		sideProjects,
		skills,
		availabilityStatus: "Open for contracts & software engineering roles",
		workAvailability: "Open for contract work, consulting & engineering roles",
		hiringStatus: "Not hiring for any roles at this time (Chanakya is open to being hired for contracts/work)",
		heroTagline: "I ship products under real constraints — not demos. Trelio is the serious work. Everything else stays in experiments."
	};
}
function savePortfolioData(data) {
	try {
		const dir = path.dirname(DATA_FILE_PATH);
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
		return true;
	} catch (error) {
		console.error("Error writing portfolio-data.json:", error);
		return false;
	}
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
		description: "OpenAI model name (default: gpt-4o)",
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
	const summary = data.resumeOverride?.summary || "Hands-on experience building and shipping full-stack, security-conscious SaaS products with multi-tenant architecture and secure payment workflows.";
	const education = data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)";
	const workAvailability = data.workAvailability || data.availabilityStatus || "Open for contract work, consulting & software engineering roles";
	const hiringStatus = data.hiringStatus || "Not currently hiring team members (Chanakya is open to being hired for contracts/work)";
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
${data.businesses.map((b) => `* **${b.title}** (${b.badge || "Live Product"}): ${b.description} | Tech: ${b.stack.join(", ")}${b.liveUrl ? ` | Live: ${b.liveUrl}` : ""}`).join("\n")}

# SIDE PROJECTS & TOOLING:
${data.sideProjects.map((p) => `* **${p.title}**: ${p.description} | Tech: ${p.stack.join(", ")}`).join("\n")}

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
function getFallbackReply(messages) {
	const data = getPortfolioData();
	const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
	const email = data.resumeOverride?.email || getEnvVar("PUBLIC_EMAIL", "nagulagamchanakya2211@gmail.com");
	const linkedinUrl = getEnvVar("PUBLIC_LINKEDIN_URL", "https://www.linkedin.com/in/nagulagam-chanakya-b93514315");
	const workAvailability = data.workAvailability || data.availabilityStatus || "Open for contract work, consulting & software engineering roles";
	const hiringStatus = data.hiringStatus || "Not currently hiring team members";
	if (lastUserMsg.includes("resume") || lastUserMsg.includes("cv") || lastUserMsg.includes("education") || lastUserMsg.includes("qualification")) return `Here is a quick summary of Chanakya's background:

* **Education**: ${data.resumeOverride?.education || "SR University — B.Tech in CSE (Expected 2028)"}
* **Specialization**: Full-Stack Development & Applied Software Security (React, Node.js, PostgreSQL)
* **Flagship Work**: Founder & Lead of Trelio SaaS (Authorization-Before-Execution system)
* **Availability**: ${workAvailability}

For more details, check out the **Resume** button or contact him at [${email}](mailto:${email}) / [LinkedIn](${linkedinUrl}).`;
	if (lastUserMsg.includes("trelio") || lastUserMsg.includes("business") || lastUserMsg.includes("product")) return `Here is what you need to know about **Trelio** (https://trelio.in):

* **Problem Solved**: Eliminates unpaid client work for freelancers/agencies through an *Authorization-Before-Execution (ABE)* milestone locking model.
* **Architecture**: Multi-tenant system with SHA-256 digital contract lifecycle, tamper-evident hash ledgers, and AES-256-GCM encrypted credentials.
* **Tech Stack**: React, Node.js/Express, PostgreSQL, Drizzle ORM, and Razorpay.`;
	if (lastUserMsg.includes("tech") || lastUserMsg.includes("stack") || lastUserMsg.includes("skill") || lastUserMsg.includes("language")) return `Here is Chanakya's core technical toolkit:

* **Languages & Core**: TypeScript, JavaScript, Java, SQL
* **Frontend**: React, Tailwind CSS, React Query, Vite, TanStack Start, shadcn/ui
* **Backend & Data**: Node.js, Express, PostgreSQL, Drizzle ORM, Redis, REST APIs
* **Security & Infrastructure**: AES-256-GCM, HMAC webhooks, Clerk Auth, Razorpay`;
	if (lastUserMsg.includes("are you hiring") || lastUserMsg.includes("is trelio hiring") || lastUserMsg.includes("open positions") || lastUserMsg.includes("job openings") || lastUserMsg.includes("internship")) return `Regarding team openings:

* **Status**: ${hiringStatus}
* **Note**: Chanakya is personally ${workAvailability}.

If you want to reach out or discuss collaborations, contact him at [${email}](mailto:${email}) / [LinkedIn](${linkedinUrl}).`;
	if (lastUserMsg.includes("hire") || lastUserMsg.includes("job") || lastUserMsg.includes("role") || lastUserMsg.includes("work") || lastUserMsg.includes("contract") || lastUserMsg.includes("contact") || lastUserMsg.includes("email")) return `Chanakya is currently **${workAvailability}**!

* **Email**: [${email}](mailto:${email})
* **LinkedIn**: [${linkedinUrl}](${linkedinUrl})
* **GitHub**: [github.com/Chanakya2006gt](https://github.com/Chanakya2006gt)

Feel free to reach out directly to discuss contracts or opportunities!`;
	return `Here is what I can share from Chanakya's profile:
* **Background**: Full-Stack Builder & Founder of Trelio SaaS
* **Availability**: ${workAvailability}

If you are looking for specific details not covered here, feel free to connect with Chanakya directly:
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
var Route$5 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	assertEnvGuards();
	if (isChatRateLimited(request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1")) return new Response(JSON.stringify({ reply: "You're sending messages a bit too fast. Please wait a moment before trying again." }), {
		status: 429,
		headers: { "Content-Type": "application/json" }
	});
	let messages = [];
	try {
		const body = await request.json();
		messages = (Array.isArray(body.messages) ? body.messages : []).slice(-25).filter((m) => m && (m.role === "user" || m.role === "assistant")).map((m) => ({
			role: m.role,
			content: String(m.content || "").slice(0, 1e3).trim()
		})).filter((m) => m.content.length > 0);
		const apiKey = getEnvVar("OPENAI_API_KEY");
		const model = getEnvVar("OPENAI_MODEL", "gpt-4o-mini");
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
var Route$4 = createFileRoute("/api/health")({ server: { handlers: { GET: async () => {
	const required = {
		ADMIN_USERNAME: getEnvVar("ADMIN_USERNAME"),
		ADMIN_PASSWORD: getEnvVar("ADMIN_PASSWORD"),
		ADMIN_SESSION_SECRET: getEnvVar("ADMIN_SESSION_SECRET"),
		OPENAI_API_KEY: getEnvVar("OPENAI_API_KEY")
	};
	const checks = Object.fromEntries(Object.entries(required).map(([key, val]) => [key, val && val.trim() && !val.includes("placeholder") ? "ok" : "missing"]));
	const missing = Object.entries(checks).filter(([, v]) => v === "missing").map(([k]) => k);
	const status = missing.length === 0 ? "ok" : "degraded";
	return new Response(JSON.stringify({
		service: "chanakya-portfolio",
		status,
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		checks,
		...missing.length > 0 && { missing }
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
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
var Route$3 = createFileRoute("/api/admin/check")({ server: { handlers: { GET: async ({ request }) => {
	assertEnvGuards();
	const authenticated = verifySignedSessionToken(getAdminSessionCookie(request) || void 0);
	return new Response(JSON.stringify({ authenticated }), { headers: { "Content-Type": "application/json" } });
} } } });
var Route$2 = createFileRoute("/api/admin/data")({ server: { handlers: {
	GET: async () => {
		const data = getPortfolioData();
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
			if (savePortfolioData(newData)) return new Response(JSON.stringify({
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
var Route$1 = createFileRoute("/api/admin/login")({ server: { handlers: { POST: async ({ request }) => {
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
var Route = createFileRoute("/api/admin/logout")({ server: { handlers: { POST: async () => {
	return new Response(JSON.stringify({ success: true }), { headers: {
		"Content-Type": "application/json",
		"Set-Cookie": "admin_session=; Path=/; HttpOnly; Max-Age=0"
	} });
} } } });
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AdminIndexRoute = Route$7.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AdminLoginRoute: Route$6.update({
		id: "/admin/login",
		path: "/admin/login",
		getParentRoute: () => Route$9
	}),
	ApiChatRoute: Route$5.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$9
	}),
	ApiHealthRoute: Route$4.update({
		id: "/api/health",
		path: "/api/health",
		getParentRoute: () => Route$9
	}),
	AdminIndexRoute,
	ApiAdminCheckRoute: Route$3.update({
		id: "/api/admin/check",
		path: "/api/admin/check",
		getParentRoute: () => Route$9
	}),
	ApiAdminDataRoute: Route$2.update({
		id: "/api/admin/data",
		path: "/api/admin/data",
		getParentRoute: () => Route$9
	}),
	ApiAdminLoginRoute: Route$1.update({
		id: "/api/admin/login",
		path: "/api/admin/login",
		getParentRoute: () => Route$9
	}),
	ApiAdminLogoutRoute: Route.update({
		id: "/api/admin/logout",
		path: "/api/admin/logout",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { skills as a, sideProjects as i, businesses as n, cn as o, navLinks as r, router_exports as t };

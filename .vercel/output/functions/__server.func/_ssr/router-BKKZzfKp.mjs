import { i as __toESM } from "../_runtime.mjs";
import { n as put, t as head } from "../_libs/@vercel/blob+[...].mjs";
import { a as getPortfolioData, i as writeContent, n as readContent, r as restoreBackup, u as __exportAll } from "./content.server-bgipnv65.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { E as Compass, N as ArrowLeft, r as TriangleAlert, u as RotateCw } from "../_libs/lucide-react.mjs";
import { a as record, i as object, n as literal, o as string, r as number, s as union, t as array } from "../_libs/zod.mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BKKZzfKp.js
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
var styles_default = "/assets/styles-COVJU4yQ.css";
var APP_NAME = "Nagulagam Chanakya — Full-Stack Developer & SaaS Founder";
var APP_DESC = "Official portfolio of Nagulagam Chanakya — Full-Stack Developer & Founder of Trelio. Specializing in React, Node.js, TypeScript, PostgreSQL, and applied software security.";
var SITE_URL = "https://chanakya-portfolio-orcin.vercel.app";
var JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Nagulagam Chanakya",
	"url": SITE_URL,
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
var Route$12 = createRootRoute({
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
var $$splitComponentImporter$2 = () => import("./routes-C1s3e5H-.mjs");
var Route$11 = createFileRoute("/")({
	loader: () => fetchContent(),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin-NPERbr1f.mjs");
var Route$10 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./login-CqXY8bFx.mjs");
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
var Route$8 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
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
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AdminIndexRoute = Route$10.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AdminLoginRoute: Route$9.update({
		id: "/admin/login",
		path: "/admin/login",
		getParentRoute: () => Route$12
	}),
	ApiChatRoute: Route$8.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$12
	}),
	ApiHealthRoute: Route$7.update({
		id: "/api/health",
		path: "/api/health",
		getParentRoute: () => Route$12
	}),
	ApiResumeRoute: Route$6.update({
		id: "/api/resume",
		path: "/api/resume",
		getParentRoute: () => Route$12
	}),
	AdminIndexRoute,
	ApiAdminCheckRoute: Route$5.update({
		id: "/api/admin/check",
		path: "/api/admin/check",
		getParentRoute: () => Route$12
	}),
	ApiAdminDataRoute: Route$4.update({
		id: "/api/admin/data",
		path: "/api/admin/data",
		getParentRoute: () => Route$12
	}),
	ApiAdminLoginRoute: Route$3.update({
		id: "/api/admin/login",
		path: "/api/admin/login",
		getParentRoute: () => Route$12
	}),
	ApiAdminLogoutRoute: Route$2.update({
		id: "/api/admin/logout",
		path: "/api/admin/logout",
		getParentRoute: () => Route$12
	}),
	ApiAdminRestoreRoute: Route$1.update({
		id: "/api/admin/restore",
		path: "/api/admin/restore",
		getParentRoute: () => Route$12
	}),
	ApiAdminResumeRoute: Route.update({
		id: "/api/admin/resume",
		path: "/api/admin/resume",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: AppNotFoundComponent
	});
}
//#endregion
export { Route$11 as n, cn as r, router_exports as t };

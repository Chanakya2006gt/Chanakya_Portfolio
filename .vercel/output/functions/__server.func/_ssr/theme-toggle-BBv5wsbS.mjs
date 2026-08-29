import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as ArrowRight, I as CircleCheck, O as FileText, P as CodeXml, a as Terminal, c as ShieldCheck, g as Moon, j as Database, o as Sun, w as Layers } from "../_libs/lucide-react.mjs";
import { n as Card, t as Button } from "./card-BjQXDIgM.mjs";
import { t as Badge } from "./badge-Iy52FwqH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-BBv5wsbS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useScrollAnimation(threshold = .1) {
	const ref = (0, import_react.useRef)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(element);
			}
		}, { threshold });
		observer.observe(element);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		isVisible
	};
}
function MethodSection() {
	const { ref, isVisible } = useScrollAnimation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		ref,
		className: `border-y border-border/60 bg-secondary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "The Delivery Factory"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl tracking-tight sm:text-4xl",
						children: "The 15-Day Systems Factory"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed",
						children: "How a single independent engineer delivers production-grade operational systems in 15 days with more predictability than a 10-person agency."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-border/80 font-mono text-xs px-3 py-1 self-start md:self-auto shrink-0",
						children: "Repeatable 5-Phase Operating System"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 space-y-6",
					children: [
						{
							phase: "Phase 01",
							days: "Days 1–2",
							title: "Workflow Teardown & Specification",
							badge: "Discovery & Spec",
							desc: "We analyze your current manual workflow (spreadsheets, WhatsApp, email) and map every state transition: quote generation, client approvals, revisions, and payment settlement.",
							deliverable: "Written Workflow Specification & Architecture Blueprint",
							icon: FileText,
							color: "emerald",
							points: [
								"Complete state machine & transition rules mapped",
								"Strict boundary checklist: core in-scope vs out-of-scope distractions",
								"Stack selection tailored to throughput & scale requirements"
							]
						},
						{
							phase: "Phase 02",
							days: "Days 3–4",
							title: "Data Modeling & Security Guardrails",
							badge: "System Design",
							desc: "We establish the foundational data architecture before writing application code, locking down PostgreSQL schemas, multi-tenant boundaries, and cryptographic defenses.",
							deliverable: "Living ARCHITECTURE.md, SECURITY.md & Migration Schemas",
							icon: Database,
							color: "indigo",
							points: [
								"Multi-tenant PostgreSQL schema design with state invariants",
								"Row-Level Security (RLS), HMAC signatures & AES-256 deliverable encryption",
								"Accessible design token system (60-30-10 palette, WCAG 2.2 AA)"
							]
						},
						{
							phase: "Phase 03",
							days: "Day 5",
							title: "Milestone Blueprint & Verification Gates",
							badge: "Implementation Plan",
							desc: "We break the full build into sequential 2-day milestones with explicit automated testing criteria and manual verification gates before execution begins.",
							deliverable: "Tailored implementation_plan.md & DECISION_LOG.md",
							icon: Layers,
							color: "cyan",
							points: [
								"Sequential milestone roadmap with zero ambiguity",
								"Automated test acceptance criteria defined in advance",
								"Single source of truth decision log initialized"
							]
						},
						{
							phase: "Phase 04",
							days: "Days 6–11",
							title: "Full-Stack Execution & System Assembly",
							badge: "Core Engineering",
							desc: "Modular, high-velocity development assembling the client interface, API endpoints, payment gateway webhooks (Razorpay/Stripe), and deterministic business logic.",
							deliverable: "Working Staging Deployment on Live URL",
							icon: CodeXml,
							color: "purple",
							points: [
								"Frontend UI, SSR hydration & responsive layout implementation",
								"Deterministic isomorphic calculation engines (e.g. CPQ pricing math)",
								"Payment webhooks, audit trails & transactional locking"
							]
						},
						{
							phase: "Phase 05",
							days: "Days 12–15",
							title: "Hardening, Automated Testing & Handover",
							badge: "Definition of Done",
							desc: "Zero-compromise verification: every user flow is battle-tested with automated Playwright suites, security headers are verified, and the full repository is handed over.",
							deliverable: "Production Go-Live on Custom Domain + 14-Day Warranty",
							icon: ShieldCheck,
							color: "emerald",
							points: [
								"Automated Playwright smoke & integration suites covering every route",
								"Web quality, Core Web Vitals & CSP security header audits",
								"Video walkthrough recording (Loom) + repository transfer + 14-day warranty"
							]
						}
					].map((item, idx) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "card-specular relative overflow-hidden rounded-2xl p-6 sm:p-7 border border-border/70 bg-card/90 shadow-sm transition-all hover:border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-[1.2fr_1.8fr] items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-9 items-center justify-center rounded-xl bg-secondary border border-border/80 text-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5 text-sage" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-mono font-bold uppercase tracking-wider text-sage",
													children: item.phase
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-mono text-muted-foreground",
													children: ["· ", item.days]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-serif text-xl sm:text-2xl text-foreground font-semibold",
												children: item.title
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
											children: item.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1.5 rounded-lg bg-secondary/80 px-2.5 py-1 border border-border/60 text-[11px] font-mono text-foreground font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Deliverable: ", item.deliverable] })]
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border/60 bg-secondary/40 p-4 sm:p-5 space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground",
										children: "Execution Checkpoints:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 text-xs sm:text-sm text-foreground/90",
										children: item.points.map((pt, pIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-sage shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pt })]
										}, pIdx))
									})]
								})]
							})
						}, item.phase);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-2xl border border-border/70 bg-gradient-to-r from-card via-card to-emerald-500/10 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-center sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-lg text-foreground font-semibold",
							children: "Ready to de-risk your workflow?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Start with a 3-Day Scope & Proof (₹40,000) — 100% credited against the full sprint if you proceed."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#offers",
						className: "btn-sage-glow shrink-0 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Offer Ladder" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			]
		})
	});
}
function ThemeToggle({ className = "", variant = "ghost", size = "icon" }) {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const isLight = document.documentElement.classList.contains("light");
		const storedTheme = localStorage.getItem("theme");
		const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
		setTheme(storedTheme || (isLight || systemPrefersLight ? "light" : "dark"));
		const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
		const handleSystemThemeChange = (e) => {
			if (!localStorage.getItem("theme")) {
				const nextTheme = e.matches ? "light" : "dark";
				setTheme(nextTheme);
				if (nextTheme === "light") {
					document.documentElement.classList.add("light");
					document.documentElement.classList.remove("dark");
				} else {
					document.documentElement.classList.remove("light");
					document.documentElement.classList.add("dark");
				}
			}
		};
		const handleThemeChange = (e) => {
			const customEvent = e;
			if (customEvent.detail) setTheme(customEvent.detail);
			else {
				const currentIsLight = document.documentElement.classList.contains("light");
				setTheme(currentIsLight ? "light" : "dark");
			}
		};
		const handleStorageChange = (e) => {
			if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) {
				setTheme(e.newValue);
				if (e.newValue === "light") {
					document.documentElement.classList.add("light");
					document.documentElement.classList.remove("dark");
				} else {
					document.documentElement.classList.remove("light");
					document.documentElement.classList.add("dark");
				}
			}
		};
		mediaQuery.addEventListener("change", handleSystemThemeChange);
		window.addEventListener("theme-change", handleThemeChange);
		window.addEventListener("storage", handleStorageChange);
		return () => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
			window.removeEventListener("theme-change", handleThemeChange);
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);
	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);
		localStorage.setItem("theme", nextTheme);
		if (nextTheme === "light") {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
		}
		window.dispatchEvent(new CustomEvent("theme-change", { detail: nextTheme }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant,
		size,
		onClick: toggleTheme,
		className: `rounded-full transition-transform active:scale-95 ${className}`,
		title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
		"aria-label": "Toggle Theme",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-sage transition-all hover:rotate-45" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4 text-sage transition-all hover:-rotate-12" })
	});
}
//#endregion
export { ThemeToggle as n, useScrollAnimation as r, MethodSection as t };

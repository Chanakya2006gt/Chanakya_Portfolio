import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as CircleCheck, E as CodeXml, I as ArrowRight, L as ArrowLeft, b as FileText, c as ShieldCheck, k as CirclePlay, r as UserCheck, w as Database } from "../_libs/lucide-react.mjs";
import { n as Card, t as Button } from "./card-DzGZOiKj.mjs";
import { t as Badge } from "./badge-2bi-7vGo.mjs";
import { n as useScrollAnimation, t as ThemeToggle } from "./theme-toggle-ClGkjqVs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/method-DfISsYOE.js
var import_jsx_runtime = require_jsx_runtime();
function MethodSection() {
	const { ref, isVisible } = useScrollAnimation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		ref,
		className: `border-y border-border/60 bg-secondary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "The 15-Day Method"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl tracking-tight sm:text-4xl",
						children: "How 15 days actually run step-by-step."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed",
						children: "Predictable, fixed-price engineering without agency overhead. You know exactly what you provide, what you click, and when your system goes live."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-border/80 font-mono text-xs px-3 py-1 self-start md:self-auto shrink-0",
						children: "5 Grounded Phases · Fixed 15 Days"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-6",
					children: [
						{
							phase: "Phase 01",
							days: "Days 1–3",
							title: "Paid Diagnosis & Live Prototype",
							badge: "De-Risking",
							desc: "We tear down your current manual quoting or payment path and map every edge case into deterministic software rules.",
							whatYouGive: "2 sample quotes, 1 rate sheet/spreadsheet, and a 45-minute phone walkthrough.",
							whatYouClickOrSign: "1 deployed working screen on a live URL + written workflow map + guaranteed fixed quote for the build.",
							icon: FileText,
							points: [
								"Every quote state, revision rule, and approval bottleneck mapped",
								"100% of the ₹40k diagnosis credited against the full build",
								"You test the working UI on your phone before committing to the build"
							]
						},
						{
							phase: "Phase 02",
							days: "Days 4–5",
							title: "Math & Logic Lock",
							badge: "Architecture",
							desc: "We encode your floor specs, material yields, roll geometries, or milestone payment triggers into automated calculation logic.",
							whatYouGive: "Confirmation of rate tiers, material specs, and team role permissions (e.g. clerk vs GM).",
							whatYouClickOrSign: "Calculation engine verified against 100% of your sample quotes with zero math drift.",
							icon: Database,
							points: [
								"Deterministic rate formulas passing all your historical test cases",
								"Role-based access rules locking down operator vs management actions",
								"Zero calculation errors before a single frontend screen is styled"
							]
						},
						{
							phase: "Phase 03",
							days: "Days 6–10",
							title: "Core System Assembly",
							badge: "Engineering",
							desc: "Full-stack construction: assembling the clerk interface, PDF quote generators, audit ledger, and payment integrations.",
							whatYouGive: "Logo/brand assets, custom domain DNS access, and gateway credentials (if collecting payments).",
							whatYouClickOrSign: "Private staging environment where your staff can create real quotes and export confirmed PDFs.",
							icon: CodeXml,
							points: [
								"Clerk can configure a complete quote in under 90 seconds",
								"Instant branded PDF quote generator matching floor specs",
								"Stage locks and direct bank settlement routes connected"
							]
						},
						{
							phase: "Phase 04",
							days: "Days 11–13",
							title: "Floor Stress Testing & Review",
							badge: "Verification",
							desc: "Your team runs live production quotes through the staging system in parallel with your existing WhatsApp/Excel process.",
							whatYouGive: "5 real incoming quote requests run in parallel by your clerks.",
							whatYouClickOrSign: "Review and sign-off on the staging system after verifying speed, quote accuracy, and UX.",
							icon: UserCheck,
							points: [
								"Clerks test real jobs to catch real-world workflow friction",
								"Automated regression suites ensuring no edge cases break",
								"Refinements completed within 24 hours of feedback"
							]
						},
						{
							phase: "Phase 05",
							days: "Days 14–15",
							title: "Custom Domain Go-Live & Code Handover",
							badge: "Handover",
							desc: "We point the system to your custom domain, transfer the full git repository, and begin your 14-day operational warranty.",
							whatYouGive: "Final sign-off and custom domain DNS pointer.",
							whatYouClickOrSign: "Live system on your domain + full repository transfer + 10-minute video walkthrough + 14-day warranty.",
							icon: ShieldCheck,
							points: [
								"100% repository handover: you own the code and the database",
								"Complete video walkthrough for your team and future maintenance",
								"14 days of dedicated on-call support for any questions or tweaks"
							]
						}
					].map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "card-specular relative overflow-hidden rounded-2xl p-6 sm:p-7 border border-border/70 bg-card/90 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-[1.1fr_1.9fr] items-start",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-2 text-xs text-foreground/90 pt-1",
											children: item.points.map((pt, pIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-sage shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pt })]
											}, pIdx))
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border/60 bg-secondary/40 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-3.5 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "What You Must Give:" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed",
											children: item.whatYouGive
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "size-3.5 text-emerald-700 dark:text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "What You Can Click / Sign:" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm text-foreground font-semibold leading-relaxed",
											children: item.whatYouClickOrSign
										})]
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
							children: "Start with Phase 1 · Paid Diagnosis"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "3 days, ₹40,000, 100% credited against the build. You get 1 working screen and a guaranteed fixed quote."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#pricing",
						className: "btn-sage-glow shrink-0 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Fixed Pricing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			]
		})
	});
}
function MethodPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-emerald-500/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center justify-between px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Systems" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "btn-sage-glow rounded-xl font-semibold shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "pricing",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Pricing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 size-3.5" })]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/60 py-12 text-center text-xs text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Nagulagam Chanakya · Quote-to-job systems"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 font-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "pricing",
								className: "hover:text-foreground transition-colors",
								children: "Pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "systems",
								className: "hover:text-foreground transition-colors",
								children: "Live Systems"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "about",
								className: "hover:text-foreground transition-colors",
								children: "Trust & Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "contact",
								className: "hover:text-foreground transition-colors",
								children: "Contact"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { MethodPage as component };

import { i as __toESM } from "../_runtime.mjs";
import { o as navLinks } from "./content.server-BolRseyh.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as CircleCheck, C as Disc, D as Clock, E as CodeXml, F as ArrowUpRight, I as ArrowRight, M as Calculator, N as Briefcase, O as CircleX, P as ArrowUp, S as ExternalLink, c as ShieldCheck, g as Lock, j as Check, m as Mail, p as Menu, t as X, v as Layers, w as Database, x as Factory, y as Github } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route$12, r as cn } from "./router-CKIW8MQz.mjs";
import { a as CardFooter, i as CardDescription, n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as Button } from "./card-C-9En5gP.mjs";
import { n as Label, t as Input } from "./label-BxL4uagu.mjs";
import { t as Textarea } from "./textarea-D_gkSQyM.mjs";
import { t as Badge } from "./badge-D4TAfh1n.mjs";
import { n as useScrollAnimation, t as ThemeToggle } from "./theme-toggle-Bcgdd1SU.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CNGn3kU5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Root.displayName;
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5", className),
	...props
});
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-medium leading-none", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function TrelioPreview() {
	const [activeStage, setActiveStage] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl bg-secondary/70 p-4 sm:p-5 border border-border/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid grid-cols-3 gap-2.5 border-b border-border/60 pb-3.5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1 text-emerald-800 dark:text-emerald-400 mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Settlement"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-emerald-800 dark:text-emerald-400",
							children: "Direct to your account"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1 text-indigo mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Stage Lock"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-indigo",
							children: "Work paused until paid"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1 text-sage mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Verification"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-sage",
							children: "448 Automated tests"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-wide text-foreground",
						children: "Authorization-Before-Execution Protocol"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-full bg-sage/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-sage border border-sage/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sage animate-pulse" }), "Interactive Demo"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: [
					{
						id: 0,
						title: "Stage 01 · Scope Lock & Agreement",
						desc: "Scope deliverables and milestone terms are cryptographically locked and agreed upon.",
						status: "Locked & Signed",
						done: true
					},
					{
						id: 1,
						title: "Stage 02 · Client Authorization & Payment",
						desc: "Client approves and pays milestone directly to agency account to unlock next stage.",
						status: "Awaiting Auth & Pay",
						done: false,
						active: true
					},
					{
						id: 2,
						title: "Stage 03 · Execution & Direct Settlement",
						desc: "Work executes once authorized; payment settles directly to agency with zero intermediary holding.",
						status: "Locked Until Paid",
						done: false
					}
				].map((stage, i) => {
					const isSelected = activeStage === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveStage(i),
						className: `w-full text-left rounded-xl p-3 transition-all duration-200 border ${isSelected ? "bg-card border-sage/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_rgba(0,0,0,0.3)]" : "bg-card/40 border-border/40 hover:bg-card/70 hover:border-border/70"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs font-medium ${isSelected ? "text-foreground font-semibold" : "text-foreground/80"}`,
								children: stage.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${stage.done ? "text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/20" : isSelected ? "text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/20 animate-pulse" : "text-muted-foreground bg-secondary border-border/40"}`,
								children: [stage.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }), stage.status]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted-foreground leading-relaxed",
							children: stage.desc
						})]
					}, stage.title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-card/90 border border-border/60 text-[11px] font-mono text-muted-foreground shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-foreground font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Zero Escrow Risk" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-sage font-semibold",
					children: "Direct Merchant Settlement · Instant Unlock"
				})]
			})
		]
	});
}
function ApexPreview() {
	const [activeMode, setActiveMode] = (0, import_react.useState)(0);
	const [finatDir, setFinatDir] = (0, import_react.useState)(1);
	const finatOptions = [
		{
			dir: 1,
			name: "FINAT 1",
			type: "Wound Out",
			edge: "Top Off First",
			rot: 0
		},
		{
			dir: 2,
			name: "FINAT 2",
			type: "Wound Out",
			edge: "Bottom Off First",
			rot: 180
		},
		{
			dir: 3,
			name: "FINAT 3",
			type: "Wound Out",
			edge: "Right Off First",
			rot: 90
		},
		{
			dir: 4,
			name: "FINAT 4",
			type: "Wound Out",
			edge: "Left Off First",
			rot: 270
		},
		{
			dir: 5,
			name: "FINAT 5",
			type: "Wound In",
			edge: "Top Off First",
			rot: 0
		},
		{
			dir: 6,
			name: "FINAT 6",
			type: "Wound In",
			edge: "Bottom Off First",
			rot: 180
		}
	];
	const [quantity, setQuantity] = (0, import_react.useState)(25e3);
	const widthMm = 85;
	const linearMeters = Math.round(quantity * 123 / 1e3);
	const totalSqM = Number((quantity * widthMm * 123 / 1e6).toFixed(1));
	const ctpPlates = 6;
	const selectedFinat = finatOptions.find((f) => f.dir === finatDir) || finatOptions[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl bg-secondary/80 p-4 sm:p-5 border border-border/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid grid-cols-3 gap-2.5 border-b border-border/60 pb-3.5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/90 px-3 py-2 border border-border/60 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1.5 text-cyan-800 dark:text-cyan-400 mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Standards"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-foreground",
							children: "FINAT 1–8 Engine"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/90 px-3 py-2 border border-border/60 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1.5 text-emerald-800 dark:text-emerald-400 mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Quoting Speed"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-emerald-800 dark:text-emerald-400",
							children: "One-pass, not spreadsheets"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/90 px-3 py-2 border border-border/60 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1.5 text-purple-800 dark:text-purple-400 mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Floor Specs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-purple-800 dark:text-purple-400",
							children: "Exact linear meters & area"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-cyan-700 dark:text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-wide text-foreground",
						children: "B2B Manufacturing Architecture"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 border border-cyan-500/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-cyan-500 animate-pulse" }), "Live Interactive"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-card/70 border border-border/70 mb-3 text-[11px] font-medium text-center shadow-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveMode(0),
						className: `py-1.5 px-2 rounded-lg transition-all ${activeMode === 0 ? "bg-secondary text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`,
						children: "FINAT Rewind"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveMode(1),
						className: `py-1.5 px-2 rounded-lg transition-all ${activeMode === 1 ? "bg-secondary text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`,
						children: "CPQ Math Parity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveMode(2),
						className: `py-1.5 px-2 rounded-lg transition-all ${activeMode === 2 ? "bg-secondary text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`,
						children: "Sales CRM & SLA"
					})
				]
			}),
			activeMode === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card/95 border border-border/70 p-3.5 space-y-3 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground",
							children: "European Automated Rewind Standards"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 px-2 py-0.5 rounded-full border border-cyan-300 dark:border-cyan-500/30 font-semibold",
							children: "High-Speed Applicator Ready"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
						children: finatOptions.map((f) => {
							const isSelected = finatDir === f.dir;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFinatDir(f.dir),
								className: `p-2 rounded-xl text-center transition-all border ${isSelected ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-500/15 shadow-sm ring-1 ring-cyan-500/40" : "border-border/60 bg-secondary/40 hover:bg-secondary"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-mono font-bold text-foreground",
										children: f.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[9px] text-muted-foreground truncate",
										children: f.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto my-1.5 size-6 rounded-lg border border-border flex items-center justify-center font-mono text-[10px] font-bold bg-card shadow-xs",
										style: { transform: `rotate(${f.rot}deg)` },
										children: "A"
									})
								]
							}, f.dir);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50 font-mono gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Orientation: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "text-foreground",
							children: [
								selectedFinat.name,
								" (",
								selectedFinat.type,
								")"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Lead Edge: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-cyan-700 dark:text-cyan-400",
							children: selectedFinat.edge
						})] })]
					})
				]
			}),
			activeMode === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card/95 border border-border/70 p-3.5 space-y-3 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground",
							children: "Deterministic Estimating Math Model"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 font-semibold",
							children: "100% Client/Server Test Parity"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setQuantity(1e4),
								className: `py-1.5 px-2 rounded-xl text-xs font-mono transition-all border ${quantity === 1e4 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 font-bold shadow-xs text-foreground" : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"}`,
								children: "10,000 pcs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setQuantity(25e3),
								className: `py-1.5 px-2 rounded-xl text-xs font-mono transition-all border ${quantity === 25e3 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 font-bold shadow-xs text-foreground" : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"}`,
								children: "25,000 pcs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setQuantity(1e5),
								className: `py-1.5 px-2 rounded-xl text-xs font-mono transition-all border ${quantity === 1e5 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 font-bold shadow-xs text-foreground" : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"}`,
								children: "100,000 pcs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2.5 text-center text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 rounded-xl bg-secondary/50 border border-border/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-mono text-muted-foreground",
									children: "Linear Web"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-semibold text-foreground font-mono mt-0.5 text-sm",
									children: [linearMeters.toLocaleString(), " m"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 rounded-xl bg-secondary/50 border border-border/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-mono text-muted-foreground",
									children: "Surface Area"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-semibold text-foreground font-mono mt-0.5 text-sm",
									children: [totalSqM, " m²"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 rounded-xl bg-secondary/50 border border-border/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-mono text-muted-foreground",
									children: "CTP Plates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-semibold text-emerald-700 dark:text-emerald-400 font-mono mt-0.5 text-sm",
									children: [ctpPlates, " Sets (6-Col)"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-border/60 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-mono uppercase text-emerald-700 dark:text-emerald-300 font-semibold block",
									children: "Throughput"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono font-bold text-foreground",
									children: "273,261 ops/s"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 rounded-lg bg-cyan-50/50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-mono uppercase text-cyan-700 dark:text-cyan-300 font-semibold block",
									children: "p99 Latency"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono font-bold text-foreground",
									children: "0.0109 ms"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 rounded-lg bg-purple-50/50 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-mono uppercase text-purple-700 dark:text-purple-300 font-semibold block",
									children: "fast-check Fuzz"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono font-bold text-foreground",
									children: "1,000 Invariants"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 rounded-lg bg-indigo-50/50 dark:bg-indigo/10 border border-indigo-200 dark:border-indigo/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-mono uppercase text-indigo-700 dark:text-indigo-300 font-semibold block",
									children: "Heap Delta"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono font-bold text-foreground",
									children: "0.15 MB (0 Leaks)"
								})]
							})
						]
					})
				]
			}),
			activeMode === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card/95 border border-border/70 p-3.5 space-y-2.5 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-foreground",
						children: "Operational Decision Gates & 4-Hr SLA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/30 font-semibold",
						children: "Offline Wire / ACH Clearance"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-2.5 rounded-xl bg-secondary/40 border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "01. RFQ Intake & Pre-flight"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-emerald-700 dark:text-emerald-400 font-mono text-[11px] flex items-center gap-1 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), " Magic Bytes Verified"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "02. Estimator CPQ Dispatch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-amber-800 dark:text-amber-400 font-mono text-[11px] flex items-center gap-1 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 animate-spin" }), " 4-Hr SLA Active"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-2.5 rounded-xl bg-secondary/40 border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "03. Production Run & Dispatch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground font-mono text-[11px]",
								children: "Heidelberg / Flexo Line"
							})]
						})
					]
				})]
			})
		]
	});
}
function OfferLadder() {
	const { ref, isVisible } = useScrollAnimation();
	const [activeDoor, setActiveDoor] = (0, import_react.useState)("plant");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		ref,
		className: `mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Quote-to-Job Systems"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl tracking-tight sm:text-4xl",
					children: "Fixed-price technical engagements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed",
					children: "From a 3-day diagnosis to a complete workflow built and handed over in 15 days."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "outline",
					className: "border-emerald-600/30 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/10 font-mono text-xs px-3 py-1 self-start md:self-auto shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse inline-block" }), "Taking 2 builds a month · booking the next slot"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-2xl border border-border/80 bg-secondary/40 p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/60 pb-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground",
						children: "Two Types of Workflows Built:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border/70 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveDoor("plant"),
							className: `px-3 py-1 rounded-lg font-medium transition-all ${activeDoor === "plant" ? "bg-emerald-600 text-white shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
							children: "For Plants & Converting"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveDoor("agency"),
							className: `px-3 py-1 rounded-lg font-medium transition-all ${activeDoor === "agency" ? "bg-indigo text-white shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
							children: "For Agencies & Studios"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-xl border p-5 transition-all ${activeDoor === "plant" ? "border-emerald-600/40 bg-card shadow-sm" : "border-border/60 bg-card/50 opacity-75 hover:opacity-100"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Factory, { className: "size-4.5 text-emerald-800 dark:text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "Plants & Converting Lines"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The Problem:" }), " Quotes die in Excel and WhatsApp; roll specs and core sizes get mis-entered."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The Result:" }), " A quoting path a plant clerk can finish in one pass — calculating linear meters, substrate weights, and rates directly from the specs your production floor runs."]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-xl border p-5 transition-all ${activeDoor === "agency" ? "border-indigo/40 bg-card shadow-sm" : "border-border/60 bg-card/50 opacity-75 hover:opacity-100"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4.5 text-indigo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "Agencies & Studios"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The Problem:" }), " Work runs ahead of payment; clients demand urgent changes while milestone invoices sit unpaid."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The Result:" }), " Stage locks where the next phase of work stays locked until the current milestone is paid directly into your merchant account."]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-3 items-stretch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border-2 border-emerald-600/40 dark:border-emerald-500/40 bg-gradient-to-b from-card via-card to-emerald-500/5 shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400",
									children: "Step 1 · 3 Days"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-foreground mt-0.5",
									children: "Paid diagnosis"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-y border-border/60 py-3.5 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-3xl font-bold font-mono tracking-tight text-foreground",
											children: "₹40,000"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground font-mono",
											children: "fixed"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-emerald-800 dark:text-emerald-400",
										children: "100% credited against the build"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: "De-risks your project before committing to a full build. You see the exact architecture and one working screen."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs text-foreground/90 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 deployed working screen" }), " on a live URL you can test"] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Guaranteed fixed quote" }), " for the 15-day build"] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Written workflow map & operational rules" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data model & database schema layout" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10-minute video walkthrough explaining the build" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-6 mt-6 border-t border-border/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "w-full btn-sage-glow rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book a Paid Diagnosis (₹40k)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border border-border/80 bg-card shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-mono font-bold uppercase tracking-wider text-indigo",
									children: "Step 2 · 15 Days"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-foreground mt-0.5",
									children: "One workflow built"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-y border-border/60 py-3.5 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-3xl font-bold font-mono tracking-tight text-foreground",
											children: "₹3.5L – ₹6.0L"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground font-mono",
											children: "fixed"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "15 business days to staging & production"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-foreground font-medium leading-relaxed bg-secondary/50 p-2.5 rounded-lg border border-border/60",
									children: "The whole of one live process — e.g. RFQ through confirmed order — not a brochure, not the entire company."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs text-foreground/90 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-indigo shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Working system deployed on your custom domain" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-indigo shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Automated test suite covering every state transition" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-indigo shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Security pass (PostgreSQL RLS, webhook verification)" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-indigo shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full source code repository handover + 14-day bug fix warranty" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-6 mt-6 border-t border-border/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "w-full rounded-xl border-border/80 hover:border-indigo hover:text-indigo font-semibold shadow-sm active:scale-[0.98] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire About a Build" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border border-border/80 bg-card shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400",
									children: "Step 3 · Ongoing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-foreground mt-0.5",
									children: "Keep it running"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-y border-border/60 py-3.5 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-3xl font-bold font-mono tracking-tight text-foreground",
											children: "₹20k – ₹35k"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground font-mono",
											children: "/ month"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Optional post-launch maintenance & priority SLA"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: "Keeps your operational software running with database maintenance, dependency updates, and priority bug resolution."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs text-foreground/90 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monthly maintenance allowance for workflow tweaks" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Priority response on operational blockers" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Security patching & database backups" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct engineer access — no ticketing queues" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-6 mt-6 border-t border-border/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "w-full rounded-xl border-border/80 hover:text-amber-800 dark:hover:text-amber-400 font-semibold shadow-sm active:scale-[0.98] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ask About Retainers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })]
								})
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/method",
					className: "inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "How 15 days actually run step-by-step → Read the Systems Factory" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
				})
			})
		]
	});
}
function HeroQuoteCard() {
	const [tab, setTab] = (0, import_react.useState)("plant");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-specular relative overflow-hidden rounded-2xl border border-border/80 bg-card backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] w-full max-w-md mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/70 bg-secondary/80 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-emerald-500 inline-block shadow-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-semibold text-foreground",
					children: tab === "plant" ? "Apex Packaging · Plant Quote" : "Trelio · Milestone Lock"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 rounded-lg bg-card p-0.5 border border-border/70 text-[11px] font-mono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("plant"),
					className: `px-2 py-0.5 rounded-md transition-colors ${tab === "plant" ? "bg-emerald-600 text-white font-semibold" : "text-muted-foreground hover:text-foreground"}`,
					children: "Plant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("agency"),
					className: `px-2 py-0.5 rounded-md transition-colors ${tab === "agency" ? "bg-indigo text-white font-semibold" : "text-muted-foreground hover:text-foreground"}`,
					children: "Agency"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 space-y-4 text-left",
			children: [tab === "plant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border/70 bg-secondary/50 p-3.5 space-y-2.5 font-mono text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-muted-foreground text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Job: Beverage Roll Labels (BOPP 60μm)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "text-[10px] px-1.5 py-0 border-emerald-600/30 text-emerald-800 dark:text-emerald-400",
							children: "FINAT 4"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2 text-center pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-card p-2 border border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: "Quantity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: "50,000"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-card p-2 border border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: "Running Meters"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: "3,850 m"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-card p-2 border border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: "Calculated Rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-emerald-800 dark:text-emerald-400",
									children: "₹0.64 / pc"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px] pt-1 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Core: 76mm (3\") · Web: 330mm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-800 dark:text-emerald-400 font-semibold",
							children: "Ready for Press"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Calculates running meters & substrate costs in one pass." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rates generated from the exact specs the floor runs." })]
				})]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border/70 bg-secondary/50 p-3.5 space-y-2.5 font-mono text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-muted-foreground text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project: Brand Identity & Web App" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "text-[10px] px-1.5 py-0 border-indigo/30 text-indigo",
							children: "Stage 02 Locked"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg bg-card p-2 border border-border/60 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Stage 01 · Wireframes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), " Paid & Released"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg bg-card p-2 border border-indigo/40 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-semibold",
								children: "Stage 02 · Full Build"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-indigo font-semibold flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), " Awaiting Client Auth"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px] pt-1 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Settlement: Direct UPI / Bank" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-indigo font-semibold",
							children: "Work pauses on delay"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-indigo shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next stage stays locked until the current milestone is paid." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-indigo shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Client pays directly into your account; we don't hold the funds." })]
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2 border-t border-border/60 flex items-center justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#projects",
					className: "text-muted-foreground hover:text-foreground font-medium transition-colors inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try live interactive system" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] text-muted-foreground",
					children: "Fixed price · You keep repo"
				})]
			})]
		})]
	});
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed z-50 gap-4 bg-card p-6 shadow-[var(--shadow-border)] transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300", side === "right" && "inset-y-0 right-0 h-full w-72 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "left" && "inset-y-0 left-0 h-full w-72 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5 text-left", className),
	...props
});
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-medium", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
function useActiveSection(sectionIds) {
	const [activeSection, setActiveSection] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 200;
			for (let i = sectionIds.length - 1; i >= 0; i--) {
				const section = document.getElementById(sectionIds[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sectionIds[i]);
					return;
				}
			}
			if (window.scrollY < 100 && sectionIds.length > 0) setActiveSection(sectionIds[0]);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [sectionIds]);
	return activeSection;
}
var navSections = navLinks.map((l) => l.href.replace("#", ""));
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const activeSection = useActiveSection(navSections);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "text-sm font-medium tracking-tight",
					children: ["Chanakya", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sage",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 md:flex",
						children: navLinks.map((link) => {
							const isExternalOrRoute = link.href.startsWith("/");
							const sectionId = link.href.replace("#", "").replace("/", "");
							const isActive = !isExternalOrRoute && activeSection === sectionId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link.href,
								className: `text-sm transition-colors relative py-1 ${isActive ? "font-medium text-sage" : "text-muted-foreground hover:text-foreground"}`,
								children: [link.label, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-sage transition-all duration-300" })]
							}, link.href);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { className: "hidden md:flex" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Menu" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-col gap-4",
								children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									onClick: () => setOpen(false),
									className: "text-base text-muted-foreground hover:text-sage transition-colors",
									children: link.label
								}, link.href))
							})]
						})]
					})]
				})
			]
		})
	});
}
function Hero({ availabilityStatus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-5 py-16 lg:py-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-50 dark:opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-400 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" }), "Quote-to-job systems · plants and agencies"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Quotes and jobs shouldn't "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent font-bold",
							children: "live on WhatsApp."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground",
						children: "I build the system a plant or an agency actually runs: quote → confirm → work. Fixed price. You keep the repo. Live on an industrial converting workflow and on Trelio."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-1.5 text-xs text-foreground font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Capacity: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-semibold text-emerald-700 dark:text-emerald-400",
							children: availabilityStatus || "Taking 2 builds a month · booking the next slot"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "btn-sage-glow rounded-xl font-medium shadow-md active:scale-[0.98] transition-all px-6 py-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book a ₹40k Diagnosis →" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "rounded-xl border-border/80 hover:border-cyan-500/50 hover:text-cyan-800 dark:hover:text-cyan-300 font-medium shadow-sm active:scale-[0.98] transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://industrial-packaging-platform.vercel.app",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Live Plant Quote" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroQuoteCard, {}) })]
			})
		]
	});
}
function LiveSystems() {
	const { ref, isVisible } = useScrollAnimation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "systems",
		ref,
		className: `mx-auto max-w-5xl px-5 py-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Live Systems"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
				children: "Quote & Workflow Software in Production"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed",
				children: "Operational systems deployed on custom domains with active users and real transaction constraints."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "card-specular relative overflow-hidden p-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-card via-card to-cyan-500/10 dark:to-cyan-500/10 border-border/80 shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-cyan-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-semibold text-cyan-800 dark:text-cyan-300",
										children: "Manufacturing & Converting Plant System"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://industrial-packaging-platform.vercel.app",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-xs transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Live System ↗" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://github.com/Chanakya2006gt/Industrial-packaging-platform",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Repo" })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexPreview, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								className: "px-0 pb-2 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "font-serif text-2xl sm:text-3xl",
										children: "Apex Packaging & Converting CPQ"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "shadow-xs font-mono text-[11px] uppercase tracking-wider bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30",
										children: "Industrial CPQ"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									className: "text-sm sm:text-base text-muted-foreground leading-relaxed pt-2",
									children: "Enterprise CPQ and job estimating platform built for industrial label converters and packaging plants."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "px-0 pt-3 pb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-3 pt-2 text-xs sm:text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl border border-border/60 bg-secondary/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground block font-medium mb-1",
												children: "Floor-Ready Math"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-xs leading-relaxed",
												children: "Calculates running meters, substrate weights, and linear pricing directly from FINAT 1–8 roll unwind specs."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl border border-border/60 bg-secondary/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground block font-medium mb-1",
												children: "One-Pass Estimating"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-xs leading-relaxed",
												children: "Replaces multi-person spreadsheet chains with a quoting flow a plant clerk can finish in 90 seconds without errors."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl border border-border/60 bg-secondary/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground block font-medium mb-1",
												children: "Production Security"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-xs leading-relaxed",
												children: "Role-based sales operations, PostgreSQL RLS tenant data isolation, and instant PDF quote generation."
											})]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
								className: "px-0 pt-4 flex flex-wrap items-center justify-between border-t border-border/60 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: "Stack: React · TypeScript · PostgreSQL RLS · CPQ Math Engine"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "btn-sage-glow rounded-xl font-semibold shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://industrial-packaging-platform.vercel.app",
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Live Quoting Platform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-1.5 size-3.5" })]
									})
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "card-specular relative overflow-hidden p-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-card via-card to-indigo/10 dark:to-indigo/10 border-border/80 shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo via-purple-500 to-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-indigo animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-semibold text-indigo",
										children: "Agency Milestone & Payment System"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://trelio.in",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-full border border-indigo/30 bg-indigo/10 px-3 py-1 text-xs font-semibold text-indigo hover:bg-indigo/20 shadow-xs transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Trelio.in ↗" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrelioPreview, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								className: "px-0 pb-2 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "font-serif text-2xl sm:text-3xl",
										children: "Trelio — Stage Lock & Direct Settlement"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "shadow-xs font-mono text-[11px] uppercase tracking-wider bg-indigo/15 text-indigo border-indigo/30",
										children: "Live SaaS"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									className: "text-sm sm:text-base text-muted-foreground leading-relaxed pt-2",
									children: "Authorization-Before-Execution SaaS for freelancers and creative studios to eliminate unpaid work and runaway revisions."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "px-0 pt-3 pb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-3 pt-2 text-xs sm:text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl border border-border/60 bg-secondary/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground block font-medium mb-1",
												children: "Stage Lock Control"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-xs leading-relaxed",
												children: "Work stays locked and paused; Stage 02 never opens until the client authorizes and settles Stage 01."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl border border-border/60 bg-secondary/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground block font-medium mb-1",
												children: "Direct Bank Settlement"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-xs leading-relaxed",
												children: "Client payments flow straight into your merchant account. Zero escrow, no middleman holding your funds."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl border border-border/60 bg-secondary/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground block font-medium mb-1",
												children: "Verified Audit Trail"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-xs leading-relaxed",
												children: "448 automated test suites verifying immutable approval timestamps and multi-tenant security."
											})]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
								className: "px-0 pt-4 flex flex-wrap items-center justify-between border-t border-border/60 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: "Stack: React · Node.js · Multi-Tenant Postgres · Payment Gateway"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "btn-sage-glow rounded-xl font-semibold shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://trelio.in",
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Launch Trelio.in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-1.5 size-3.5" })]
									})
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
function TrustAndTerms() {
	const { ref, isVisible } = useScrollAnimation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		ref,
		className: `border-y border-border/60 bg-secondary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Trust & Ground Rules"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
					children: "How engagements work and what you actually own."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed",
					children: "Clear terms, fixed prices, and direct senior engineering. No hidden scope creep, no junior handoffs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "card-specular p-6 rounded-2xl border-border/70 bg-card/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "Who Builds Your System"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Nagulagam Chanakya" }), " (Warangal, India). I build operational software full-time and operate a team of 3 on Trelio. You work directly with the engineer who designs the data model, writes the code, and supports the release. No account managers or sub-contracting."]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "card-specular p-6 rounded-2xl border-border/70 bg-card/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "What You Keep & Own"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100% Code & Infrastructure Ownership." }), " You receive the complete git repository, database migrations, CI/CD pipelines, and deployment configs. Everything deploys to your own cloud infrastructure and custom domain."]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "card-specular p-6 rounded-2xl border-border/70 bg-card/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "What I Refuse To Build"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No generic brochure websites, no 50-page PowerPoint decks, and no unmanageable full-company ERPs in 15 days." }), " I build the whole of one critical, revenue-blocking operational workflow (quotes, approvals, or payments) and engineer it to absolute completion."]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "card-specular p-6 rounded-2xl border-border/70 bg-card/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 items-center justify-center rounded-lg bg-indigo/15 text-indigo border border-indigo/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "How The Money Works"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fixed prices with 100% diagnosis credit." }), " The ₹40,000 paid diagnosis is fully credited against your 15-day build. Builds are structured in milestones: work pauses if a milestone payment is pending, so neither party ever takes unbounded risk."]
							})]
						})
					]
				})
			]
		})
	});
}
function Contact() {
	const { ref, isVisible } = useScrollAnimation();
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const handleNoteSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const subject = formData.get("subject") || "";
		const body = formData.get("body") || "";
		if (!subject.trim() || !body.trim()) {
			toast.error("Please fill in both subject and message");
			return;
		}
		toast.success("Opening your email client...");
		setDialogOpen(false);
		window.location.href = `mailto:nagulagamchanakya2211@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		ref,
		className: `relative mx-auto max-w-5xl px-5 py-20 transition-all duration-700 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Contact"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
				children: "Let's build your operational workflow."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-lg text-lg text-foreground/90 font-serif italic",
				children: "\"Fixed-price quote-to-job systems for plants and agencies. Straight to engineering.\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap items-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: dialogOpen,
					onOpenChange: setDialogOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "btn-sage-glow rounded-xl px-7 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 size-4" }), "Send a direct note"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "rounded-2xl border-border/70 bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-serif text-xl",
							children: "Send a direct message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Opens your mail client directly to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "nagulagamchanakya2211@gmail.com"
							}),
							"."
						] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-4 mt-2",
							onSubmit: handleNoteSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "subject",
										className: "text-xs",
										children: "Subject"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "subject",
										name: "subject",
										placeholder: "Paid Diagnosis / Quoting Workflow...",
										required: true,
										className: "rounded-xl bg-secondary/50"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "body",
										className: "text-xs",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "body",
										name: "body",
										placeholder: "What are the details of your operational workflow?",
										required: true,
										rows: 4,
										className: "rounded-xl bg-secondary/50"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl mt-2 btn-sage-glow",
									children: "Open mail client"
								})
							]
						})]
					})]
				})
			})
		]
	});
}
function PortfolioHome({ initialData }) {
	const [data] = (0, import_react.useState)(initialData || null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background text-foreground relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:border focus:border-sage focus:rounded-xl focus:shadow-xl font-medium text-sm transition-all",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { availabilityStatus: data?.availabilityStatus }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferLadder, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSystems, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustAndTerms, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/80 bg-card/40 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-foreground",
								children: "Nagulagam Chanakya"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-0.5",
								children: "Quote-to-job systems for plants and agencies · nagulagamchanakya2211@gmail.com"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4 text-xs font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#pricing",
										className: "hover:text-foreground transition-colors",
										children: "Pricing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#systems",
										className: "hover:text-foreground transition-colors",
										children: "Live Systems"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/method",
										className: "hover:text-foreground transition-colors",
										children: "Method"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#about",
										className: "hover:text-foreground transition-colors",
										children: "Trust & Terms"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "hover:text-foreground transition-colors",
										children: "Contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/Chanakya2006gt",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-foreground transition-colors",
										children: "GitHub"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.linkedin.com/in/nagulagam-chanakya-b93514315",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-foreground transition-colors",
										children: "LinkedIn"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Nagulagam Chanakya. Fixed-price operational software."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#top",
								className: "hover:text-foreground transition-colors inline-flex items-center gap-1",
								children: ["Back to top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3" })]
							})]
						})
					]
				})
			})
		]
	});
}
function Home() {
	const data = Route$12.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioHome, { initialData: data });
}
//#endregion
export { Home as component };

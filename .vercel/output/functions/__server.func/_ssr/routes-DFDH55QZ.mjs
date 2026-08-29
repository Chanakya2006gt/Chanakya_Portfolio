import { i as __toESM } from "../_runtime.mjs";
import { c as sideProjects$1, l as skills$1, o as businesses$1, s as navLinks } from "./content.server-Dw8Lz3Ro.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as Database, B as Award, C as Layers, D as Factory, E as FileText, F as Check, H as ArrowUpRight, I as Calculator, L as Building2, M as CodeXml, N as Clock, O as ExternalLink, P as CircleCheck, R as Briefcase, T as Github, U as ArrowRight, V as ArrowUp, _ as MapPin, b as Lock, c as ShieldCheck, f as RefreshCw, g as Menu, k as Disc, l as Send, n as User, p as Printer, t as X, v as Mail, w as GraduationCap, x as Linkedin, z as Bot } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route$12, r as cn } from "./router-Ac_lMXPM.mjs";
import { a as CardFooter, i as CardDescription, n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as Button } from "./card-BdeV50cV.mjs";
import { n as Label, t as Input } from "./label-BdkQG8D0.mjs";
import { a as Textarea, i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-huupm5HF.mjs";
import { t as Badge } from "./badge-0IHuHhl_.mjs";
import { n as useScrollAnimation, t as ThemeToggle } from "./theme-toggle-D2HBRx68.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFDH55QZ.js
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
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Written workflow spec & state boundaries" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data model & database schema layout" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 deployed working screen" }), " on a live URL"] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Guaranteed fixed quote for the 15-day build" })]
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
							const sectionId = link.href.replace("#", "");
							const isActive = activeSection === sectionId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link.href,
								onClick: () => {
									if (sectionId === "projects" && typeof window !== "undefined") window.dispatchEvent(new CustomEvent("portfolio-tab-switch", { detail: { tab: "side" } }));
								},
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
									onClick: () => {
										setOpen(false);
										if (link.href === "#projects" && typeof window !== "undefined") window.dispatchEvent(new CustomEvent("portfolio-tab-switch", { detail: { tab: "side" } }));
									},
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
function ResumeModal({ trigger, open, onOpenChange, email, pdfUrl = "/api/resume", summary, education, skillsList, resume }) {
	const handlePrint = () => {
		window.print();
	};
	const fullName = resume?.fullName || "NAGULAGAM CHANAKYA";
	const jobTitle = resume?.title || "Full-Stack & Security-Conscious Software Engineer";
	const loc = resume?.location || "Warangal, Telangana, India";
	const contactEmail = resume?.email || email || "nagulagamchanakya2211@gmail.com";
	const execSummary = resume?.summary || summary || "Full-stack software engineer with hands-on experience architecting and shipping production SaaS platforms and deterministic calculation engines. Comfortable owning system design, database security, and end-to-end product implementation.";
	const eduInstitution = resume?.education?.institution || "SR University";
	const eduLocation = resume?.education?.location || "Warangal, Telangana";
	const eduDegree = resume?.education?.degree || education || "SR University — B.Tech CSE (Expected 2028)";
	const eduCoursework = resume?.education?.coursework || "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering";
	const effectiveSkills = resume?.skills || skillsList;
	const sectionsToRender = resume?.sections && resume.sections.length > 0 ? resume.sections : [{
		title: "Trelio",
		badge: "Live Product · 3-member team",
		subtitle: "Multi-Tenant SaaS for Freelancers & Agencies",
		url: "https://trelio.in",
		bullets: [
			"Authorization-Before-Execution (ABE): Built & shipped milestone locking system requiring client approval + payment before work executes, eliminating unpaid scope.",
			"Multi-Tenant Architecture: Designed full data model (users → teams → clients → projects → milestones) owning architecture & security across the stack.",
			"Contract Lifecycle & SHA-256: Milestone agreements generated, SHA-256 hashed, and bound to client e-signatures with automatic re-consent triggers on scope edits.",
			"Tamper-Evident Event Ledger: Built per-workspace hash chains for critical actions (signing, payments, scope changes) continuously verified by background workers.",
			"Encrypted Billing & Razorpay: Integrated Razorpay with per-team AES-256-GCM encrypted credentials, idempotent webhooks, and multi-tier billing engine.",
			"Security Audits & IDOR Fixes: Led security reviews identifying and fixing IDOR and payment-recording vulnerabilities before production."
		]
	}];
	const leadershipToRender = resume?.leadership && resume.leadership.length > 0 ? resume.leadership : [
		"Lead 3-member engineering team building Trelio.",
		"Own technical direction, architecture, and code/security reviews.",
		"Define scope and enforce correctness standards before merge."
	];
	const practicesToRender = resume?.practices && resume.practices.length > 0 ? resume.practices : [
		"Ongoing practice in Data Structures & Algorithms & Java (LeetCode).",
		"Systems architecture, database optimization, and high-concurrency production engineering.",
		"Focus: Fintech, distributed backend systems, & applied software security."
	];
	const renderBullet = (b) => {
		const colonIdx = b.indexOf(":");
		if (colonIdx === -1) return b;
		const prefix = b.slice(0, colonIdx);
		const rest = b.slice(colonIdx + 1);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
			className: "text-foreground",
			children: [prefix, ":"]
		}), rest] });
	};
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-h-[80vh] overflow-y-auto pr-2 space-y-6 text-foreground font-sans print:max-h-none print:overflow-visible",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold font-serif tracking-tight text-white sm:text-3xl",
						children: fullName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-sage mt-1",
						children: jobTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-sage" }),
								" ",
								loc
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${contactEmail}`,
							className: "flex items-center gap-1 hover:text-sage transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-sage" }),
								" ",
								contactEmail
							]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 self-start sm:self-auto print:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: pdfUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						download: "Nagulagam_Chanakya_Resume.pdf",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "sage",
							size: "sm",
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), "Download PDF Resume"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handlePrint,
						variant: "outline",
						size: "sm",
						className: "gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print / Save PDF"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), " Executive Summary"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground leading-relaxed",
				children: execSummary
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-xs font-semibold uppercase tracking-wider text-sage mb-3 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4" }), " Education"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border/80 bg-secondary/30 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-sm text-foreground",
							children: eduInstitution
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: eduLocation
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-sage mt-0.5",
						children: eduDegree
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: "Relevant Coursework:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: eduCoursework
						})]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-xs font-semibold uppercase tracking-wider text-sage mb-3 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4" }), " Technical Skills"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: effectiveSkills ? Object.entries(effectiveSkills).map(([cat, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border/60 bg-secondary/20 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-foreground block mb-1 uppercase tracking-wider text-[11px]",
						children: cat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "text-[11px]",
							children: s
						}, s))
					})]
				}, cat)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/60 bg-secondary/20 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground block mb-1",
							children: "Languages & Core"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								"JavaScript",
								"Java",
								"SQL",
								"TypeScript"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[11px]",
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/60 bg-secondary/20 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground block mb-1",
							children: "Frontend Stack"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								"React",
								"Tailwind CSS",
								"React Query",
								"Vite",
								"shadcn/ui"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[11px]",
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/60 bg-secondary/20 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground block mb-1",
							children: "Backend & Databases"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								"Node.js",
								"Express",
								"PostgreSQL",
								"Drizzle ORM",
								"Redis"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[11px]",
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/60 bg-secondary/20 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground block mb-1",
							children: "Security & Infrastructure"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								"REST APIs",
								"Razorpay",
								"AES-256-GCM",
								"HMAC Webhooks",
								"Clerk Auth"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[11px]",
								children: s
							}, s))
						})]
					})
				] })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-xs font-semibold uppercase tracking-wider text-sage mb-3 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }), " Featured Product & Projects"]
			}), sectionsToRender.map((sec, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border/80 bg-card p-5 space-y-3 mb-4 last:mb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-xl font-bold text-white",
							children: sec.title
						}), sec.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "sage",
							children: sec.badge
						})]
					}), sec.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sage font-medium mt-0.5",
						children: sec.subtitle
					})] }), sec.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: sec.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1 text-xs text-sage hover:underline",
						children: [
							sec.url.replace(/^https?:\/\//, ""),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-xs text-muted-foreground leading-relaxed list-disc list-inside",
					children: sec.bullets.map((b, bIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: renderBullet(b) }, bIdx))
				})]
			}, sec.title || idx))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/80 bg-secondary/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), " Leadership"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside",
						children: leadershipToRender.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, idx))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/80 bg-secondary/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }), " Practices & Interests"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside",
						children: practicesToRender.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, idx))
					})]
				})]
			})
		]
	});
	if (trigger) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-3xl sm:max-w-4xl p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "sr-only",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Nagulagam Chanakya — Resume" })
			}), content]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-3xl sm:max-w-4xl p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "sr-only",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Nagulagam Chanakya — Resume" })
			}), content]
		})
	});
}
var sections = [
	"pricing",
	"projects",
	"about",
	"skills",
	"contact"
];
function LeftRailNav({ resume }) {
	const activeSection = useActiveSection(sections);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 rounded-full border border-border/80 bg-card/80 p-3 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_12px_40px_rgba(0,0,0,0.2)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-0.5 h-6 w-px bg-border/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/Chanakya2006gt",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-muted-foreground transition-colors hover:text-sage p-1.5",
				title: "GitHub",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://www.linkedin.com/in/nagulagam-chanakya-b93514315",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-muted-foreground transition-colors hover:text-sage p-1.5",
				title: "LinkedIn",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "mailto:nagulagamchanakya2211@gmail.com",
				className: "text-muted-foreground transition-colors hover:text-sage p-1.5",
				title: "Email",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-6 w-px bg-border/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-center gap-3",
				children: sections.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${id}`,
					onClick: () => {
						if (id === "projects" && typeof window !== "undefined") window.dispatchEvent(new CustomEvent("portfolio-tab-switch", { detail: { tab: "side" } }));
					},
					className: "group relative flex items-center justify-center p-2 rounded-full hover:bg-secondary/40 transition-colors",
					title: id.charAt(0).toUpperCase() + id.slice(1),
					"aria-label": `Jump to ${id} section`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block rounded-full transition-all duration-300 ${activeSection === id ? "size-2.5 nav-dot-active bg-sage" : "size-1.5 bg-muted-foreground/40 group-hover:bg-muted-foreground"}` })
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-8 w-px bg-border/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeModal, {
				resume,
				trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "group relative text-muted-foreground transition-colors hover:text-sage p-1.5",
					title: "View Resume",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-full ml-3 hidden rounded-md bg-card border border-border/70 px-2 py-1 text-[11px] font-medium text-sage shadow-md group-hover:block whitespace-nowrap",
						children: "View Resume"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "text-muted-foreground transition-colors hover:text-foreground p-1.5",
				title: "Back to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
			})
		]
	});
}
function ParticleField() {
	const [particles, setParticles] = (0, import_react.useState)([]);
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const generated = Array.from({ length: 34 }).map((_, i) => {
			const isIndigo = i % 5 === 0;
			return {
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 3 + 1,
				opacity: isIndigo ? Math.random() * .25 + .08 : Math.random() * .4 + .1,
				duration: Math.random() * 10 + 10,
				delay: Math.random() * 5,
				colorClass: isIndigo ? "bg-indigo" : "bg-sage"
			};
		});
		setParticles(generated);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!containerRef.current || typeof IntersectionObserver === "undefined") return;
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting && !document.hidden);
		}, { threshold: .05 });
		observer.observe(containerRef.current);
		const handleVisibilityChange = () => {
			if (document.hidden) setIsVisible(false);
			else if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				setIsVisible(rect.bottom > 0 && rect.top < window.innerHeight);
			}
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			observer.disconnect();
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);
	if (particles.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
		"aria-hidden": "true",
		children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute rounded-full animate-particle-float ${p.colorClass}`,
			style: {
				left: `${p.x}%`,
				top: `${p.y}%`,
				width: `${p.size}px`,
				height: `${p.size}px`,
				opacity: p.opacity,
				animationDuration: `${p.duration}s`,
				animationDelay: `${p.delay}s`,
				animationPlayState: isVisible ? "running" : "paused"
			}
		}, p.id))
	});
}
function MarqueeTicker() {
	const items = [
		"FULL-STACK BUILDER",
		"FOUNDER @ TRELIO",
		"APEX PACKAGING & CPQ",
		"FINAT 1–8 ENGINE",
		"REACT & NODE.JS",
		"AUTHORIZATION-BEFORE-EXECUTION",
		"SUPABASE & POSTGRESQL RLS",
		"ISOMORPHIC CPQ MATH",
		"TYPESCRIPT",
		"PAYMENTS & AUDIT LOGS"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative my-12 w-full overflow-hidden border-y border-border/60 bg-secondary/30 py-3.5 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee space-x-8",
			children: [
				...items,
				...items,
				...items
			].map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center space-x-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-semibold tracking-wider text-muted-foreground/80 uppercase",
					children: text
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sage/60" })]
			}, index))
		})
	});
}
function HeroStats({ status = "Taking 2 builds a month · booking the next slot", liveCount = 2 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 flex flex-wrap items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-xs font-medium text-sage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex size-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-sage" })]
				}), status]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: liveCount
				}), " Live Systems"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: "Trelio"
				}), " Founder"]
			})
		]
	});
}
function ContactCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			{
				title: "GitHub",
				handle: "@Chanakya2006gt",
				icon: Github,
				href: "https://github.com/Chanakya2006gt",
				color: "hover:border-slate-400/60 hover:shadow-[0_8px_30px_rgba(148,163,184,0.18)] hover:-translate-y-1",
				iconBg: "bg-slate-100 dark:bg-slate-500/15 border-slate-300 dark:border-slate-500/30 text-slate-800 dark:text-slate-200",
				accentText: "group-hover:text-slate-800 dark:group-hover:text-slate-300"
			},
			{
				title: "LinkedIn",
				handle: "Nagulagam Chanakya",
				icon: Linkedin,
				href: "https://www.linkedin.com/in/nagulagam-chanakya-b93514315",
				color: "hover:border-blue-500/60 hover:shadow-[0_8px_30px_rgba(59,130,246,0.22)] hover:-translate-y-1",
				iconBg: "bg-blue-50 dark:bg-blue-500/15 border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400",
				accentText: "group-hover:text-blue-700 dark:group-hover:text-blue-400"
			},
			{
				title: "Email",
				handle: "nagulagamchanakya2211@...",
				icon: Mail,
				href: "mailto:nagulagamchanakya2211@gmail.com",
				color: "hover:border-emerald-500/60 hover:shadow-[0_8px_30px_rgba(16,185,129,0.22)] hover:-translate-y-1",
				iconBg: "bg-emerald-50 dark:bg-emerald-500/15 border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
				accentText: "group-hover:text-emerald-700 dark:group-hover:text-emerald-400"
			},
			{
				title: "Trelio SaaS",
				handle: "trelio.in",
				icon: ExternalLink,
				href: "https://trelio.in",
				color: "hover:border-cyan-500/70 hover:shadow-[0_8px_32px_rgba(6,182,212,0.25)] hover:-translate-y-1",
				iconBg: "bg-cyan-50 dark:bg-cyan-500/15 border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400",
				accentText: "group-hover:text-cyan-700 dark:group-hover:text-cyan-400",
				highlight: true
			}
		].map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				target: item.href.startsWith("http") ? "_blank" : void 0,
				rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0,
				className: "group block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: `card-specular p-5 transition-all duration-300 ${item.color} ${item.highlight ? "border-cyan-500/40 bg-gradient-to-b from-card via-card to-cyan-500/10 shadow-[inset_0_1px_0_0_rgba(6,182,212,0.25)]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex size-10 items-center justify-center rounded-xl border ${item.iconBg} group-hover:scale-110 transition-transform duration-200 shadow-sm`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: `font-medium text-foreground ${item.accentText} transition-colors`,
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-muted-foreground font-mono",
							children: item.handle
						})]
					})]
				})
			}, item.title);
		})
	});
}
function CompanionSvg({ state, className = "", size = 80 }) {
	const isSleeping = state === "sleep";
	const isWaving = state === "wave" || state === "celebrate";
	const isRunningRight = state === "run-right";
	const isRunningLeft = state === "run-left";
	const isJumping = state === "jump";
	const isExcited = state === "excited";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex items-center justify-center transition-transform duration-300 ${isSleeping ? "rotate-[-12deg]" : ""} ${isRunningRight ? "translate-x-3 rotate-6" : ""} ${isRunningLeft ? "-translate-x-3 -rotate-6" : ""} ${isJumping ? "-translate-y-8 scale-110" : ""} ${className}`,
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 120 120",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: `transition-all duration-300 ${isExcited ? "animate-bounce" : "animate-bob"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "52",
					stroke: "#8fa896",
					strokeWidth: "1.5",
					strokeDasharray: "6 4",
					className: "animate-spin-slow opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "45",
					fill: "url(#body_glow)",
					opacity: "0.15"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "30",
					r: "2.5",
					fill: "#8fa896",
					className: "animate-pulse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "80",
					r: "2",
					fill: "#8fa896",
					className: "animate-pulse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "95",
					cy: "35",
					r: "1.5",
					fill: "#8fa896"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M38 78C38 68.0589 46.0589 60 56 60H64C73.9411 60 82 68.0589 82 78V94H38V78Z",
					fill: "#1e1e22",
					stroke: "#8fa896",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 60V74",
					stroke: "#8fa896",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "44",
					r: "22",
					fill: "#161618",
					stroke: "#8fa896",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "44",
					y: "38",
					width: "13",
					height: "10",
					rx: "3",
					fill: "#0a0a0b",
					stroke: "#8fa896",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "63",
					y: "38",
					width: "13",
					height: "10",
					rx: "3",
					fill: "#0a0a0b",
					stroke: "#8fa896",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "57",
					y1: "43",
					x2: "63",
					y2: "43",
					stroke: "#8fa896",
					strokeWidth: "1.5"
				}),
				!isSleeping ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50.5",
					cy: "43",
					r: "2.5",
					fill: "#8fa896",
					className: "animate-pulse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "69.5",
					cy: "43",
					r: "2.5",
					fill: "#8fa896",
					className: "animate-pulse"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M48 43H53",
					stroke: "#8fa896",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M67 43H72",
					stroke: "#8fa896",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: isWaving || isExcited ? "M55 50Q60 55 65 50" : "M56 50H64",
					stroke: "#8fa896",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				isWaving && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "animate-wave",
					style: { transformOrigin: "72px 68px" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M72 68C77 60 80 54 84 46",
						stroke: "#8fa896",
						strokeWidth: "2.5",
						strokeLinecap: "round"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "84",
						cy: "45",
						r: "3",
						fill: "#8fa896"
					})]
				}),
				!isWaving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M48 84H72L75 90H45L48 84Z",
					fill: "#8fa896",
					opacity: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "body_glow",
					cx: "0",
					cy: "0",
					r: "1",
					gradientUnits: "userSpaceOnUse",
					gradientTransform: "translate(60 60) scale(45)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#8fa896" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "#8fa896",
						stopOpacity: "0"
					})]
				}) })
			]
		}), isSleeping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -top-2 right-1 font-mono text-xs font-bold text-sage animate-bounce",
			children: "Zzz..."
		})]
	});
}
var PREBUILT_QUESTIONS = [
	{
		label: "📋 Fixed-price builds & pricing",
		query: "What do your fixed-price builds include and how much does a paid diagnosis cost?"
	},
	{
		label: "🚀 Tell me about Trelio",
		query: "What is Trelio and how does it work?"
	},
	{
		label: "🏭 Apex Packaging CPQ",
		query: "How does Apex Packaging handle FINAT standards and quotes?"
	},
	{
		label: "💻 Tech stack & skills",
		query: "What tech stack and skills does Chanakya specialize in?"
	},
	{
		label: "📬 How to contact?",
		query: "How can I contact Chanakya to book a paid diagnosis?"
	}
];
function ChatFormattedText({ content }) {
	const lines = content.split("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-1.5",
		children: lines.map((line, idx) => {
			const trimmed = line.trim();
			if (!trimmed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1" }, idx);
			if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
				const bulletText = trimmed.slice(2);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 pl-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sage mt-0.5",
						children: "•"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1",
						children: renderInlineMarkdown(bulletText)
					})]
				}, idx);
			}
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: renderInlineMarkdown(line) }, idx);
		})
	});
}
function renderInlineMarkdown(text) {
	const parts = [];
	const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|\*.*?\*)/g;
	let lastIndex = 0;
	let match;
	while ((match = regex.exec(text)) !== null) {
		if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
		const token = match[0];
		if (token.startsWith("**") && token.endsWith("**")) parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-semibold text-foreground",
			children: token.slice(2, -2)
		}, match.index));
		else if (token.startsWith("[") && token.includes("](")) {
			const linkMatch = token.match(/\[(.*?)\]\((.*?)\)/);
			if (linkMatch) parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: linkMatch[2],
				target: linkMatch[2].startsWith("http") ? "_blank" : void 0,
				rel: "noopener noreferrer",
				className: "text-sage font-medium underline underline-offset-2 hover:text-sage/80 transition-colors",
				children: linkMatch[1]
			}, match.index));
			else parts.push(token);
		} else if (token.startsWith("*") && token.endsWith("*")) parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
			className: "italic text-muted-foreground",
			children: token.slice(1, -1)
		}, match.index));
		lastIndex = regex.lastIndex;
	}
	if (lastIndex < text.length) parts.push(text.substring(lastIndex));
	return parts.length > 0 ? parts : [text];
}
function CompanionChat({ isOpen, onClose }) {
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "welcome",
		role: "assistant",
		content: "👋 Hi! I'm Chanakya's AI Support Companion. Ask me anything about Chanakya's work, Trelio SaaS, tech stack, or how to get in touch!"
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const messagesEndRef = (0, import_react.useRef)(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		if (isOpen) scrollToBottom();
	}, [messages, isOpen]);
	if (!isOpen) return null;
	const sendMessage = async (textToSend) => {
		if (!textToSend.trim() || isLoading) return;
		const userMessage = {
			id: Date.now().toString(),
			role: "user",
			content: textToSend.trim()
		};
		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setIsLoading(true);
		try {
			const chatHistory = messages.concat(userMessage).map((m) => ({
				role: m.role,
				content: m.content
			}));
			const data = await (await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: chatHistory })
			})).json();
			const assistantMessage = {
				id: (Date.now() + 1).toString(),
				role: "assistant",
				content: data.reply || data.error || "Sorry, I couldn't understand that."
			};
			setMessages((prev) => [...prev, assistantMessage]);
		} catch (error) {
			console.error("Failed to send message:", error);
			setMessages((prev) => [...prev, {
				id: (Date.now() + 1).toString(),
				role: "assistant",
				content: "Sorry, I had trouble reaching the server. Please try again!"
			}]);
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-[520px] w-[90vw] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-rise-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border/80 bg-secondary/80 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex size-10 items-center justify-center rounded-full border border-sage/40 bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionSvg, {
							state: "idle",
							size: 32
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold text-foreground",
							children: "Chanakya's Companion"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex size-2 rounded-full bg-sage animate-pulse" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: "Customer Care & AI Assistant"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-8 rounded-full text-muted-foreground hover:text-foreground",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1.5 overflow-x-auto border-b border-border/60 bg-card/40 p-2.5 scrollbar-none",
				children: PREBUILT_QUESTIONS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => sendMessage(q.query),
					disabled: isLoading,
					className: "whitespace-nowrap rounded-full border border-sage/30 bg-sage/10 px-2.5 py-1 text-[11px] font-medium text-sage transition-all hover:bg-sage/20 hover:scale-105 disabled:opacity-50",
					children: q.label
				}, q.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-3",
				children: [
					messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-start gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`,
						children: [m.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-sage/20 border border-sage/30 text-sage mt-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground mt-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "bg-sage text-sage-foreground font-medium rounded-tr-none" : "bg-secondary/90 border border-border text-foreground rounded-tl-none space-y-1.5"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatFormattedText, { content: m.content })
						})]
					}, m.id)),
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Companion is typing..." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					sendMessage(input);
				},
				className: "border-t border-border/80 bg-secondary/50 p-2.5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask Companion anything...",
					className: "flex-1 rounded-xl border border-border/80 bg-card px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sage/60"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					variant: "sage",
					disabled: !input.trim() || isLoading,
					className: "size-8 rounded-xl shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" })
				})]
			})
		]
	});
}
function useScrollVelocity() {
	const [velocity, setVelocity] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		let lastScrollY = window.scrollY;
		let lastTime = Date.now();
		let timer;
		const handleScroll = () => {
			const now = Date.now();
			const currentScrollY = window.scrollY;
			const deltaY = currentScrollY - lastScrollY;
			const deltaTime = Math.max(now - lastTime, 1);
			const speed = Math.abs(deltaY) / deltaTime * 1e3;
			if (deltaY > 5) setDirection("down");
			else if (deltaY < -5) setDirection("up");
			setVelocity(speed);
			lastScrollY = currentScrollY;
			lastTime = now;
			clearTimeout(timer);
			timer = setTimeout(() => {
				setVelocity(0);
				setDirection("idle");
			}, 150);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timer);
		};
	}, []);
	return {
		velocity,
		direction
	};
}
function useMascotState() {
	const [state, setState] = (0, import_react.useState)("idle");
	const { velocity, direction } = useScrollVelocity();
	const [isCustomState, setIsCustomState] = (0, import_react.useState)(false);
	const triggerState = (0, import_react.useCallback)((newState, duration = 1200) => {
		setIsCustomState(true);
		setState(newState);
		setTimeout(() => {
			setIsCustomState(false);
			setState("idle");
		}, duration);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isCustomState) return;
		if (velocity > 300) {
			if (direction === "down") setState("run-right");
			else if (direction === "up") setState("run-left");
		} else setState("idle");
	}, [
		velocity,
		direction,
		isCustomState
	]);
	(0, import_react.useEffect)(() => {
		let sleepTimer;
		const resetSleep = () => {
			clearTimeout(sleepTimer);
			if (state === "sleep") setState("idle");
			sleepTimer = setTimeout(() => {
				setState("sleep");
			}, 45e3);
		};
		window.addEventListener("mousemove", resetSleep, { passive: true });
		window.addEventListener("keydown", resetSleep, { passive: true });
		window.addEventListener("scroll", resetSleep, { passive: true });
		sleepTimer = setTimeout(() => {
			setState("sleep");
		}, 45e3);
		return () => {
			clearTimeout(sleepTimer);
			window.removeEventListener("mousemove", resetSleep);
			window.removeEventListener("keydown", resetSleep);
			window.removeEventListener("scroll", resetSleep);
		};
	}, [state]);
	return {
		state,
		setState,
		triggerState
	};
}
var SPEECH_BUBBLES = [
	"I built Trelio btw 🚀",
	"Click to chat with AI Support! 💬",
	"No free work for freelancers 💸",
	"Scroll down, I'll race you!",
	"Shipping products > tutorial hell"
];
function Companion({ footerOnly = false }) {
	const { state, triggerState } = useMascotState();
	const [bubbleIndex, setBubbleIndex] = (0, import_react.useState)(0);
	const [showBubble, setShowBubble] = (0, import_react.useState)(false);
	const [isChatOpen, setIsChatOpen] = (0, import_react.useState)(false);
	const handleInteract = () => {
		setBubbleIndex((prev) => (prev + 1) % SPEECH_BUBBLES.length);
		triggerState("jump", 800);
		setIsChatOpen((prev) => !prev);
	};
	(0, import_react.useEffect)(() => {
		let timer;
		if (showBubble) timer = setTimeout(() => setShowBubble(false), 4500);
		return () => clearTimeout(timer);
	}, [showBubble]);
	(0, import_react.useEffect)(() => {
		const greetingTimer = setTimeout(() => {
			setShowBubble(true);
			triggerState("wave", 1200);
		}, 3500);
		return () => clearTimeout(greetingTimer);
	}, []);
	if (footerOnly) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative cursor-pointer",
			onClick: () => {
				setIsChatOpen(true);
				triggerState("jump", 800);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs font-medium text-sage shadow-[0_0_12px_rgba(143,168,150,0.3)] border border-sage/30",
				children: "Click to Chat! 👋"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionSvg, {
				state: "wave",
				size: 130
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionChat, {
			isOpen: isChatOpen,
			onClose: () => setIsChatOpen(false)
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionChat, {
		isOpen: isChatOpen,
		onClose: () => setIsChatOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-40 flex items-end flex-col pointer-events-auto",
		children: [showBubble && !isChatOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "status",
			"aria-live": "polite",
			className: "mb-2 max-w-xs animate-rise-in rounded-2xl border border-sage/40 bg-card/95 px-4 py-2.5 text-xs font-medium text-foreground shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md",
			children: SPEECH_BUBBLES[bubbleIndex]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: handleInteract,
			onMouseEnter: () => {
				setShowBubble(true);
				triggerState("wave", 1500);
			},
			className: "group flex items-center gap-2 rounded-full border border-border/80 bg-card/80 p-1.5 pr-4 shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-sage/60 hover:shadow-[0_0_20px_rgba(143,168,150,0.25)]",
			"aria-label": "Interactive Companion Customer Support",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionSvg, {
				state,
				size: 42
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-medium text-muted-foreground transition-colors group-hover:text-sage flex items-center gap-1.5",
				children: ["👋 Your Companion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-sage animate-ping" })]
			})]
		})]
	})] });
}
var SCATTER = [
	{
		tx: "-160px",
		ty: "-120px",
		rot: "-25deg"
	},
	{
		tx: "-80px",
		ty: "-200px",
		rot: "-10deg"
	},
	{
		tx: "-40px",
		ty: "-80px",
		rot: "5deg"
	},
	{
		tx: "20px",
		ty: "-180px",
		rot: "15deg"
	},
	{
		tx: "80px",
		ty: "-100px",
		rot: "-5deg"
	},
	{
		tx: "140px",
		ty: "-220px",
		rot: "20deg"
	},
	{
		tx: "200px",
		ty: "-80px",
		rot: "-15deg"
	},
	{
		tx: "160px",
		ty: "-160px",
		rot: "30deg"
	}
];
function IntroOverlay() {
	const [phase, setPhase] = (0, import_react.useState)("entering");
	(0, import_react.useEffect)(() => {
		const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("chanakya_intro_seen") === "1";
		const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (hasSeen || prefersReducedMotion) {
			setPhase("gone");
			return;
		}
		const t1 = setTimeout(() => setPhase("hold"), 700);
		const t2 = setTimeout(() => setPhase("pulse2"), 2200);
		const t3 = setTimeout(() => setPhase("explode"), 3500);
		const t4 = setTimeout(() => {
			setPhase("gone");
			sessionStorage.setItem("chanakya_intro_seen", "1");
		}, 4100);
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setPhase("gone");
				sessionStorage.setItem("chanakya_intro_seen", "1");
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
			clearTimeout(t4);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	const handleSkip = () => {
		setPhase("gone");
		if (typeof window !== "undefined") sessionStorage.setItem("chanakya_intro_seen", "1");
	};
	if (phase === "gone") return null;
	const letters = "CHANAKYA".split("");
	const isExploding = phase === "explode";
	const isHolding = phase === "hold" || phase === "pulse2";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0b] overflow-hidden",
		style: {
			transition: isExploding ? "opacity 600ms ease-in" : void 0,
			opacity: isExploding ? 0 : 1,
			pointerEvents: isExploding ? "none" : "auto"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleSkip,
				"aria-label": "Skip introduction",
				className: "absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-wider text-white/70 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95 shadow-sm cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Skip" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
					className: "rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-sans font-medium text-white/50 border border-white/10",
					children: "ESC"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute rounded-full bg-sage/15 blur-3xl",
				style: {
					width: "500px",
					height: "500px",
					transform: phase === "pulse2" ? "scale(1.6)" : isHolding ? "scale(1.1)" : "scale(0.8)",
					opacity: phase === "pulse2" ? .6 : isHolding ? .4 : .15,
					transition: "transform 1s ease-in-out, opacity 1s ease-in-out"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute rounded-full bg-sage/25 blur-2xl",
				style: {
					width: "280px",
					height: "280px",
					transform: isHolding || isExploding ? "scale(1.3)" : "scale(0.4)",
					opacity: phase === "pulse2" ? .9 : isHolding ? .7 : 0,
					transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 800ms ease"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex items-baseline gap-0 select-none",
				children: letters.map((letter, idx) => {
					const scatter = SCATTER[idx];
					const entryDelay = idx * 80;
					let transform = "translateY(0) scale(1) rotate(0deg)";
					let opacity = 1;
					let filter = "blur(0px)";
					if (phase === "entering") {
						transform = "translateY(-60px) scale(0.7)";
						opacity = 0;
						filter = "blur(6px)";
					} else if (isExploding) {
						transform = `translate(${scatter.tx}, ${scatter.ty}) scale(2) rotate(${scatter.rot})`;
						opacity = 0;
						filter = "blur(12px)";
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							display: "inline-block",
							transform,
							opacity,
							filter,
							transition: isExploding ? `transform 600ms cubic-bezier(0.55, 0, 1, 0.45) ${idx * 30}ms,
                     opacity 400ms ease ${idx * 20}ms,
                     filter 400ms ease` : `transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${entryDelay}ms,
                     opacity 400ms ease ${entryDelay}ms,
                     filter 400ms ease ${entryDelay}ms`
						},
						className: "font-serif text-[clamp(3rem,12vw,7rem)] font-bold leading-none tracking-tighter text-white",
						children: letter
					}, idx);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute z-10 flex items-baseline gap-0 select-none pointer-events-none",
				"aria-hidden": "true",
				style: {
					opacity: isHolding ? phase === "pulse2" ? .5 : .25 : 0,
					transition: "opacity 800ms ease",
					filter: "blur(8px)",
					color: "#8fa896"
				},
				children: "CHANAKYA".split("").map((letter, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-[clamp(3rem,12vw,7rem)] font-bold leading-none tracking-tighter",
					children: letter
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative z-10 mt-6 font-mono text-[11px] tracking-[0.3em] uppercase",
				style: {
					color: "#8fa896",
					opacity: isHolding ? 1 : 0,
					transform: isHolding ? "translateY(0)" : "translateY(8px)",
					transition: "opacity 600ms ease 200ms, transform 600ms ease 200ms"
				},
				children: "Full-Stack Builder \xA0·\xA0 Portfolio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative z-10 mt-2 font-mono text-[10px] tracking-widest",
				style: {
					color: "rgba(143,168,150,0.4)",
					opacity: phase === "pulse2" ? 1 : 0,
					transition: "opacity 500ms ease"
				},
				children: (/* @__PURE__ */ new Date()).getFullYear()
			})
		]
	});
}
function Hero({ tagline, availabilityStatus, liveCount, email, pdfUrl, summary, education, skillsList, resume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-5 py-20 lg:py-28 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-60 dark:opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-indigo-500/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in inline-flex items-center gap-2 rounded-full border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-400 shadow-sm backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" }), "Quote-to-job systems · plants and agencies"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise-in rise-in-1 mt-5 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Quotes and jobs shouldn't "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent font-bold",
							children: "live on WhatsApp."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in rise-in-2 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground",
						children: "I build the system a plant or an agency actually runs: quote → confirm → work. Fixed price. You keep the repo. Live on a converting workflow and on Trelio."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStats, {
						status: availabilityStatus,
						liveCount
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in rise-in-3 mt-10 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "group btn-sage-glow rounded-xl font-medium shadow-md active:scale-[0.98] transition-all pl-5 pr-2.5 py-2 inline-flex items-center gap-2.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#pricing",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book a Paid Diagnosis (₹40k)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-6 items-center justify-center rounded-lg bg-black/10 dark:bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-xl border-border/80 hover:border-indigo hover:text-indigo font-medium shadow-sm active:scale-[0.98] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projects",
									onClick: () => {
										if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("portfolio-tab-switch", { detail: { tab: "side" } }));
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try Live Quoting System ↓" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-xl border-border/80 hover:bg-secondary shadow-sm active:scale-[0.98] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Contact"]
								})
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rise-in rise-in-2 flex flex-col items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroQuoteCard, {})
				})]
			})
		]
	});
}
function About({ email, pdfUrl, summary, education, skillsList, resume }) {
	const { ref, isVisible } = useScrollAnimation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		ref,
		className: `border-y border-border/60 bg-secondary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "About"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
					children: "Operational software for quotes, approvals & payments."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-muted-foreground leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Most growing businesses and agencies lose revenue in the same place: the friction gap between a quote and a confirmed payment. I build the operational software that closes it." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Right now most of my time goes to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Trelio"
								}),
								": a SaaS that forces client approval before work is executed using an ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "rounded bg-secondary px-1.5 py-0.5 text-xs text-indigo font-mono",
									children: "Authorization-Before-Execution"
								}),
								" model. The problem is simple: freelancers and agencies should never work for free."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border/70 bg-card/80 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-mono text-muted-foreground uppercase tracking-wider",
											children: "Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-foreground",
											children: "Warangal, India"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border/70 bg-card/80 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-mono text-muted-foreground uppercase tracking-wider",
											children: "Engagement Model"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-foreground",
											children: "Independent Engineer"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2 rounded-xl border border-border/70 bg-card/80 p-3 sm:col-span-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-mono text-muted-foreground uppercase tracking-wider",
											children: "Core Focus"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-sage",
											children: "Quotes & Approvals"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeModal, {
									resume,
									email,
									pdfUrl,
									summary,
									education,
									skillsList,
									trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "gap-2 border-border/80 hover:border-sage hover:text-sage text-foreground rounded-xl shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), "Read Full Credentials & Background →"]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-specular rounded-2xl p-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-foreground",
									children: "How I work · Direct Seniority"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: "You work directly with me. No account managers, no junior developers, no handoffs. The engineer who scopes your system is the engineer who writes the code, designs the data model, and stays on call."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "bg-border/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-indigo shadow-[0_0_8px_#818cf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-foreground",
									children: "What I am doing now"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-2.5 space-y-1.5 text-xs text-muted-foreground leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1 rounded-full bg-indigo shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground font-medium",
											children: "Trelio SaaS:"
										}), " Scaling milestone authorization and direct settlement engine."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1 rounded-full bg-cyan-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground font-medium",
											children: "Industrial CPQ:"
										}), " Refining FINAT 1–8 automated rewind geometry math."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1 rounded-full bg-sage shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground font-medium",
											children: "Agentic Tooling:"
										}), " Designing multi-agent skill systems for rapid software delivery."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1 rounded-full bg-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground font-medium",
											children: "Availability:"
										}), " Open for contract engagements & high-impact software roles."] })]
									})
								]
							})] })
						]
					})]
				})
			]
		})
	});
}
function BusinessCard({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-8",
		children: items.map((project) => {
			const isApex = project.id === "apex";
			const gradientBorder = isApex ? "from-cyan-400 via-blue-500 to-indigo-500" : "from-emerald-400 via-teal-400 to-cyan-500";
			const cardGradient = isApex ? "to-cyan-500/10 dark:to-cyan-500/10" : "to-emerald-500/10 dark:to-emerald-500/10";
			const liveBadgeColor = isApex ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.18)]" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 shadow-[0_0_12px_rgba(52,211,153,0.18)]";
			const pingColor = isApex ? "bg-cyan-400" : "bg-emerald-400";
			const badgeColor = isApex ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30" : "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: `card-specular relative overflow-hidden p-2 rounded-2xl bg-gradient-to-br from-card via-card ${cardGradient}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${gradientBorder}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-wrap items-center justify-between gap-2",
							children: [project.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.liveUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: `inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold transition-all ${liveBadgeColor}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${pingColor} animate-ping` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }),
									project.liveUrl.replace(/^https?:\/\//, "")
								]
							}), project.githubUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.githubUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shadow-xs",
								title: "View Source Repository",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Source Code" })]
							})]
						}),
						isApex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexPreview, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrelioPreview, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							className: "px-0 pb-0 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "font-serif text-2xl sm:text-3xl",
									children: project.title
								}), project.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: `shadow-xs font-mono text-[11px] uppercase tracking-wider ${badgeColor}`,
									children: project.badge
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								className: "mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground",
								children: project.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
							className: "mt-5 flex flex-wrap gap-2 px-0",
							children: project.stack.map((tech) => {
								const isFrontend = [
									"React",
									"TypeScript",
									"Tailwind",
									"Next.js",
									"GSAP",
									"Vite"
								].includes(tech);
								const isBackend = [
									"Node.js",
									"PostgreSQL",
									"REST APIs",
									"Express",
									"Supabase RLS"
								].includes(tech);
								const isSecurity = [
									"AES-256-GCM",
									"HMAC",
									"Clerk",
									"Audit logs"
								].some((s) => tech.includes(s));
								const isProduct = [
									"Payments",
									"Multi-tenant",
									"Razorpay",
									"UPI",
									"CPQ Engine"
								].some((s) => tech.includes(s));
								let badgeStyle = "bg-secondary text-foreground border-border";
								if (isFrontend) badgeStyle = "border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300";
								else if (isBackend) badgeStyle = "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300";
								else if (isSecurity) badgeStyle = "border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300";
								else if (isProduct) badgeStyle = "border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium border shadow-xs ${badgeStyle}`,
									children: tech
								}, tech);
							})
						})
					]
				})]
			}, project.id);
		})
	});
}
function PortfolioSitePreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-secondary/80 p-3.5 border border-border/70 shadow-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/60 pb-2 mb-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[#ff5f56]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[#ffbd2e]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[#27c93f]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 font-mono text-[10px] text-muted-foreground font-semibold",
						children: "tanstack-start.config.ts"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 text-[10px] font-mono text-purple-800 dark:text-purple-300 font-semibold bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded border border-purple-300 dark:border-purple-500/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-purple-500 animate-pulse" }), "Nitro Edge"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-1.5 rounded-lg bg-card border border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground block text-[9px]",
						children: "Framework"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: "TanStack Start"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-1.5 rounded-lg bg-card border border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground block text-[9px]",
						children: "React Core"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-emerald-800 dark:text-emerald-400",
						children: "React 19 SSR"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-1.5 rounded-lg bg-card border border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground block text-[9px]",
						children: "Styling"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-cyan-800 dark:text-cyan-400",
						children: "Tailwind v4"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-1.5 rounded-lg bg-card border border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground block text-[9px]",
						children: "Deployment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-purple-800 dark:text-purple-400",
						children: "Serverless Nitro"
					})]
				})
			]
		})]
	});
}
function Projects({ businessesList, sideProjectsList, email, pdfUrl, summary, education, skillsList, resume }) {
	const { ref, isVisible } = useScrollAnimation();
	const [activeTab, setActiveTab] = (0, import_react.useState)("businesses");
	(0, import_react.useEffect)(() => {
		const handleSwitchTab = (e) => {
			if (e.detail?.tab) setActiveTab(e.detail.tab);
		};
		window.addEventListener("portfolio-tab-switch", handleSwitchTab);
		const checkHash = () => {
			if (window.location.hash === "#projects") setActiveTab("side");
		};
		checkHash();
		window.addEventListener("hashchange", checkHash);
		return () => {
			window.removeEventListener("portfolio-tab-switch", handleSwitchTab);
			window.removeEventListener("hashchange", checkHash);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		ref,
		className: `mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Work"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
				children: "Featured Projects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted-foreground",
				children: "Serious SaaS products and engineered software built under real constraints."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: setActiveTab,
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "bg-secondary/80 p-1 border border-border/70 flex-wrap h-auto rounded-xl shadow-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "businesses",
								className: "data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm rounded-lg",
								children: "Flagship Products"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "contracts",
								className: "data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm rounded-lg",
								children: "Fixed-Scope Sprints"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "side",
								className: "data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm rounded-lg",
								children: "Projects"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "businesses",
						className: "mt-6 animate-in fade-in-50 duration-200",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { items: businessesList })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "contracts",
						className: "mt-6 animate-in fade-in-50 duration-200",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "card-specular p-8 sm:p-12 text-center rounded-2xl relative overflow-hidden bg-gradient-to-br from-card via-card to-amber-500/10 dark:to-amber-500/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-md space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30 shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.2)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-foreground",
										children: "15-Day Systems Sprints"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: "Fixed-scope technical engagements to design, build, test, and harden one critical operational workflow (quotes, approvals, or payments). Every sprint includes a written specification, automated test suite, and complete repository handover."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 flex flex-wrap items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											className: "group rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-md active:scale-[0.98] transition-all pl-4 pr-2 py-1.5 inline-flex items-center gap-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#contact",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire About a Sprint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-5 items-center justify-center rounded-md bg-black/15 transition-transform duration-200 group-hover:translate-x-0.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-black" })
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeModal, {
											resume,
											email,
											pdfUrl,
											summary,
											education,
											skillsList,
											trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												className: "rounded-xl border-border/80 hover:text-amber-800 dark:hover:text-amber-400 shadow-sm active:scale-[0.98] transition-all",
												children: "View Credentials"
											})
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "side",
						className: "mt-6 animate-in fade-in-50 duration-200",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [sideProjectsList.map((project) => {
								const isApex = project.id === "apex";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: `card-specular relative overflow-hidden p-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-card via-card ${isApex ? "to-cyan-500/10 dark:to-cyan-500/10 sm:col-span-2" : "to-purple-500/10 dark:to-purple-500/10 sm:col-span-2"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${isApex ? "from-cyan-400 via-blue-500 to-indigo-500" : "from-purple-400 via-indigo-400 to-cyan-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4 flex flex-wrap items-center justify-between gap-2",
												children: [project.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: project.liveUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-all ${isApex ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.18)]" : "border-purple-500/30 bg-purple-500/10 text-purple-800 dark:text-purple-300 hover:bg-purple-500/20"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${isApex ? "bg-cyan-400" : "bg-purple-400"} animate-ping` }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }),
														project.liveUrl.replace(/^https?:\/\//, "")
													]
												}), project.githubUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: project.githubUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shadow-xs",
													title: "View Source Repository",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Source Code" })]
												})]
											}),
											isApex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexPreview, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioSitePreview, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
												className: "px-0 pb-2 pt-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
														className: "font-serif text-2xl sm:text-3xl",
														children: project.title
													}), project.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: `shadow-xs font-mono text-[11px] uppercase tracking-wider ${isApex ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30" : "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30"}`,
														children: project.badge
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
													className: "text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed",
													children: project.description
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
												className: "flex flex-wrap gap-2 px-0 pt-4",
												children: project.stack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium border shadow-2xs ${isApex ? "border-cyan-300 dark:border-cyan-500/25 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300" : "border-purple-300 dark:border-purple-500/25 bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300"}`,
													children: tech
												}, tech))
											})
										]
									})]
								}, project.id);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "relative overflow-hidden p-6 border-dashed border-border/80 bg-secondary/30 flex flex-col items-center justify-center text-center min-h-[160px] rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-base text-foreground/90",
										children: "More Projects in Progress"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1.5 max-w-sm leading-relaxed",
										children: "Active tools, packages, and open-source software will be posted here as they are published."
									})
								]
							})]
						})
					})
				]
			})
		]
	});
}
function Skills({ skillsList }) {
	const { ref, isVisible } = useScrollAnimation();
	const getDomainConfig = (category) => {
		const cat = category.toLowerCase();
		if (cat.includes("agentic") || cat.includes("ai")) return {
			dotClass: "bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]",
			badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25 dark:hover:bg-emerald-500/20",
			borderGlow: "from-emerald-400 via-teal-400 to-cyan-500"
		};
		if (cat.includes("frontend")) return {
			dotClass: "bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_#38bdf8]",
			badgeClass: "bg-cyan-50 text-cyan-800 border-cyan-300 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/25 dark:hover:bg-cyan-500/20",
			borderGlow: "from-cyan-400 via-blue-400 to-indigo-500"
		};
		if (cat.includes("backend")) return {
			dotClass: "bg-indigo dark:bg-indigo shadow-[0_0_8px_#818cf8]",
			badgeClass: "bg-indigo-50 text-indigo-900 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo/10 dark:text-indigo-300 dark:border-indigo/30 dark:hover:bg-indigo/20",
			borderGlow: "from-indigo-400 via-purple-400 to-indigo-500"
		};
		if (cat.includes("product") || cat.includes("database")) return {
			dotClass: "bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_#c084fc]",
			badgeClass: "bg-purple-50 text-purple-800 border-purple-300 hover:bg-purple-100 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/25 dark:hover:bg-purple-500/20",
			borderGlow: "from-purple-400 via-indigo-400 to-purple-500"
		};
		return {
			dotClass: "bg-amber-600 dark:bg-amber-400 shadow-[0_0_8px_#fbbf24]",
			badgeClass: "bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/25 dark:hover:bg-amber-500/20",
			borderGlow: "from-amber-400 via-yellow-400 to-amber-500"
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		ref,
		className: `border-y border-border/60 bg-secondary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Stack"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-3xl tracking-tight sm:text-4xl",
					children: "Skills & Core Technologies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "Production-tested toolchain across full-stack architecture, systems security, and reliable databases."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: Object.entries(skillsList).map(([category, items]) => {
						const config = getDomainConfig(category);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-specular relative overflow-hidden rounded-2xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${config.borderGlow}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${config.dotClass}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs font-bold tracking-wider text-foreground/90 uppercase",
											children: category
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-mono text-muted-foreground",
										children: [items.length, " skills"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: `rounded-lg px-3 py-1.5 text-xs font-medium tracking-normal transition-all hover:scale-105 cursor-default border shadow-xs ${config.badgeClass}`,
										children: skill
									}, skill))
								})
							]
						}, category);
					})
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
		const data = new FormData(e.currentTarget);
		const subject = String(data.get("subject") || "").trim();
		const body = String(data.get("body") || "").trim();
		if (!subject || !body) {
			toast.error("Please fill in both subject and message");
			return;
		}
		toast.success("Opening your email client...");
		setDialogOpen(false);
		const encSubject = encodeURIComponent(subject);
		const encBody = encodeURIComponent(body);
		window.location.href = `mailto:nagulagamchanakya2211@gmail.com?subject=${encSubject}&body=${encBody}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		ref,
		className: `relative mx-auto max-w-5xl px-5 py-24 transition-all duration-700 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-sage/10 via-indigo/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" }),
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
				children: "\"Available for 15-Day Systems Sprints and fixed-scope technical engagements.\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCards, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap items-center gap-3 justify-center sm:justify-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
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
										placeholder: "Sprint Inquiry / Systems Workflow...",
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
										placeholder: "What are the details of the project or opportunity?",
										required: true,
										rows: 4,
										className: "rounded-xl bg-secondary/50"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "rounded-xl mt-2 flex-1 btn-sage-glow",
										children: "Open mail client"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										className: "rounded-xl mt-2 border-border/80 hover:border-sage hover:text-sage",
										onClick: () => {
											navigator.clipboard.writeText("nagulagamchanakya2211@gmail.com");
											toast.success("Email address copied to clipboard!");
										},
										children: "Copy Address"
									})]
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					variant: "outline",
					className: "rounded-xl border-border/80 hover:border-sage/50 hover:bg-secondary/60 transition-all",
					onClick: () => {
						navigator.clipboard.writeText("nagulagamchanakya2211@gmail.com");
						toast.success("Copied nagulagamchanakya2211@gmail.com to clipboard!");
					},
					children: "Copy Email Address"
				})]
			})
		]
	});
}
function PortfolioHome({ initialData }) {
	const [data] = (0, import_react.useState)(initialData || null);
	const businessesList = data?.businesses || businesses$1;
	const sideProjectsList = data?.sideProjects || sideProjects$1;
	const skillsList = data?.skills || skills$1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background text-foreground relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:border focus:border-sage focus:rounded-xl focus:shadow-xl font-medium text-sm transition-all",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftRailNav, { resume: data?.resume }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Companion, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
						tagline: data?.heroTagline,
						availabilityStatus: data?.availabilityStatus,
						liveCount: businessesList.filter((p) => Boolean(p.liveUrl)).length + sideProjectsList.filter((p) => p.id === "apex").length,
						email: data?.resumeOverride?.email,
						pdfUrl: data?.resumeOverride?.resumePdfUrl,
						summary: data?.resumeOverride?.summary,
						education: data?.resumeOverride?.education,
						skillsList,
						resume: data?.resume
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferLadder, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {
						businessesList,
						sideProjectsList,
						email: data?.resumeOverride?.email,
						pdfUrl: data?.resumeOverride?.resumePdfUrl,
						summary: data?.resumeOverride?.summary,
						education: data?.resumeOverride?.education,
						skillsList,
						resume: data?.resume
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {
						email: data?.resumeOverride?.email,
						pdfUrl: data?.resumeOverride?.resumePdfUrl,
						summary: data?.resumeOverride?.summary,
						education: data?.resumeOverride?.education,
						skillsList,
						resume: data?.resume
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, { skillsList }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/80 bg-card/40 pt-16 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 text-center sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-between gap-6 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-serif text-3xl font-normal tracking-tight sm:text-4xl",
								children: [
									"LET'S BUILD SOMETHING",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-sage/20 px-2 py-0.5 text-sage border border-sage/30",
										children: "REAL"
									}),
									" ",
									"TOGETHER."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Independent Systems Engineer · Quote-to-cash, approval & payment workflows."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "flex size-12 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-sage hover:text-sage hover:scale-110",
								title: "Back to top",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Companion, { footerOnly: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-8" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Nagulagam Chanakya · Independent Systems Engineer"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-xs font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#pricing",
										className: "hover:text-foreground transition-colors",
										children: "Pricing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/method",
										className: "hover:text-foreground transition-colors",
										children: "Method"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#projects",
										className: "hover:text-foreground transition-colors",
										children: "Live Systems"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "hover:text-foreground transition-colors",
										children: "Contact"
									})
								]
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

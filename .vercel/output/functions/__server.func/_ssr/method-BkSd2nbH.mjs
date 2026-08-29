import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as ArrowRight, U as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Button } from "./card-BjQXDIgM.mjs";
import { n as ThemeToggle, t as MethodSection } from "./theme-toggle-BBv5wsbS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/method-BkSd2nbH.js
var import_jsx_runtime = require_jsx_runtime();
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Portfolio" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "btn-sage-glow rounded-xl font-semibold shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "offers",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Offers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 size-3.5" })]
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
						" Nagulagam Chanakya · Independent Systems Engineer"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "offers",
								className: "hover:text-foreground transition-colors",
								children: "Offers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "projects",
								className: "hover:text-foreground transition-colors",
								children: "Live Systems"
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

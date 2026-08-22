import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as ArrowRight, n as User, s as ShieldCheck, v as Lock } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as Input, i as CardDescription, l as Label, n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as Button } from "./card-C0GtL7dl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CULFoS6D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLoginPage() {
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		if (!username || !password) {
			toast.error("Please enter both username and password");
			return;
		}
		setIsLoading(true);
		try {
			const res = await fetch("/api/admin/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username,
					password
				})
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.success("Welcome back, Chanakya!");
				navigate({ to: "/admin" });
			} else toast.error(data.error || "Invalid login credentials");
		} catch (error) {
			console.error("Login error:", error);
			toast.error("An error occurred during login. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute size-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md border-border/80 bg-card/90 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-rise-in relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "text-center pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "font-serif text-3xl font-bold tracking-tight text-white",
						children: "Admin Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
						className: "text-xs text-muted-foreground mt-1",
						children: [
							"Authorized access only. Enter your credentials set in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-sage font-mono",
								children: ".env"
							}),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "username",
								className: "text-xs font-medium text-foreground",
								children: "Username"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "username",
									type: "text",
									placeholder: "Enter admin username",
									value: username,
									onChange: (e) => setUsername(e.target.value),
									className: "pl-9 bg-secondary/50 border-border/80 focus:border-sage/60",
									required: true
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								className: "text-xs font-medium text-foreground",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									type: "password",
									placeholder: "Enter admin password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className: "pl-9 bg-secondary/50 border-border/80 focus:border-sage/60",
									required: true
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "sage",
							className: "w-full mt-2 font-medium",
							disabled: isLoading,
							children: isLoading ? "Verifying..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-center gap-2",
								children: ["Authenticate ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 text-center text-xs text-muted-foreground border-t border-border/60 pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "hover:text-sage transition-colors",
						children: "← Return to Main Portfolio"
					})
				})]
			})]
		})]
	});
}
//#endregion
export { AdminLoginPage as component };

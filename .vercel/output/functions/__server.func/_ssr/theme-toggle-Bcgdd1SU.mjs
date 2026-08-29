import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as Moon, o as Sun } from "../_libs/lucide-react.mjs";
import { t as Button } from "./card-C-9En5gP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-Bcgdd1SU.js
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
export { useScrollAnimation as n, ThemeToggle as t };

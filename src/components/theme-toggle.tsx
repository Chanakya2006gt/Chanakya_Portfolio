import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  className?: string;
  variant?: "ghost" | "outline" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export function ThemeToggle({
  className = "",
  variant = "ghost",
  size = "icon",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // 1. Initial check from DOM / localStorage / system preference
    const isLight = document.documentElement.classList.contains("light");
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    const initialTheme: "dark" | "light" = storedTheme || (isLight || systemPrefersLight ? "light" : "dark");
    setTheme(initialTheme);

    // 2. Listen to system preference changes if user hasn't explicitly set a preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
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

    // 3. Listen to custom theme-change events across instances on the same page
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"dark" | "light">;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      } else {
        const currentIsLight = document.documentElement.classList.contains("light");
        setTheme(currentIsLight ? "light" : "dark");
      }
    };

    // 4. Listen to storage changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
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

    // Broadcast to all other ThemeToggle instances on the page
    window.dispatchEvent(new CustomEvent("theme-change", { detail: nextTheme }));
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`rounded-full transition-transform active:scale-95 ${className}`}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-sage transition-all hover:rotate-45" />
      ) : (
        <Moon className="size-4 text-sage transition-all hover:-rotate-12" />
      )}
    </Button>
  );
}

import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Nagulagam Chanakya — Full-Stack Developer & SaaS Founder";
const APP_DESC = "Official portfolio of Nagulagam Chanakya — Full-Stack Developer & Founder of Trelio. Specializing in React, Node.js, TypeScript, PostgreSQL, and applied software security.";

const JSON_LD = {
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
  "sameAs": [
    "https://github.com/Chanakya2006gt",
    "https://www.linkedin.com/in/nagulagam-chanakya-b93514315"
  ],
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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#0a0a0b" },
      { name: "description", content: APP_DESC },
      { name: "keywords", content: "Nagulagam Chanakya, Chanakya, Full-Stack Developer, Trelio, React, Node.js, TypeScript, PostgreSQL, Portfolio, Software Engineer, Warangal, SR University" },
      { name: "author", content: "Nagulagam Chanakya" },
      { name: "robots", content: "index, follow" },
      
      // Open Graph (LinkedIn, Discord, WhatsApp, Facebook)
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: APP_DESC },
      { property: "og:image", content: "/og.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nagulagam Chanakya Portfolio" },

      // Twitter / X Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: APP_NAME },
      { name: "twitter:description", content: APP_DESC },
      { name: "twitter:image", content: "/og.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
      },
      {
        children: `(function(){try{var stored=localStorage.getItem("theme");if(stored==="light"||(!stored&&window.matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}}catch(e){}})();`,
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="dark antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <TooltipProvider delayDuration={200}>
            <Outlet />
            <Toaster position="bottom-right" theme="dark" />
          </TooltipProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Nagulagam Chanakya — Quote-to-Job Systems for Plants & Agencies";
const APP_DESC = "I build the systems plants and agencies actually run: quote → confirm → work. Fixed price. You keep the repository. Live on an industrial converting workflow and on Trelio.";
const SITE_URL = "https://chanakya-portfolio-orcin.vercel.app";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Nagulagam Chanakya",
      "url": SITE_URL,
      "jobTitle": "Quote-to-Job Systems Engineer & Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Trelio",
        "url": "https://trelio.in"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Quote-to-Job Systems Engineer",
        "skills": "Quote-to-Job Systems, Industrial CPQ Engines, FINAT Standards, Authorization-Before-Execution, Stage Locks, Payment Gateways, Multi-tenant Architecture, React, Node.js, PostgreSQL"
      },
      "sameAs": [
        "https://github.com/Chanakya2006gt",
        "https://www.linkedin.com/in/nagulagam-chanakya-b93514315"
      ],
      "knowsAbout": [
        "Quote-to-Job Systems",
        "Industrial CPQ Engines",
        "Converting Plant Workflows",
        "FINAT 1-8 Rewind Standards",
        "Authorization-Before-Execution",
        "Payment Settlement Architecture",
        "PostgreSQL Data Modeling",
        "React",
        "Node.js",
        "TypeScript"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://trelio.in/#app",
      "name": "Trelio",
      "url": "https://trelio.in",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Authorization-before-execution SaaS ensuring verified stage locks, client milestone authorization, and direct settlement.",
      "author": {
        "@id": `${SITE_URL}/#person`
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://industrial-packaging-platform.vercel.app/#app",
      "name": "Apex Packaging & Converting",
      "url": "https://industrial-packaging-platform.vercel.app",
      "codeRepository": "https://github.com/Chanakya2006gt/Industrial-packaging-platform",
      "applicationCategory": "ManufacturingApplication",
      "operatingSystem": "Web",
      "description": "B2B CPQ and sales estimating platform for industrial packaging converters with FINAT 1–8 rewind standards engine.",
      "author": {
        "@id": `${SITE_URL}/#person`
      }
    }
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
      { name: "keywords", content: "Quote-to-job systems, industrial CPQ platform, packaging converting quoting, FINAT unwind standards, milestone authorization SaaS, Trelio, Nagulagam Chanakya, fixed-price software build, plants and agencies" },
      { name: "author", content: "Nagulagam Chanakya" },
      { name: "robots", content: "index, follow" },
      
      // Open Graph (LinkedIn, Discord, WhatsApp, Facebook)
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: APP_DESC },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nagulagam Chanakya — Quote-to-Job Systems" },

      // Twitter / X Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: APP_NAME },
      { name: "twitter:description", content: APP_DESC },
      { name: "twitter:image", content: `${SITE_URL}/og.jpg` },
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
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
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
      <body className="bg-noise min-h-screen">
        <TooltipProvider delayDuration={200}>
          <Outlet />
          <Toaster position="bottom-right" theme="dark" />
        </TooltipProvider>
        <Scripts />
      </body>
    </html>
  ),
});

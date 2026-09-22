import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { faqs } from "@/data/faqs";
import { SITE_URL, STUDIO_NAME, CONTACT_EMAIL } from "@/data/studio";
import appCss from "../styles.css?url";

const APP_NAME = "CK Builds — Bespoke Software for Operations & Quoting";
const APP_DESC = "CK Builds designs and engineers custom operational software, CPQ platforms, and workflow systems for growing businesses. Talk directly to the people who build it.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#studio`,
      "name": STUDIO_NAME,
      "url": SITE_URL,
      "description": APP_DESC,
      "areaServed": "Worldwide",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": "+91-7674040571",
        "email": CONTACT_EMAIL,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://trelio.in/#app",
      "name": "Trelio",
      "url": "https://trelio.in",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Client portal and milestone payment authorization SaaS ensuring verified stage locks and direct settlement.",
      "author": {
        "@id": `${SITE_URL}/#studio`
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
        "@id": `${SITE_URL}/#studio`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
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
      { name: "keywords", content: "CK Builds, Quote-to-job systems, industrial CPQ platform, packaging converting quoting, FINAT unwind standards, milestone authorization SaaS, Trelio, operational software" },
      { name: "author", content: "CK Builds" },
      { name: "robots", content: "index, follow" },
      
      // Open Graph (LinkedIn, Discord, WhatsApp, Facebook)
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: APP_DESC },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: STUDIO_NAME },

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

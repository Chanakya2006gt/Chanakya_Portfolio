import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// `0.0.0.0:8080` is the dev server contract — don't change host/port.
export default defineConfig(({ command, isPreview }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" || isPreview
      ? [
          nitro({
            preset: "vercel",
            routeRules: {
              "/**": {
                headers: {
                  "Content-Security-Policy":
                    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
                  "X-Content-Type-Options": "nosniff",
                  "Referrer-Policy": "strict-origin-when-cross-origin",
                  "X-Frame-Options": "DENY",
                  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
                  "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
                },
              },
            },
          }),
        ]
      : []),
    viteReact(),
  ],
}));

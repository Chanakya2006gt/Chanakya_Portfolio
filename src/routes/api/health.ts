import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";

/**
 * GET /api/health
 *
 * Lightweight health check endpoint inspired by Trelio's /healthz pattern.
 * Reports whether required env vars are present so misconfigurations surface
 * immediately — useful for uptime monitors (UptimeRobot, BetterStack, etc.)
 * and for debugging Vercel deployments.
 *
 * Always returns HTTP 200. Monitor on the JSON `status` field:
 *   "ok"       — all required env vars present
 *   "degraded" — at least one required env var is missing
 */
export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async () => {
        const required = {
          ADMIN_USERNAME: getEnvVar("ADMIN_USERNAME"),
          ADMIN_PASSWORD: getEnvVar("ADMIN_PASSWORD"),
          ADMIN_SESSION_SECRET: getEnvVar("ADMIN_SESSION_SECRET"),
          OPENAI_API_KEY: getEnvVar("OPENAI_API_KEY"),
        };

        const checks: Record<string, "ok" | "missing"> = Object.fromEntries(
          Object.entries(required).map(([key, val]) => [
            key,
            val && val.trim() && !val.includes("placeholder") ? "ok" : "missing",
          ])
        ) as Record<string, "ok" | "missing">;

        const missing = Object.entries(checks)
          .filter(([, v]) => v === "missing")
          .map(([k]) => k);

        const status: "ok" | "degraded" = missing.length === 0 ? "ok" : "degraded";

        return new Response(
          JSON.stringify({
            service: "chanakya-portfolio",
            status,
            timestamp: new Date().toISOString(),
            checks,
            ...(missing.length > 0 && { missing }),
          }),
          {
            // Always 200 — a non-200 would be a server crash, not a config issue.
            // Monitors should alert on `status !== "ok"`, not on HTTP status.
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      },
    },
  },
});

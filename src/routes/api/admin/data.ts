import { createFileRoute } from "@tanstack/react-router";
import { getPortfolioData } from "@/data/store";
import { savePortfolioData } from "@/data/store.server";
import { getAdminSessionCookie, verifySignedSessionToken } from "@/lib/auth-session";
import { assertEnvGuards } from "@/lib/boot-guards";

export const Route = createFileRoute("/api/admin/data")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const sessionToken = getAdminSessionCookie(request);
        if (!verifySignedSessionToken(sessionToken || undefined)) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }
        const data = getPortfolioData();
        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
        });
      },
      POST: async ({ request }) => {
        assertEnvGuards();
        // Verify cryptographically signed admin session cookie
        const sessionToken = getAdminSessionCookie(request);
        const isAuthenticated = verifySignedSessionToken(sessionToken || undefined);

        if (!isAuthenticated) {
          return new Response(JSON.stringify({ error: "Unauthorized: Invalid or expired admin session" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const newData = await request.json();
          const saved = savePortfolioData(newData);

          if (saved) {
            return new Response(JSON.stringify({ success: true, data: newData }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(
            JSON.stringify({ error: "Failed to save portfolio data" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          return new Response(
            JSON.stringify({ error: "Invalid payload" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

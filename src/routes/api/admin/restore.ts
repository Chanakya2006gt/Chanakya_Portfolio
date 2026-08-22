import { createFileRoute } from "@tanstack/react-router";
import { getAdminSessionCookie, verifySignedSessionToken } from "@/lib/auth-session";
import { restoreBackup } from "@/data/content.server";

export const Route = createFileRoute("/api/admin/restore")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Auth: same signed admin cookie as /api/admin/data
        const sessionToken = getAdminSessionCookie(request);
        if (!verifySignedSessionToken(sessionToken || undefined)) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const restored = await restoreBackup();
          if (restored) {
            return new Response(JSON.stringify({ success: true }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(
            JSON.stringify({ error: "We couldn't restore the previous version." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        } catch (err) {
          console.error("[restore] Failed:", err);
          return new Response(
            JSON.stringify({ error: "We couldn't restore the previous version." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

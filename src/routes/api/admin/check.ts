import { createFileRoute } from "@tanstack/react-router";
import { getAdminSessionCookie, verifySignedSessionToken } from "@/lib/auth-session";
import { assertEnvGuards } from "@/lib/boot-guards";

export const Route = createFileRoute("/api/admin/check")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        assertEnvGuards();
        const sessionToken = getAdminSessionCookie(request);
        const authenticated = verifySignedSessionToken(sessionToken || undefined);

        return new Response(JSON.stringify({ authenticated }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});

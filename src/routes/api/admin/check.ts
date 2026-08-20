import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/admin/check")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const cookieHeader = request.headers.get("cookie") || "";
        const cookies = Object.fromEntries(
          cookieHeader.split("; ").map((c) => {
            const [k, ...v] = c.split("=");
            return [k, v.join("=")];
          })
        );

        const session = cookies.admin_session;
        const authenticated = Boolean(session && session.length > 0);

        return new Response(JSON.stringify({ authenticated }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});

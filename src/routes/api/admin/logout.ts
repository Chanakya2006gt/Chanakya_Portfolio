import { createFileRoute } from "@tanstack/react-router";
import { createClearCookieHeader } from "@/lib/auth-session";

export const Route = createFileRoute("/api/admin/logout")({
  server: {
    handlers: {
      POST: async () => {
        return new Response(JSON.stringify({ success: true }), {
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": createClearCookieHeader(),
          },
        });
      },
    },
  },
});

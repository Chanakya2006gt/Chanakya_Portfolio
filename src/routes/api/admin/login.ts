import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";

export const Route = createFileRoute("/api/admin/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const username = String(body.username || "").trim();
          const password = String(body.password || "").trim();

          const envUser = getEnvVar("ADMIN_USERNAME", "admin");
          const envPass = getEnvVar("ADMIN_PASSWORD", "admin123");

          if (username === envUser && password === envPass) {
            // Set session token in HTTP cookie
            const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");

            return new Response(JSON.stringify({ success: true }), {
              headers: {
                "Content-Type": "application/json",
                "Set-Cookie": `admin_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
              },
            });
          }

          console.warn(
            `[Admin Auth Failed] Entered username: "${username}". Expected username from .env: "${envUser}". Check .env file values.`
          );

          return new Response(
            JSON.stringify({ error: "Invalid username or password" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          return new Response(
            JSON.stringify({ error: "Failed to process login" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

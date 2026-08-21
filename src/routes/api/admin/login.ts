import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { createSignedSessionToken, createSetCookieHeader } from "@/lib/auth-session";
import { assertEnvGuards } from "@/lib/boot-guards";

export const Route = createFileRoute("/api/admin/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        assertEnvGuards();
        try {
          const body = await request.json();
          const username = String(body.username || "").trim();
          const password = String(body.password || "").trim();

          const envUser = getEnvVar("ADMIN_USERNAME");
          const envPass = getEnvVar("ADMIN_PASSWORD");

          // Fail-closed: Both credentials must be explicitly configured in .env
          if (!envUser || !envPass) {
            console.error("[Admin Auth] ADMIN_USERNAME or ADMIN_PASSWORD is not configured in .env");
            return new Response(
              JSON.stringify({ error: "Server authentication not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in .env." }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          if (username === envUser && password === envPass) {
            // Generate cryptographically signed HMAC session token
            const token = createSignedSessionToken(username);
            const isProd = process.env.NODE_ENV === "production";
            const setCookie = createSetCookieHeader(token, isProd);

            return new Response(JSON.stringify({ success: true }), {
              headers: {
                "Content-Type": "application/json",
                "Set-Cookie": setCookie,
              },
            });
          }

          // Do NOT log the expected username to prevent information disclosure
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

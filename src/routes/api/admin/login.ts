import crypto from "node:crypto";
import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { createSignedSessionToken, createSetCookieHeader } from "@/lib/auth-session";
import { assertEnvGuards } from "@/lib/boot-guards";

// Simple in-memory login rate limiter: 5 attempts per 5 minutes per IP
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record) return false;

  // Window: 5 minutes (300,000ms)
  if (now - record.firstAttempt > 300000) {
    loginAttempts.delete(ip);
    return false;
  }

  return record.count >= 5;
}

function recordAttempt(ip: string, success: boolean): void {
  if (success) {
    loginAttempts.delete(ip);
    return;
  }

  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record || now - record.firstAttempt > 300000) {
    loginAttempts.set(ip, { count: 1, firstAttempt: now });
  } else {
    record.count += 1;
  }
}

/**
 * Constant-time string comparison to prevent timing attacks
 */
function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Constant time dummy comparison
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export const Route = createFileRoute("/api/admin/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        assertEnvGuards();

        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
        if (isRateLimited(ip)) {
          return new Response(
            JSON.stringify({ error: "Too many failed attempts. Please wait 5 minutes." }),
            { status: 429, headers: { "Content-Type": "application/json" } }
          );
        }

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

          const userMatch = safeCompare(username, envUser);
          const passMatch = safeCompare(password, envPass);

          if (userMatch && passMatch) {
            recordAttempt(ip, true);

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

          recordAttempt(ip, false);

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

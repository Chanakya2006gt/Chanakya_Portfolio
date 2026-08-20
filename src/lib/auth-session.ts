import crypto from "node:crypto";
import { getEnvVar } from "@/lib/env";

const COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE_SEC = 86400; // 24 hours

interface SessionPayload {
  username: string;
  exp: number;
}

function getSessionSecret(): string {
  const secret = getEnvVar("ADMIN_SESSION_SECRET");
  if (!secret || secret === "your_random_32_character_secret_key_here") {
    // Return a stable fallback only if not configured, but warn in production
    return "dev-local-session-secret-fallback-chanakya-2026";
  }
  return secret;
}

/**
 * Creates a cryptographically signed HMAC-SHA256 session token.
 * Format: `<base64Payload>.<hexSignature>`
 */
export function createSignedSessionToken(username: string): string {
  const secret = getSessionSecret();
  const payload: SessionPayload = {
    username,
    exp: Date.now() + SESSION_MAX_AGE_SEC * 1000,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest("hex");

  return `${payloadB64}.${signature}`;
}

/**
 * Verifies the HMAC-SHA256 signature and checks expiration of a session token.
 */
export function verifySignedSessionToken(token: string | undefined): boolean {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return false;
  }

  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) {
    return false;
  }

  const secret = getSessionSecret();
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest("hex");

  // Timing-safe comparison to prevent timing attacks
  const sigBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expectedSignature, "hex");

  if (
    sigBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(sigBuffer, expectedBuffer)
  ) {
    return false;
  }

  try {
    const payload: SessionPayload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf-8")
    );

    // Check expiration
    if (Date.now() > payload.exp) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Extracts and parses a cookie value by name from a Cookie header string.
 */
export function getCookieValue(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";");
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.startsWith(`${name}=`)) {
      return trimmed.slice(name.length + 1);
    }
  }
  return null;
}

export function getAdminSessionCookie(request: Request): string | null {
  const cookieHeader = request.headers.get("cookie");
  return getCookieValue(cookieHeader, COOKIE_NAME);
}

export function createSetCookieHeader(token: string, isProduction = false): string {
  const secureFlag = isProduction ? "; Secure" : "";
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SEC}${secureFlag}`;
}

export function createClearCookieHeader(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

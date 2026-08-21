/**
 * src/lib/boot-guards.ts
 *
 * Inspired by Trelio's config/bootGuards.js.
 *
 * Validates required environment variables at server startup.
 * In production: hard-fails with a clear error message listing every missing var.
 * In development: warns to console but continues (so you can run locally with a
 * partial .env without the server refusing to start).
 *
 * Call this once at the top of your server entry point (or in a Nitro plugin).
 * Because TanStack Start / Nitro doesn't expose a "startup hook" in the same way
 * Express does, we call this lazily on the first real request via
 * src/lib/server-init.ts — which is fine because Vercel cold-starts per-request.
 */

import { getEnvVar } from "@/lib/env";

interface EnvSpec {
  key: string;
  description: string;
  /** If true, a missing value hard-fails in production */
  required: boolean;
}

const ENV_SPECS: EnvSpec[] = [
  {
    key: "ADMIN_USERNAME",
    description: "Admin panel username",
    required: true,
  },
  {
    key: "ADMIN_PASSWORD",
    description: "Admin panel password",
    required: true,
  },
  {
    key: "ADMIN_SESSION_SECRET",
    description: "HMAC-SHA256 session signing secret (32+ chars)",
    required: true,
  },
  {
    key: "OPENAI_API_KEY",
    description: "OpenAI API key for the AI companion chatbot",
    required: false, // missing = chatbot uses fallback replies, not a crash
  },
  {
    key: "OPENAI_MODEL",
    description: "OpenAI model name (default: gpt-4o)",
    required: false,
  },
];

const PLACEHOLDER_VALUES = new Set([
  "your_admin_username_here",
  "your_strong_password_here",
  "your_random_32_character_secret_key_here",
  "your_openai_api_key_here",
  "placeholder",
  "",
]);

function isPlaceholder(value: string): boolean {
  return PLACEHOLDER_VALUES.has(value.trim().toLowerCase()) || !value.trim();
}

let checked = false;

/**
 * Run env validation. Idempotent — only runs once per process.
 */
export function assertEnvGuards(): void {
  if (checked) return;
  checked = true;

  const isProd = process.env.NODE_ENV === "production" || !!process.env.VERCEL;

  const missing: string[] = [];
  const placeholder: string[] = [];
  const warnings: string[] = [];

  for (const spec of ENV_SPECS) {
    const value = getEnvVar(spec.key);

    if (!value || isPlaceholder(value)) {
      if (spec.required) {
        missing.push(`  ✗ ${spec.key} — ${spec.description}`);
      } else {
        warnings.push(`  ⚠ ${spec.key} — ${spec.description} (optional — feature may be limited)`);
      }
    } else if (
      spec.key === "ADMIN_SESSION_SECRET" &&
      value.trim().length < 32
    ) {
      placeholder.push(
        `  ✗ ${spec.key} — must be at least 32 characters (got ${value.trim().length})`
      );
    }
  }

  if (warnings.length > 0) {
    console.warn(
      `[boot-guard] Optional env vars not set:\n${warnings.join("\n")}\n` +
        "  Some features (e.g. AI chatbot) will use fallback behaviour."
    );
  }

  const errors = [...missing, ...placeholder];

  if (errors.length > 0) {
    const message =
      `[boot-guard] Required environment variables are missing or use placeholder values:\n` +
      `${errors.join("\n")}\n\n` +
      `  Set these in your .env file (local dev) or Vercel project settings (production).\n` +
      `  See .env.example for the full list and format.`;

    if (isProd) {
      // Hard-fail in production — a misconfigured server is worse than a stopped one.
      // This surfaces immediately rather than letting admins get silent 401s.
      throw new Error(message);
    } else {
      // In dev, warn but continue — you might be running locally with partial config.
      console.warn(message);
    }
  } else {
    console.log("[boot-guard] All required env vars present ✓");
  }
}

import { createFileRoute } from "@tanstack/react-router";
import { put } from "@vercel/blob";
import { getAdminSessionCookie, verifySignedSessionToken } from "@/lib/auth-session";

export const Route = createFileRoute("/api/admin/resume")({
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

        // Only accept PDFs
        const contentType = request.headers.get("content-type") || "";
        if (!contentType.includes("application/pdf")) {
          return new Response(JSON.stringify({ error: "Please choose a PDF file." }), {
            status: 415,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Read bytes + enforce size (Vercel server-upload body cap ~4.5MB)
        const bytes = await request.arrayBuffer();
        if (bytes.byteLength === 0) {
          return new Response(JSON.stringify({ error: "Empty file." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (bytes.byteLength > 4_000_000) {
          return new Response(JSON.stringify({ error: "That PDF is over 4 MB. Please upload a smaller file." }), {
            status: 413,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Overwrite a FIXED path so the public URL is stable (no DB needed).
        // cacheControlMaxAge: 60 is REQUIRED — the default is one month, which
        // would keep serving the old PDF for weeks after an upload.
        try {
          const blob = await put("resume.pdf", bytes, {
            access: "public",
            addRandomSuffix: false,
            allowOverwrite: true,
            contentType: "application/pdf",
            cacheControlMaxAge: 60,
          });
          return new Response(JSON.stringify({ success: true, url: blob.url }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[resume upload] Blob put failed:", err);
          return new Response(
            JSON.stringify({
              error: "We couldn't save the résumé just now. Please try again in a moment.",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { head } from "@vercel/blob";

export const Route = createFileRoute("/api/resume")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const blobDetails = await head("resume.pdf");
          if (blobDetails && blobDetails.url) {
            return Response.redirect(blobDetails.url, 307);
          }
        } catch (err) {
          console.error("[api/resume] Blob head failed:", err);
        }

        return new Response("Résumé PDF not found. Please upload via the admin panel.", {
          status: 404,
          headers: { "Content-Type": "text/plain" },
        });
      },
    },
  },
});

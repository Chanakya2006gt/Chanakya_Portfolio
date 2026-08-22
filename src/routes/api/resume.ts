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

        // Visitor-facing: this opens in a new tab, so return a styled page,
        // never an internal instruction.
        const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Résumé unavailable</title>
<style>
  body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;
    justify-content:center;gap:14px;background:#0c0e0d;color:#f2f4f1;text-align:center;padding:24px;
    font-family:Figtree,"Segoe UI",system-ui,sans-serif}
  h1{font-size:20px;margin:0;font-weight:700}
  p{margin:0;max-width:26rem;font-size:14px;line-height:1.6;color:#9aa39c}
  a{color:#a3c2ab;font-size:14px;text-decoration:underline;text-underline-offset:4px}
</style></head><body>
  <h1>The résumé isn&rsquo;t available right now</h1>
  <p>Sorry about that &mdash; it looks like the file is being updated. Please check
     back in a moment, or email me and I&rsquo;ll send it over straight away.</p>
  <a href="mailto:nagulagamchanakya2211@gmail.com?subject=Résumé%20request">Email me for a copy</a>
  <a href="/">Back to the portfolio</a>
</body></html>`;
        return new Response(html, {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { getPortfolioData, savePortfolioData } from "@/data/store";

export const Route = createFileRoute("/api/admin/data")({
  server: {
    handlers: {
      GET: async () => {
        const data = getPortfolioData();
        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
        });
      },
      POST: async ({ request }) => {
        // Verify admin session cookie
        const cookieHeader = request.headers.get("cookie") || "";
        const hasSession = cookieHeader.includes("admin_session=");

        if (!hasSession) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const newData = await request.json();
          const saved = savePortfolioData(newData);

          if (saved) {
            return new Response(JSON.stringify({ success: true, data: newData }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(
            JSON.stringify({ error: "Failed to save portfolio data" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          return new Response(
            JSON.stringify({ error: "Invalid payload" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

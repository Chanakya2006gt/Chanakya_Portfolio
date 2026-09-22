import { createFileRoute } from "@tanstack/react-router";

interface ContactPayload {
  name: string;
  emailOrPhone: string;
  workflowDescription: string;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as Partial<ContactPayload>;
          const name = body.name?.trim();
          const emailOrPhone = body.emailOrPhone?.trim();
          const workflowDescription = body.workflowDescription?.trim();

          if (!name || !emailOrPhone || !workflowDescription) {
            return new Response(
              JSON.stringify({
                success: false,
                error: "Please provide your name, contact information, and workflow description.",
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // Structured log for intake tracking (no secret leaks)
          const intakeId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
          console.info("[CK Builds Lead Intake]", {
            intakeId,
            timestamp: new Date().toISOString(),
            name,
            emailOrPhone,
            workflowLength: workflowDescription.length,
          });

          return new Response(
            JSON.stringify({
              success: true,
              intakeId,
              message:
                "Thank you. We have received your inquiry and will review your workflow to get back to you within 24 hours.",
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch {
          return new Response(
            JSON.stringify({
              success: false,
              error: "Invalid request payload. Please try again or reach out on WhatsApp.",
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});

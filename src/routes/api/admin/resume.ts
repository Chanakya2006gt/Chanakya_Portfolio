import { createFileRoute } from "@tanstack/react-router";
import { put } from "@vercel/blob";
import { getAdminSessionCookie, verifySignedSessionToken } from "@/lib/auth-session";
import { getEnvVar } from "@/lib/env";
import { resumeContentSchema } from "@/data/resume-schema";
import { readContent, writeContent } from "@/data/content.server";

/** Pull a JSON object out of a model reply that may be fenced or padded with prose. */
function extractJsonObject(raw: string): unknown {
  const cleaned = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch {
    return null;
  }
}

const RESUME_INSTRUCTION = `You are extracting structured data from a résumé PDF.

Return ONLY a raw JSON object. No markdown, no code fences, no commentary.

Use exactly this shape (omit any key you cannot find in the document — do NOT guess):
{
  "fullName": string,
  "title": string,
  "location": string,
  "email": string,
  "summary": string,
  "education": { "institution": string, "location": string, "degree": string, "coursework": string },
  "sections": [ { "title": string, "badge": string, "subtitle": string, "url": string, "bullets": [string] } ],
  "leadership": [string],
  "practices": [string],
  "skills": { "<Category>": [string] }
}

Rules:
- Copy wording from the document. Do not invent, embellish, or add achievements that are not written there.
- "sections" is for jobs/projects. Each bullet should start with a short bold-able label followed by a colon, e.g. "Multi-Tenant Architecture: Designed ...". Preserve the document's own phrasing.
- If the document is unreadable or is not a résumé, return {}.`;

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
            headers: { "Content-Type": "application/pdf" },
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
        let blobUrl = "";
        try {
          const blob = await put("resume.pdf", bytes, {
            access: "public",
            addRandomSuffix: false,
            allowOverwrite: true,
            contentType: "application/pdf",
            cacheControlMaxAge: 60,
          });
          blobUrl = blob.url;
        } catch (err) {
          console.error("[resume upload] Blob put failed:", err);
          return new Response(
            JSON.stringify({
              error: "We couldn't save the résumé just now. Please try again in a moment.",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }

        // AI Step: extract details from uploaded PDF
        try {
          const apiKey = getEnvVar("OPENAI_API_KEY");
          if (!apiKey || apiKey === "your_openai_api_key_here" || apiKey.includes("placeholder")) {
            return new Response(JSON.stringify({ success: true, url: blobUrl, parsed: false }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          const model = getEnvVar("OPENAI_RESUME_MODEL", getEnvVar("OPENAI_MODEL", "gpt-5.6-terra"));
          const base64 = Buffer.from(bytes).toString("base64");

          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model,
              messages: [
                {
                  role: "user",
                  content: [
                    {
                      type: "file",
                      file: {
                        filename: "resume.pdf",
                        file_data: `data:application/pdf;base64,${base64}`,
                      },
                    },
                    {
                      type: "text",
                      text: RESUME_INSTRUCTION,
                    },
                  ],
                },
              ],
              max_completion_tokens: 4000,
            }),
          });

          if (!response.ok) {
            const errText = await response.text();
            console.error("[resume extraction] OpenAI API error:", response.status, errText);
            return new Response(
              JSON.stringify({
                success: true,
                url: blobUrl,
                parsed: false,
                parseError:
                  "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually.",
              }),
              { headers: { "Content-Type": "application/json" } }
            );
          }

          const resData = await response.json();
          const rawContent = resData.choices?.[0]?.message?.content || "";
          const extractedJson = extractJsonObject(rawContent);

          if (!extractedJson) {
            console.error("[resume extraction] Failed to extract JSON from AI response:", rawContent);
            return new Response(
              JSON.stringify({
                success: true,
                url: blobUrl,
                parsed: false,
                parseError:
                  "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually.",
              }),
              { headers: { "Content-Type": "application/json" } }
            );
          }

          const result = resumeContentSchema.safeParse(extractedJson);
          if (!result.success) {
            console.error("[resume extraction] Schema validation failed:", result.error);
            return new Response(
              JSON.stringify({
                success: true,
                url: blobUrl,
                parsed: false,
                parseError:
                  "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually.",
              }),
              { headers: { "Content-Type": "application/json" } }
            );
          }

          const current = await readContent();
          const ai = result.data; // validated ResumeContent

          const mergedResume = {
            ...(current.resume ?? {}),
            ...Object.fromEntries(
              Object.entries(ai).filter(
                ([key, value]) =>
                  key !== "skills" &&
                  value !== undefined &&
                  value !== null &&
                  !(typeof value === "string" && value.trim() === "") &&
                  !(Array.isArray(value) && value.length === 0)
              )
            ),
          };

          const next = {
            ...current, // businesses, sideProjects, heroTagline, availabilityStatus untouched
            resume: mergedResume,
            ...(ai.skills && Object.keys(ai.skills).length > 0 ? { skills: ai.skills } : {}),
            resumeOverride: {
              ...(current.resumeOverride ?? {}),
              ...(ai.summary ? { summary: ai.summary } : {}),
              ...(ai.email ? { email: ai.email } : {}),
              ...(ai.education?.degree ? { education: ai.education.degree } : {}),
            },
          };

          await writeContent(next);

          const fields = Object.keys(ai).filter(
            (k) => (ai as Record<string, unknown>)[k] !== undefined
          );

          return new Response(
            JSON.stringify({
              success: true,
              url: blobUrl,
              parsed: true,
              fields,
            }),
            { headers: { "Content-Type": "application/json" } }
          );
        } catch (aiErr) {
          console.error("[resume extraction] AI parsing threw error:", aiErr);
          return new Response(
            JSON.stringify({
              success: true,
              url: blobUrl,
              parsed: false,
              parseError:
                "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually.",
            }),
            { headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

import { z } from "zod";

export const resumeSectionSchema = z.object({
  title: z.string(),
  badge: z.string().optional(),
  subtitle: z.string().optional(),
  url: z.string().optional(),
  bullets: z.array(z.string()),
});

export const resumeContentSchema = z.object({
  fullName: z.string().optional(),
  title: z.string().optional(),
  location: z.string().optional(),
  email: z.string().optional(),
  summary: z.string().optional(),
  education: z
    .object({
      institution: z.string().optional(),
      location: z.string().optional(),
      degree: z.string().optional(),
      coursework: z.string().optional(),
    })
    .optional(),
  sections: z.array(resumeSectionSchema).optional(),
  leadership: z.array(z.string()).optional(),
  practices: z.array(z.string()).optional(),
  skills: z.record(z.string(), z.array(z.string())).optional(),
});

export type ResumeContent = z.infer<typeof resumeContentSchema>;

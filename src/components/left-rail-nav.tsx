import { Github, Linkedin, Mail, ArrowUp, FileText } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { ResumeModal } from "@/components/resume-modal";
import { ThemeToggle } from "@/components/theme-toggle";
import type { ResumeContent } from "@/data/resume-schema";

const sections = ["about", "projects", "skills", "contact"];

export function LeftRailNav({ resume }: { resume?: ResumeContent }) {
  const activeSection = useActiveSection(sections);

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 rounded-full border border-border/70 bg-card/70 p-3 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <ThemeToggle />
      <div className="my-0.5 h-6 w-px bg-border/60" />

      <a
        href="https://github.com/Chanakya2006gt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-sage p-1.5"
        title="GitHub"
      >
        <Github className="size-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/nagulagam-chanakya-b93514315"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-sage p-1.5"
        title="LinkedIn"
      >
        <Linkedin className="size-4" />
      </a>
      <a
        href="mailto:nagulagamchanakya2211@gmail.com"
        className="text-muted-foreground transition-colors hover:text-sage p-1.5"
        title="Email"
      >
        <Mail className="size-4" />
      </a>

      {/* Section dots navigation */}
      <div className="my-1 h-6 w-px bg-border/60" />
      <div className="flex flex-col items-center gap-3">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center justify-center"
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeSection === id
                  ? "size-2.5 bg-sage shadow-[0_0_8px_#a3c2ab]"
                  : "size-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Resume option below section dots */}
      <div className="my-1 h-8 w-px bg-border/60" />

      <ResumeModal
        resume={resume}
        trigger={
          <button
            className="group relative text-muted-foreground transition-colors hover:text-sage p-1.5"
            title="View Resume"
          >
            <FileText className="size-4" />
            <span className="absolute left-full ml-3 hidden rounded-md bg-card border border-border/70 px-2 py-1 text-[11px] font-medium text-sage shadow-md group-hover:block whitespace-nowrap">
              View Resume
            </span>
          </button>
        }
      />

      <a
        href="#top"
        className="text-muted-foreground transition-colors hover:text-foreground p-1.5"
        title="Back to top"
      >
        <ArrowUp className="size-4" />
      </a>
    </aside>
  );
}

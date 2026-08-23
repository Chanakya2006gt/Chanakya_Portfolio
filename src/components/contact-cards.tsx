import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ContactCards() {
  const links = [
    {
      title: "GitHub",
      handle: "@Chanakya2006gt",
      icon: Github,
      href: "https://github.com/Chanakya2006gt",
      color: "hover:border-slate-400/60 hover:shadow-[0_8px_30px_rgba(148,163,184,0.18)] hover:-translate-y-1",
      iconBg: "bg-slate-500/15 border-slate-500/30 text-slate-300 dark:text-slate-200",
      accentText: "group-hover:text-slate-300",
    },
    {
      title: "LinkedIn",
      handle: "Nagulagam Chanakya",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nagulagam-chanakya-b93514315",
      color: "hover:border-blue-500/60 hover:shadow-[0_8px_30px_rgba(59,130,246,0.22)] hover:-translate-y-1",
      iconBg: "bg-blue-500/15 border-blue-500/30 text-blue-400",
      accentText: "group-hover:text-blue-400",
    },
    {
      title: "Email",
      handle: "nagulagamchanakya2211@...",
      icon: Mail,
      href: "mailto:nagulagamchanakya2211@gmail.com",
      color: "hover:border-emerald-500/60 hover:shadow-[0_8px_30px_rgba(16,185,129,0.22)] hover:-translate-y-1",
      iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
      accentText: "group-hover:text-emerald-400",
    },
    {
      title: "Trelio SaaS",
      handle: "trelio.in",
      icon: ExternalLink,
      href: "https://trelio.in",
      color: "hover:border-cyan-500/70 hover:shadow-[0_8px_32px_rgba(6,182,212,0.25)] hover:-translate-y-1",
      iconBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
      accentText: "group-hover:text-cyan-400",
      highlight: true,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group block"
          >
            <Card
              className={`card-specular p-5 transition-all duration-300 ${item.color} ${
                item.highlight
                  ? "border-cyan-500/40 bg-gradient-to-b from-card via-card to-cyan-500/10 shadow-[inset_0_1px_0_0_rgba(6,182,212,0.25)]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex size-10 items-center justify-center rounded-xl border ${item.iconBg} group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                  <Icon className="size-5" />
                </div>
                <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <h4 className={`font-medium text-foreground ${item.accentText} transition-colors`}>
                  {item.title}
                </h4>
                <p className="mt-1 truncate text-xs text-muted-foreground font-mono">
                  {item.handle}
                </p>
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
}

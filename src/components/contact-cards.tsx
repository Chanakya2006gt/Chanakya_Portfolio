import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ContactCards() {
  const links = [
    {
      title: "GitHub",
      handle: "@Chanakya2006gt",
      icon: Github,
      href: "https://github.com/Chanakya2006gt",
      color: "hover:border-foreground/40 hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)] hover:-translate-y-1",
      iconColor: "text-foreground group-hover:text-foreground",
    },
    {
      title: "LinkedIn",
      handle: "Nagulagam Chanakya",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nagulagam-chanakya-b93514315",
      color: "hover:border-indigo/50 hover:shadow-[0_8px_30px_rgba(99,102,241,0.18)] hover:-translate-y-1",
      iconColor: "text-indigo group-hover:text-indigo",
    },
    {
      title: "Email",
      handle: "nagulagamchanakya2211@...",
      icon: Mail,
      href: "mailto:nagulagamchanakya2211@gmail.com",
      color: "hover:border-sage/50 hover:shadow-[0_8px_30px_rgba(143,168,150,0.2)] hover:-translate-y-1",
      iconColor: "text-sage group-hover:text-sage",
    },
    {
      title: "Trelio SaaS",
      handle: "trelio.in",
      icon: ExternalLink,
      href: "https://trelio.in",
      color: "hover:border-sage/80 hover:shadow-[0_8px_32px_rgba(143,168,150,0.25)] hover:-translate-y-1",
      iconColor: "text-sage group-hover:text-sage",
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
                  ? "border-sage/40 bg-gradient-to-b from-card via-card to-sage/5 shadow-[inset_0_1px_0_0_rgba(163,194,171,0.25)]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex size-10 items-center justify-center rounded-xl bg-secondary/80 border border-border/50 ${item.iconColor} group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                  <Icon className="size-5" />
                </div>
                <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <h4 className="font-medium text-foreground group-hover:text-sage transition-colors">
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

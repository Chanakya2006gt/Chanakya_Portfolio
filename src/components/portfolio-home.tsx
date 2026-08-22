import { useState } from "react";
import { ArrowRight, ArrowUp, ExternalLink, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { businesses as defaultBusinesses, sideProjects as defaultSideProjects, skills as defaultSkills, Project } from "@/data/projects";
import { SidePreview, TrelioPreview } from "@/components/trelio-preview";
import { SiteNav } from "@/components/site-nav";
import { LeftRailNav } from "@/components/left-rail-nav";
import { ParticleField } from "@/components/particle-field";
import { MarqueeTicker } from "@/components/marquee-ticker";
import { HeroStats } from "@/components/hero-stats";
import { ContactCards } from "@/components/contact-cards";
import { Companion } from "@/components/mascot/companion";
import { CompanionSvg } from "@/components/mascot/companion-svg";
import { IntroOverlay } from "@/components/intro-overlay";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import { ResumeModal } from "@/components/resume-modal";
import { FileText } from "lucide-react";
import { DynamicData } from "@/data/store";

interface HeroProps {
  tagline?: string;
  availabilityStatus?: string;
  liveCount?: number;
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
}

function Hero({ tagline, availabilityStatus, liveCount, email, pdfUrl, summary, education, skillsList }: HeroProps) {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-5 py-20 overflow-hidden">
      {/* Background ambient dual-accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-sage/10 via-indigo/5 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
      <ParticleField />
      
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <div className="rise-in inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-sage">
            <span className="size-1.5 rounded-full bg-sage animate-pulse" />
            Full-Stack Builder · SaaS Founder
          </div>
          <h1 className="rise-in rise-in-1 mt-5 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-b from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Nagulagam Chanakya
          </h1>
          <p className="rise-in rise-in-2 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            {tagline || "I ship products under real constraints — not demos. Trelio is the serious work. Everything else stays in experiments."}
          </p>

          <HeroStats status={availabilityStatus} liveCount={liveCount} />

          <div className="rise-in rise-in-3 mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-sage-glow rounded-xl font-medium shadow-md">
              <a href="#projects">
                View projects
                <ArrowRight />
              </a>
            </Button>
            <ResumeModal
              email={email}
              pdfUrl={pdfUrl}
              summary={summary}
              education={education}
              skillsList={skillsList}
              trigger={
                <Button size="lg" variant="sage" className="btn-sage-glow rounded-xl font-medium">
                  <FileText className="mr-1.5 size-4" />
                  View Resume
                </Button>
              }
            />
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border/80 hover:bg-secondary">
              <a href="#contact">
                <Mail />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Hero right visual hero mascot frame with multi-layered glow */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-sage/20 via-indigo/10 to-transparent blur-3xl rounded-full" />
          <div className="relative flex size-64 items-center justify-center rounded-full border border-sage/30 bg-gradient-to-b from-card/80 via-card/40 to-transparent p-6 shadow-[0_0_60px_rgba(143,168,150,0.18),0_0_100px_rgba(129,140,248,0.08)] backdrop-blur-sm">
            <CompanionSvg state="idle" size={160} />
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground tracking-wider uppercase bg-secondary/60 border border-border/60 px-3 py-1 rounded-full">
            &lt; Full-Stack Developer /&gt;
          </p>
        </div>
      </div>
    </section>
  );
}

interface AboutProps {
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
}

function About({ email, pdfUrl, summary, education, skillsList }: AboutProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`border-y border-border/50 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-sage" />
          <p className="text-xs font-semibold uppercase tracking-wider text-sage">About</p>
        </div>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Builder first. Student second.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Engineering student at <span className="font-medium text-foreground">{education || "SR University (B.Tech in CSE, 2028)"}</span> focused on shipping real products. I care more
              about constraints — <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">secure payments</code>, <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">approvals</code>, and <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">multi-tenant systems</code> —
              than collecting certificates.
            </p>
            <p>
              Right now most of my time goes to <span className="font-medium text-foreground">Trelio</span>: a SaaS that forces client
              approval before work is executed using an <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-indigo font-mono">Authorization-Before-Execution</code> model. The problem is simple: freelancers and agencies should never work for free.
            </p>

            {/* Quick-scan highlights pill strip for recruiters & visitors */}
            <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-3">
              <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                <p className="text-[11px] font-mono text-muted-foreground uppercase">Location</p>
                <p className="text-xs font-semibold text-foreground">Warangal, India</p>
              </div>
              <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                <p className="text-[11px] font-mono text-muted-foreground uppercase">Degree & Focus</p>
                <p className="text-xs font-semibold text-foreground">B.Tech CSE '28</p>
              </div>
              <div className="col-span-2 rounded-xl border border-border/80 bg-card/60 p-2.5 sm:col-span-1">
                <p className="text-[11px] font-mono text-muted-foreground uppercase">Core Focus</p>
                <p className="text-xs font-semibold text-sage">SaaS & Security</p>
              </div>
            </div>

            <div className="pt-2">
              <ResumeModal
                email={email}
                pdfUrl={pdfUrl}
                summary={summary}
                education={education}
                skillsList={skillsList}
                trigger={
                  <Button variant="outline" className="gap-2 border-sage/40 hover:border-sage text-sage hover:text-sage rounded-xl">
                    <FileText className="size-4" />
                    Read Full Resume & Credentials →
                  </Button>
                }
              />
            </div>
          </div>
          <div className="card-hover-elevate rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-sage" />
                <h4 className="text-sm font-semibold text-foreground">How I work</h4>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Direct, metrics-first, no fluff. Build, get a user in front of it,
                iterate. Side experiments stay labeled as experiments.
              </p>
            </div>
            <Separator className="bg-border/60" />
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-indigo" />
                <h4 className="text-sm font-semibold text-foreground">What I am doing now</h4>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Full-stack on Trelio, DSA practice, and keeping the product scoped.
                Career experiments stay secondary until the product has traction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BusinessCardProps {
  items: Project[];
}

function BusinessCard({ items }: BusinessCardProps) {
  return (
    <div className="grid gap-6">
      {items.map((project) => (
        <Card key={project.id} className="relative overflow-hidden p-2 card-hover-elevate border-border/80 bg-gradient-to-br from-card via-card to-sage/5">
          {/* Top subtle gradient accent line */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sage/60 to-transparent" />
          <div className="p-4 sm:p-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-xs font-semibold text-sage hover:bg-sage/20 transition-all"
              >
                <span className="size-1.5 rounded-full bg-sage animate-ping" />
                <ExternalLink className="size-3" />
                {project.liveUrl.replace(/^https?:\/\//, "")}
              </a>
            )}
            <TrelioPreview />
            <CardHeader className="px-0 pb-0 pt-6">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="font-serif text-2xl sm:text-3xl">{project.title}</CardTitle>
                {project.badge && <Badge variant="sage" className="shadow-sm">{project.badge}</Badge>}
              </div>
              <CardDescription className="mt-2 max-w-2xl text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-5 flex flex-wrap gap-2 px-0">
              {project.stack.map((tech) => {
                const isCore = ["React", "TypeScript", "Node.js", "PostgreSQL"].includes(tech);
                const isSecurity = ["AES-256-GCM", "HMAC", "Clerk"].some((s) => tech.includes(s));
                return (
                  <Badge
                    key={tech}
                    variant={isCore ? "sage" : isSecurity ? "secondary" : "outline"}
                    className={isSecurity ? "border-indigo/30 bg-indigo/10 text-indigo" : ""}
                  >
                    {tech}
                  </Badge>
                );
              })}
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}

interface ProjectsProps {
  businessesList: Project[];
  sideProjectsList: Project[];
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
}

function Projects({ businessesList, sideProjectsList, email, pdfUrl, summary, education, skillsList }: ProjectsProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-sage" />
        <p className="text-xs font-semibold uppercase tracking-wider text-sage">Work</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Featured Projects
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Serious SaaS products engineered under real constraints sit above experiments.
      </p>

      <Tabs defaultValue="businesses" className="mt-10">
        <TabsList className="bg-secondary/80 p-1 border border-border/80 flex-wrap h-auto">
          <TabsTrigger value="businesses" className="data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm">
            Flagship Products
          </TabsTrigger>
          <TabsTrigger value="contracts" className="data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm">
            Contract Work
          </TabsTrigger>
          <TabsTrigger value="side" className="data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm">
            Side Experiments
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Flagship Products */}
        <TabsContent value="businesses" className="mt-6">
          <BusinessCard items={businessesList} />
        </TabsContent>

        {/* Tab 2: Contract Work */}
        <TabsContent value="contracts" className="mt-6">
          <Card className="border-border/80 bg-gradient-to-br from-card via-card to-secondary/30 p-8 sm:p-12 text-center rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sage/40 to-transparent" />
            <div className="mx-auto max-w-md space-y-3">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-sage/10 text-sage border border-sage/20">
                <FileText className="size-5" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Available for Client & Contract Engagements</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am currently open for client work, full-stack consulting, and selective engineering contracts. As new engagements are delivered and cleared for public showcase, case studies and deliverables will be documented here.
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="sm" variant="sage" className="btn-sage-glow rounded-xl">
                  <a href="#contact">Discuss a Project →</a>
                </Button>
                <ResumeModal
                  email={email}
                  pdfUrl={pdfUrl}
                  summary={summary}
                  education={education}
                  skillsList={skillsList}
                  trigger={
                    <Button size="sm" variant="outline" className="rounded-xl border-border/80 hover:text-sage">
                      View Credentials
                    </Button>
                  }
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab 3: Side Experiments */}
        <TabsContent value="side" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjectsList.map((project) => (
              <Card
                key={project.id}
                className="relative overflow-hidden p-2 card-hover-elevate border-border/80 bg-card hover:border-sage/40 flex flex-col justify-between"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="p-4">
                  <SidePreview title={project.title} />
                  <CardHeader className="px-0 pb-2 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-sage transition-colors p-1"
                          title="View Repository"
                        >
                          <ExternalLink className="size-3.5" />
                        </a>
                      )}
                    </div>
                    <CardDescription className="text-xs line-clamp-2 mt-1">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1.5 px-0 pt-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[11px] font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </CardContent>
                </div>
              </Card>
            ))}

            {/* Polite 'More to come' card */}
            <Card className="relative overflow-hidden p-6 border-dashed border-border/80 bg-secondary/20 flex flex-col items-center justify-center text-center min-h-[220px] rounded-2xl">
              <span className="size-2 rounded-full bg-sage/60 animate-pulse mb-3" />
              <p className="font-serif text-lg text-foreground/90">More Experiments in Progress</p>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
                Active labs in security primitives, database tooling, and open-source packages will be posted here as they are published.
              </p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

interface SkillsProps {
  skillsList: Record<string, string[]>;
}

function Skills({ skillsList }: SkillsProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className={`border-y border-border/50 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-sage" />
          <p className="text-xs font-semibold uppercase tracking-wider text-sage">Stack</p>
        </div>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Skills & Core Technologies
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Production-tested toolchain across full-stack architecture, systems security, and reliable databases.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {Object.entries(skillsList).map(([category, items]) => (
            <div key={category} className="card-hover-elevate rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold tracking-wider text-sage uppercase">{category}</h3>
                <span className="text-[11px] font-mono text-muted-foreground">{items.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-lg px-3 py-1.5 text-xs font-medium tracking-normal transition-all hover:bg-sage/20 hover:text-sage hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "").trim();
    const body = String(data.get("body") || "").trim();

    if (!subject || !body) {
      toast.error("Please fill in both subject and message");
      return;
    }

    toast.success("Opening your email client...");
    setDialogOpen(false);

    const encSubject = encodeURIComponent(subject);
    const encBody = encodeURIComponent(body);
    window.location.href = `mailto:nagulagamchanakya2211@gmail.com?subject=${encSubject}&body=${encBody}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative mx-auto max-w-5xl px-5 py-24 transition-all duration-700 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Subtle top glow for landing zone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-sage/10 via-indigo/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-sage" />
        <p className="text-xs font-semibold uppercase tracking-wider text-sage">Contact</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Open for contracts & conversations
      </h2>
      <p className="mt-4 max-w-lg text-lg text-foreground/90 font-serif italic">
        "Let's build something. I am available for contract work, consulting, and select software engineering opportunities."
      </p>

      <div className="mt-10">
        <ContactCards />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="btn-sage-glow rounded-xl px-7 shadow-md">
              <Mail className="mr-2 size-4" />
              Send a direct note
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl border-border bg-card">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Send a direct message</DialogTitle>
              <DialogDescription>
                Opens your mail client directly to <strong className="text-foreground">nagulagamchanakya2211@gmail.com</strong>.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 mt-2" onSubmit={handleNoteSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="subject" className="text-xs">Subject</Label>
                <Input id="subject" name="subject" placeholder="Project / Contract Inquiry..." required className="rounded-xl bg-secondary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="body" className="text-xs">Message</Label>
                <Textarea id="body" name="body" placeholder="What are the details of the project or opportunity?" required rows={4} className="rounded-xl bg-secondary/50" />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="rounded-xl mt-2 flex-1 btn-sage-glow">Open mail client</Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl mt-2 border-border/80 hover:border-sage hover:text-sage"
                  onClick={() => {
                    navigator.clipboard.writeText("nagulagamchanakya2211@gmail.com");
                    toast.success("Email address copied to clipboard!");
                  }}
                >
                  Copy Address
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Button
          size="lg"
          variant="outline"
          className="rounded-xl border-border/80 hover:border-sage/50 hover:bg-secondary/60 transition-all"
          onClick={() => {
            navigator.clipboard.writeText("nagulagamchanakya2211@gmail.com");
            toast.success("Copied nagulagamchanakya2211@gmail.com to clipboard!");
          }}
        >
          Copy Email Address
        </Button>
      </div>
    </section>
  );
}

export function PortfolioHome({ initialData }: { initialData?: DynamicData | null }) {
  const [data] = useState<DynamicData | null>(initialData || null);

  const businessesList = data?.businesses || defaultBusinesses;
  const sideProjectsList = data?.sideProjects || defaultSideProjects;
  const skillsList = data?.skills || defaultSkills;

  return (
    <div id="top" className="min-h-screen bg-background text-foreground relative">
      <IntroOverlay />

      <LeftRailNav />
      <SiteNav />
      <Companion />

      <main>
        <Hero
          tagline={data?.heroTagline}
          availabilityStatus={data?.availabilityStatus}
          liveCount={businessesList.length}
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
          summary={data?.resumeOverride?.summary}
          education={data?.resumeOverride?.education}
          skillsList={skillsList}
        />
        <Separator />
        <About
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
          summary={data?.resumeOverride?.summary}
          education={data?.resumeOverride?.education}
          skillsList={skillsList}
        />
        <Separator />
        <Projects
          businessesList={businessesList}
          sideProjectsList={sideProjectsList}
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
          summary={data?.resumeOverride?.summary}
          education={data?.resumeOverride?.education}
          skillsList={skillsList}
        />
        <MarqueeTicker />
        <Skills skillsList={skillsList} />
        <Separator />
        <Contact />
      </main>

      <footer className="border-t border-border/80 bg-card/40 pt-16 pb-12">
        <div className="mx-auto max-w-5xl px-5 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                LET'S BUILD SOMETHING{" "}
                <span className="rounded-md bg-sage/20 px-2 py-0.5 text-sage border border-sage/30">
                  REAL
                </span>{" "}
                TOGETHER.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Building Trelio. Open for high-impact software engineering roles.
              </p>
            </div>
            <a
              href="#top"
              className="flex size-12 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-sage hover:text-sage hover:scale-110"
              title="Back to top"
            >
              <ArrowUp className="size-5" />
            </a>
          </div>

          <Companion footerOnly />

          <Separator className="my-8" />

          <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nagulagam Chanakya. All rights reserved.</p>
            <p>Designed & Engineered with care · Trelio SaaS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

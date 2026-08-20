import { useState, useEffect } from "react";
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
}

function Hero({ tagline, availabilityStatus, liveCount, email, pdfUrl }: HeroProps) {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-5 py-20 overflow-hidden">
      <ParticleField />
      
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="rise-in text-sm font-medium tracking-wide text-sage">
            Full-stack builder · Founder
          </p>
          <h1 className="rise-in rise-in-1 mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Nagulagam Chanakya
          </h1>
          <p className="rise-in rise-in-2 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {tagline || "I ship products under real constraints — not demos. Trelio is the serious work. Everything else stays in experiments."}
          </p>

          <HeroStats status={availabilityStatus} liveCount={liveCount} />

          <div className="rise-in rise-in-3 mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View projects
                <ArrowRight />
              </a>
            </Button>
            <ResumeModal
              email={email}
              pdfUrl={pdfUrl}
              trigger={
                <Button size="lg" variant="sage">
                  <FileText className="mr-1.5 size-4" />
                  View Resume
                </Button>
              }
            />
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Hero right visual hero mascot frame */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          <div className="relative flex size-64 items-center justify-center rounded-full border border-sage/30 bg-gradient-to-b from-sage/10 to-transparent p-6 shadow-[0_0_50px_rgba(143,168,150,0.15)]">
            <CompanionSvg state="idle" size={160} />
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground tracking-wider uppercase">
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
}

function About({ email, pdfUrl }: AboutProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-sm font-medium tracking-wide text-sage">About</p>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Builder first. Student second.
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Engineering student at SR University (B.Tech CIS, 2028) focused on shipping real products. I care more
            about constraints — payments, approvals, multi-tenant systems —
            than collecting certificates.
          </p>
          <p>
            Right now most of my time goes to Trelio: a SaaS that forces client
            approval before work is executed. The problem is simple. Freelancers
            and agencies should not work for free.
          </p>

          <div className="pt-2">
            <ResumeModal
              email={email}
              pdfUrl={pdfUrl}
              trigger={
                <Button variant="outline" className="gap-2 border-sage/40 hover:border-sage text-sage hover:text-sage">
                  <FileText className="size-4" />
                  Read Full Resume & Credentials →
                </Button>
              }
            />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-border)] space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground">How I work</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Direct, metrics-first, no fluff. Build, get a user in front of it,
              iterate. Side experiments stay labeled as experiments.
            </p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-semibold text-foreground">What I am doing now</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Full-stack on Trelio, DSA practice, and keeping the product scoped.
              Career experiments stay secondary until the product has traction.
            </p>
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
        <Card key={project.id} className="p-2 hover:shadow-[var(--shadow-border-hover)] transition-all">
          <div className="p-4 sm:p-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-sage hover:text-sage/80"
              >
                <ExternalLink className="size-3" />
                {project.liveUrl.replace(/^https?:\/\//, "")}
              </a>
            )}
            <TrelioPreview />
            <CardHeader className="px-0 pb-0 pt-6">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="font-serif text-2xl">{project.title}</CardTitle>
                {project.badge && <Badge variant="sage">{project.badge}</Badge>}
              </div>
              <CardDescription className="mt-2 max-w-2xl text-base">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-5 flex flex-wrap gap-2 px-0">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
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
}

function Projects({ businessesList, sideProjectsList }: ProjectsProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-sm font-medium tracking-wide text-sage">Work</p>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Projects
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Serious products sit above experiments. Trelio is the live product.
      </p>

      <Tabs defaultValue="businesses" className="mt-10">
        <TabsList>
          <TabsTrigger value="businesses">Businesses</TabsTrigger>
          <TabsTrigger value="side">Side projects</TabsTrigger>
        </TabsList>
        <TabsContent value="businesses">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">
            Businesses & serious projects
          </h3>
          <BusinessCard items={businessesList} />
        </TabsContent>
        <TabsContent value="side">
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">
            Experiments and learning work
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjectsList.map((project) => (
              <Card
                key={project.id}
                className="p-2 hover:-translate-y-1 transition-all duration-200 hover:shadow-[var(--shadow-border-hover)] hover:border-sage/30"
              >
                <div className="p-4">
                  <SidePreview title={project.title} />
                  <CardHeader className="px-0 pb-2 pt-4">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1.5 px-0">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </CardContent>
                </div>
              </Card>
            ))}
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
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-sm font-medium tracking-wide text-sage">Stack</p>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Skills & Technologies
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {Object.entries(skillsList).map(([category, items]) => (
          <div key={category} className="rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-sage uppercase">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-lg px-3 py-1.5 text-xs font-medium tracking-normal transition-all hover:bg-sage/20 hover:text-sage hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
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
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-sm font-medium tracking-wide text-sage">Contact</p>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Open to real conversations
      </h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Work, collaborations, or a direct note. No newsletter, no fluff.
      </p>

      <div className="mt-10">
        <ContactCards />
      </div>

      <div className="mt-8 flex justify-center sm:justify-start">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-xl px-8">
              <Mail className="mr-2 size-4" />
              Send a direct note
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send a note</DialogTitle>
              <DialogDescription>
                Opens your mail app to nagulagamchanakya2211@gmail.com.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4" onSubmit={handleNoteSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Hello Chanakya..." required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="body">Message</Label>
                <Textarea id="body" name="body" placeholder="What is this about?" required />
              </div>
              <Button type="submit">Open mail client</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export function PortfolioHome() {
  const [data, setData] = useState<DynamicData | null>(null);

  useEffect(() => {
    async function fetchDynamicData() {
      try {
        const res = await fetch("/api/admin/data");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        console.error("Failed to load dynamic portfolio data:", err);
      }
    }
    fetchDynamicData();
  }, []);

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
        />
        <Separator />
        <About
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
        />
        <Separator />
        <Projects businessesList={businessesList} sideProjectsList={sideProjectsList} />
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

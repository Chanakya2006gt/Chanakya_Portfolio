import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/projects";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";

const navSections = navLinks.map((l) => l.href.replace("#", ""));

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navSections);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="text-sm font-medium tracking-tight hover:opacity-80 transition-opacity">
          Chanakya<span className="text-sage">.</span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-6 lg:gap-7 md:flex">
          {navLinks.map((link) => {
            const isExternalOrRoute = link.href.startsWith("/");
            const sectionId = link.href.replace("#", "").replace("/", "");
            const isActive = !isExternalOrRoute && activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors relative py-1 ${
                  isActive
                    ? "font-medium text-sage"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-sage transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" className="btn-sage-glow rounded-xl font-semibold shadow-xs text-xs px-3.5 py-1.5 h-9">
            <a href="/#pricing">
              <span>Book a ₹20k Diagnosis</span>
              <ArrowRight className="ml-1 size-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm" className="btn-sage-glow rounded-lg font-semibold text-[11px] px-2.5 py-1 h-8">
            <a href="/#pricing">
              <span>₹20k Diagnosis</span>
            </a>
          </Button>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="h-8 w-8"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-muted-foreground hover:text-sage transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border/60">
                  <Button asChild className="btn-sage-glow w-full rounded-xl font-semibold justify-center">
                    <a href="/#pricing" onClick={() => setOpen(false)}>
                      <span>Book a ₹20k Diagnosis →</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

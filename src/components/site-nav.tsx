import { useState } from "react";
import { Menu } from "lucide-react";
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
        <a href="#top" className="text-sm font-medium tracking-tight">
          Chanakya<span className="text-sage">.</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
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

          <ThemeToggle className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <Menu />
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
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}

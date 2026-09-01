import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="faq"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">FAQ</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
        Clear answers on pricing bands, technology choices, code ownership, and how builds actually run.
      </p>

      <div className="mt-10 divide-y divide-border/60 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md overflow-hidden shadow-sm">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            className="group p-5 sm:p-6 transition-colors hover:bg-secondary/30 open:bg-secondary/40"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-left font-serif text-lg sm:text-xl font-medium text-foreground outline-none">
              <span>{faq.question}</span>
              <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pr-6">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

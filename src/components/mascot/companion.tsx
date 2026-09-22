import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { CompanionChat } from "./companion-chat";

export function Companion() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <CompanionChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col pointer-events-auto">
        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="group flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-2.5 shadow-[0_0_25px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-sage/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sage"
          aria-label="Ask a question about CK Builds"
          aria-expanded={isChatOpen}
        >
          <MessageCircle className="size-4 text-sage" />
          <span className="text-xs font-medium text-foreground transition-colors group-hover:text-sage">
            Questions?
          </span>
        </button>
      </div>
    </>
  );
}

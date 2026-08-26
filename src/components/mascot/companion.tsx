import { useState, useEffect } from "react";
import { CompanionSvg } from "./companion-svg";
import { CompanionChat } from "./companion-chat";
import { useMascotState } from "@/hooks/use-mascot-state";

const SPEECH_BUBBLES = [
  "I built Trelio btw 🚀",
  "Click to chat with AI Support! 💬",
  "No free work for freelancers 💸",
  "Scroll down, I'll race you!",
  "Shipping products > tutorial hell",
];

interface CompanionProps {
  footerOnly?: boolean;
}

export function Companion({ footerOnly = false }: CompanionProps) {
  const { state, triggerState } = useMascotState();
  const [bubbleIndex, setBubbleIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Cycle speech bubbles on hover or click
  const handleInteract = () => {
    setBubbleIndex((prev) => (prev + 1) % SPEECH_BUBBLES.length);
    triggerState("jump", 800);
    setIsChatOpen((prev) => !prev);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showBubble) {
      timer = setTimeout(() => setShowBubble(false), 4500);
    }
    return () => clearTimeout(timer);
  }, [showBubble]);

  // Initial gentle hello on page mount so users discover the interactive AI
  useEffect(() => {
    const greetingTimer = setTimeout(() => {
      setShowBubble(true);
      triggerState("wave", 1200);
    }, 3500);

    return () => clearTimeout(greetingTimer);
  }, []);

  if (footerOnly) {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setIsChatOpen(true);
            triggerState("jump", 800);
          }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs font-medium text-sage shadow-[0_0_12px_rgba(143,168,150,0.3)] border border-sage/30">
            Click to Chat! 👋
          </div>
          <CompanionSvg state="wave" size={130} />
        </div>
        <CompanionChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    );
  }

  return (
    <>
      <CompanionChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col pointer-events-auto">
        {/* Speech Bubble */}
        {showBubble && !isChatOpen && (
          <div
            role="status"
            aria-live="polite"
            className="mb-2 max-w-xs animate-rise-in rounded-2xl border border-sage/40 bg-card/95 px-4 py-2.5 text-xs font-medium text-foreground shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            {SPEECH_BUBBLES[bubbleIndex]}
          </div>
        )}

        {/* Floating Corner Companion Button */}
        <button
          onClick={handleInteract}
          onMouseEnter={() => {
            setShowBubble(true);
            triggerState("wave", 1500);
          }}
          className="group flex items-center gap-2 rounded-full border border-border/80 bg-card/80 p-1.5 pr-4 shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-sage/60 hover:shadow-[0_0_20px_rgba(143,168,150,0.25)]"
          aria-label="Interactive Companion Customer Support"
        >
          <CompanionSvg state={state} size={42} />
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-sage flex items-center gap-1.5">
            👋 Your Companion
            <span className="size-2 rounded-full bg-sage animate-ping" />
          </span>
        </button>
      </div>
    </>
  );
}

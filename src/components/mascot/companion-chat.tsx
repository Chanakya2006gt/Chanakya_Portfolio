import { useState, useRef, useEffect } from "react";
import { Send, X, Bot, Sparkles, User, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanionSvg } from "./companion-svg";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const PREBUILT_QUESTIONS = [
  { label: "📄 Resume & Education", query: "Can you summarize Chanakya's resume, education, and qualifications?" },
  { label: "🚀 Tell me about Trelio", query: "What is Trelio and how does it work?" },
  { label: "💻 Tech stack & skills", query: "What tech stack and skills does Chanakya specialize in?" },
  { label: "💼 Open for hiring?", query: "Is Chanakya open for full-time software engineering roles?" },
  { label: "📬 How to contact?", query: "How can I contact or email Chanakya?" },
];

interface CompanionChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompanionChat({ isOpen, onClose }: CompanionChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "👋 Hi! I'm Chanakya's AI Support Companion. Ask me anything about Chanakya's work, Trelio SaaS, tech stack, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages.concat(userMessage).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || data.error || "Sorry, I couldn't understand that.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I had trouble reaching the server. Please try again!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-[520px] w-[90vw] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-rise-in">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/80 bg-secondary/80 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative flex size-10 items-center justify-center rounded-full border border-sage/40 bg-card">
            <CompanionSvg state="idle" size={32} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs font-semibold text-foreground">
                Chanakya's Companion
              </h3>
              <span className="flex size-2 rounded-full bg-sage animate-pulse" />
            </div>
            <p className="text-[10px] text-muted-foreground">
              Customer Care & AI Assistant
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 rounded-full text-muted-foreground hover:text-foreground"
          onClick={onClose}
        >
          <X className="size-4" />
        </Button>
      </div>

      {/* Quick Questions Bar */}
      <div className="flex gap-1.5 overflow-x-auto border-b border-border/60 bg-card/40 p-2.5 scrollbar-none">
        {PREBUILT_QUESTIONS.map((q) => (
          <button
            key={q.label}
            onClick={() => sendMessage(q.query)}
            disabled={isLoading}
            className="whitespace-nowrap rounded-full border border-sage/30 bg-sage/10 px-2.5 py-1 text-[11px] font-medium text-sage transition-all hover:bg-sage/20 hover:scale-105 disabled:opacity-50"
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${
              m.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {m.role === "assistant" ? (
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sage/20 border border-sage/30 text-sage mt-0.5">
                <Bot className="size-3.5" />
              </div>
            ) : (
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground mt-0.5">
                <User className="size-3.5" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                m.role === "user"
                  ? "bg-sage text-sage-foreground font-medium rounded-tr-none"
                  : "bg-secondary/90 border border-border text-foreground rounded-tl-none"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground p-2">
            <RefreshCw className="size-3.5 animate-spin text-sage" />
            <span>Companion is typing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="border-t border-border/80 bg-secondary/50 p-2.5 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Companion anything..."
          className="flex-1 rounded-xl border border-border/80 bg-card px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sage/60"
        />
        <Button
          type="submit"
          size="icon"
          variant="sage"
          disabled={!input.trim() || isLoading}
          className="size-8 rounded-xl shrink-0"
        >
          <Send className="size-3.5" />
        </Button>
      </form>
    </div>
  );
}

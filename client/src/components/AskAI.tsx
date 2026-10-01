import { useEffect, useRef, useState } from "react";
import { Sparkles, Loader2, X, RotateCcw, Send } from "lucide-react";
import { getConsent, onConsentChange } from "@/lib/cookieConsent";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const EXAMPLE_QUESTIONS = [
  "How much does an eye examination cost?",
  "Do you offer NHS eye tests?",
  "How is OCT different from a standard eye test?",
  "How long does it take to adjust to varifocals?",
];

export default function AskAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // Nudge the widget up while the cookie banner is still showing, so they don't overlap.
  const [cookieBannerVisible, setCookieBannerVisible] = useState(() => getConsent() === null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => onConsentChange(() => setCookieBannerVisible(false)), []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || launcherRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, error]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setMessages([...nextMessages, { role: "assistant", content: data.answer }]);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const reset = () => {
    setMessages([]);
    setError(null);
    setInput("");
  };

  return (
    <>
      <button
        ref={launcherRef}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Ask our AI assistant"}
        title={open ? "Close AI assistant" : "Ask our AI assistant"}
        aria-expanded={open}
        className={`fixed right-5 sm:right-6 z-40 w-14 h-14 rounded-full bg-[#1A2E45] text-[#F8F4EF] shadow-lg flex items-center justify-center hover:bg-[#1A2E45]/90 active:scale-95 transition-all duration-200 ${
          cookieBannerVisible ? "bottom-24" : "bottom-5 sm:bottom-6"
        }`}
      >
        {open ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
      </button>

      {open && (
        <div
          ref={panelRef}
          className={`fixed right-5 sm:right-6 z-40 w-[calc(100vw-2.5rem)] sm:w-96 h-[32rem] max-h-[70vh] flex flex-col bg-[#1A2E45] rounded-2xl shadow-2xl overflow-hidden ${
            cookieBannerVisible ? "bottom-[10.5rem]" : "bottom-24"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-2.5 px-6 py-5 border-b border-[#F8F4EF]/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#C9A96E]" />
              <h2
                className="text-xl font-light text-[#F8F4EF]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Ask our AI assistant
              </h2>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  title="Start a new conversation"
                  aria-label="Start a new conversation"
                  className="text-[#F8F4EF]/50 hover:text-[#F8F4EF] transition-colors p-1"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#C9A96E]/80 border border-[#C9A96E]/30 rounded-full px-2 py-1">
                AI
              </span>
            </div>
          </div>

          {/* Message thread */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {messages.length === 0 && (
              <>
                <p className="text-[#F8F4EF]/60 text-xs font-light leading-relaxed">
                  Ask about our services, opening hours, brands we stock, or anything else about Stratton Opticians.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {EXAMPLE_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="px-3 py-1.5 rounded-full border border-[#F8F4EF]/15 text-[#F8F4EF]/70 text-xs hover:border-[#C9A96E]/50 hover:text-[#F8F4EF] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-[#C9A96E] text-[#1A2E45]"
                    : "mr-auto bg-[#F8F4EF]/5 border border-[#F8F4EF]/10 text-[#F8F4EF]/90"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="mr-auto flex items-center gap-2 text-[#F8F4EF]/50 text-sm px-4 py-2.5">
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking...
              </div>
            )}

            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-[#F8F4EF]/80 text-sm">
                {error}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Persistent disclaimer -- stays visible even once a conversation is underway */}
          <p className="px-6 pt-3 text-[#F8F4EF]/40 text-[10px] leading-snug shrink-0 border-t border-[#F8F4EF]/10">
            AI-generated and may make mistakes. For anything about your own eyes or prescription, please contact us
            directly.
          </p>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-3 px-6 pb-4 pt-2 shrink-0">
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={messages.length === 0 ? "e.g. How much does an eye test cost?" : "Ask a follow-up..."}
              className="flex-1 min-w-0 px-4 py-3 rounded-full bg-[#F8F4EF]/10 text-[#F8F4EF] placeholder:text-[#F8F4EF]/40 border border-[#F8F4EF]/15 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="w-11 h-11 shrink-0 bg-[#C9A96E] text-[#1A2E45] rounded-full hover:bg-[#C9A96E]/90 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

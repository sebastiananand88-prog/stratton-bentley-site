import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

const EXAMPLE_QUESTIONS = [
  "How much does an eye examination cost?",
  "Do you offer NHS eye tests?",
  "How is OCT different from a standard eye test?",
  "How long does it take to adjust to varifocals?",
];

export default function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const ask = async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setAnswer(data.answer);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(question);
  };

  return (
    <section className="py-16 max-w-4xl mx-auto px-6 lg:px-10">
      <div className="bg-[#1A2E45] rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-[#C9A96E]" />
          <h2
            className="text-2xl sm:text-3xl font-light text-[#F8F4EF]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ask us a question
          </h2>
        </div>
        <p className="text-[#F8F4EF]/60 text-sm font-light leading-relaxed">
          Can't find what you're looking for below? Ask in your own words. For anything specific to your own eyes or
          prescription, please book an appointment or contact us directly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. How much does an eye test cost?"
            className="flex-1 px-4 py-3 rounded-full bg-[#F8F4EF]/10 text-[#F8F4EF] placeholder:text-[#F8F4EF]/40 border border-[#F8F4EF]/15 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="px-6 py-3 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Thinking..." : "Ask"}
          </button>
        </form>

        {!answer && !loading && !error && (
          <div className="flex flex-wrap gap-2 pt-1">
            {EXAMPLE_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuestion(q);
                  ask(q);
                }}
                className="px-3 py-1.5 rounded-full border border-[#F8F4EF]/15 text-[#F8F4EF]/70 text-xs hover:border-[#C9A96E]/50 hover:text-[#F8F4EF] transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-2 text-[#F8F4EF]/60 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" />
            Finding the best answer...
          </div>
        )}

        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-[#F8F4EF]/80 text-sm">
            {error}
          </div>
        )}

        {answer && (
          <div className="p-5 rounded-lg bg-[#F8F4EF]/5 border border-[#F8F4EF]/10 text-[#F8F4EF]/90 text-sm leading-relaxed">
            {answer}
          </div>
        )}
      </div>
    </section>
  );
}

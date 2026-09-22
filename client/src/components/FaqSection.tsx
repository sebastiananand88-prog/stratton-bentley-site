import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faqData";

function FaqAccordionItem({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1A2E45]/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex items-start justify-between gap-4 text-left hover:bg-[#1A2E45]/2 transition-colors"
        aria-expanded={open}
      >
        <h3 className="font-medium text-[#1A2E45] leading-relaxed">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="pb-4 text-[#1A2E45]/70 leading-relaxed font-light">{a}</p>}
    </div>
  );
}

interface FaqSectionProps {
  items: FaqItem[];
  heading?: string;
  /** Set false to skip the "see all FAQs" link and JSON-LD injection (the main /faq page handles its own). */
  showViewAllLink?: boolean;
  className?: string;
}

/**
 * Renders an FAQ accordion and injects a matching FAQPage JSON-LD schema for exactly
 * the questions shown here, so search engines can generate rich results for this page.
 * The schema must mirror the visible content, so keep `items` in sync with what's rendered.
 */
export default function FaqSection({ items, heading = "Frequently asked questions", showViewAllLink = true, className = "" }: FaqSectionProps) {
  useEffect(() => {
    if (items.length === 0) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <section className={`py-20 max-w-4xl mx-auto px-6 lg:px-10 ${className}`}>
      <div className="space-y-8">
        <h2
          className="text-4xl font-light text-[#1A2E45]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {heading}
        </h2>
        <div className="space-y-0">
          {items.map((item, i) => (
            <FaqAccordionItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
        {showViewAllLink && (
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#C9A96E]/80 transition-colors text-sm font-medium"
          >
            See all frequently asked questions →
          </a>
        )}
      </div>
    </section>
  );
}

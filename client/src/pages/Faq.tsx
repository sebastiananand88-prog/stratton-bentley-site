import Layout from "@/components/Layout";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { FAQ_CATEGORIES } from "@/lib/faqData";

function FaqItem({ q, a }: { q: string; a: string }) {
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

export default function Faq() {
  useMetaTags({
    title: "Eye Care FAQ — Questions Answered | Stratton Opticians",
    description: "Frequently asked questions about eye examinations, OCT scans, contact lenses, varifocals, Essilor lenses, children's eye care, visual stress, and pricing.",
    canonical: "http://localhost:3001/faq",
  });

  // Full-page FAQPage schema covering every question visible on this page, for Google
  // rich results and AI search engines that can parse structured data.
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_CATEGORIES.flatMap((category) =>
        category.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        }))
      ),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Common Questions</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Eye Care Questions & Answers
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Find answers to common questions about eye examinations, OCT scans, contact lenses, varifocals, Essilor lenses, children's eye care, visual stress, and pricing.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6 lg:px-10">
        <div className="space-y-16">
          {FAQ_CATEGORIES.map((category, idx) => (
            <div key={idx} id={category.slug}>
              <h2
                className="text-3xl font-light text-[#1A2E45] mb-8 pb-4 border-b-2 border-[#C9A96E]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {category.category}
              </h2>
              <div className="space-y-0">
                {category.items.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <p className="text-[#1A2E45]/70 leading-relaxed">
            Didn't find your answer? Contact us directly and we're happy to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}

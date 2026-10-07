import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { TrendingDown, ShieldCheck, Heart } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  consultation: "/images/consultation-room.jpeg",
};

export default function MyopiaManagement() {
  useMetaTags({
    title: "Myopia Management Billericay — Essilor Stellest | Stratton",
    description: "Myopia management for children in Billericay using Essilor Stellest lenses, helping slow short-sightedness progression and protect long-term eye health.",
    canonical: "http://localhost:3001/myopia-management",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Children's Eye Care</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Myopia Management in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Myopia (short-sightedness) in children is becoming more common, and it tends to progress steadily
            through childhood. Myopia management aims to slow that progression, helping protect your child's
            long-term eye health rather than just correcting their vision year to year.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Essilor Stellest lenses
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  We fit Essilor Stellest lenses, spectacle lenses specifically designed to slow the progression of
                  myopia in children. They correct your child's vision normally, day to day, while a pattern built
                  into the lens works continuously to help manage how their eyes grow.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Because they're ordinary-looking spectacle lenses rather than a separate treatment, there's no
                  change to your child's daily routine -- they simply wear their glasses as normal.
                </p>
              </div>
              <div className="h-72 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src={IMAGES.consultation}
                  alt="Consultation room at Stratton Opticians used for children's eye examinations"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Why It Matters</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Protecting long-term eye health
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Slower Progression",
                desc: "Managing myopia aims to slow how quickly your child's short-sightedness increases year on year.",
              },
              {
                icon: ShieldCheck,
                title: "Reduced Long-Term Risk",
                desc: "Higher levels of myopia are linked to increased risk of certain eye conditions later in life -- slowing progression helps reduce that risk.",
              },
              {
                icon: Heart,
                title: "Regular Monitoring",
                desc: "We monitor your child's prescription and eye growth at each visit, so we can see how well management is working over time.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <item.icon className="w-8 h-8 text-[#C9A96E]" />
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#1A2E45]/60 text-sm font-light max-w-2xl">
            Myopia management doesn't reverse short-sightedness or guarantee a particular result for every child --
            it's an evidence-informed approach aimed at slowing progression. We're happy to talk through whether it
            could be right for your child during a children's eye examination.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Wondering if myopia management is right for your child?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Children's Eye Examination
          </a>
          <p className="text-[#1A2E45]/60 text-sm font-light">
            See our{" "}
            <a href="/childrens-eye-care" className="text-[#C9A96E] hover:text-[#C9A96E]/80 transition-colors">
              Children's Eye Care
            </a>{" "}
            page for more on what to expect.
          </p>
        </div>
      </section>
      <FaqSection items={getFaqItems("childrens-eye-care")} />
    </Layout>
  );
}

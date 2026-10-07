import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { Layers, Ruler, Sparkles } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  lenses: "/images/transition-lenses-display.jpeg",
};

export default function Varifocals() {
  useMetaTags({
    title: "Premium Varifocals Billericay — Essilor Varilux | Stratton",
    description: "Premium Essilor Varilux varifocals in Billericay with a personalised fitting. Seamless vision at every distance, no visible lines.",
    canonical: "http://localhost:3001/varifocals",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Beyond the Frame</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Premium Varifocals in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Essilor Varilux varifocals offer seamless vision at every distance -- near, intermediate, and
            far -- without the visible lines of traditional bifocals. Fitted personally to you, they're designed
            to feel natural from the very first wear.
          </p>
        </div>
      </section>

      {/* How they work */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                How varifocals work
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  A varifocal lens blends your distance, intermediate, and reading prescriptions into one lens, with
                  the power changing gradually from top to bottom. Look up for distance, straight ahead for
                  everyday tasks, and down for reading -- one pair of glasses for your whole day.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Most people need a week or two to adjust, as your eyes and brain learn where to look for each
                  distance. We'll guide you through this during your fitting and are always happy to see you again
                  if anything needs fine-tuning.
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={IMAGES.lenses}
                  alt="Premium lens display at Stratton Opticians"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalised fitting */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">The Fitting</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A personalised fitting, not a one-size-fits-all lens
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Ruler,
                title: "Precise Measurements",
                desc: "We take detailed measurements of exactly how the frame sits on your face, so the lens is built around you.",
              },
              {
                icon: Layers,
                title: "Lens Technology",
                desc: "Essilor Varilux designs give wider, more stable fields of vision at every distance compared to standard varifocals.",
              },
              {
                icon: Sparkles,
                title: "Finishing Touches",
                desc: "Coatings like anti-reflective, anti-scratch, and blue-light filtering can all be added to suit how you use your glasses.",
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready for seamless vision at every distance?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Dispensing Appointment
          </a>
          <p className="text-[#1A2E45]/60 text-sm font-light">
            See our full{" "}
            <a href="/eyewear" className="text-[#C9A96E] hover:text-[#C9A96E]/80 transition-colors">
              Eyewear &amp; Designer Frames
            </a>{" "}
            range.
          </p>
        </div>
      </section>
      <FaqSection items={getFaqItems("varifocals", "essilor-lenses")} />
    </Layout>
  );
}

import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { Eye, Zap, Heart, AlertCircle } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  perspective: "/images/perspective-poster.jpeg",
};

export default function VisualStress() {
  useMetaTags({
    title: "Visual Stress Assessment Essex — Stratton Opticians",
    description: "Visual stress & colourimetry assessment in Billericay using ChromaGen lenses. Helps reading difficulties, light sensitivity & visual processing. Expert assessment, both children & adults.",
    canonical: "http://localhost:3001/visual-stress-assessments",
  });
  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Specialist Care</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Visual Stress & Colourimetry Assessment in Essex
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            If reading feels uncomfortable, text appears to shimmer or blur, or you struggle with visual processing despite having a normal eye prescription, a visual stress assessment might help. We use the ChromaGen system to find a colour tint that may improve clarity and comfort.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Who benefits from colourimetry?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Reading Difficulties",
                  desc: "If reading is effortful, slow, or tiring, despite normal vision correction, visual stress may be a factor.",
                },
                {
                  icon: Zap,
                  title: "Light Sensitivity",
                  desc: "Fluorescent lighting, screen glare, or bright environments cause discomfort or headaches. Tinted lenses can help.",
                },
                {
                  icon: Heart,
                  title: "Visual Stress & Reading Support",
                  desc: "For children and adults with visual stress, the right colour overlay may help make text appear clearer and easier to process.",
                },
                {
                  icon: Eye,
                  title: "Concentration Issues",
                  desc: "Difficulty focusing, visual fatigue, or attention problems may improve with colour-filtered lenses.",
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
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How the ChromaGen assessment works
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                During the assessment, you'll view reading samples through a range of tinted lenses. Your optometrist observes which colour combination makes reading clearest, fastest, and most comfortable. The correct colour is personal to you—no two people are the same.
              </p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                For some, the difference is immediate and dramatic. For others, it's subtle but meaningful. Once we've identified your optimal colour, ChromaGen filters can be incorporated into prescription lenses.
              </p>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={IMAGES.perspective}
                alt="Visual perspective - 'sometimes all you need is a new perspective' motivational poster at Stratton Opticians"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8 p-8 rounded-lg border border-[#C9A96E]/30 bg-[#C9A96E]/10">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-[#C9A96E] shrink-0 mt-0.5" />
              <div className="space-y-4">
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  A note on evidence
                </h3>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  There is currently no strong clinical evidence in mainstream research supporting tinted lenses or colourimetry as a treatment for reading difficulties or visual stress. However, many individuals report genuine, meaningful improvements in comfort and reading fluency when using the right colour.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  We believe it's important to be transparent about this. Some people find colourimetry transformative; others find minimal benefit. The best way to know is to try it and see how you respond. We won't pressure you—only offer it as an option worth exploring if you're interested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <h2
            className="text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            For children and adults
          </h2>
          <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
            Visual stress assessments are available for both children and adults. If you're curious whether colourimetry might help—or want to support a child who struggles with reading—we'd be happy to discuss it during a consultation.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Interested in exploring colourimetry?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Visual Stress & Colourimetry Assessment
          </a>
        </div>
      </section>
      <FaqSection items={getFaqItems("visual-stress-assessments")} />
    </Layout>
  );
}

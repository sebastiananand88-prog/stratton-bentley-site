import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { Eye, Activity, Clock } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  measurement: "/images/eye-model-display.jpeg",
};

export default function GlaucomaAssessments() {
  useMetaTags({
    title: "Glaucoma Assessment Billericay – Stratton Opticians",
    description: "Advanced glaucoma assessments in Billericay using OCT imaging and eye pressure testing, for early detection and ongoing monitoring.",
    canonical: "http://localhost:3001/glaucoma-assessments",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Clinical Excellence</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Advanced Glaucoma Assessments in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Glaucoma develops gradually and often without symptoms, which is why regular assessment matters. We combine eye pressure testing with 3D OCT imaging to look for the earliest signs of change, often years before it would affect your vision.
          </p>
        </div>
      </section>

      {/* What's involved */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  What a glaucoma assessment involves
                </h2>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  A thorough glaucoma assessment looks at several things together: the pressure inside your eye, the
                  health and structure of your optic nerve, and your peripheral vision. No single test tells the
                  whole story, which is why we build a complete picture rather than relying on one reading.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Our 3D OCT scanner plays a central role here -- it creates a detailed cross-sectional image of the
                  optic nerve, letting us spot subtle thinning long before it would show up on a standard test. You
                  can read more about{" "}
                  <a href="/oct-scans" className="text-[#C9A96E] hover:text-[#C9A96E]/80 transition-colors">
                    our OCT scanning
                  </a>{" "}
                  on its own page.
                </p>
              </div>
              <div className="h-72 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src={IMAGES.measurement}
                  alt="Diagnostic equipment used for glaucoma assessment at Stratton Opticians"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who should consider it */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Risk Factors</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Who should pay particular attention?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Over 40",
                desc: "Risk increases with age, particularly from your 40s onwards.",
              },
              {
                icon: Activity,
                title: "Family History",
                desc: "Glaucoma can run in families -- a close relative with glaucoma roughly doubles your own risk.",
              },
              {
                icon: Eye,
                title: "Other Risk Factors",
                desc: "Diabetes, high eye pressure, short-sightedness, and certain ethnic backgrounds are all associated with higher risk.",
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
            This is general information, not a diagnosis or a substitute for an eye examination -- if you're
            concerned about your own risk, the best next step is to book an appointment and discuss it with your
            optometrist.
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
            Concerned about glaucoma?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Adult Eye Examination with OCT Scan
          </a>
        </div>
      </section>
      <FaqSection items={getFaqItems("oct-scans")} />
    </Layout>
  );
}

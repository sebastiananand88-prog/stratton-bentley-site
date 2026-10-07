import Layout from "@/components/Layout";
import { Droplets, Sun, Wind } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  display: "/images/display-equipment-eye.jpeg",
};

export default function DryEyeAssessments() {
  useMetaTags({
    title: "Dry Eye Assessment Billericay — Stratton Opticians",
    description: "Dry eye assessments in Billericay. Thorough assessment of dry, gritty or watery eyes, with advice tailored to what's causing your symptoms.",
    canonical: "http://localhost:3001/dry-eye-assessments",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Specialist Care</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Dry Eye Assessments in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Dry, gritty, or watery eyes are common, and often have more than one cause. Rather than guessing at a
            solution, we start by properly assessing what's going on -- then tailor advice to your specific
            symptoms.
          </p>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Common symptoms
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Droplets, title: "Grittiness", desc: "A sandy or gritty feeling, as if something is in your eye." },
                    { icon: Sun, title: "Light Sensitivity", desc: "Discomfort in bright light or when using screens for long periods." },
                    { icon: Wind, title: "Watering", desc: "Eyes that water excessively, often a response to underlying dryness." },
                    { icon: Droplets, title: "Fluctuating Vision", desc: "Vision that seems to blur and clear, especially when reading or on screens." },
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <item.icon className="w-7 h-7 text-[#C9A96E]" />
                      <h3 className="font-semibold text-[#1A2E45]">{item.title}</h3>
                      <p className="text-[#1A2E45]/70 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-72 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src={IMAGES.display}
                  alt="Eye examination equipment display at Stratton Opticians"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the assessment involves */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">The Assessment</p>
            <h2
              className="text-4xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Finding the cause, not just the symptom
            </h2>
          </div>
          <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
            Dry eye can come from several different causes -- reduced tear production, poor tear quality, eyelid
            conditions, screen use, certain medications, and more. A proper assessment looks at your tear film, the
            health of your eyelids and glands, and your symptoms together, so any advice we give is tailored to
            what's actually causing your discomfort rather than a generic recommendation.
          </p>
          <p className="text-[#1A2E45]/60 text-sm font-light max-w-2xl">
            Treatment approaches vary from person to person -- we'll talk through what's realistic for you during
            your assessment rather than promising a specific outcome in advance.
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
            Living with uncomfortable eyes?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </Layout>
  );
}

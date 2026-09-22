import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { Zap, Eye, Shield, ArrowRight } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  equipment: "/images/equipment-phoropter.jpeg",
};

export default function OctScans() {
  useMetaTags({
    title: "OCT Eye Scans Billericay — Early Glaucoma Detection | Stratton",
    description: "3D OCT retinal scans in Billericay for early detection of glaucoma, macular degeneration & diabetic retinopathy. Hospital-quality imaging, gentle assessment.",
    canonical: "http://localhost:3001/oct-scans",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Advanced Technology</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            OCT Retinal Scans in Billericay — Advanced Eye Disease Detection
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            OCT (Optical Coherence Tomography) is the gold standard in eye imaging. Used in hospitals and specialist clinics worldwide, it reveals the eye's inner structures in extraordinary detail. At Stratton, you have access to the same technology—with the added benefit of time, expertise, and care.
          </p>
        </div>
      </section>

      {/* What is OCT */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What is OCT scanning?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  OCT works like an ultrasound for your eye. It uses light waves to create cross-sectional images of the retina and optic nerve with incredible precision. In seconds, it reveals structures that would otherwise be invisible—layer by layer, cell by cell.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  It's painless, non-invasive, and requires no dilation. You simply look into the scanner, and within moments, we have a detailed, permanent record of your eye's health.
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={IMAGES.equipment}
                  alt="OCT scanning equipment at Stratton Opticians in Billericay"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What OCT Detects */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Early Detection</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What can OCT detect?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Glaucoma",
                desc: "Silent damage to the optic nerve. OCT detects thinning before vision loss occurs, often years ahead of symptoms.",
              },
              {
                icon: Zap,
                title: "Macular Degeneration",
                desc: "Age-related breakdown of central vision. Early detection enables interventions that can slow progression.",
              },
              {
                icon: Shield,
                title: "Diabetic Retinopathy",
                desc: "Damage to retinal blood vessels from diabetes. OCT catches the earliest changes before you notice anything.",
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

          <div className="p-8 bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg space-y-4">
            <p className="text-[#1A2E45] leading-relaxed font-light">
              OCT can also be used to create a baseline image of a healthy eye, giving us a reference point for future scans. This is especially valuable if you have risk factors for eye disease or simply want the peace of mind that comes with knowing your eye health is being carefully monitored.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Understanding your scan
              </h2>
            </div>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              We never leave you wondering what your OCT scan shows. Every finding is explained in plain, simple language. We discuss what we see, what it means, and what—if anything—needs to happen next. No jargon, no assumptions that you'll understand medical terminology. Just clear, honest conversation about your eye health.
            </p>
          </div>
        </div>
      </section>

      {/* When to Consider OCT */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Is OCT Right for You?</p>
            <h2
              className="text-4xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Consider OCT scanning if:
            </h2>
          </div>
          <ul className="space-y-4 max-w-2xl">
            {[
              "You're over 60 or have a family history of eye disease",
              "You've been diagnosed with diabetes or high blood pressure",
              "You have a personal history of glaucoma",
              "You want the most thorough eye health assessment available",
              "Your optometrist recommends it based on your eye exam",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <Zap className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                <span className="text-[#1A2E45]/70 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to experience advanced eye care?
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

import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { Eye, Shield, Heart } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  fittingArea: "/images/frame-fitting-area.jpeg",
};

export default function ContactLenses() {
  useMetaTags({
    title: "Contact Lens Fitting Billericay — Stratton Opticians",
    description: "Contact lens consultation & fitting in Billericay. All lens types, multifocal options, aftercare support. Expert fitting & advice. Book today.",
    canonical: "http://localhost:3001/contact-lenses",
  });
  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Vision Solutions</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Contact Lens Fitting & Aftercare in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Whether you're interested in contact lenses for the first time or seeking a change, we take time to find the right option for your eyes and your life. There's no rush, no pressure—only a conversation about what matters to you.
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
              The consultation process
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Assessment",
                  desc: "We measure your cornea shape, check eye health, and discuss your lifestyle, preferences, and vision goals.",
                },
                {
                  icon: Shield,
                  title: "Fitting & Trial",
                  desc: "We fit test lenses, check comfort and vision clarity, and let you experience how different types feel throughout your day.",
                },
                {
                  icon: Heart,
                  title: "Aftercare Support",
                  desc: "Ongoing guidance on cleaning, care, and comfort. We're here if you have questions or need adjustments.",
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Types & Options</p>
              <h2
                className="text-4xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                All types of contact lenses
              </h2>
            </div>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              Daily disposables, weekly, monthly, extended wear—we fit all types and brands of contact lenses, including multifocal lenses for presbyopia. Whether you're seeking maximum comfort, convenience, or specialised lens geometry, our expert team will help you find the right fit.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={IMAGES.fittingArea}
              alt="Contact lens fitting area and frame displays at Stratton Opticians"
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            <h2
              className="text-4xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Care & comfort, always
            </h2>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              Wearing contact lenses should feel effortless and comfortable. We'll teach you proper insertion, removal, and daily care. If you ever experience discomfort or have questions, we're just a call away—no appointment necessary for quick queries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to explore contact lenses?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Contact Lens Consultation
          </a>
        </div>
      </section>
      <FaqSection items={getFaqItems("contact-lenses")} />
    </Layout>
  );
}

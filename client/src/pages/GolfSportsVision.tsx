import Layout from "@/components/Layout";
import { Target, Phone, Mail } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

export default function GolfSportsVision() {
  useMetaTags({
    title: "Golf & Sports Vision Billericay — Stratton Opticians",
    description: "Performance visual screening for golf and sport at Stratton Opticians in Billericay. Get in touch to find out more.",
    canonical: "http://localhost:3001/golf-sports-vision",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">New Service</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Golf &amp; Sports Vision
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            We're introducing golf and sports performance visual screening at Stratton Opticians. Full details of
            this service are coming soon -- in the meantime, please get in touch and we'll be happy to discuss it
            with you directly.
          </p>
        </div>
      </section>

      {/* Placeholder notice */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="p-8 bg-white rounded-lg border-2 border-dashed border-[#1A2E45]/30 text-center space-y-4">
          <Target className="w-8 h-8 text-[#C9A96E]/40 mx-auto" />
          <p className="text-[#1A2E45]/60 font-light">
            More information about our golf and sports vision screening is on its way. Contact us using the details
            below to be among the first to hear more.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="tel:01277650584"
              className="p-8 bg-white rounded-lg border border-[#1A2E45]/10 hover:border-[#C9A96E]/50 hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <Phone className="w-8 h-8 text-[#C9A96E]" />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Call Us
              </h3>
              <p className="font-semibold text-[#C9A96E] text-sm">01277 650584</p>
            </a>
            <a
              href="mailto:info@strattonopticians.co.uk"
              className="p-8 bg-white rounded-lg border border-[#1A2E45]/10 hover:border-[#C9A96E]/50 hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <Mail className="w-8 h-8 text-[#C9A96E]" />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Email
              </h3>
              <p className="font-semibold text-[#C9A96E] text-sm break-all">info@strattonopticians.co.uk</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

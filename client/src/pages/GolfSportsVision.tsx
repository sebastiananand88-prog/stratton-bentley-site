import Layout from "@/components/Layout";
import FaqSection from "@/components/FaqSection";
import { getFaqItems } from "@/lib/faqData";
import { Target, Zap, Eye } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  interior: "/images/storefront-entrance.jpeg",
};

export default function GolfSportsVision() {
  useMetaTags({
    title: "Golf & Sports Vision Billericay – Stratton Opticians",
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
            Golf &amp; Sports Vision in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            We're introducing performance visual screening for golf and sport at Stratton Opticians. Full details of
            this service are still being finalised -- the information below is placeholder text while we prepare
            the real content, so please get in touch directly for anything specific in the meantime.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  What is sports vision screening?
                </h2>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="h-72 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src={IMAGES.interior}
                  alt="Stratton Opticians practice interior in Billericay"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder benefits */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Coming Soon</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What to expect
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Lorem Ipsum",
                desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
              },
              {
                icon: Zap,
                title: "Dolor Sit Amet",
                desc: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
              },
              {
                icon: Eye,
                title: "Consectetur",
                desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
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
            This section is placeholder content and will be replaced once full details of the service are
            confirmed -- please contact us directly for the latest information.
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
            Interested in golf or sports vision screening?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Get in Touch
          </a>
        </div>
      </section>
      <FaqSection items={getFaqItems("golf-sports-vision")} />
    </Layout>
  );
}

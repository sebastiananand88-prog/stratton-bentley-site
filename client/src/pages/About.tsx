import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Award, Heart, Eye } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  clinic: "/images/interior-clinic-wall.jpeg",
};

export default function About() {
  useMetaTags({
    title: "Independent Opticians Essex — Stratton & Bentley Since 1984",
    description: "Two independent optician locations in Essex serving Billericay & Leigh-on-Sea. Experienced optometrists (Jas & Tan), curated eyewear, advanced diagnostics.",
    canonical: "http://localhost:3001/about",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Our Story</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Independent Opticians Serving Essex Since 1976
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Since 1976, Stratton Opticians has been part of the Billericay community. We've built our practice on a simple belief: that eye care needn't be rushed, and that exceptional service sets us apart from every high-street chain. Today, we operate two locations—Stratton in Billericay and Bentley in Leigh-on-Sea—under the same ownership, philosophy, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Practice Values */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Eye className="w-8 h-8 text-[#C9A96E]" />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Always Seen on Time
              </h3>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                Your appointment starts when you arrive. We respect your time as much as you respect ours. No waiting rooms, no rushing through consultations.
              </p>
            </div>
            <div className="space-y-4">
              <Heart className="w-8 h-8 text-[#C9A96E]" />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Fully Customised Care
              </h3>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                Every eye is different. Every patient has unique needs. We take time to understand yours, and tailor every examination accordingly.
              </p>
            </div>
            <div className="space-y-4">
              <Award className="w-8 h-8 text-[#C9A96E]" />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Honest Expertise
              </h3>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                We explain what we find in clear language, never high-pressure sales. Our goal is your vision and comfort, not a transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Interior Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-lg overflow-hidden">
          <img
            src={IMAGES.clinic}
            alt="Inside Stratton Opticians clinic with professional eye care equipment and welcoming interior"
            className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-16">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Meet the Team</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The people behind the practice
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Jas */}
            <div className="space-y-4">
              <img
                src="/images/jas.jpeg"
                alt="Jas Chaggar, Principal Optometrist and Owner at Stratton Opticians"
                className="aspect-square object-cover rounded-lg w-full"
              />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Jas Chaggar
              </h3>
              <p className="text-sm text-[#C9A96E] uppercase tracking-[0.15em] font-semibold">Principal Optometrist & Owner</p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                Jas is passionate about providing exceptional eye care, combining advanced clinical technology with a genuinely personal approach. He believes every patient deserves the time to understand their eye health and vision, ensuring they leave feeling informed, reassured and confident in their care.
              </p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light text-sm">
                As Principal Optometrist, Jas has a particular interest in soft contact lenses, post-cataract care, glaucoma refinement, diabetic eye assessments and visual stress assessments for both adults and children. His aim is always to provide the most appropriate solution for each patient, tailoring advice and treatment to their individual needs.
              </p>
            </div>

            {/* Sheila */}
            <div className="space-y-4">
              <img
                src="/images/sheila.jpeg"
                alt="Sheila, Lead Dispenser at Stratton Opticians"
                className="aspect-square object-cover rounded-lg w-full"
              />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Sheila
              </h3>
              <p className="text-sm text-[#C9A96E] uppercase tracking-[0.15em] font-semibold">Lead Dispenser</p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                Sheila is our lead dispenser and has a real passion for helping patients find the perfect eyewear. She enjoys taking the time to understand each person's needs, helping them choose frames that suit their style and personality, together with lenses that provide the best possible vision for their lifestyle.
              </p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light text-sm">
                Known for her friendly, patient and approachable manner, Sheila takes pride in ensuring every patient enjoys a relaxed, personal experience and leaves feeling confident in their new glasses.
              </p>
            </div>

            {/* Jen */}
            <div className="space-y-4">
              <img
                src="/images/jen.jpeg"
                alt="Jen, welcoming receptionist and frame advisor at Stratton Opticians"
                className="aspect-square object-cover rounded-lg w-full"
              />
              <h3
                className="text-2xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Jen
              </h3>
              <p className="text-sm text-[#C9A96E] uppercase tracking-[0.15em] font-semibold">Receptionist & Frame Advisor</p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                Jen is one of the friendly faces you'll meet at Stratton Opticians, where she plays a key role in welcoming patients, managing appointments and ensuring the practice runs smoothly each day. She enjoys helping patients choose frames that complement both their lifestyle and personal style, making the experience of selecting new glasses relaxed and enjoyable.
              </p>
              <p className="text-[#1A2E45]/70 leading-relaxed font-light text-sm">
                Jen takes pride in providing excellent customer service and making every patient feel welcomed, valued and well looked after from the moment they walk through the door. Her warm and approachable manner helps create the personal experience that Stratton Opticians is known for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Credentials</p>
              <h2
                className="text-4xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Fully regulated and accredited
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "NHS", desc: "Registered NHS provider" },
                { name: "GOC", desc: "General Optical Council" },
                { name: "College of Optometrists", desc: "UK professional body" },
                { name: "Association of Optometrists", desc: "Professional membership" },
              ].map((badge, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="aspect-square bg-[#1A2E45]/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#1A2E45]/40">[Logo]</span>
                  </div>
                  <p className="font-semibold text-[#1A2E45] text-sm">{badge.name}</p>
                  <p className="text-xs text-[#1A2E45]/60">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <p className="text-[#1A2E45]/70 leading-relaxed">
            Learn more about our services, or book an appointment to experience the Stratton difference.
          </p>
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

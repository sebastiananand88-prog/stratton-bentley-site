import Layout from "@/components/Layout";
import { Heart, Eye, Shield, CheckCircle2 } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  reception: "/images/reception-desk.jpeg",
};

export default function ChildrensEyeCare() {
  useMetaTags({
    title: "Children's Eye Test Billericay — Stratton Opticians",
    description: "Children's eye examinations in Billericay. Myopia management with Essilor Stellest, age-appropriate testing, NHS voucher support, warm & reassuring.",
    canonical: "http://localhost:3001/childrens-eye-care",
  });
  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Young Eyes</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Children's Eye Examinations Billericay — Myopia Management & Care
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            A child's vision is still developing. Regular eye tests are crucial—not just to check prescription, but to ensure healthy development and catch any issues early. At Stratton, we specialise in making the experience comfortable, reassuring, and even fun.
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
              What a children's eye test includes
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Age-Appropriate Assessment",
                  desc: "Children don't need to read to have an eye test. We assess vision at the developmental level appropriate for their age.",
                },
                {
                  icon: Heart,
                  title: "Family History Review",
                  desc: "We discuss any family history of eye problems or eye disease, as these can influence a child's risk and care plan.",
                },
                {
                  icon: Shield,
                  title: "Preventative Focus",
                  desc: "We screen for conditions that, if left undetected, could affect learning and development—like uncorrected myopia or focusing problems.",
                },
                {
                  icon: CheckCircle2,
                  title: "Supportive Environment",
                  desc: "A calm, welcoming space designed for children. Our team specialises in paediatric eye care and knows how to work with younger patients with patience and understanding.",
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
          <div className="space-y-6">
            <div>
              <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Modern Care</p>
              <h2
                className="text-4xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Myopia management: slowing short-sightedness
              </h2>
            </div>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              If your child is developing myopia (short-sightedness), specialised lenses like Essilor Stellest can slow its progression. Regular outdoor time, proper lighting when reading, and correcting refractive error early all support healthy eye development.
            </p>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              We'll discuss whether myopia management is right for your child and explain how it works.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={IMAGES.reception}
              alt="Welcoming reception area at Stratton Opticians, child-friendly environment"
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
              NHS support for children's glasses
            </h2>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              Children qualify for an NHS optical voucher that can cover the cost of basic lenses or contribute towards the overall cost of spectacles, depending on prescription needs and voucher value. After the initial fitting, we recommend annual check-ins to monitor eye development and refractive changes.
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
            Ready to book your child's eye test?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Children's Eye Examination
          </a>
        </div>
      </section>
    </Layout>
  );
}

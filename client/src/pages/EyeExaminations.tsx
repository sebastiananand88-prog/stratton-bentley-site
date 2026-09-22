import Layout from "@/components/Layout";
import { Clock, Microscope, CheckCircle2, ArrowRight } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  examRoom: "/images/exam-room-equipment.jpeg",
};

export default function EyeExaminations() {
  useMetaTags({
    title: "Eye Test Billericay | Stratton Opticians Comprehensive Exams",
    description: "Comprehensive eye examinations in Billericay. Tailored 1-hour tests, disease screening (glaucoma, diabetic retinopathy), NHS & private. Book now.",
    canonical: "http://localhost:3001/eye-examinations",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Eye Care</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Comprehensive Eye Examinations in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            A proper eye examination is not rushed. At Stratton, we allow up to one hour per patient, tailored to your individual needs and history. We screen for eye disease, monitor your overall eye health, and ensure any changes are caught early.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Comprehensive Care</p>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What a Stratton eye examination includes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Unhurried Consultation",
                  desc: "Time to discuss your vision, lifestyle, and any concerns. No time pressure, just genuine conversation about your needs.",
                },
                {
                  icon: Microscope,
                  title: "Detailed Vision Assessment",
                  desc: "State-of-the-art equipment measures your prescription precisely, identifying any changes and ensuring optimal clarity.",
                },
                {
                  icon: CheckCircle2,
                  title: "Eye Disease Screening",
                  desc: "We screen for glaucoma, cataracts, macular degeneration, diabetic retinopathy, and other conditions that may have no early symptoms.",
                },
                {
                  icon: CheckCircle2,
                  title: "Overall Health Review",
                  desc: "Systemic conditions like diabetes and high blood pressure often show early signs in the eye. We look for these too.",
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

      {/* Why Early Detection Matters */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why regular examinations matter
            </h2>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light">
              Some of the most serious eye conditions—glaucoma, macular degeneration, diabetic retinopathy—develop silently. You may feel no pain, see no symptoms, yet permanent damage can occur. By the time you notice something's wrong, it may be too late.
            </p>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light">
              Regular eye examinations catch these conditions early, when treatment is most effective. This is especially important if you're over 60, have a family history of eye disease, or manage conditions like diabetes.
            </p>
            <div className="pt-4">
              <a
                href="/oct-scans"
                className="text-[#C9A96E] hover:text-[#C9A96E]/80 font-medium flex items-center gap-2 transition-colors"
              >
                Learn about advanced OCT scanning <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={IMAGES.examRoom}
              alt="Stratton Opticians examination room with advanced diagnostic equipment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* NHS & Private */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                NHS and Private eye care
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-white rounded-lg border border-[#1A2E45]/10">
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  NHS Eye Test
                </h3>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  We are registered NHS providers. If you qualify for a free NHS eye test, we're happy to deliver the same standard of thorough, personalised care under the NHS. You still benefit from our unhurried approach and expert team.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-white rounded-lg border border-[#1A2E45]/10">
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Private Eye Test
                </h3>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Private examinations offer flexibility in scheduling, extended consultation time, and access to advanced diagnostics like OCT scanning. For those seeking the fullest assessment, private is often the best choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Optometrists */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Experience You Can Trust</p>
            <h2
              className="text-4xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Both our optometrists have 15+ years of clinical experience
            </h2>
          </div>
          <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
            Jas and Tan bring decades of combined expertise to every examination. They stay current with the latest techniques and technologies, and genuinely enjoy spending time with patients to understand their needs. You're not a time slot—you're someone they're invested in helping.
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
            Ready to book your examination?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Adult Eye Examination
          </a>
        </div>
      </section>
    </Layout>
  );
}

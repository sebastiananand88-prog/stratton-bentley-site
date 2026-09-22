import Layout from "@/components/Layout";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

export default function Book() {
  useMetaTags({
    title: "Book Eye Appointment Billericay — Stratton Opticians",
    description: "Book your eye appointment in Billericay. Online booking, phone, email & WhatsApp. Same-day or next-day available. Emergency appointments welcome.",
    canonical: "http://localhost:3001/book",
  });
  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Book Your Visit</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book Your Eye Appointment in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Choose whichever works best for you. All three options lead to the same exceptional service—we just want to make it easy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                contact: "01277 650584",
                desc: "Speak directly with Sheila. She'll find the perfect time for you.",
                link: "tel:01277650584",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                contact: "Coming soon",
                desc: "WhatsApp messaging isn't set up yet -- please call or email for now.",
                link: null,
              },
              {
                icon: Mail,
                title: "Email",
                contact: "info@strattonopticians.co.uk",
                desc: "Drop us a line and let us know what you're looking for.",
                link: "mailto:info@strattonopticians.co.uk",
              },
            ].map((option, i) => {
              const cardClasses =
                "p-8 rounded-lg border space-y-4 group transition-all duration-300" +
                (option.link
                  ? " bg-white border-[#1A2E45]/10 hover:border-[#C9A96E]/50 hover:shadow-lg"
                  : " bg-[#1A2E45]/5 border-[#1A2E45]/10 opacity-60 cursor-not-allowed");
              const content = (
                <>
                  <option.icon className="w-8 h-8 text-[#C9A96E] group-hover:text-[#C9A96E]" />
                  <h3
                    className="text-2xl font-light text-[#1A2E45]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {option.title}
                  </h3>
                  <p className="font-semibold text-[#C9A96E] text-sm">{option.contact}</p>
                  <p className="text-[#1A2E45]/70 leading-relaxed font-light text-sm">{option.desc}</p>
                </>
              );
              return option.link ? (
                <a key={i} href={option.link} className={cardClasses}>
                  {content}
                </a>
              ) : (
                <div key={i} className={cardClasses} aria-disabled="true">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Choose Your Service</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What would you like to book?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Adult Eye Examination", desc: "Comprehensive eye test (up to 1 hour)" },
              { title: "Adult Eye Examination with OCT Scan", desc: "Standard exam plus advanced retinal imaging" },
              { title: "Children's Eye Examination", desc: "Age-appropriate vision and eye health check" },
              { title: "Contact Lens Consultation", desc: "Initial fitting, trial, and guidance" },
              { title: "Contact Lens Aftercare", desc: "Routine check-up and prescription review" },
              { title: "Visual Stress & Colourimetry Assessment", desc: "Explore tinted lenses for reading comfort" },
              { title: "Dispensing Appointment", desc: "Frame selection and bespoke fitting" },
              { title: "Glasses Collection", desc: "Pick up your completed prescription" },
              { title: "Emergency or Urgent Eye Concern", desc: "Same-day or next-day appointment" },
            ].map((service, i) => (
              <div key={i} className="p-6 border border-[#1A2E45]/10 rounded-lg hover:bg-[#1A2E45]/5 transition-colors">
                <h3 className="font-semibold text-[#1A2E45] mb-2">{service.title}</h3>
                <p className="text-sm text-[#1A2E45]/60 font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Opening hours
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Monday – Friday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 5:30pm</span>
                </div>
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Saturday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 1:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#1A2E45]">Sunday</span>
                  <span className="text-[#1A2E45]/50 font-light">Closed</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Location
                </h3>
                <div className="space-y-2 text-[#1A2E45]/70 font-light">
                  <p>14 The Pantiles</p>
                  <p>Queens Park Avenue</p>
                  <p>Billericay, Essex</p>
                  <p>CM12 0UA</p>
                </div>
                <p className="text-sm text-[#1A2E45]/60">
                  Off-street parking available outside the practice. Car park opposite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <div>
            <h2
              className="text-4xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Get in touch
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A2E45]">Phone</h3>
              <a
                href="tel:01277650584"
                className="text-[#C9A96E] hover:text-[#C9A96E]/80 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                01277 650584
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A2E45]">Email</h3>
              <a
                href="mailto:info@strattonopticians.co.uk"
                className="text-[#C9A96E] hover:text-[#C9A96E]/80 flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@strattonopticians.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER: Booking embed would go here */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="p-8 bg-white rounded-lg border-2 border-dashed border-[#1A2E45]/30 text-center space-y-4">
            <Calendar className="w-8 h-8 text-[#C9A96E]/40 mx-auto" />
            <p className="text-[#1A2E45]/60 font-light">
              {/* PLACEHOLDER: Flex/Optinet booking system embed goes here. Currently using phone/email/WhatsApp as primary booking methods. Update with live embed once Flex/Optinet integration is configured. */}
              Online booking integration coming soon. For now, please call, email, or message us.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

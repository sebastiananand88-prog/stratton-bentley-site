import Layout from "@/components/Layout";
import { Phone, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const BOOKING_URL = "https://patientbookings.co.uk/StrattonOpticians";

export default function Book() {
  useMetaTags({
    title: "Book Eye Appointment Billericay – Stratton Opticians",
    description: "Book your eye appointment in Billericay online, by phone, email or WhatsApp. Same-day or next-day appointments where available.",
    canonical: "http://localhost:3001/book",
  });
  return (
    <Layout>
      <section className="pt-32 pb-12 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Book Your Visit</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book Your Eye Appointment in Billericay
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Choose whichever works best for you. All options lead to the same exceptional service – we just want to make it easy.
          </p>
        </div>
      </section>

      {/* Primary booking CTA */}
      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 bg-[#1A2E45] rounded-2xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#C9A96E]/15 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#C9A96E]" />
            </div>
            <div>
              <h2
                className="text-2xl font-light text-[#F8F4EF] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Book online now
              </h2>
              <p className="text-[#F8F4EF]/60 text-sm font-light">
                Choose your appointment type and a time that works for you, instantly.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full group-hover:bg-[#C9A96E]/90 transition-all shrink-0">
            Book Online <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </section>

      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                contact: "01277 650584",
                desc: "Speak with our friendly reception team -- they'll help you find a suitable appointment.",
                link: "tel:01277650584",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                contact: "Message us",
                desc: "Send a message and we'll get back to you at our earliest convenience.",
                link: "https://wa.me/447929049999",
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
              const isExternal = option.link?.startsWith("http");
              return option.link ? (
                <a
                  key={i}
                  href={option.link}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={cardClasses}
                >
                  {content}
                </a>
              ) : (
                <div key={i} className={cardClasses} aria-disabled="true">
                  {content}
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-[#1A2E45]/60">
            Phone and WhatsApp are answered Monday&ndash;Friday 9:00am&ndash;5:30pm and Saturday 9:00am&ndash;1:00pm.
            For full address, map and opening hours, visit our{" "}
            <a href="/contact" className="text-[#C9A96E] hover:text-[#C9A96E]/80 underline underline-offset-2">
              Contact page
            </a>
            .
          </p>
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
              { title: "Urgent Eye Concern", desc: "Call us directly and we'll do our best to fit you in as soon as possible" },
            ].map((service, i) => (
              <div key={i} className="p-6 border border-[#1A2E45]/10 rounded-lg hover:bg-[#1A2E45]/5 transition-colors">
                <h3 className="font-semibold text-[#1A2E45] mb-2">{service.title}</h3>
                <p className="text-sm text-[#1A2E45]/60 font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}

import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { useState } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  storefront: "/images/storefront-exterior.jpeg",
};

export default function Contact() {
  useMetaTags({
    title: "Contact Stratton Opticians Billericay — Address & Opening Hours",
    description: "Contact Stratton Opticians in Billericay: 14 The Pantiles. Phone 01277 650584, email info@strattonopticians.co.uk. Mon–Fri 9am–5:30pm, Sat 9am–1pm.",
    canonical: "http://localhost:3001/contact",
  });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Get in Touch</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Contact Stratton Opticians Billericay — Address & Opening Hours
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Questions about our services? Want to book an appointment? Feel free to reach out—we're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Location Card */}
          <div className="space-y-6 p-8 border border-[#1A2E45]/10 rounded-lg">
            <MapPin className="w-8 h-8 text-[#C9A96E]" />
            <div>
              <h3
                className="text-2xl font-light text-[#1A2E45] mb-4"
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
              <p className="text-sm text-[#1A2E45]/60 mt-4">
                Off-street parking available outside the practice. Car park opposite.
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="space-y-6 p-8 border border-[#1A2E45]/10 rounded-lg">
            <Phone className="w-8 h-8 text-[#C9A96E]" />
            <div>
              <h3
                className="text-2xl font-light text-[#1A2E45] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Phone
              </h3>
              <a
                href="tel:01277650584"
                className="text-[#C9A96E] hover:text-[#C9A96E]/80 font-medium transition-colors"
              >
                01277 650584
              </a>
              <p className="text-sm text-[#1A2E45]/60 mt-4">
                Call during opening hours to book or ask questions.
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="space-y-6 p-8 border border-[#1A2E45]/10 rounded-lg">
            <Mail className="w-8 h-8 text-[#C9A96E]" />
            <div>
              <h3
                className="text-2xl font-light text-[#1A2E45] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Email
              </h3>
              <a
                href="mailto:info@strattonopticians.co.uk"
                className="text-[#C9A96E] hover:text-[#C9A96E]/80 font-medium transition-colors break-all"
              >
                info@strattonopticians.co.uk
              </a>
              <p className="text-sm text-[#1A2E45]/60 mt-4">
                Send us a message and we'll respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#C9A96E]" />
              <h2
                className="text-4xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Opening hours
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Monday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 5:30pm</span>
                </div>
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Tuesday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 5:30pm</span>
                </div>
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Wednesday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 5:30pm</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Thursday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 5:30pm</span>
                </div>
                <div className="flex justify-between border-b border-[#1A2E45]/10 pb-3">
                  <span className="font-medium text-[#1A2E45]">Friday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 5:30pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#1A2E45]">Saturday</span>
                  <span className="text-[#1A2E45]/70 font-light">9:00am – 1:00pm</span>
                </div>
              </div>
            </div>
            <p className="text-[#1A2E45]/60 text-sm">Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <h2
            className="text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Find us
          </h2>
          <div className="rounded-lg overflow-hidden">
            <img
              src={IMAGES.storefront}
              alt="Stratton Opticians storefront on The Pantiles in Billericay, Essex"
              className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2
              className="text-4xl font-light text-[#1A2E45] mb-12"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Send us a message
            </h2>

            {submitted && (
              <div className="mb-8 p-4 bg-[#C9A96E]/20 border border-[#C9A96E] rounded-lg text-[#1A2E45] text-sm font-light">
                Thank you for your message. We'll get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1A2E45] mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#1A2E45]/20 rounded-lg focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2E45] mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#1A2E45]/20 rounded-lg focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2E45] mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#1A2E45]/20 rounded-lg focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-8">
          <h2
            className="text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Follow us
          </h2>
          <a
            href="https://facebook.com"
            className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#C9A96E]/80 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Find us on Facebook</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}

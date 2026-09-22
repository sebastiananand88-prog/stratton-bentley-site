import { useEffect, useState, ReactNode } from "react";
import { Phone, Mail, Instagram, Facebook, Menu, X } from "lucide-react";
import CookieConsent from "@/components/CookieConsent";

interface LayoutProps {
  children: ReactNode;
  /** Set on pages with a full-bleed dark hero image behind the header (e.g. the homepage),
   * so the header starts transparent with light text and only turns solid on scroll.
   * Every other page has a plain light background at the top, so the header should
   * always be solid/dark -- otherwise light header text is invisible on a light page. */
  transparentHero?: boolean;
}

export default function Layout({ children, transparentHero = false }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    if (!transparentHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentHero]);

  // Header is only ever transparent on pages that opt in AND haven't scrolled past their hero.
  const solid = !transparentHero || scrolled;

  return (
    <div
      className="min-h-screen text-[#1A2E45]"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#F8F4EF" }}
    >
      {/* ── NAVIGATION ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? "bg-[#F8F4EF]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 lg:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex flex-col leading-none group shrink-0">
            <span
              className={`text-2xl lg:text-2.5xl font-semibold tracking-tight transition-colors group-hover:opacity-80 ${
                solid || menuOpen ? "text-[#1A2E45]" : "text-[#F8F4EF]"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}
            >
              STRATTON
            </span>
            <span
              className="text-[8px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium mt-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Independent Opticians · Est. 1984
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden 2xl:flex items-center gap-8">
            {[
              { label: "About", href: "/about" },
              { label: "Eye Examinations", href: "/eye-examinations" },
              { label: "OCT Scans", href: "/oct-scans" },
              { label: "Eyewear", href: "/eyewear" },
              { label: "Contact Lenses", href: "/contact-lenses" },
              { label: "Children's Eye Care", href: "/childrens-eye-care" },
              { label: "Visual Stress", href: "/visual-stress-assessments" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-medium transition-colors tracking-wide whitespace-nowrap ${
                  solid ? "text-[#1A2E45]/70 hover:text-[#1A2E45]" : "text-[#F8F4EF]/80 hover:text-[#F8F4EF]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Nav (Compact for lg/xl) */}
          <nav className="hidden lg:flex 2xl:hidden items-center gap-5">
            {[
              { label: "About", href: "/about" },
              { label: "Eye Exams", href: "/eye-examinations" },
              { label: "OCT Scans", href: "/oct-scans" },
              { label: "Eyewear", href: "/eyewear" },
              { label: "Contacts", href: "/contact-lenses" },
              { label: "Children", href: "/childrens-eye-care" },
              { label: "Visual Stress", href: "/visual-stress-assessments" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-medium transition-colors tracking-wide whitespace-nowrap ${
                  solid ? "text-[#1A2E45]/70 hover:text-[#1A2E45]" : "text-[#F8F4EF]/80 hover:text-[#F8F4EF]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:01277650584"
              className={`text-xs transition-colors flex items-center gap-1 ${
                solid ? "text-[#1A2E45]/60 hover:text-[#1A2E45]" : "text-[#F8F4EF]/70 hover:text-[#F8F4EF]"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">01277 650584</span>
            </a>
            <a
              href="/book"
              className="px-5 py-2.5 bg-[#1A2E45] text-[#F8F4EF] text-xs font-medium tracking-wide rounded-full hover:bg-[#1A2E45]/90 active:scale-[0.97] transition-all duration-150 shrink-0"
            >
              Book
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 transition-colors ${solid || menuOpen ? "text-[#1A2E45]" : "text-[#F8F4EF]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#F8F4EF] border-t border-[#1A2E45]/10 px-6 py-6 space-y-2">
            {[
              { label: "About", href: "/about" },
              { label: "Eye Examinations", href: "/eye-examinations" },
              { label: "OCT Scans", href: "/oct-scans" },
              { label: "Eyewear", href: "/eyewear" },
              { label: "Contact Lenses", href: "/contact-lenses" },
              { label: "Children's Eye Care", href: "/childrens-eye-care" },
              { label: "Visual Stress", href: "/visual-stress-assessments" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-[#1A2E45]/80 hover:text-[#1A2E45] py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1A2E45]/10">
              <a
                href="tel:01277650584"
                className="block text-sm text-[#1A2E45]/70 hover:text-[#1A2E45] py-2 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                01277 650584
              </a>
              <a
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="block w-full mt-4 px-5 py-3 bg-[#1A2E45] text-[#F8F4EF] text-sm font-medium tracking-wide rounded-full text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="min-h-screen">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0F1B2D] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-[#F8F4EF]/10">
            <div className="md:col-span-2 space-y-4">
              <p
                className="text-xl font-semibold text-[#F8F4EF] tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}
              >
                STRATTON & BENTLEY OPTICIANS
              </p>
              <p className="text-[#F8F4EF]/40 text-sm leading-relaxed font-light max-w-xs">
                Independent opticians serving Essex since 1984. Two locations: Stratton in Billericay and Bentley in Leigh-on-Sea. Advanced clinical care and curated designer eyewear.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/strattonopticians.billericay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stratton Opticians on Instagram"
                  className="w-9 h-9 rounded-full border border-[#F8F4EF]/15 flex items-center justify-center text-[#F8F4EF]/50 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/strattonopticians/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stratton Opticians on Facebook"
                  className="w-9 h-9 rounded-full border border-[#F8F4EF]/15 flex items-center justify-center text-[#F8F4EF]/50 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-semibold">Explore</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#F8F4EF]/50 font-light">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Eye Examinations", href: "/eye-examinations" },
                  { label: "OCT Scans", href: "/oct-scans" },
                  { label: "Eyewear", href: "/eyewear" },
                  { label: "Contact Lenses", href: "/contact-lenses" },
                  { label: "Children's Eye Care", href: "/childrens-eye-care" },
                  { label: "Visual Stress", href: "/visual-stress-assessments" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Book", href: "/book" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-[#C9A96E] transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-semibold">Billericay</p>
              <div className="space-y-2 text-sm text-[#F8F4EF]/50 font-light">
                <p>14 The Pantiles</p>
                <p>Queens Park Avenue</p>
                <p>Billericay CM12 0UA</p>
                <a href="tel:01277650584" className="block mt-3 text-[#F8F4EF]/70 hover:text-[#C9A96E] transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3" /> 01277 650584
                </a>
                <a href="mailto:info@strattonopticians.co.uk" className="block text-[#F8F4EF]/70 hover:text-[#C9A96E] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3 h-3" /> info@strattonopticians.co.uk
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-semibold">Opening Hours</p>
              <div className="space-y-1.5 text-sm text-[#F8F4EF]/50 font-light">
                <div className="flex justify-between gap-4">
                  <span>Mon – Fri</span>
                  <span className="text-[#F8F4EF]/70">9am – 5:30pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="text-[#F8F4EF]/70">9am – 1pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="text-[#F8F4EF]/50">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F8F4EF]/25">
            <div className="space-y-1 text-center sm:text-left">
              <p>© 2026 Stratton Opticians. All rights reserved.</p>
              <p className="text-[#F8F4EF]/20">Our sister practice: <a href="https://www.bentleyopticians.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors text-[#F8F4EF]/40">Bentley Opticians, Leigh-on-Sea</a></p>
            </div>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-[#F8F4EF]/50 transition-colors">Privacy Policy</a>
              <a href="/cookie-policy" className="hover:text-[#F8F4EF]/50 transition-colors">Cookie Policy</a>
              <a href="https://www.optical.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F4EF]/50 transition-colors">GOC Registered</a>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}

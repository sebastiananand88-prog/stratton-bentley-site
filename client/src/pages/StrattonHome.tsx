import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, MapPin, Star, Eye, Scan, Droplets, Glasses, ChevronDown, Phone } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

// ─────────────────────────────────────────────
// Design System Notes
// Fonts: Cormorant Garamond (display/serif) + DM Sans (body)
// Palette: Deep Forest Green #1A2E45, Warm Cream #F8F4EF, Champagne Gold #C9A96E
// Inspired by: Auerbach & Steele, Eyediology, Cubitts, Bloobloom
// ─────────────────────────────────────────────

const IMAGES = {
  boutique: "/images/boutique-interior.webp",
  editorial: "/images/editorial-woman.jpeg",
  frames: "/images/david-kind-frames.jpg",
  store: "/images/boutique-store.jpg",
  reception: "/images/reception-welcome.jpeg",
  storefront: "/images/storefront-exterior.jpeg",
};

const SERVICES = [
  {
    icon: Scan,
    title: "3D OCT Eye Scans",
    description: "The most advanced retinal imaging available. Detect glaucoma, macular degeneration and diabetic retinopathy years before standard tests.",
    tag: "Clinical Excellence",
  },
  {
    icon: Eye,
    title: "Visual Stress Assessments",
    description: "ChromaGen tinted lens assessments for dyslexia, reading difficulty and visual stress. Life-changing for children and adults alike.",
    tag: "Specialist Care",
  },
  {
    icon: Droplets,
    title: "Dry Eye Clinic",
    description: "Comprehensive meibomian gland assessment and personalised treatment plans. Relief from chronic dry, gritty or watery eyes.",
    tag: "Specialist Care",
  },
  {
    icon: Glasses,
    title: "Eyewear Styling",
    description: "A private 45-minute consultation with our dispensing expert. Frames matched to your face shape, colouring and lifestyle.",
    tag: "Boutique Experience",
  },
];

const BRANDS = ["Tom Ford", "Ray-Ban", "Oakley", "Silhouette", "Ralph Lauren", "GANT"];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Billericay",
    text: "Completely different to any optician I've visited before. The OCT scan was fascinating and the frame selection is extraordinary. I felt genuinely looked after.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Leigh-on-Sea",
    text: "The Visual Stress Assessment changed my son's life at school. The team were patient, thorough and genuinely caring. Cannot recommend highly enough.",
    stars: 5,
  },
  {
    name: "Caroline B.",
    location: "Billericay",
    text: "I've been coming here for 12 years. The level of personal attention and the quality of the eyewear is simply unmatched in Essex.",
    stars: 5,
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
      ))}
    </div>
  );
}

export default function StrattonHome() {
  // SEO Meta Tags
  useMetaTags({
    title: "Opticians Billericay | Stratton & Bentley Opticians",
    description: "Independent opticians in Billericay & Leigh-on-Sea since 1984. Advanced eye exams, OCT scans & designer eyewear. Book your appointment today.",
    canonical: "http://localhost:3001/",
  });

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => { const next = new Set(prev); next.add(entry.target.id); return next; });
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);


  return (
    <Layout>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex flex-col justify-start lg:justify-center overflow-hidden pt-28 lg:pt-20 pb-10">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.boutique}
            alt="Stratton Opticians boutique interior in Billericay with luxury eyewear display"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: "brightness(0.35)" }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/95 via-[#0F1B2D]/40 to-[#0F1B2D]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B2D]/70 via-[#0F1B2D]/30 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A96E]/40 text-[#C9A96E] text-xs font-medium tracking-[0.15em] uppercase mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              Billericay & Leigh-on-Sea, Essex
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#F8F4EF] leading-tight sm:leading-[0.95] mb-6 sm:mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Independent Opticians in Billericay &amp; Essex
              <br />
              <em className="italic text-[#C9A96E]">No ordinary optician.</em>
            </h1>

            <p className="text-[#F8F4EF]/75 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              Four decades of independent eye care in Essex. Advanced clinical technology, curated designer eyewear, and a level of personal attention you will not find on the high street.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => window.location.href = '/book'}
                className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
              >
                Book Your Eye Examination
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 border border-[#F8F4EF]/30 text-[#F8F4EF] text-sm font-medium tracking-wide rounded-full hover:bg-[#F8F4EF]/10 transition-all duration-150"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#F8F4EF]/15 flex flex-wrap gap-6 sm:gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-[#C9A96E]/30 border-2 border-[#F8F4EF]/20 flex items-center justify-center">
                    <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#F8F4EF] text-sm font-semibold">5.0 Google Rating</p>
                <p className="text-[#F8F4EF]/50 text-xs">119 Google reviews</p>
              </div>
            </div>
            <div className="h-8 w-px bg-[#F8F4EF]/15 hidden sm:block" />
            <div>
              <p className="text-[#F8F4EF] text-sm font-semibold">40+ Years</p>
              <p className="text-[#F8F4EF]/50 text-xs">Independent practice</p>
            </div>
            <div className="h-8 w-px bg-[#F8F4EF]/15 hidden sm:block" />
            <div>
              <p className="text-[#F8F4EF] text-sm font-semibold">3D OCT Scanner</p>
              <p className="text-[#F8F4EF]/50 text-xs">Advanced diagnostics</p>
            </div>
            <div className="h-8 w-px bg-[#F8F4EF]/15 hidden sm:block" />
            <div>
              <p className="text-[#F8F4EF] text-sm font-semibold">2 Locations</p>
              <p className="text-[#F8F4EF]/50 text-xs">Billericay & Leigh-on-Sea</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 text-[#F8F4EF]/40">
          <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mb-6">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ── INTRO STATEMENT ── */}
      <section
        id="intro"
        data-animate
        className={`py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10 transition-all duration-700 ${isVisible("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={IMAGES.editorial}
                alt="Premium eyewear editorial"
                className="w-full aspect-[3/4] object-cover object-top rounded-2xl"
                style={{ filter: "grayscale(15%)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 bg-[#1A2E45] text-[#F8F4EF] p-6 rounded-xl shadow-2xl max-w-[200px]"
              >
                <p
                  className="text-3xl font-light leading-none mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  40+
                </p>
                <p className="text-xs text-[#C9A96E] uppercase tracking-widest font-medium">Years of independent care</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-4">
                Our Philosophy
              </p>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Your vision and your style deserve the same level of{" "}
                <em className="italic">personal attention.</em>
              </h2>
            </div>

            <p className="text-[#1A2E45]/65 text-base lg:text-lg leading-relaxed font-light">
              At Stratton Opticians, we combine the most advanced clinical diagnostics with a curated selection of the world's finest eyewear. Every patient receives a fully customised examination, honest clinical advice, and dedicated time — you will never feel rushed here.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "Unhurried appointments with time you need",
                "Fully customised eye examination",
                "Private dispensing consultation",
                "3D OCT retinal scanning",
                "Honest, clear clinical explanations",
                "Bespoke fitted spectacles you'll love",
              ].map((promise) => (
                <div key={promise} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 shrink-0" />
                  <p className="text-sm text-[#1A2E45]/70 leading-relaxed">{promise}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = '/book'}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1A2E45] text-[#F8F4EF] text-sm font-medium tracking-wide rounded-full hover:bg-[#1A2E45]/90 active:scale-[0.97] transition-all duration-150"
            >
              Book Your Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        data-animate
        className={`py-24 lg:py-32 bg-[#1A2E45] transition-all duration-700 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-4">
                Clinical Excellence & Boutique Care
              </p>
              <h2
                className="text-4xl lg:text-5xl font-light text-[#F8F4EF] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Services that go far
                <br />
                <em className="italic">beyond the standard.</em>
              </h2>
            </div>
            <p className="text-[#F8F4EF]/50 text-sm max-w-sm leading-relaxed lg:text-right font-light">
              From advanced retinal diagnostics to bespoke eyewear styling — every service is designed around you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group p-7 rounded-2xl border border-[#F8F4EF]/10 hover:border-[#C9A96E]/40 hover:bg-[#F8F4EF]/5 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A96E]/15 flex items-center justify-center mb-6 group-hover:bg-[#C9A96E]/25 transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A96E]/70 font-semibold">
                    {service.tag}
                  </span>
                  <h3
                    className="text-xl font-light text-[#F8F4EF] mt-2 mb-3 leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#F8F4EF]/50 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-[#C9A96E] text-xs font-medium group-hover:gap-3 transition-all duration-200">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => window.location.href = '/book'}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── EYEWEAR EDITORIAL ── */}
      <section
        id="eyewear"
        data-animate
        className={`py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10 transition-all duration-700 ${isVisible("eyewear") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-4">
                Curated Designer Eyewear
              </p>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Frames chosen
                <br />
                with <em className="italic">intention.</em>
              </h2>
            </div>
            <p className="text-[#1A2E45]/65 text-base lg:text-lg leading-relaxed font-light">
              We stock only the frames we would wear ourselves. Each collection is handpicked for quality of construction, optical precision, and the kind of design that endures beyond seasonal trends. From the precision engineering of Silhouette to the timeless elegance of Ralph Lauren — these are not ordinary glasses.
            </p>

            {/* Brand grid */}
            <div className="grid grid-cols-4 gap-3">
              {BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="px-3 py-2.5 border border-[#1A2E45]/15 rounded-lg text-center text-xs font-medium text-[#1A2E45]/60 hover:border-[#C9A96E]/50 hover:text-[#1A2E45] transition-all duration-200 cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = '/book'}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-[#1A2E45] text-[#1A2E45] text-sm font-medium tracking-wide rounded-full hover:bg-[#1A2E45] hover:text-[#F8F4EF] active:scale-[0.97] transition-all duration-200"
            >
              Book an Eyewear Styling Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={IMAGES.frames}
                alt="Designer eyewear collection"
                className="w-full aspect-square object-cover rounded-2xl sm:col-span-2"
              />
              <div className="bg-[#1A2E45] rounded-2xl p-6 flex flex-col justify-between gap-6 min-h-[180px] sm:aspect-square">
                <p
                  className="text-xl sm:text-2xl lg:text-3xl font-light text-[#F8F4EF] leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "Glasses are not a medical device. They are an expression of who you are."
                </p>
                <p className="text-[#C9A96E] text-xs uppercase tracking-widest font-medium">
                  Stratton Opticians
                </p>
              </div>
              <div className="bg-[#C9A96E]/15 border border-[#C9A96E]/30 rounded-2xl p-6 flex flex-col justify-center min-h-[120px] sm:aspect-square">
                <p
                  className="text-4xl font-light text-[#1A2E45] leading-none mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  8+
                </p>
                <p className="text-xs text-[#1A2E45]/60 uppercase tracking-widest font-medium">
                  Premium designer brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        data-animate
        className={`py-24 lg:py-32 bg-[#EDE8E1] transition-all duration-700 ${isVisible("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-4">
              Patient Stories
            </p>
            <h2
              className="text-4xl lg:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What our patients say.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="bg-[#F8F4EF] rounded-2xl p-8 space-y-4 shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <StarRating count={t.stars} />
                <p
                  className="text-lg font-light text-[#1A2E45] leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{t.text}"
                </p>
                <div className="pt-2 border-t border-[#1A2E45]/10">
                  <p className="text-sm font-semibold text-[#1A2E45]">{t.name}</p>
                  <p className="text-xs text-[#1A2E45]/50">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#1A2E45]/50 mb-2">
              Rated 5.0 from 200+ Google Reviews
            </p>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section
        id="locations"
        data-animate
        className={`py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10 transition-all duration-700 ${isVisible("locations") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-4">
            Two Locations
          </p>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Find us in Essex.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Billericay */}
          <div className="group relative rounded-2xl overflow-hidden">
            <img
              src={IMAGES.store}
              alt="Stratton Opticians Billericay"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ filter: "brightness(0.6)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold mb-2">
                Billericay
              </p>
              <h3
                className="text-2xl font-light text-[#F8F4EF] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Stratton Opticians
              </h3>
              <p className="text-[#F8F4EF]/70 text-sm mb-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                14 The Pantiles, Queens Park Avenue, CM12 0UA
              </p>
              <p className="text-[#F8F4EF]/70 text-sm mb-4 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                01277 650584
              </p>
              <button
                onClick={() => window.location.href = '/book'}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A96E] text-[#1A2E45] text-xs font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 transition-all"
              >
                Book Here <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Leigh-on-Sea */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A2E45]">
            <div className="absolute inset-0 opacity-20">
              <img
                src={IMAGES.boutique}
                alt="Bentley Opticians Leigh-on-Sea"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative p-8 h-full flex flex-col justify-between min-h-[320px]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold mb-2">
                  Leigh-on-Sea
                </p>
                <h3
                  className="text-2xl font-light text-[#F8F4EF] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Bentley Opticians
                </h3>
                <p className="text-[#F8F4EF]/60 text-sm leading-relaxed font-light max-w-xs">
                  Our sister practice serving the Leigh-on-Sea community with the same level of independent, personal eye care.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[#F8F4EF]/70 text-sm flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#C9A96E]" />
                  Leigh-on-Sea, Essex
                </p>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/50 text-[#C9A96E] text-xs font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/10 transition-all"
                >
                  Book Here <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINIC SHOWCASE ── */}
      <section className="py-24 lg:py-32 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-4">
              Visit Us
            </p>
            <h2
              className="text-4xl lg:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your optician awaits.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={IMAGES.reception}
                alt="Stratton Opticians reception and welcome area with luxury interiors"
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={IMAGES.storefront}
                alt="Stratton Opticians storefront in Billericay on The Pantiles"
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold">Trusted by our patients</p>
            <h2
              className="text-4xl lg:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              5.0 Google Rating
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
            <p className="text-lg text-[#1A2E45]/70 font-light">119 Google reviews</p>
            <div className="mt-4 pt-4 border-t border-[#1A2E45]/20">
              <a
                href="https://google.com/search?q=Stratton+Opticians+Billericay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2E45]/30 text-[#1A2E45] font-medium rounded-lg hover:bg-[#1A2E45]/5 transition-colors"
              >
                <span className="text-sm">Read reviews on</span>
                <span className="font-semibold">Google</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESSILOR 50% OFFER ── */}
      <section className="py-16 lg:py-32 bg-gradient-to-r from-[#C9A96E]/10 to-[#C9A96E]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-6 sm:space-y-8 p-8 sm:p-12 lg:p-16 bg-[#F8F4EF] rounded-2xl border border-[#C9A96E]/40 text-center">
            <div className="space-y-2">
              <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Premium Lens Offer</p>
              <h2
                className="text-4xl lg:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                50% off a second pair
              </h2>
              <p className="text-xl text-[#1A2E45]/70 font-light">Essilor premium lenses</p>
            </div>

            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl mx-auto">
              Invest in better vision. Get a premium second pair of Essilor lenses at 50% off when you purchase a first pair of glasses or add-on lenses with us. Varifocals, blue-light filtered, transitions, prescription sunglasses—choose the lenses that suit your lifestyle.
            </p>

            <button
              onClick={() => window.location.href = '/eyewear'}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
            >
              View Our Eyewear & Lenses
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-[#1A2E45]/50 font-light">T&Cs apply. See in-store for details.</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 lg:py-32 bg-[#1A2E45]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-6">
            Begin Your Journey
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#F8F4EF] leading-tight mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your eyes deserve
            <br />
            <em className="italic text-[#C9A96E]">extraordinary</em> care.
          </h2>
          <p className="text-[#F8F4EF]/55 text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            Book your comprehensive eye examination today. Advanced diagnostics, honest advice, and a selection of the world's finest eyewear — all under one roof in Essex.
          </p>
          <button
            onClick={() => window.location.href = '/book'}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-xl shadow-[#C9A96E]/20"
          >
            Book Your Eye Examination
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-4 text-[#F8F4EF]/30 text-xs">
            Or call us: <a href="tel:01277650584" className="hover:text-[#C9A96E] transition-colors">01277 650584</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

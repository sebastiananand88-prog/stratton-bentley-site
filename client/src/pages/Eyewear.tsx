import Layout from "@/components/Layout";
import { Glasses, Palette, Sun } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";

const IMAGES = {
  frameDisplay: "/images/frame-wall-display.jpeg",
};

export default function Eyewear() {
  useMetaTags({
    title: "Designer Glasses Billericay — Premium Eyewear | Stratton",
    description: "Designer eyewear in Billericay: Tom Ford, Ray-Ban, Silhouette, Ralph Lauren, GANT & more. Premium frames, Essilor lenses, varifocal, prescription sunglasses, expert styling.",
    canonical: "http://localhost:3001/eyewear",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Curated Selection</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Designer Eyewear Billericay — Premium Frames & Styling
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Glasses are never just a correction. They're an expression of style, a daily companion, a reflection of how you see the world. At Stratton, we believe eyewear should be chosen with the same care as any meaningful purchase—guided by expert advice, personal styling, and a deep understanding of what suits you.
          </p>
        </div>
      </section>

      {/* Styling Expertise */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Styling, not selling
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  We don't view eyewear as a commodity. Our team—particularly Sheila, our dispensing expert—brings a stylist's eye and a genuine passion for finding frames that work for your face, your colouring, your lifestyle, and your personality.
                </p>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  We'll discuss proportions, materials, colours that flatter you, and styles that reflect your taste. The goal isn't to sell more; it's to ensure you leave with glasses you'll genuinely love wearing every day.
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={IMAGES.frameDisplay}
                  alt="Frame display wall at Stratton Opticians showing premium designer eyewear collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Brands */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-12">
          <div>
            <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Brands We Stock</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Curated eyewear from around the world
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Tom Ford", logo: "/images/brands/tom-ford.png" },
              { name: "Ray-Ban", logo: "/images/brands/ray-ban.png" },
              { name: "Oakley", logo: "/images/brands/oakley.png" },
              { name: "Silhouette", logo: "/images/brands/silhouette.png" },
              { name: "Ralph Lauren", logo: "/images/brands/ralph-lauren.svg" },
              { name: "GANT", logo: "/images/brands/gant.svg" },
            ].map((brand, i) => (
              <div
                key={i}
                className="p-8 h-28 bg-[#1A2E45]/5 rounded-lg border border-[#1A2E45]/10 flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-[#1A2E45]/70 leading-relaxed font-light">
            Each brand brings its own philosophy and craftsmanship. Whether you're drawn to Italian luxury, Scandinavian minimalism, American heritage, or cutting-edge contemporary design, we've selected partners who share our commitment to quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Lens Options */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            <div>
              <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold mb-4">Beyond the Frame</p>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Premium lens options
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Palette className="w-8 h-8 text-[#C9A96E]" />
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Progressive & Varifocal Lenses
                </h3>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Essilor Varilux progressive lenses offer seamless vision at all distances—no visible lines, no jumps. If you need multiple prescriptions, varifocals offer the smoothest, most natural viewing experience available.
                </p>
              </div>
              <div className="space-y-4">
                <Glasses className="w-8 h-8 text-[#C9A96E]" />
                <h3
                  className="text-2xl font-light text-[#1A2E45]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Lens Coatings & Treatments
                </h3>
                <p className="text-[#1A2E45]/70 leading-relaxed font-light">
                  Anti-reflective coatings reduce glare and make your lenses nearly invisible. Protective coatings guard against scratches and damage. Blue light filtering options reduce digital eye strain. We'll guide you through what makes sense for your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sunglasses */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A2E45]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Prescription sunglasses & stylish eyewear
            </h2>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light">
              Want your prescription in sunglasses? No problem. From sleek sports frames to classic aviators, we can fit any prescription into any frame from our collection. UV protection, polarised lenses, and premium tints are all available.
            </p>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light">
              We also stock non-prescription sunglasses for those who don't need a vision correction but still want premium eyewear for sun protection and style.
            </p>
          </div>
          <div className="aspect-square bg-[#1A2E45]/5 rounded-lg flex items-center justify-center">
            <Sun className="w-16 h-16 text-[#C9A96E]/40" />
          </div>
        </div>
      </section>

      {/* Bespoke Fitting */}
      <section className="py-20 bg-[#1A2E45]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            <div>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A2E45]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Fitting that works for you
              </h2>
            </div>
            <p className="text-[#1A2E45]/70 leading-relaxed font-light max-w-2xl">
              Once you've chosen your frames, we ensure they fit perfectly. Nose pads, temple arms, and bridge measurements are all adjusted to your unique face geometry. We check that you can see through the correct part of progressive lenses, that the fit is comfortable for all-day wear, and that you genuinely love how they look.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to find frames that are uniquely you?
          </h2>
          <a
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Book Dispensing Appointment
          </a>
        </div>
      </section>
    </Layout>
  );
}

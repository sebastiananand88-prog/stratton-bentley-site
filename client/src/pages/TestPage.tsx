import Layout from "@/components/Layout";

export default function TestPage() {
  return (
    <Layout>
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            {/* Hero Test Section */}
            <section className="py-20 text-center">
              <h1
                className="text-5xl md:text-6xl font-light text-[#1A2E45] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Test Page
              </h1>
              <p className="text-lg text-[#1A2E45]/70 max-w-2xl mx-auto">
                This page demonstrates the reusable Layout component. It includes the header, footer, and booking modal from the shared layout.
              </p>
            </section>

            {/* Content Section */}
            <section className="py-16 border-t border-[#1A2E45]/10">
              <h2
                className="text-4xl font-light text-[#1A2E45] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Design System Test
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Colour Tokens", description: "Navy, Gold, Cream, and accent colors are inherited from the design system." },
                  { title: "Typography", description: "Playfair Display (Cormorant Garamond) for headings, DM Sans for body text." },
                  { title: "Spacing & Layout", description: "All pages use consistent max-width, padding, and grid layouts." },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-lg bg-[#1A2E45]/5 border border-[#1A2E45]/10">
                    <h3
                      className="text-2xl font-light text-[#1A2E45] mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#1A2E45]/70 font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Button Test */}
            <section className="py-16 border-t border-[#1A2E45]/10">
              <h2
                className="text-4xl font-light text-[#1A2E45] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Components
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150">
                  Primary Button
                </button>
                <button className="px-7 py-3.5 border-2 border-[#1A2E45] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#1A2E45]/5 transition-all duration-150">
                  Secondary Button
                </button>
                <button className="px-7 py-3.5 border border-[#1A2E45]/30 text-[#1A2E45]/60 text-sm font-medium tracking-wide rounded-full hover:border-[#1A2E45] hover:text-[#1A2E45] transition-all duration-150">
                  Tertiary Button
                </button>
              </div>
            </section>

            {/* Layout Notes */}
            <section className="py-16 border-t border-[#1A2E45]/10">
              <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-8">
                <p className="text-[#1A2E45] font-light leading-relaxed">
                  <strong>Layout Component Features:</strong> Fixed header with navigation, responsive mobile menu, dark footer with location and hours, integrated booking modal, and consistent page wrapper. All future pages simply wrap their content in the <code className="bg-[#1A2E45]/5 px-2 py-1 rounded text-sm">&lt;Layout&gt;</code> component.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

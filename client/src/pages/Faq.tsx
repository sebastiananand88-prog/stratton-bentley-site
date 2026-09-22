import Layout from "@/components/Layout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";

const FAQS = [
  {
    category: "Eye Examinations",
    items: [
      {
        q: "How often should I have an eye examination?",
        a: "We recommend a comprehensive eye examination every 1-2 years if you have no eye conditions or prescription changes. If you wear glasses or contacts, or have existing eye conditions (like glaucoma or diabetes), annual exams are advisable. Children should be tested annually or as advised by their optometrist.",
      },
      {
        q: "What happens during a comprehensive eye examination?",
        a: "A comprehensive eye exam includes: assessment of your vision and eye health, measurement of your prescription, eye pressure check (for glaucoma screening), examination of the back of your eye (retina), and discussion of any symptoms or concerns. We take time to explain our findings and answer your questions.",
      },
      {
        q: "Why do I need a retinal scan (OCT)?",
        a: "OCT retinal scanning provides detailed images of the back of your eye, allowing us to detect early signs of conditions like glaucoma, macular degeneration, and diabetic retinopathy—often before you notice any symptoms. Early detection can prevent vision loss.",
      },
    ],
  },
  {
    category: "OCT & Advanced Diagnostics",
    items: [
      {
        q: "What is an OCT eye scan and why is it important?",
        a: "OCT (Optical Coherence Tomography) is advanced 3D imaging that creates cross-sectional pictures of your retina. Unlike standard eye tests, it can detect subtle changes in the eye's structure years before vision loss occurs, making it invaluable for early detection of serious conditions.",
      },
      {
        q: "Does the OCT scan hurt or require eye drops?",
        a: "No. The OCT scan is completely painless and non-invasive. You simply look into the device for a few seconds while it captures high-resolution images. No contact with your eye is necessary, and no drops are required.",
      },
      {
        q: "Who should have an OCT scan?",
        a: "We recommend OCT scans for anyone over 40, anyone with a family history of eye disease, those with glaucoma or high eye pressure, people with diabetes, and anyone experiencing floaters, flashes, or vision changes. It's also valuable for monitoring existing eye conditions.",
      },
    ],
  },
  {
    category: "Varifocals & Progressive Lenses",
    items: [
      {
        q: "What are varifocals and how do they work?",
        a: "Varifocals (progressive lenses) offer seamless vision at all distances—near, intermediate, and far—without visible lines. The prescription gradually changes from the top to the bottom of the lens, allowing you to focus at any distance by looking through the appropriate part of the lens.",
      },
      {
        q: "Is there an adjustment period for varifocals?",
        a: "Yes, most people need 1-2 weeks to adjust to varifocals. Your brain learns to move your eyes to the correct part of the lens for each distance. We recommend wearing them consistently during this period. If you experience any issues after adjustment, please return for a fitting check.",
      },
      {
        q: "Are varifocals more expensive than bifocals?",
        a: "Varifocals are typically more expensive than bifocals, but they offer superior aesthetics (no visible lines) and better quality of vision at all distances. Many patients find the investment worthwhile for the seamless vision experience.",
      },
    ],
  },
  {
    category: "Essilor Premium Lenses",
    items: [
      {
        q: "What makes Essilor lenses premium?",
        a: "Essilor premium lenses offer advanced optical design for sharper vision, specialized coatings (anti-scratch, anti-glare, blue-light filtering), UV protection, and durability. They're engineered using cutting-edge technology to reduce distortions and provide the best possible visual experience.",
      },
      {
        q: "What is the Essilor 50% off second pair offer?",
        a: "When you purchase a full pair of glasses (or add-on lenses) with us, you'll receive 50% off Essilor premium lenses for a second pair. This is a great opportunity to have multiple pairs for different occasions—sunglasses, workplace glasses, and everyday wear.",
      },
      {
        q: "Do Essilor lenses include blue-light filtering?",
        a: "Essilor offers blue-light filtering options in many of their premium lenses, which can help reduce eye strain from screens. This is particularly beneficial if you spend significant time on computers, tablets, or phones.",
      },
    ],
  },
  {
    category: "Contact Lenses",
    items: [
      {
        q: "What types of contact lenses do you fit?",
        a: "We fit all types of contact lenses: daily disposables, weekly, monthly, extended wear, rigid gas-permeable, and specialized lenses for conditions like astigmatism, presbyopia (multifocals), and keratoconus. We'll recommend the best option based on your lifestyle and eye health.",
      },
      {
        q: "How much does a contact lens fitting cost?",
        a: "Contact lens fitting fees vary depending on lens type and complexity. We recommend calling us on 01277 650584 or visiting to discuss your needs and receive an accurate quote. Aftercare and lens evaluations are typically included.",
      },
      {
        q: "Can I wear contact lenses if I have astigmatism?",
        a: "Yes, absolutely. We fit toric contact lenses specifically designed for astigmatism. These lenses have two different powers to correct both the spherical and cylindrical components of your prescription, providing clear vision.",
      },
      {
        q: "What should I do if my contact lenses feel uncomfortable?",
        a: "First, check that your lens is clean and not damaged. If discomfort persists, remove the lens immediately and contact us. Discomfort can indicate a fitting issue, lens type mismatch, or eye health concerns that we can quickly assess and resolve.",
      },
    ],
  },
  {
    category: "Children's Eye Care",
    items: [
      {
        q: "At what age should children have their first eye test?",
        a: "We recommend a first eye examination by age 3-4, or sooner if you notice any signs of vision problems. Early detection of refractive errors or eye health issues is crucial for proper visual development and learning.",
      },
      {
        q: "Does the NHS pay for children's glasses?",
        a: "Yes. Children qualify for an NHS optical voucher that can cover the cost of basic lenses or contribute towards the overall cost of spectacles, depending on their prescription needs and voucher value. We're an NHS provider and can explain your entitlements.",
      },
      {
        q: "What is myopia management and why is it important?",
        a: "Myopia (shortsightedness) is increasing in children. Myopia management uses specialized lenses (like Essilor Stellest) or contact lenses to slow the progression of myopia, helping preserve long-term eye health and reducing the risk of serious eye conditions later in life.",
      },
      {
        q: "How can I tell if my child needs glasses?",
        a: "Signs include: squinting, sitting very close to screens, difficulty seeing the board at school, eye strain, headaches, or rubbing eyes frequently. However, some children have no obvious symptoms, which is why regular eye examinations are important.",
      },
    ],
  },
  {
    category: "Visual Stress & Reading Difficulties",
    items: [
      {
        q: "What is visual stress?",
        a: "Visual stress is discomfort or difficulty processing visual information, often causing symptoms like words appearing to move or shimmer, eye strain, headaches, and fatigue when reading—despite having normal vision and prescription. It's distinct from dyslexia but can coexist.",
      },
      {
        q: "How can ChromaGen lenses help with reading difficulties?",
        a: "ChromaGen lenses use specially tinted overlays during assessment to find a colour that, for some people, may help make text appear clearer or more comfortable to read. Once identified, ChromaGen filters can be incorporated into prescription lenses for everyday use.",
      },
      {
        q: "Is there evidence that colourimetry works?",
        a: "While mainstream clinical research on tinted lenses for reading difficulties is limited, many individuals report genuine improvements in comfort and reading fluency when using the right colour. We're transparent about this and recommend trying it to see if it works for you—there's no pressure.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "What does a comprehensive eye examination cost?",
        a: "Please contact us on 01277 650584 or visit for current pricing. We offer competitive rates and welcome NHS patients. Prices may vary depending on the type of examination and any additional tests required.",
      },
      {
        q: "Do you offer payment plans or financing options?",
        a: "We offer various options for spectacles and contact lenses to suit different budgets. Please speak with our team about flexible payment arrangements or contact us for details.",
      },
      {
        q: "Can I claim my eye test on private medical insurance?",
        a: "Many private medical insurance policies include eye examination benefits. We recommend checking your policy or contacting your insurer directly. We can also provide receipts to support any claims.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "Do you offer home visits or domiciliary care?",
        a: "We primarily operate from our Billericay location, but we recommend contacting us to discuss any special circumstances or accessibility needs. We're always happy to help where we can.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book online via our website, call us on 01277 650584, or email info@strattonopticians.co.uk. We typically have availability within 1-2 weeks and always aim to accommodate urgent needs quickly.",
      },
      {
        q: "What if I'm new to the practice?",
        a: "Welcome! Your first visit will include a comprehensive eye examination and consultation. Please allow 45-60 minutes for your initial appointment. Bring any previous spectacle or contact lens prescriptions if you have them.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1A2E45]/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex items-start justify-between gap-4 text-left hover:bg-[#1A2E45]/2 transition-colors"
      >
        <h3 className="font-medium text-[#1A2E45] leading-relaxed">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="pb-4 text-[#1A2E45]/70 leading-relaxed font-light">{a}</p>}
    </div>
  );
}

export default function Faq() {
  useMetaTags({
    title: "Eye Care FAQ — Questions Answered | Stratton Opticians",
    description: "Frequently asked questions about eye examinations, contact lenses, varifocals, Essilor lenses, children's eye care, visual stress, and more.",
    canonical: "http://localhost:3001/faq",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Common Questions</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Eye Care Questions & Answers
          </h1>
          <p className="text-lg text-[#1A2E45]/70 leading-relaxed font-light">
            Find answers to common questions about eye examinations, contact lenses, varifocals, Essilor lenses, children's eye care, visual stress, and more.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6 lg:px-10">
        <div className="space-y-16">
          {FAQS.map((category, idx) => (
            <div key={idx}>
              <h2
                className="text-3xl font-light text-[#1A2E45] mb-8 pb-4 border-b-2 border-[#C9A96E]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {category.category}
              </h2>
              <div className="space-y-0">
                {category.items.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-12 text-center space-y-6">
          <p className="text-[#1A2E45]/70 leading-relaxed">
            Didn't find your answer? Contact us directly and we're happy to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A2E45] text-sm font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#C9A96E]/20"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}

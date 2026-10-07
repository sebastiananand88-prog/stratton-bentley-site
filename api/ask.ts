import type { VercelRequest, VercelResponse } from "@vercel/node";
import Anthropic from "@anthropic-ai/sdk";

/**
 * Knowledge base for the AI assistant, inlined directly in this file.
 *
 * This was previously split into api/lib/knowledge.ts, but Vercel's serverless
 * function bundler failed to include that file in the deployed bundle no matter
 * how it was imported (static top-level import, dynamic import(), with or
 * without a leading underscore on the folder name) -- it worked every time
 * locally and crashed every time in production with "Cannot find module".
 * Inlining everything into the single entry file sidesteps that entirely.
 * Keep this in sync by hand with client/src/lib/faqData.ts if that changes.
 */

const MAX_QUESTION_LENGTH = 400;

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
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
      {
        q: "How long does an eye examination take at Stratton Opticians?",
        a: "A comprehensive eye examination typically takes up to an hour, especially for your first visit with us. We don't rush appointments -- we'd rather take the time to get a full picture of your eye health and prescription than hurry you through.",
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
      {
        q: "How is OCT different from a standard eye test?",
        a: "A standard eye test checks your vision and prescription, and a brief look at the front and back of your eye. OCT goes further, building a detailed cross-sectional map of the retina's layers, which lets us spot disease markers long before they'd show up in a standard test or affect your vision.",
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
        a: "Visual stress is discomfort or difficulty processing visual information, often causing symptoms like words appearing to move or shimmer, eye strain, headaches, and fatigue when reading—despite having normal vision and prescription. This can be linked to dyslexia, but a visual stress assessment is not an assessment or diagnosis of dyslexia.",
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
    category: "Dry Eye",
    items: [
      {
        q: "What causes dry eyes?",
        a: "Dry eye can come from several different causes -- reduced tear production, poor tear quality, eyelid conditions (like meibomian gland dysfunction), medications, screen use, and environmental factors can all play a part, often together rather than individually.",
      },
      {
        q: "How is dry eye treated?",
        a: "Treatment depends on what's actually causing your symptoms, which is why a proper assessment matters. Options can include artificial tears, eyelid hygiene routines, warm compresses, or other approaches -- we'll talk through what's realistic for you rather than offering a one-size-fits-all fix.",
      },
      {
        q: "Is dry eye a long-term condition?",
        a: "For many people it's an ongoing, manageable condition rather than something that's cured outright. The goal of assessment and treatment is usually to reduce symptoms and improve comfort day to day.",
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
        a: "You can book online via our website, call us on 01277 650584, or email info@strattonopticians.co.uk. We typically have availability within 1-2 weeks, and do our best to accommodate urgent needs as quickly as we can.",
      },
      {
        q: "What if I'm new to the practice?",
        a: "Welcome! Your first visit will include a comprehensive eye examination and consultation. Please allow 45-60 minutes for your initial appointment. Bring any previous spectacle or contact lens prescriptions if you have them.",
      },
    ],
  },
];

const LOCATIONS = [
  {
    name: "Stratton Opticians",
    area: "Billericay",
    address: "14 The Pantiles, Queens Park Avenue, Billericay, Essex, CM12 0UA",
    phone: "01277 650584",
    whatsapp: "+44 7929 049999",
    email: "info@strattonopticians.co.uk",
    parking: "Off-street parking available outside the practice; car park opposite.",
  },
];

const OPENING_HOURS = [
  { days: "Monday to Friday", hours: "9:00am - 5:30pm" },
  { days: "Saturday", hours: "9:00am - 1:00pm" },
  { days: "Sunday", hours: "Closed" },
];

const FOUNDED = "Stratton Opticians has been part of the Billericay community since 1984.";

const TEAM = [
  {
    name: "Jas Chaggar",
    role: "Principal Optometrist & Owner",
    bio: "Combines advanced clinical technology with a genuinely personal approach. Particular interest in soft contact lenses, post-cataract care, glaucoma refinement, diabetic eye assessments, and visual stress assessments for both adults and children.",
  },
  {
    name: "Sheila",
    role: "Lead Dispenser",
    bio: "Has a real passion for helping patients find the perfect eyewear, taking the time to understand each person's needs and choosing frames and lenses that suit their style, personality and lifestyle.",
  },
  {
    name: "Jen",
    role: "Receptionist & Frame Advisor",
    bio: "One of the friendly faces at the practice, welcoming patients, managing appointments, and helping people choose frames that suit their lifestyle and personal style.",
  },
];

const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/strattonopticians.billericay/",
  facebook: "https://www.facebook.com/strattonopticians/",
};

const REVIEWS = "5.0 Google rating from 133 Google reviews.";

const SERVICES = [
  {
    name: "Eye Examinations",
    path: "/eye-examinations",
    summary:
      "Comprehensive eye examinations in Billericay. Tailored, unhurried tests (up to an hour), including disease screening for conditions like glaucoma and diabetic retinopathy. Available on the NHS and privately.",
  },
  {
    name: "OCT Retinal Scans",
    path: "/oct-scans",
    summary:
      "3D OCT (Optical Coherence Tomography) retinal scans for early detection of glaucoma, macular degeneration and diabetic retinopathy -- the same hospital-quality imaging used in specialist clinics, painless and non-invasive.",
  },
  {
    name: "Advanced Glaucoma Assessments",
    path: "/glaucoma-assessments",
    summary:
      "OCT-led glaucoma screening and monitoring, combining eye pressure testing with 3D OCT imaging to look for optic nerve changes early.",
  },
  {
    name: "Myopia Management & Stellest",
    path: "/myopia-management",
    summary:
      "Essilor Stellest spectacle lenses to help slow myopia (short-sightedness) progression in children, protecting long-term eye health. Part of Children's Eye Care.",
  },
  {
    name: "Premium Varifocals",
    path: "/varifocals",
    summary:
      "Essilor Varilux varifocals with a personalised fitting, for seamless vision at near, intermediate and far distances with no visible lines.",
  },
  {
    name: "Dry Eye Assessments",
    path: "/dry-eye-assessments",
    summary:
      "Assessment of dry, gritty or watery eyes, looking at tear film and eyelid health to find the actual cause rather than guessing at a generic fix.",
  },
  {
    name: "Eyewear & Designer Frames",
    path: "/eyewear",
    summary:
      "Designer eyewear with a styling-led approach rather than a sales-led one. Premium frames, Essilor lenses (including Varilux varifocals), and a range of lens coatings and treatments.",
  },
  {
    name: "Contact Lenses",
    path: "/contact-lenses",
    summary:
      "Contact lens consultations and fittings covering all lens types (daily, weekly, monthly, multifocal, toric for astigmatism, and specialist fits), with aftercare support included.",
  },
  {
    name: "Children's Eye Care",
    path: "/childrens-eye-care",
    summary:
      "Age-appropriate children's eye examinations in a warm, reassuring environment, including myopia management using Essilor Stellest lenses, and support understanding NHS optical vouchers.",
  },
  {
    name: "Visual Stress & Colourimetry Assessments",
    path: "/visual-stress-assessments",
    summary:
      "ChromaGen tinted lens assessments for people experiencing visual discomfort when reading, for both children and adults. This can be linked to dyslexia, but it is not an assessment or diagnosis of dyslexia.",
  },
  {
    name: "Golf & Sports Vision",
    path: "/golf-sports-vision",
    summary:
      "Performance visual screening for golf and sport. This is a newer service -- full details aren't published yet, so direct anyone asking to contact the practice directly for more information.",
  },
];

const BRANDS = ["Tom Ford", "Ray-Ban", "Oakley", "Silhouette", "Ralph Lauren / Polo Ralph Lauren", "GANT"];

const LENS_TECHNOLOGY = [
  "Essilor premium lenses, including Varilux progressive/varifocal lenses for seamless vision at all distances",
  "Lens coatings: anti-reflective (reduces glare), anti-scratch, and blue-light filtering for screen use",
  "Essilor Stellest lenses for managing myopia progression in children",
  "A current offer: 50% off Essilor premium lenses for a second pair, when a full pair of glasses or add-on lenses is purchased",
];

const ACCREDITATIONS = [
  "Registered NHS provider",
  "Regulated by the General Optical Council (GOC)",
  "College of Optometrists",
  "Association of Optometrists",
];

const PRICING_NOTE =
  "Stratton Opticians does not publish fixed prices online, as costs vary by examination type and any additional tests required. Patients are asked to contact the practice directly (phone or email) for current pricing on eye examinations, contact lens fittings, and dispensing. NHS patients are welcome, and many private medical insurance policies cover eye examinations.";

function buildKnowledgeBase(): string {
  const locations = LOCATIONS.map((l) =>
    [
      `${l.name} (${l.area})`,
      `Address: ${l.address}`,
      l.phone ? `Phone: ${l.phone}` : null,
      l.whatsapp ? `WhatsApp: ${l.whatsapp}` : null,
      l.email ? `Email: ${l.email}` : null,
      l.parking ?? null,
    ]
      .filter(Boolean)
      .join("\n")
  ).join("\n\n");

  const hours = OPENING_HOURS.map((h) => `${h.days}: ${h.hours}`).join("\n");
  const services = SERVICES.map((s) => `${s.name} (${s.path}): ${s.summary}`).join("\n\n");
  const team = TEAM.map((t) => `${t.name} -- ${t.role}. ${t.bio}`).join("\n\n");
  const social = `Instagram: ${SOCIAL_MEDIA.instagram}\nFacebook: ${SOCIAL_MEDIA.facebook}`;
  const faqs = FAQ_CATEGORIES.map((category) => {
    const items = category.items.map((item) => `Q: ${item.q}\nA: ${item.a}`).join("\n\n");
    return `## FAQ: ${category.category}\n\n${items}`;
  }).join("\n\n");

  return [
    "## About / History",
    FOUNDED,
    "## Locations & Contact",
    locations,
    "## Opening Hours (Stratton Opticians, Billericay)",
    hours,
    "## Team (Stratton Opticians, Billericay)",
    team,
    "## Services",
    services,
    "## Designer Brands Stocked",
    BRANDS.join(", "),
    "## Lens Technology",
    LENS_TECHNOLOGY.join("\n"),
    "## Accreditations",
    ACCREDITATIONS.join(", "),
    "## Pricing",
    PRICING_NOTE,
    "## Social Media",
    social,
    "## Reviews",
    REVIEWS,
    faqs,
  ].join("\n\n");
}

const SYSTEM_PROMPT = `You are an AI assistant answering questions on the Stratton Opticians website, an independent optician in Billericay, Essex.

Answer patient questions using ONLY the information below. Do not use outside knowledge, and do not guess.

Rules:
- Keep answers short: 2-4 sentences.
- Plain text only -- no markdown (no **bold**, no headers, no bullet points). This is rendered as plain text, so markdown syntax would show up as literal asterisks and hashes.
- Friendly, clear, professional tone -- no jargon.
- Never give a diagnosis, personal clinical advice, or comment on someone's specific prescription or eye condition. For anything specific to the person asking, tell them to book an eye examination or contact the practice directly (phone 01277 650584, or the Contact page).
- If a question is urgent or sounds like a clinical emergency (sudden vision loss, eye injury, severe pain, flashes/floaters, etc.), don't attempt to triage it yourself -- tell them to call the practice directly on 01277 650584 straight away, or seek urgent medical care if the practice is closed.
- Never say the practice assesses, diagnoses, or treats dyslexia. Visual stress assessments can be linked to dyslexia, but always make clear they are not an assessment or diagnosis of dyslexia itself.
- If the question isn't covered by the information below, say you don't have that information and suggest they contact the practice directly -- don't make something up.
- If asked whether you're an AI, a bot, or a real person: be straightforward and confirm you're an AI assistant, trained to answer from this practice's website content.
- For questions about privacy, cookies, or data handling, don't try to answer from memory -- point them to the Privacy Policy (/privacy-policy) or Cookie Policy (/cookie-policy) pages instead, since you don't have their exact wording.

Practice information:

${buildKnowledgeBase()}`;

const MAX_MESSAGES = 20;

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const incoming = Array.isArray(req.body?.messages) ? (req.body.messages as unknown[]) : null;

    if (!incoming || incoming.length === 0) {
      res.status(400).json({ error: "Please enter a question." });
      return;
    }

    if (incoming.length > MAX_MESSAGES) {
      res.status(400).json({ error: "This conversation has gotten a bit long -- please start a new one." });
      return;
    }

    const messages: IncomingMessage[] = [];
    for (const raw of incoming) {
      const m = raw as { role?: unknown; content?: unknown };
      if ((m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") {
        res.status(400).json({ error: "Please enter a question." });
        return;
      }
      const content = m.content.trim().slice(0, MAX_QUESTION_LENGTH);
      if (content) messages.push({ role: m.role, content });
    }

    if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
      res.status(400).json({ error: "Please enter a question." });
      return;
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      res.status(500).json({ error: "The AI assistant isn't configured yet. Please contact us directly." });
      return;
    }

    const client = new Anthropic();
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    });

    let answer = "";
    for (const block of response.content) {
      if (block.type === "text") {
        answer = block.text.trim();
        break;
      }
    }

    if (!answer) {
      res.status(502).json({ error: "Sorry, something went wrong generating an answer. Please try again." });
      return;
    }

    res.status(200).json({ answer });
  } catch (error) {
    console.error("AI ask error:", error);
    res.status(502).json({ error: "Sorry, something went wrong. Please try again or contact us directly." });
  }
}

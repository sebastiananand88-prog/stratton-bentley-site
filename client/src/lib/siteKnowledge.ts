/**
 * Structured facts about the practice for the AI assistant to ground its answers in --
 * locations, hours, services, brands. Deliberately does NOT include Privacy Policy or
 * Cookie Policy content: those are precision-sensitive legal pages best left for the
 * assistant to point people toward rather than paraphrase.
 */

export const LOCATIONS = [
  {
    name: "Stratton Opticians",
    area: "Billericay",
    address: "14 The Pantiles, Queens Park Avenue, Billericay, Essex, CM12 0UA",
    phone: "01277 650584",
    whatsapp: "+44 7929 049999",
    email: "info@strattonopticians.co.uk",
    parking: "Off-street parking available outside the practice; car park opposite.",
  },
  {
    name: "Bentley Opticians",
    area: "Leigh-on-Sea",
    address: "276 Eastwood Road North, Leigh-on-Sea, Essex, SS9 4LS",
    phone: "01702 520763",
    note: "Sister practice to Stratton Opticians, same ownership and philosophy, but run as a separate business. Has its own website at bentleyopticians.co.uk.",
  },
];

export const OPENING_HOURS = [
  { days: "Monday to Friday", hours: "9:00am - 5:30pm" },
  { days: "Saturday", hours: "9:00am - 1:00pm" },
  { days: "Sunday", hours: "Closed" },
];

export const SERVICES = [
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
      "Assessments for visual stress and reading difficulties using ChromaGen tinted lenses, for both children and adults. Distinct from dyslexia, though the two can coexist.",
  },
];

export const BRANDS = ["Tom Ford", "Ray-Ban", "Oakley", "Silhouette", "Ralph Lauren / Polo Ralph Lauren", "GANT"];

export const LENS_TECHNOLOGY = [
  "Essilor premium lenses, including Varilux progressive/varifocal lenses for seamless vision at all distances",
  "Lens coatings: anti-reflective (reduces glare), anti-scratch, and blue-light filtering for screen use",
  "Essilor Stellest lenses for managing myopia progression in children",
  "A current offer: 50% off Essilor premium lenses for a second pair, when a full pair of glasses or add-on lenses is purchased",
];

export const ACCREDITATIONS = [
  "Registered NHS provider",
  "Regulated by the General Optical Council (GOC)",
  "College of Optometrists",
  "Association of Optometrists",
];

export const PRICING_NOTE =
  "Stratton Opticians does not publish fixed prices online, as costs vary by examination type and any additional tests required. Patients are asked to contact the practice directly (phone or email) for current pricing on eye examinations, contact lens fittings, and dispensing. NHS patients are welcome, and many private medical insurance policies cover eye examinations.";

export function buildSiteKnowledgeText(): string {
  const locations = LOCATIONS.map((l) =>
    [
      `${l.name} (${l.area})`,
      `Address: ${l.address}`,
      l.phone ? `Phone: ${l.phone}` : null,
      l.whatsapp ? `WhatsApp: ${l.whatsapp}` : null,
      l.email ? `Email: ${l.email}` : null,
      l.parking ?? null,
      l.note ?? null,
    ]
      .filter(Boolean)
      .join("\n")
  ).join("\n\n");

  const hours = OPENING_HOURS.map((h) => `${h.days}: ${h.hours}`).join("\n");

  const services = SERVICES.map((s) => `${s.name} (${s.path}): ${s.summary}`).join("\n\n");

  return [
    "## Locations & Contact",
    locations,
    "## Opening Hours (Stratton Opticians, Billericay)",
    hours,
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
  ].join("\n\n");
}

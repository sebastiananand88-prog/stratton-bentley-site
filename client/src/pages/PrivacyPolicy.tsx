import Layout from "@/components/Layout";
import { useMetaTags } from "@/hooks/useMetaTags";

const SECTION_HEADING = "text-2xl font-light text-[#1A2E45] mt-12 mb-4";
const BODY_TEXT = "text-[#1A2E45]/70 leading-relaxed font-light";

export default function PrivacyPolicy() {
  useMetaTags({
    title: "Privacy Policy — Stratton Opticians",
    description: "How Stratton Opticians collects, uses, and protects your personal data.",
    canonical: "http://localhost:3001/privacy-policy",
  });

  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6 lg:px-10">
        <div className="space-y-6">
          <p className="text-[#C9A96E] text-sm uppercase tracking-[0.2em] font-semibold">Legal</p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#1A2E45]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Privacy Policy
          </h1>
          <p className={BODY_TEXT}>Last updated: September 2026</p>

          <p className={BODY_TEXT}>
            Stratton Opticians ("we", "us", "our") is committed to protecting your privacy. This policy explains
            what personal data we collect through this website, why we collect it, how we use it, and the rights
            you have over it, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data
            Protection Act 2018.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Who we are
          </h2>
          <p className={BODY_TEXT}>
            Stratton Opticians, 14 The Pantiles, Queens Park Avenue, Billericay, Essex, CM12 0UA, is the data
            controller responsible for your personal data collected via this website. If you have any questions
            about this policy or how we handle your data, contact us at{" "}
            <a href="mailto:info@strattonopticians.co.uk" className="text-[#C9A96E] hover:text-[#C9A96E]/80">
              info@strattonopticians.co.uk
            </a>{" "}
            or call{" "}
            <a href="tel:01277650584" className="text-[#C9A96E] hover:text-[#C9A96E]/80">
              01277 650584
            </a>
            .
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What data we collect
          </h2>
          <p className={BODY_TEXT}>
            We only collect personal data that you choose to give us directly through this website. This includes:
          </p>
          <ul className={`${BODY_TEXT} list-disc pl-6 space-y-2`}>
            <li>
              <strong className="text-[#1A2E45]">Contact form submissions</strong> — your name, email address, and
              message, when you use the contact form on our Contact page.
            </li>
            <li>
              <strong className="text-[#1A2E45]">Appointment enquiries</strong> — your name, email, phone number,
              preferred service, location, and appointment preferences, if you use an online booking enquiry form.
            </li>
            <li>
              <strong className="text-[#1A2E45]">Direct contact</strong> — anything you tell us if you call, email,
              or message us directly (for example via phone or WhatsApp), which is handled under this same policy
              even though it doesn't pass through this website.
            </li>
          </ul>
          <p className={BODY_TEXT}>
            We do not collect health or clinical information through this website. Any clinical records, prescriptions,
            or medical history are collected in person as part of your eye examination and are held separately under
            our practice's clinical record-keeping obligations as a registered provider regulated by the General
            Optical Council.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            How we use your data
          </h2>
          <p className={BODY_TEXT}>We use the personal data you provide to:</p>
          <ul className={`${BODY_TEXT} list-disc pl-6 space-y-2`}>
            <li>Respond to your enquiry, message, or appointment request</li>
            <li>Arrange, confirm, or amend appointments</li>
            <li>Provide information you've asked for about our services</li>
          </ul>
          <p className={BODY_TEXT}>
            The legal basis for this processing is our legitimate interest in responding to enquiries from
            prospective and existing patients, and, where an appointment is booked, the steps necessary to provide
            the service you've requested.
          </p>
          <p className={BODY_TEXT}>
            We do not use your data for automated decision-making or profiling, and we do not sell or rent your
            personal data to third parties.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Cookies and embedded content
          </h2>
          <p className={BODY_TEXT}>
            This website uses a small number of cookies, and asks for your consent before loading embedded content
            (such as Google Maps) that sets its own cookies. Full details are in our{" "}
            <a href="/cookie-policy" className="text-[#C9A96E] hover:text-[#C9A96E]/80">
              Cookie Policy
            </a>
            .
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Sharing your data
          </h2>
          <p className={BODY_TEXT}>
            We don't share your personal data with third parties for marketing purposes. We may share limited data
            with service providers who help us run this website and communicate with you (for example, our website
            hosting provider), solely for the purpose of providing those services, and only where they've agreed to
            keep it secure and confidential.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            How long we keep your data
          </h2>
          <p className={BODY_TEXT}>
            We keep enquiry and contact form data only as long as needed to respond to you and for a reasonable
            period afterwards in case of follow-up, typically no longer than 24 months, unless you become a patient,
            in which case your contact details may be retained as part of your patient record in line with our
            clinical record-keeping obligations.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Your rights
          </h2>
          <p className={BODY_TEXT}>Under UK data protection law, you have the right to:</p>
          <ul className={`${BODY_TEXT} list-disc pl-6 space-y-2`}>
            <li>Ask us what personal data we hold about you, and request a copy of it</li>
            <li>Ask us to correct inaccurate or incomplete data</li>
            <li>Ask us to delete your data, where there's no legal reason for us to keep it</li>
            <li>Object to, or ask us to restrict, how we use your data</li>
            <li>Withdraw consent at any time, where our processing relies on your consent</li>
          </ul>
          <p className={BODY_TEXT}>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@strattonopticians.co.uk" className="text-[#C9A96E] hover:text-[#C9A96E]/80">
              info@strattonopticians.co.uk
            </a>
            . If you're unhappy with how we've handled your data, you also have the right to complain to the
            Information Commissioner's Office (ICO) at{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E] hover:text-[#C9A96E]/80"
            >
              ico.org.uk
            </a>
            .
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Changes to this policy
          </h2>
          <p className={BODY_TEXT}>
            We may update this policy from time to time. Any changes will be posted on this page with an updated
            "last updated" date.
          </p>
        </div>
      </section>
    </Layout>
  );
}

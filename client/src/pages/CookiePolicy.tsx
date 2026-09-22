import Layout from "@/components/Layout";
import { useMetaTags } from "@/hooks/useMetaTags";
import { setConsent } from "@/lib/cookieConsent";

const SECTION_HEADING = "text-2xl font-light text-[#1A2E45] mt-12 mb-4";
const BODY_TEXT = "text-[#1A2E45]/70 leading-relaxed font-light";

export default function CookiePolicy() {
  useMetaTags({
    title: "Cookie Policy — Stratton Opticians",
    description: "What cookies this website uses and how to manage your preferences.",
    canonical: "http://localhost:3001/cookie-policy",
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
            Cookie Policy
          </h1>
          <p className={BODY_TEXT}>Last updated: September 2026</p>

          <p className={BODY_TEXT}>
            This page explains what cookies and similar technologies this website uses, in line with the UK Privacy
            and Electronic Communications Regulations (PECR) and UK GDPR. We keep this deliberately short because
            this site currently uses very few cookies.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What are cookies?
          </h2>
          <p className={BODY_TEXT}>
            Cookies are small text files placed on your device when you visit a website. They're used to make
            websites work, work more efficiently, and to provide information to the site owner. Some similar
            technologies, like your browser's local storage, work in a comparable way and are covered by this
            policy too.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Cookies we use
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse mt-4">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]">
                  <th className="py-3 pr-4 text-sm font-semibold text-[#1A2E45]">Name / type</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-[#1A2E45]">Purpose</th>
                  <th className="py-3 text-sm font-semibold text-[#1A2E45]">Consent needed?</th>
                </tr>
              </thead>
              <tbody className={`${BODY_TEXT} text-sm`}>
                <tr className="border-b border-[#1A2E45]/10">
                  <td className="py-3 pr-4 align-top">Cookie preference (local storage)</td>
                  <td className="py-3 pr-4 align-top">
                    Remembers whether you've accepted or declined non-essential cookies, so we don't ask you every
                    visit.
                  </td>
                  <td className="py-3 align-top">No — strictly necessary</td>
                </tr>
                <tr className="border-b border-[#1A2E45]/10">
                  <td className="py-3 pr-4 align-top">Google Maps</td>
                  <td className="py-3 pr-4 align-top">
                    When you accept cookies and choose to view the embedded map on our Contact page, Google sets its
                    own cookies to display the map. If you decline, you'll see a link to open the location in Google
                    Maps in a new tab instead, which doesn't set any cookie on this site.
                  </td>
                  <td className="py-3 align-top">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={BODY_TEXT}>
            We don't currently use any analytics, advertising, or tracking cookies. If that changes in future, we'll
            update this page and, where required, ask for your consent again.
          </p>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Managing your preference
          </h2>
          <p className={BODY_TEXT}>
            You can change your cookie preference at any time using the buttons below, or by clearing your browser's
            site data for this website, which will show the cookie banner again on your next visit.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setConsent("accepted")}
              className="px-5 py-2.5 bg-[#1A2E45] text-[#F8F4EF] text-xs font-medium tracking-wide rounded-full hover:bg-[#1A2E45]/90 transition-all"
            >
              Accept non-essential cookies
            </button>
            <button
              onClick={() => setConsent("declined")}
              className="px-5 py-2.5 border border-[#1A2E45]/20 text-[#1A2E45] text-xs font-medium tracking-wide rounded-full hover:bg-[#1A2E45]/5 transition-all"
            >
              Decline non-essential cookies
            </button>
          </div>

          <h2 className={SECTION_HEADING} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            More information
          </h2>
          <p className={BODY_TEXT}>
            For details on how we handle personal data more broadly, see our{" "}
            <a href="/privacy-policy" className="text-[#C9A96E] hover:text-[#C9A96E]/80">
              Privacy Policy
            </a>
            . If you have questions about this policy, contact us at{" "}
            <a href="mailto:info@strattonopticians.co.uk" className="text-[#C9A96E] hover:text-[#C9A96E]/80">
              info@strattonopticians.co.uk
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}

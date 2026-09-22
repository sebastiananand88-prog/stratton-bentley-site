import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const choose = (status: "accepted" | "declined") => {
    setConsent(status);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[#1A2E45] text-[#F8F4EF] rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[#F8F4EF]/80 leading-relaxed flex-1">
          We use a small number of cookies for essential site functionality and, where you allow it, embedded content like Google Maps. See our{" "}
          <a href="/cookie-policy" className="underline hover:text-[#C9A96E] transition-colors">
            Cookie Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => choose("declined")}
            className="px-4 py-2 border border-[#F8F4EF]/30 text-[#F8F4EF] text-xs font-medium tracking-wide rounded-full hover:bg-[#F8F4EF]/10 transition-all"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="px-4 py-2 bg-[#C9A96E] text-[#1A2E45] text-xs font-semibold tracking-wide rounded-full hover:bg-[#C9A96E]/90 transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

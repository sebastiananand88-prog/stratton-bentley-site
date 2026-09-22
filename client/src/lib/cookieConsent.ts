export type ConsentStatus = "accepted" | "declined";

const STORAGE_KEY = "stratton-cookie-consent";
const CHANGE_EVENT = "cookie-consent-changed";

export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(status: ConsentStatus) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, status);
  } catch {
    // localStorage unavailable (private mode, etc.) -- consent just won't persist across visits.
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: status }));
}

export function onConsentChange(callback: (status: ConsentStatus) => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => callback((e as CustomEvent<ConsentStatus>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

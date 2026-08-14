"use client";

import { useEffect, useRef, useState } from "react";

type Lang = { code: string; name: string; native: string; flag: string };

// English + Hindi + major international tourist languages.
const LANGUAGES: Lang[] = [
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { code: "ru", name: "Russian", native: "Русский", flag: "🇷🇺" },
  { code: "de", name: "German", native: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "French", native: "Français", flag: "🇫🇷" },
  { code: "es", name: "Spanish", native: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italian", native: "Italiano", flag: "🇮🇹" },
  { code: "ar", name: "Arabic", native: "العربية", flag: "🇸🇦" },
  { code: "ja", name: "Japanese", native: "日本語", flag: "🇯🇵" },
];

const INCLUDED_LANGUAGES = LANGUAGES.map((l) => l.code).join(",");

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay?: boolean;
          },
          element: string,
        ) => void;
      };
    };
  }
}

function readCurrentFromCookie(): string {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "en";
}

export default function LanguageSelector({
  className = "",
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(readCurrentFromCookie());

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: INCLUDED_LANGUAGES,
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const applyLanguage = (code: string, attempt = 0) => {
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!combo) {
      if (attempt < 20) setTimeout(() => applyLanguage(code, attempt + 1), 150);
      return;
    }
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
    setCurrent(code);
    setOpen(false);
  };

  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {/* Hidden Google element that powers the translation */}
      <div id="google_translate_element" aria-hidden="true" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-sea-glass bg-white px-3 py-2 text-sm font-medium text-sea-deep transition-colors hover:border-mint"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="hidden sm:inline">{active.name}</span>
        <span className="sm:hidden" aria-hidden="true">
          {active.flag}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-full z-50 mt-2 max-h-[70vh] w-56 overflow-y-auto rounded-[var(--radius-lg)] border border-sea-glass bg-white p-1.5 shadow-[0_18px_50px_rgba(11,94,90,0.25)] transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          Choose language
        </p>
        {LANGUAGES.map((l) => {
          const isActive = l.code === current;
          return (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => applyLanguage(l.code)}
              className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2 text-left text-sm transition-colors hover:bg-sea-glass/70 ${
                isActive ? "bg-sea-glass/60" : ""
              }`}
            >
              <span className="text-lg leading-none" aria-hidden="true">
                {l.flag}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-sea-deep">{l.name}</span>
                <span className="block text-xs text-muted">{l.native}</span>
              </span>
              {isActive && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-emerald"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

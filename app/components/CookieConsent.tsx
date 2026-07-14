"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "miros-cookie-consent";
const CONSENT_MAX_AGE = 1000 * 60 * 60 * 24 * 180;

type ConsentChoice = "accepted" | "rejected";

const COPY = {
  en: {
    title: "Privacy choices",
    description:
      "Help us improve the website by allowing optional measurement cookies. You can accept or decline.",
    privacy: "Read our privacy policy",
    reject: "Reject",
    accept: "Accept",
    settings: "Privacy settings",
    bannerLabel: "Cookie consent",
    settingsLabel: "Open privacy settings",
  },
  fr: {
    title: "Choix de confidentialité",
    description:
      "Aidez-nous à améliorer le site en autorisant les cookies de mesure facultatifs. Vous pouvez accepter ou refuser.",
    privacy: "Lire notre politique de confidentialité",
    reject: "Refuser",
    accept: "Accepter",
    settings: "Paramètres de confidentialité",
    bannerLabel: "Consentement aux cookies",
    settingsLabel: "Ouvrir les paramètres de confidentialité",
  },
  de: {
    title: "Datenschutzeinstellungen",
    description:
      "Helfen Sie uns, die Website zu verbessern, indem Sie optionale Mess-Cookies zulassen. Sie können zustimmen oder ablehnen.",
    privacy: "Datenschutzerklärung lesen",
    reject: "Ablehnen",
    accept: "Akzeptieren",
    settings: "Datenschutzeinstellungen",
    bannerLabel: "Cookie-Einwilligung",
    settingsLabel: "Datenschutzeinstellungen öffnen",
  },
  it: {
    title: "Scelte sulla privacy",
    description:
      "Aiutaci a migliorare il sito consentendo i cookie di misurazione facoltativi. Puoi accettare o rifiutare.",
    privacy: "Leggi la nostra informativa sulla privacy",
    reject: "Rifiuta",
    accept: "Accetta",
    settings: "Impostazioni privacy",
    bannerLabel: "Consenso ai cookie",
    settingsLabel: "Apri le impostazioni sulla privacy",
  },
} as const;

function loadApolloTracker() {
  if (
    document.querySelector("script[data-apollo-tracker]") ||
    window.__apolloTrackerLoaded
  ) {
    return;
  }

  window.__apolloTrackerLoaded = true;
  const nonce = Math.random().toString(36).substring(7);
  const script = document.createElement("script");
  script.src =
    "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" +
    nonce;
  script.async = true;
  script.defer = true;
  script.dataset.apolloTracker = "true";
  script.onload = () => {
    window.trackingFunctions?.onLoad({ appId: "6a1feb98346b070020103a16" });
  };
  document.head.appendChild(script);
}

export function CookieConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const locale = pathname
    .split("/")
    .find((segment): segment is keyof typeof COPY => segment in COPY) || "en";
  const copy = COPY[locale];

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null") as
        | { choice?: ConsentChoice; timestamp?: number }
        | null;

      if (
        stored?.choice &&
        stored.timestamp &&
        Date.now() - stored.timestamp < CONSENT_MAX_AGE
      ) {
        setChoice(stored.choice);
        if (stored.choice === "accepted") loadApolloTracker();
      }
    } catch {
      // If storage is unavailable, leave tracking disabled and show the banner.
    }
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ choice: nextChoice, timestamp: Date.now() }),
      );
    } catch {
      // The tracker remains disabled if the consent preference cannot be stored.
    }

    setChoice(nextChoice);
    if (nextChoice === "accepted") {
      loadApolloTracker();
    } else if (window.__apolloTrackerLoaded) {
      window.location.reload();
    }
  }

  if (choice) {
    return (
      <button
        className="privacy-settings-button"
        type="button"
        onClick={() => setChoice(null)}
        aria-label={copy.settingsLabel}
      >
        {copy.settings}
      </button>
    );
  }

  return (
    <aside className="cookie-banner" aria-label={copy.bannerLabel}>
      <div>
        <strong>{copy.title}</strong>
        <p>
          {copy.description}{" "}
          <a
            href="https://app.miros.work/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            {copy.privacy}
          </a>
        </p>
      </div>
      <div className="cookie-banner-actions">
        <button
          className="cookie-button cookie-button-secondary"
          type="button"
          onClick={() => saveChoice("rejected")}
        >
          {copy.reject}
        </button>
        <button
          className="cookie-button cookie-button-primary"
          type="button"
          onClick={() => saveChoice("accepted")}
        >
          {copy.accept}
        </button>
      </div>
    </aside>
  );
}

declare global {
  interface Window {
    __apolloTrackerLoaded?: boolean;
    trackingFunctions?: {
      onLoad: (options: { appId: string }) => void;
    };
  }
}

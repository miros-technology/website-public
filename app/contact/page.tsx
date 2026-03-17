"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const CONTACT_EMAIL = "contact@miros.work";
const PRIVACY_POLICY_URL = "https://app.miros.work/privacy-policy";
const TERMS_URL = "https://app.miros.work/terms-and-conditions";

type Lang = "en" | "fr" | "de" | "it";
const SUPPORTED_LANGS: Lang[] = ["en", "fr", "de", "it"];

type TopicKey =
  | "host_pod"
  | "startup_question"
  | "quote_request"
  | "partnership"
  | "other";

type ContactCopy = {
  nav: { home: string; about: string; contact: string };
  eyebrow: string;
  title: string;
  intro: string;
  form: {
    name: string;
    email: string;
    company: string;
    topic: string;
    message: string;
    submit: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    topics: Record<TopicKey, string>;
    status: {
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: { copy: string; privacy: string; terms: string };
};

const copy: Record<Lang, ContactCopy> = {
  en: {
    nav: { home: "Home", about: "About", contact: "Contact" },
    eyebrow: "Contact",
    title: "Tell us what you need",
    intro:
      "Use the form to host a pod, ask startup questions, request a quote, or discuss partnership opportunities.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company / Organization",
      topic: "Topic",
      message: "Message",
      submit: "Send Email",
      placeholders: {
        name: "Your name",
        email: "you@company.com",
        company: "Company, institution, event...",
        message: "Share context, timeline, location and your main goal.",
      },
      topics: {
        host_pod: "Host a pod",
        startup_question: "Question about the startup",
        quote_request: "Request a quote",
        partnership: "Partnership",
        other: "Other",
      },
      status: {
        sending: "Sending...",
        success: "Message sent. We will get back to you shortly.",
        error: "Send failed. Your email app will open as fallback.",
      },
    },
    footer: {
      copy: "Built for focused work, privacy, and flexibility.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", contact: "Contact" },
    eyebrow: "Contact",
    title: "Dites-nous ce dont vous avez besoin",
    intro:
      "Utilisez ce formulaire pour héberger un pod, poser des questions startup, demander un devis ou discuter partenariat.",
    form: {
      name: "Nom",
      email: "Email",
      company: "Entreprise / Organisation",
      topic: "Sujet",
      message: "Message",
      submit: "Envoyer l'email",
      placeholders: {
        name: "Votre nom",
        email: "vous@entreprise.com",
        company: "Entreprise, institution, événement...",
        message:
          "Partagez le contexte, le timing, le lieu et votre objectif principal.",
      },
      topics: {
        host_pod: "Héberger un pod",
        startup_question: "Question sur la startup",
        quote_request: "Demander un devis",
        partnership: "Partenariat",
        other: "Autre",
      },
      status: {
        sending: "Envoi en cours...",
        success: "Message envoyé. Nous revenons vers vous rapidement.",
        error:
          "Échec de l'envoi. Votre application email va s'ouvrir en secours.",
      },
    },
    footer: {
      copy: "Conçu pour le travail concentré, la confidentialité et la flexibilité.",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
  },
  de: {
    nav: { home: "Start", about: "Uber uns", contact: "Kontakt" },
    eyebrow: "Kontakt",
    title: "Sagen Sie uns, was Sie brauchen",
    intro:
      "Nutzen Sie dieses Formular, um einen Pod zu hosten, Fragen zum Startup zu stellen, ein Angebot anzufordern oder Partnerschaften zu besprechen.",
    form: {
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen / Organisation",
      topic: "Thema",
      message: "Nachricht",
      submit: "E-Mail senden",
      placeholders: {
        name: "Ihr Name",
        email: "sie@unternehmen.com",
        company: "Unternehmen, Institution, Event...",
        message: "Teilen Sie Kontext, Zeitplan, Standort und Ihr Hauptziel.",
      },
      topics: {
        host_pod: "Pod hosten",
        startup_question: "Frage zum Startup",
        quote_request: "Angebot anfragen",
        partnership: "Partnerschaft",
        other: "Andere",
      },
      status: {
        sending: "Wird gesendet...",
        success: "Nachricht gesendet. Wir melden uns in Kürze.",
        error:
          "Senden fehlgeschlagen. Ihr E-Mail-Programm wird als Fallback geöffnet.",
      },
    },
    footer: {
      copy: "Entwickelt fur fokussiertes Arbeiten, Vertraulichkeit und Flexibilitat.",
      privacy: "Datenschutzerklarung",
      terms: "Allgemeine Geschaftsbedingungen",
    },
  },
  it: {
    nav: { home: "Home", about: "Chi siamo", contact: "Contatto" },
    eyebrow: "Contatto",
    title: "Dicci di cosa hai bisogno",
    intro:
      "Usa questo modulo per ospitare un pod, fare domande sulla startup, richiedere un preventivo o discutere partnership.",
    form: {
      name: "Nome",
      email: "Email",
      company: "Azienda / Organizzazione",
      topic: "Tema",
      message: "Messaggio",
      submit: "Invia email",
      placeholders: {
        name: "Il tuo nome",
        email: "tu@azienda.com",
        company: "Azienda, istituzione, evento...",
        message:
          "Condividi contesto, tempistiche, luogo e obiettivo principale.",
      },
      topics: {
        host_pod: "Ospitare un pod",
        startup_question: "Domanda sulla startup",
        quote_request: "Richiedere un preventivo",
        partnership: "Partnership",
        other: "Altro",
      },
      status: {
        sending: "Invio in corso...",
        success: "Messaggio inviato. Ti risponderemo a breve.",
        error: "Invio non riuscito. Si aprirà l'app email come fallback.",
      },
    },
    footer: {
      copy: "Progettato per lavoro concentrato, riservatezza e flessibilita.",
      privacy: "Informativa sulla privacy",
      terms: "Termini e condizioni",
    },
  },
};

function detectLanguage(): Lang {
  if (typeof window === "undefined") {
    return "en";
  }
  const stored = window.localStorage.getItem("miros-lang");
  if (stored && SUPPORTED_LANGS.includes(stored as Lang)) {
    return stored as Lang;
  }
  const browser = (window.navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser as Lang) ? (browser as Lang) : "en";
}

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => copy[lang], [lang]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState<TopicKey>("host_pod");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    const initial = detectLanguage();
    setLang(initial);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("miros-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const topicLabel = t.form.topics[topic];
    const subject = `${topicLabel} - MIROS Website`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "-"}`,
      `Topic: ${topicLabel}`,
      "",
      message,
    ].join("\n");

    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            company: company || "-",
            topic: topicLabel,
            message,
            _subject: subject,
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setTopic("host_pod");
      setMessage("");
    } catch {
      setStatus("error");
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }

  return (
    <>
      <header className="site-header light-header">
        <a href={`${BASE_PATH}/`} className="brand dark-wordmark">
          <Image
            src={`${BASE_PATH}/images/cropped-B1_noBG-70x75.png`}
            alt="miros logo"
            width={36}
            height={38}
          />
          <span>miros</span>
        </a>
        <nav>
          <a href={`${BASE_PATH}/`}>{t.nav.home}</a>
          <a href={`${BASE_PATH}/about`}>{t.nav.about}</a>
          <a href={`${BASE_PATH}/contact`} className="pill-link">
            {t.nav.contact}
          </a>
          <label className="lang-inline" htmlFor="contact-lang-select">
            <select
              id="contact-lang-select"
              value={lang}
              onChange={(event) => setLang(event.target.value as Lang)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="it">IT</option>
            </select>
          </label>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src={`${BASE_PATH}/images/miros_wp_cloud.png`}
              alt=""
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-subline">{t.intro}</p>
          </div>
        </section>

        <section className="section contact-form-wrap">
          <form className="contact-form card" onSubmit={onSubmit}>
            <div className="form-grid">
              <label className="form-field">
                <span>{t.form.name}</span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t.form.placeholders.name}
                />
              </label>
              <label className="form-field">
                <span>{t.form.email}</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t.form.placeholders.email}
                />
              </label>
            </div>

            <div className="form-grid">
              <label className="form-field">
                <span>{t.form.company}</span>
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder={t.form.placeholders.company}
                />
              </label>
              <label className="form-field">
                <span>{t.form.topic}</span>
                <select
                  value={topic}
                  onChange={(event) => setTopic(event.target.value as TopicKey)}
                >
                  <option value="host_pod">{t.form.topics.host_pod}</option>
                  <option value="startup_question">
                    {t.form.topics.startup_question}
                  </option>
                  <option value="quote_request">
                    {t.form.topics.quote_request}
                  </option>
                  <option value="partnership">
                    {t.form.topics.partnership}
                  </option>
                  <option value="other">{t.form.topics.other}</option>
                </select>
              </label>
            </div>

            <label className="form-field">
              <span>{t.form.message}</span>
              <textarea
                required
                rows={7}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t.form.placeholders.message}
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? t.form.status.sending : t.form.submit}
            </button>
            {status === "success" && (
              <p className="form-status form-status-success">
                {t.form.status.success}
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error">
                {t.form.status.error}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-copy">{`© ${new Date().getFullYear()} MIROS. ${t.footer.copy}`}</p>
        <div className="footer-links">
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
            {t.footer.privacy}
          </a>
          <a href={TERMS_URL} target="_blank" rel="noreferrer">
            {t.footer.terms}
          </a>
        </div>
      </footer>
    </>
  );
}

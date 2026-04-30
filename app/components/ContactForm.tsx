"use client";

import { FormEvent, useState } from "react";

import { CONTACT_EMAIL, type TopicKey } from "../lib/content";
import type { Dictionary } from "../lib/content";

type FormCopy = Dictionary["contact"]["form"];

export function ContactForm({ form }: { form: FormCopy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState<TopicKey>("host_pod");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const topicLabel = form.topics[topic];
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
    <form className="contact-form card" onSubmit={onSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>{form.name}</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={form.placeholders.name}
          />
        </label>
        <label className="form-field">
          <span>{form.email}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={form.placeholders.email}
          />
        </label>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>{form.company}</span>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder={form.placeholders.company}
          />
        </label>
        <label className="form-field">
          <span>{form.topic}</span>
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value as TopicKey)}
          >
            <option value="host_pod">{form.topics.host_pod}</option>
            <option value="startup_question">{form.topics.startup_question}</option>
            <option value="quote_request">{form.topics.quote_request}</option>
            <option value="partnership">{form.topics.partnership}</option>
            <option value="other">{form.topics.other}</option>
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>{form.message}</span>
        <textarea
          required
          rows={7}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={form.placeholders.message}
        />
      </label>

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? form.status.sending : form.submit}
      </button>
      {status === "success" && (
        <p className="form-status form-status-success">{form.status.success}</p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error">{form.status.error}</p>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";
import { Button } from "./ui";
import { WhatsApp } from "./icons";
import { categories, whatsapp } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  const composed =
    `Hi Holiday In Goa, I'd like to enquire.` +
    (name ? `\nName: ${name}` : "") +
    (interest ? `\nInterested in: ${interest}` : "") +
    (date ? `\nDate: ${date}` : "") +
    (guests ? `\nGuests: ${guests}` : "") +
    (message ? `\nMessage: ${message}` : "");

  const field =
    "w-full rounded-[var(--radius-md)] border border-sea-glass bg-white px-4 py-3 text-sm text-ink outline-none focus:border-emerald";

  return (
    <form
      className="glass rounded-[var(--radius-lg)] p-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsapp(composed), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-sea-deep">
            Your name
          </span>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-sea-deep">
            Interested in
          </span>
          <select
            className={field}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="">Select an experience</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-sea-deep">
            Preferred date
          </span>
          <input
            type="date"
            className={field}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-sea-deep">
            Guests
          </span>
          <input
            type="number"
            min={1}
            className={field}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-sea-deep">
          Message
        </span>
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking for..."
        />
      </label>

      <div className="mt-5">
        <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
          <WhatsApp /> Send enquiry on WhatsApp
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">
        This opens WhatsApp with your details pre-filled — just hit send.
      </p>
    </form>
  );
}

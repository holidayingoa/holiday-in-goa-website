import type { Metadata } from "next";
import { site, categories } from "@/lib/data";
import { aboutStats, aboutValues } from "@/lib/content";
import { Section, Button } from "@/components/ui";
import PageHero from "@/components/PageHero";
import { WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: `${site.name} is a Goa-based travel agent crafting curated tours, cruises, adventures and holiday packages with instant WhatsApp confirmation.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Holiday In Goa"
        subtitle={site.tagline}
        image={categories[4].image}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section className="py-16">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
            Your Goa, done right
          </h2>
          <p className="mt-4 text-ink/90">
            {site.name} is a Goa-based travel company built on one simple idea:
            travellers deserve honest advice, fair prices and experiences run by
            people who actually know Goa. From sunset cruises and scuba diving to
            the Dudhsagar waterfall and complete holiday packages, we handle the
            details so you can simply enjoy the journey.
          </p>
          <p className="mt-4 text-ink/90">
            As a domestic and international travel agent, we work with a network
            of trusted, safety-first local operators and negotiate the best
            prices on your behalf — then wrap it all in friendly 24x7 support you
            can reach anytime on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {aboutStats.map((s) => (
            <div
              key={s.label}
              className="rounded-[var(--radius-lg)] bg-sand p-6 text-center"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-emerald">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v) => (
            <div
              key={v.title}
              className="rounded-[var(--radius-lg)] border border-sea-glass bg-white p-6"
            >
              <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
                {v.title}
              </h3>
              <p className="text-sm text-muted">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 rounded-[var(--radius-lg)] brand-gradient p-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
            Let&apos;s plan your Goa trip
          </h2>
          <p className="max-w-lg text-white/85">
            Tell us your dates and what you love — we&apos;ll craft the perfect
            itinerary and give you a clear, all-in price.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button href={site.whatsappUrl} variant="whatsapp" size="lg">
              <WhatsApp /> Chat on WhatsApp
            </Button>
            <Button href="/tours" variant="secondary" size="lg">
              Browse experiences
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}

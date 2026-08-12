import type { Metadata } from "next";
import { site, categories } from "@/lib/data";
import { faqs } from "@/lib/content";
import { Section, Button } from "@/components/ui";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: `FAQs — ${site.name}`,
  description:
    "Frequently asked questions about booking Goa tours, payments, cancellations and customisation with Holiday In Goa.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqsPage() {
  return (
    <main>
      <JsonLd data={faqLd} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking with us."
        image={categories[6].image}
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <Section className="py-16">
        <FaqAccordion items={faqs} />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-sand p-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-sea-deep">
            Still have a question?
          </h2>
          <p className="text-muted">
            Our team is available 24x7 — get an answer in minutes on WhatsApp.
          </p>
          <Button href={site.whatsappUrl} variant="whatsapp" size="lg">
            <WhatsApp /> Chat on WhatsApp
          </Button>
        </div>
      </Section>
    </main>
  );
}

import type { Metadata } from "next";
import { categories, tours, site } from "@/lib/data";
import { Section } from "@/components/ui";
import PageHero from "@/components/PageHero";
import ToursExplorer from "@/components/ToursExplorer";

export const metadata: Metadata = {
  title: `All Goa Experiences — ${site.name}`,
  description:
    "Browse all Goa tours, cruises, scuba diving, water sports, Dudhsagar trips, sightseeing and holiday packages.",
};

export default function ToursPage() {
  return (
    <main>
      <PageHero
        title="All Experiences"
        subtitle="Cruises, scuba, water sports, waterfalls, sightseeing and holiday packages — all in one place."
        image={categories[0].image}
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences" }]}
      />

      <Section className="py-16">
        <ToursExplorer tours={tours} categories={categories} />
      </Section>
    </main>
  );
}

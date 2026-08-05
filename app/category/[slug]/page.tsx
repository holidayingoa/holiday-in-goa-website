import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  categories,
  getCategory,
  getToursByCategory,
  site,
} from "@/lib/data";
import { Section, Button } from "@/components/ui";
import PageHero from "@/components/PageHero";
import TourCard from "@/components/TourCard";
import { WhatsApp } from "@/components/icons";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not found" };
  return {
    title: `${category.name} in Goa — ${site.name}`,
    description: `Book ${category.name.toLowerCase()} in Goa: ${category.tagline}. Instant WhatsApp confirmation and secure payments.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getToursByCategory(slug);

  return (
    <main>
      <PageHero
        title={category.name}
        subtitle={category.tagline}
        image={category.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/tours" },
          { label: category.name },
        ]}
      />

      <Section className="py-16">
        {list.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <p className="text-muted">
            New experiences in this category are coming soon. Message us on
            WhatsApp for the latest options.
          </p>
        )}

        <div className="mt-12 flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-sand p-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
            Not sure which one to pick?
          </h2>
          <p className="max-w-lg text-muted">
            Tell us your dates and group size — we&apos;ll suggest the best{" "}
            {category.name.toLowerCase()} option and give you a custom price.
          </p>
          <Button href={site.whatsappUrl} variant="whatsapp" size="lg">
            <WhatsApp /> Ask on WhatsApp
          </Button>
        </div>
      </Section>
    </main>
  );
}

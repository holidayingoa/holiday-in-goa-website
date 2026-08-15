import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  tours,
  getTour,
  getCategory,
  getToursByCategory,
  hasBoatSafety,
  inr,
  site,
  whatsapp,
} from "@/lib/data";
import { Section, Button, Stars } from "@/components/ui";
import PageHero from "@/components/PageHero";
import TourCard from "@/components/TourCard";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { WhatsApp, Clock, Pin, Shield, Bolt } from "@/components/icons";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Not found" };
  return {
    title: `${tour.title} — ${site.name}`,
    description: tour.description,
  };
}

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-emerald"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-muted"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const category = getCategory(tour.categorySlug);
  const related = getToursByCategory(tour.categorySlug)
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);

  const priceUnit = tour.priceUnit ?? "person";
  const bookMsg = tour.closed
    ? `Hi Holiday In Goa, I see "${tour.title}" is temporarily closed. Could you suggest a similar option for my dates?`
    : tour.priceOnRequest
      ? `Hi Holiday In Goa, I'd like to know the price and availability for "${tour.title}". Please share details.`
      : `Hi Holiday In Goa, I'd like to book "${tour.title}" (${inr(
          tour.price,
        )} / ${priceUnit}). Please share availability.`;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.title,
    description: tour.description,
    image: tour.image,
    brand: { "@type": "Brand", name: site.name },
    category: tour.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviews,
    },
    ...(tour.priceOnRequest
      ? {}
      : {
          offers: {
            "@type": "Offer",
            price: tour.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `${site.url}/tours/${tour.slug}`,
          },
        }),
  };

  return (
    <main>
      <JsonLd data={productLd} />
      <PageHero
        title={tour.title}
        subtitle={tour.description}
        image={tour.image}
        crumbs={[
          { label: "Home", href: "/" },
          category
            ? { label: category.name, href: `/category/${category.slug}` }
            : { label: "Experiences", href: "/tours" },
          { label: tour.title },
        ]}
      />

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Left: content */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
              <Stars rating={tour.rating} />
              <span>({tour.reviews} reviews)</span>
              <span className="inline-flex items-center gap-1">
                <Pin size={15} /> {tour.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={15} /> {tour.duration}
              </span>
            </div>

            {tour.gallery && tour.gallery.length > 0 && (
              <Gallery images={tour.gallery} title={tour.title} />
            )}

            {tour.specs && tour.specs.length > 0 && (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[var(--radius-md)] border border-sea-glass bg-white px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {s.label}
                    </p>
                    <p className="mt-0.5 font-medium text-sea-deep">{s.value}</p>
                  </div>
                ))}
              </div>
            )}

            {hasBoatSafety(tour.slug) && (
              <div className="mt-5 flex items-start gap-3 rounded-[var(--radius-md)] border border-mint-soft bg-mint-soft/20 px-4 py-3 text-sm text-sea-deep">
                <Shield size={18} className="mt-0.5 shrink-0 text-emerald" />
                <p>
                  <span className="font-semibold">Your safety first:</span> our
                  boats carry British safety-standard life jackets and are
                  government-licensed.
                </p>
              </div>
            )}

            <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
              Overview
            </h2>
            <p className="mt-3 text-ink/90">{tour.description}</p>

            <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
              Highlights
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-ink/90">
                  <Check /> {h}
                </li>
              ))}
            </ul>

            {tour.itinerary && tour.itinerary.length > 0 && (
              <>
                <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
                  Day-by-day itinerary
                </h2>
                <ol className="mt-4 space-y-4">
                  {tour.itinerary.map((d) => (
                    <li
                      key={d.day}
                      className="relative rounded-[var(--radius-lg)] border border-sea-glass bg-white p-5"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="rounded-[var(--radius-pill)] bg-mint-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
                          {d.day}
                        </span>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
                          {d.title}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-ink/90">
                        {d.items.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <Check /> {it}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </>
            )}

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[var(--radius-lg)] border border-sea-glass bg-white p-5">
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
                  What&apos;s included
                </h3>
                <ul className="space-y-2 text-sm text-ink/90">
                  {tour.inclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-sea-glass bg-white p-5">
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
                  Not included
                </h3>
                <ul className="space-y-2 text-sm text-ink/90">
                  {tour.exclusions.map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <Cross /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: sticky booking card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass rounded-[var(--radius-lg)] p-6">
              <p className="text-sm text-muted">
                {tour.priceOnRequest ? "Pricing" : "From"}
              </p>
              {tour.priceOnRequest ? (
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink">
                  On request
                </p>
              ) : (
                <>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink">
                    {inr(tour.price)}
                    <span className="text-base font-normal text-muted">
                      {" "}
                      / {priceUnit}
                    </span>
                  </p>
                  {tour.strikePrice && (
                    <p className="mt-1 text-sm text-muted line-through">
                      {inr(tour.strikePrice)}
                    </p>
                  )}
                </>
              )}

              <div className="my-5 h-px bg-sea-glass" />

              {tour.closed ? (
                <p className="rounded-[var(--radius-md)] bg-alert/10 px-4 py-3 text-sm font-medium text-alert">
                  This experience is temporarily closed and cannot be booked
                  right now.
                </p>
              ) : (
                <div className="space-y-2 text-sm text-ink/90">
                  <p className="flex items-center gap-2">
                    <Bolt size={16} className="text-emerald" /> Instant WhatsApp
                    confirmation
                  </p>
                  <p className="flex items-center gap-2">
                    <Shield size={16} className="text-emerald" /> Free
                    cancellation (24h)
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <Button href={whatsapp(bookMsg)} variant="whatsapp" size="lg">
                  <WhatsApp />{" "}
                  {tour.closed ? "Ask about alternatives" : "Book on WhatsApp"}
                </Button>
                <Button href={`tel:${site.phoneRaw}`} variant="ghost" size="lg">
                  Call {site.phone}
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-muted">
                {tour.closed
                  ? "We'll suggest a similar club for your dates."
                  : "No payment now — confirm details with our team first."}
              </p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
              You may also like
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
            {category && (
              <div className="mt-8">
                <Link
                  href={`/category/${category.slug}`}
                  className="link-underline text-sm font-semibold text-emerald"
                >
                  View all {category.name}
                </Link>
              </div>
            )}
          </div>
        )}
      </Section>
    </main>
  );
}

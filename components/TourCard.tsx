import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/data";
import { inr } from "@/lib/data";
import { Button, Stars } from "./ui";
import { Clock, Pin } from "./icons";

export default function TourCard({
  tour,
  className = "",
}: {
  tour: Tour;
  className?: string;
}) {
  const off = tour.strikePrice
    ? Math.round(((tour.strikePrice - tour.price) / tour.strikePrice) * 100)
    : 0;
  const href = `/tours/${tour.slug}`;

  return (
    <article
      className={`glass flex flex-col overflow-hidden rounded-[var(--radius-lg)] transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <Link href={href} className="relative block aspect-[4/3]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 90vw, 320px"
          className="object-cover"
        />
        {tour.badge && (
          <span className="absolute left-3 top-3 rounded-[var(--radius-pill)] brand-gradient px-3 py-1 text-xs font-semibold text-white">
            {tour.badge}
          </span>
        )}
        {off > 0 && (
          <span className="absolute right-3 top-3 rounded-[var(--radius-pill)] bg-white/90 px-2.5 py-1 text-xs font-bold text-emerald">
            {off}% OFF
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <Stars rating={tour.rating} />
          <span className="text-xs text-muted">({tour.reviews} reviews)</span>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-sea-deep">
          <Link href={href} className="hover:text-emerald">
            {tour.title}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Pin size={14} /> {tour.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} /> {tour.duration}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-sea-glass pt-4">
          <div>
            <p className="text-xs text-muted">
              {tour.priceOnRequest ? "Pricing" : "From"}
            </p>
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              {tour.priceOnRequest ? (
                "On request"
              ) : (
                <>
                  {inr(tour.price)}
                  {tour.strikePrice && (
                    <span className="ml-1.5 text-xs font-normal text-muted line-through">
                      {inr(tour.strikePrice)}
                    </span>
                  )}
                </>
              )}
            </p>
          </div>
          <Button href={href} size="sm">
            View
          </Button>
        </div>
      </div>
    </article>
  );
}

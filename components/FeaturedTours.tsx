"use client";

import { useRef } from "react";
import { featuredTours } from "@/lib/data";
import { Section, Button } from "./ui";
import SectionHead from "./SectionHead";
import TourCard from "./TourCard";
import { Arrow } from "./icons";

export default function FeaturedTours() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.8, 300);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <Section id="featured" className="py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="Bestsellers" title="Featured tours & tickets">
          The most-booked Goa experiences this season, at the best guaranteed
          prices.
        </SectionHead>
        <div className="reveal mb-8 flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll to previous tours"
            className="grid h-10 w-10 place-items-center rounded-full border border-sea-glass bg-white text-sea-deep transition-colors hover:bg-sea-glass"
          >
            <Arrow size={18} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll to next tours"
            className="grid h-10 w-10 place-items-center rounded-full border border-sea-glass bg-white text-sea-deep transition-colors hover:bg-sea-glass"
          >
            <Arrow size={18} />
          </button>
          <Button href="/tours" variant="ghost" size="sm" className="ml-1 hidden sm:inline-flex">
            View all
          </Button>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2"
      >
        {featuredTours.map((tour) => (
          <TourCard
            key={tour.slug}
            tour={tour}
            className="reveal w-[280px] shrink-0 snap-start"
          />
        ))}
      </div>
    </Section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { featuredTours } from "@/lib/data";
import { Section, Button } from "./ui";
import SectionHead from "./SectionHead";
import TourCard from "./TourCard";

export default function FeaturedTours() {
  const scroller = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  // Continuous, self-looping auto-scroll (marquee). The card list is rendered
  // twice; once we've scrolled past the first copy we jump back by its width so
  // the loop is seamless and never reaches a visible "end".
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const speed = 0.3; // px per frame (~18px/s at 60fps)
    const count = featuredTours.length;
    let raf = 0;

    const tick = () => {
      if (!paused.current) {
        el.scrollLeft += speed;
        // Width of one full copy = where the duplicated set begins.
        const first = el.children[0] as HTMLElement | undefined;
        const second = el.children[count] as HTMLElement | undefined;
        const loopWidth =
          first && second ? second.offsetLeft - first.offsetLeft : 0;
        if (loopWidth > 0 && el.scrollLeft >= loopWidth)
          el.scrollLeft -= loopWidth;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Section id="featured" className="py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="Bestsellers" title="Featured tours & tickets">
          The most-booked Goa experiences this season, at the best guaranteed
          prices.
        </SectionHead>
        <div className="reveal mb-8 flex items-center gap-2">
          <Button href="/tours" variant="ghost" size="sm" className="hidden sm:inline-flex">
            View all
          </Button>
        </div>
      </div>

      <div
        ref={scroller}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        onTouchEnd={() => (paused.current = false)}
        className="no-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5 pb-2"
      >
        {[...featuredTours, ...featuredTours].map((tour, i) => (
          <TourCard
            key={`${tour.slug}-${i}`}
            tour={tour}
            className="w-[280px] shrink-0"
          />
        ))}
      </div>
    </Section>
  );
}

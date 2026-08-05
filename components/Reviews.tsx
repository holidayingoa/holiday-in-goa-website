import { reviews } from "@/lib/data";
import { Section, Stars } from "./ui";
import SectionHead from "./SectionHead";

export default function Reviews() {
  return (
    <div className="bg-sand py-20">
      <Section id="reviews">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Loved by travellers" title="What our guests say">
            Real reviews from verified travellers across India.
          </SectionHead>
          <div className="reveal mb-8 flex items-center gap-2 rounded-[var(--radius-pill)] border border-sea-glass bg-white px-4 py-2">
            <Stars rating={4.8} />
            <span className="text-sm text-muted">from 1,200+ reviews</span>
          </div>
        </div>

        <div className="no-scrollbar -mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal flex w-[300px] shrink-0 snap-start flex-col rounded-[var(--radius-lg)] border border-sea-glass bg-white p-6"
            >
              <Stars rating={r.rating} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/90">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-sea-glass pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full brand-gradient font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-sea-deep">{r.name}</p>
                  <p className="text-xs text-muted">
                    {r.location} · {r.tour}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}

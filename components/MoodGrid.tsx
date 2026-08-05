import Image from "next/image";
import Link from "next/link";
import { moods } from "@/lib/data";
import { Section } from "./ui";
import SectionHead from "./SectionHead";
import { Arrow } from "./icons";

export default function MoodGrid() {
  return (
    <Section id="moods" className="py-20">
      <SectionHead eyebrow="Find your vibe" title="Experiences by mood">
        However you travel, we&apos;ve shaped the perfect Goa day around it.
      </SectionHead>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {moods.map((mood) => (
          <Link
            key={mood.name}
            href={`/category/${mood.categorySlug}`}
            className="reveal group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] p-5"
          >
            <Image
              src={mood.image}
              alt={mood.name}
              fill
              sizes="(max-width: 640px) 90vw, 24vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-abyss/90 via-sea-abyss/20 to-transparent" />
            <div className="relative">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                {mood.name}
              </h3>
              <p className="mt-1 text-sm text-white/75">{mood.blurb}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-mint">
                Explore{" "}
                <Arrow
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

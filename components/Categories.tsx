import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import { Section } from "./ui";
import SectionHead from "./SectionHead";

export default function Categories() {
  return (
    <Section id="categories" className="py-20">
      <SectionHead
        eyebrow="Browse by type"
        title="Popular experiences"
        subtitleNoWrap
      >
        Handpicked activities across North and South Goa — something for every
        kind of traveller.
      </SectionHead>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories
          .filter((cat) => cat.slug !== "packages")
          .map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="reveal group relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)]"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              sizes="(max-width: 640px) 45vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-abyss/85 via-sea-abyss/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                {cat.name}
              </p>
              <p className="text-xs text-white/70">{cat.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

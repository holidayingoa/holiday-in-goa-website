import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import JsonLd from "./JsonLd";

export default function PageHero({
  title,
  subtitle,
  image,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  crumbs: { label: string; href?: string }[];
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden">
      <JsonLd data={breadcrumbLd} />
      {image ? (
        <>
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 brand-gradient opacity-85" />
        </>
      ) : (
        <div className="absolute inset-0 brand-gradient" />
      )}
      {/* Legibility scrim so text stays readable over any image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />

      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:pb-16 sm:pt-32">
        <nav className="mb-3 flex flex-wrap items-center gap-1.5 text-sm text-white/80">
          {crumbs.map((c, i) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span className="text-white/50">/</span>}
            </span>
          ))}
        </nav>
        <h1 className="max-w-4xl text-balance break-words font-[family-name:var(--font-display)] text-[26px] font-bold leading-[1.1] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

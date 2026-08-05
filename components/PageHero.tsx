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
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

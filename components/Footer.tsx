import Link from "next/link";
import Image from "next/image";
import { WhatsApp } from "./icons";
import { site, asset } from "@/lib/data";

const columns = [
  {
    title: "Experiences",
    links: [
      { label: "Tour Packages", href: "/category/packages" },
      { label: "Cruises", href: "/category/cruises" },
      { label: "Scuba Diving", href: "/category/scuba-diving" },
      { label: "Water Sports", href: "/category/water-sports" },
      { label: "Dudhsagar", href: "/category/dudhsagar" },
      { label: "Casino", href: "/category/casino" },
      { label: "Nightlife & Parties", href: "/category/nightlife" },
      { label: "Sightseeing", href: "/category/sightseeing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "All Experiences", href: "/tours" },
      { label: "Travel Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "WhatsApp Us", href: site.whatsappUrl },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Cancellation Policy", href: "/policies/cancellation" },
      { label: "Refund Policy", href: "/policies/refund" },
      { label: "Privacy Policy", href: "/policies/privacy" },
      { label: "Terms & Conditions", href: "/policies/terms" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-sea-deep text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-1.5">
                <Image
                  src={asset("/logo.png")}
                  alt={site.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight text-white">
                Holiday in Goa
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-mint">
                  Tour &amp; Travels
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/65">
              {site.tagline}. Curated Goa experiences with instant confirmation
              and secure payments.
            </p>

            <div className="mt-5 space-y-1.5 text-sm text-white/75">
              <p>
                <span className="text-white/50">Contact:</span>{" "}
                <a href={`tel:${site.phoneRaw}`} className="hover:text-mint">
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="text-white/50">Office:</span>{" "}
                <a href={`tel:${site.officeRaw}`} className="hover:text-mint">
                  {site.office}
                </a>
              </p>
              <p>
                <span className="text-white/50">Email:</span>{" "}
                <a href={`mailto:${site.email}`} className="hover:text-mint">
                  {site.email}
                </a>
              </p>
            </div>

            <a
              href={site.whatsappUrl}
              className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1fb457]"
            >
              <WhatsApp size={16} /> {site.whatsappDisplay}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-mint"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2026 {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/50">
            <span>Secure payments</span>
            <span className="rounded bg-white/10 px-2 py-1 font-semibold text-white/80">
              Razorpay
            </span>
            <span className="rounded bg-white/10 px-2 py-1 font-semibold text-white/80">
              UPI
            </span>
            <span className="rounded bg-white/10 px-2 py-1 font-semibold text-white/80">
              VISA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

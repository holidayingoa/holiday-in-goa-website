"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui";
import { WhatsApp, Menu, Close, Arrow } from "./icons";
import LanguageSelector from "./LanguageSelector";
import { site, getToursByCategory, inr, asset } from "@/lib/data";

type MenuDef = { label: string; href: string; cats: string[] };

const menus: MenuDef[] = [
  { label: "Packages", href: "/category/packages", cats: ["packages"] },
  { label: "Cruises", href: "/category/cruises", cats: ["cruises"] },
  { label: "Scuba Diving", href: "/category/scuba-diving", cats: ["scuba-diving"] },
  { label: "Adventure", href: "/category/adventure", cats: ["adventure", "water-sports"] },
  { label: "Sightseeing", href: "/category/sightseeing", cats: ["sightseeing", "dudhsagar"] },
  { label: "Nightlife", href: "/category/nightlife", cats: ["nightlife", "casino"] },
];

function toursFor(cats: string[]) {
  return cats.flatMap((c) => getToursByCategory(c));
}

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5">
      <Image
        src={asset("/logo-emblem.png")}
        alt={site.name}
        width={48}
        height={48}
        priority
        className="h-11 w-11 rounded-[12px]"
      />
      <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-extrabold leading-tight tracking-tight text-sea-deep sm:text-xl">
        Holiday In Goa
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald">
          Tour &amp; Travels
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Collapse the desktop nav into the hamburger menu whenever the (possibly
  // translated) labels don't fit on one line — keeps the header tidy in any
  // language instead of cramming labels edge-to-edge.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!window.matchMedia("(min-width: 1024px)").matches) {
          setCollapsed(false);
          return;
        }
        const items = Array.from(nav.children) as HTMLElement[];
        const required = items.reduce(
          (sum, el, i) => sum + el.offsetWidth + (i > 0 ? 2 : 0),
          0,
        );
        setCollapsed(required > nav.clientWidth + 8);
      });
    };
    measure();
    window.addEventListener("resize", measure);
    const mo = new MutationObserver(measure);
    mo.observe(nav, { childList: true, subtree: true, characterData: true });
    const t1 = setTimeout(measure, 1200);
    const t2 = setTimeout(measure, 3000);
    return () => {
      window.removeEventListener("resize", measure);
      mo.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close menus on client-side navigation (header never unmounts otherwise)
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [pathname]);

  // Transparent only over the homepage's light hero; solid (readable) elsewhere
  const solid = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-foam/90 backdrop-blur-md shadow-[0_4px_20px_rgba(11,94,90,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Logo />

        {/* Desktop nav with dropdowns — flex-1 + min-w-0 lets it shrink so long
            translated labels never push the logo or language switcher off-screen.
            When the labels don't fit, it collapses to the hamburger menu. */}
        <nav
          ref={navRef}
          className={`hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex ${
            collapsed ? "lg:pointer-events-none lg:opacity-0" : ""
          }`}
        >
          {menus.map((menu) => {
            const isOpen = openMenu === menu.href;
            return (
              <div
                key={menu.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.href)}
                onMouseLeave={() => setOpenMenu(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <Link
                  href={menu.href}
                  onFocus={() => setOpenMenu(menu.href)}
                  aria-expanded={isOpen}
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-[var(--radius-pill)] px-2.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-sea-deep"
                >
                  {menu.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`mt-0.5 opacity-60 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>

                <div
                  className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="relative w-80 overflow-hidden rounded-[var(--radius-lg)] border border-sea-glass bg-white shadow-[0_18px_50px_rgba(11,94,90,0.25)]">
                    <span
                      className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-sea-glass bg-white"
                      aria-hidden="true"
                    />
                    <p className="px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Popular {menu.label}
                    </p>
                    <div className="p-2 pt-1">
                      {toursFor(menu.cats)
                        .slice(0, 4)
                        .map((t) => (
                          <Link
                            key={t.slug}
                            href={`/tours/${t.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="group/item flex items-center gap-3 rounded-[var(--radius-md)] p-2 transition-colors hover:bg-sea-glass/70"
                          >
                            <span className="relative h-12 w-14 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                              <Image
                                src={t.image}
                                alt={t.title}
                                fill
                                sizes="56px"
                                className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-medium text-sea-deep">
                                {t.title}
                              </span>
                              <span className="mt-0.5 block text-xs text-muted">
                                {t.duration} ·{" "}
                                <span className="font-semibold text-emerald">
                                  {t.priceOnRequest ? "On request" : inr(t.price)}
                                </span>
                              </span>
                            </span>
                            <Arrow
                              size={14}
                              className="shrink-0 text-muted opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                            />
                          </Link>
                        ))}
                    </div>
                    <Link
                      href={menu.href}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-center justify-center gap-1.5 border-t border-sea-glass bg-sand/60 px-4 py-3 text-sm font-semibold text-emerald transition-colors hover:bg-sea-glass"
                    >
                      View all {menu.label} <Arrow size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-[var(--radius-pill)] px-2.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-sea-deep"
          >
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSelector />
          <button
            className={`grid h-10 w-10 place-items-center rounded-full bg-white/70 text-sea-deep ${
              collapsed ? "" : "lg:hidden"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
        </div>
      </header>

      {/* Mobile / collapsed menu — rendered as a sibling of <header> (not a
          child) so the header's backdrop-filter can't become the containing
          block for this fixed overlay and collapse it to the header's height. */}
      {open && (
        <div
          className={`fixed inset-0 z-50 overflow-y-auto bg-foam/97 backdrop-blur-xl ${
            collapsed ? "" : "lg:hidden"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <Logo />
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-sea-deep"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Close />
            </button>
          </div>
          <nav className="flex flex-col px-5 pt-4">
            {menus.map((menu) => (
              <div key={menu.href} className="border-b border-sea-glass py-3">
                <Link
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between font-[family-name:var(--font-display)] text-xl font-semibold text-sea-deep"
                >
                  {menu.label}
                  <Arrow size={18} className="text-emerald" />
                </Link>
                <div className="mt-2 flex flex-col gap-1.5">
                  {toursFor(menu.cats)
                    .slice(0, 4)
                    .map((t) => (
                      <Link
                        key={t.slug}
                        href={`/tours/${t.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-[var(--radius-md)] p-1.5 transition-colors active:bg-sea-glass/70"
                      >
                        <span className="relative h-12 w-14 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                          <Image
                            src={t.image}
                            alt={t.title}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-sea-deep">
                            {t.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted">
                            {t.duration} ·{" "}
                            <span className="font-semibold text-emerald">
                              {t.priceOnRequest ? "On request" : inr(t.price)}
                            </span>
                          </span>
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="border-b border-sea-glass py-4 font-[family-name:var(--font-display)] text-xl font-semibold text-sea-deep"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-3 px-5 pb-10">
            <Button href={site.whatsappUrl} variant="whatsapp" size="lg">
              <WhatsApp /> Chat on WhatsApp
            </Button>
            <Button href="/tours" size="lg">
              Browse all experiences
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

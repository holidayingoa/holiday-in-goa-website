import Image from "next/image";
import { Button } from "./ui";
import { Shield, Bolt, Coins, Anchor } from "./icons";

const trust = [
  { icon: Bolt, label: "Instant WhatsApp confirmation" },
  { icon: Shield, label: "Free cancellation" },
  { icon: Coins, label: "Secure Razorpay payments" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[94vh] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2100&q=85"
        alt="Pristine turquoise Goa coastline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Mobile / tablet: broad readable scrim across the whole hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-foam/90 via-foam/72 to-foam/88 lg:hidden" />
      {/* Desktop: airy left fade, crisp on the right */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-foam/92 from-0% via-foam/45 via-40% to-transparent lg:block" />
      <div className="absolute inset-0 hidden bg-gradient-to-t from-foam/35 via-transparent to-white/15 lg:block" />

      {/* Floating Dudhsagar + beach image cards (tablet and up) */}
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden items-center lg:flex">
        <div className="relative h-[26rem] w-[19rem]">
          <div className="absolute right-0 top-2 h-[22rem] w-64 rotate-3 overflow-hidden rounded-[var(--radius-lg)] border-4 border-white shadow-[0_20px_50px_rgba(11,94,90,0.25)]">
            <Image
              src="/dudhsagar.png"
              alt="Dudhsagar Waterfall, Goa"
              fill
              sizes="256px"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-[var(--radius-pill)] bg-white/90 px-3 py-1 text-xs font-semibold text-emerald backdrop-blur">
              Dudhsagar Falls
            </span>
          </div>
          <div className="absolute bottom-0 left-0 h-52 w-44 -rotate-6 overflow-hidden rounded-[var(--radius-lg)] border-4 border-white shadow-[0_20px_50px_rgba(11,94,90,0.22)]">
            <Image
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=500&q=85"
              alt="Palm-lined Goa cove"
              fill
              sizes="176px"
              className="object-cover"
            />
            <span className="absolute bottom-2 left-2 rounded-[var(--radius-pill)] bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-emerald backdrop-blur">
              Beaches
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[94vh] max-w-6xl flex-col justify-center px-5 pt-24 pb-16 lg:pr-[21rem]">
        {/* Decorative eyebrow */}
        <span className="reveal eyebrow-divider mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
          Embrace the beauty of Goa
        </span>

        {/* Editorial headline: small line + flowing script accent */}
        <h1 className="reveal hero-legible max-w-3xl">
          <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-[0.14em] text-sea-deep sm:text-3xl">
            Discover &amp;
          </span>
          <span className="text-script -ml-1 mt-1 block text-emerald">
            Live the Experience
          </span>
        </h1>

        {/* Anchor divider like the reference, but light */}
        <span className="reveal mt-6 inline-flex items-center gap-3 text-emerald/70">
          <span className="h-px w-10 bg-emerald/40" />
          <Anchor size={18} />
          <span className="h-px w-10 bg-emerald/40" />
        </span>

        <p className="reveal hero-legible mt-5 max-w-xl text-lg font-medium text-ink">
          A journey like no other — cruises, scuba, waterfalls and beaches,
          curated by locals and confirmed in minutes.
        </p>

        {/* Primary CTA in the reference's spirit */}
        <div className="reveal mt-9 flex flex-wrap items-center gap-4">
          <Button href="/tours" size="lg">
            Book your journey today
          </Button>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {trust.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="hero-legible inline-flex items-center gap-2 text-sm font-medium text-ink/90"
              >
                <Icon size={18} className="text-emerald" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Section, Button } from "./ui";
import { Bolt } from "./icons";
import { site } from "@/lib/data";

export default function OfferBand() {
  return (
    <Section id="offer" className="py-16">
      <div className="reveal relative overflow-hidden rounded-[var(--radius-lg)] brand-gradient px-8 py-12 text-center sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-mint-soft/20 blur-3xl" />

        <span className="relative inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
          <Bolt size={16} className="text-mint" /> Monsoon Special
        </span>
        <h2 className="relative mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
          Save up to 35% on curated Goa packages
        </h2>
        <p className="relative mx-auto mt-3 max-w-xl text-white/85">
          Bundle cruises, stays and activities into one seamless trip. Limited
          monsoon-season pricing — book before it sails away.
        </p>
        <div className="relative mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/category/packages" variant="secondary" size="lg">
            Explore packages
          </Button>
          <Button
            href={site.whatsappUrl}
            variant="ghost"
            size="lg"
            className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20"
          >
            Get a custom plan
          </Button>
        </div>
      </div>
    </Section>
  );
}

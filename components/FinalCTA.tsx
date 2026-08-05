import Image from "next/image";
import { Section, Button } from "./ui";
import { WhatsApp } from "./icons";
import { site } from "@/lib/data";

export default function FinalCTA() {
  return (
    <Section className="py-20">
      <div className="reveal relative overflow-hidden rounded-[var(--radius-lg)] px-8 py-16 text-center sm:px-16 sm:py-24">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=85"
          alt="Sunset cruise on the Goa coast"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 brand-gradient opacity-85" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-5xl">
            Ready to explore Goa?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85">
            Chat with a local expert and get a personalised plan in under 5
            minutes — free advice, no commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={site.whatsappUrl} variant="whatsapp" size="lg">
              <WhatsApp /> Chat on WhatsApp
            </Button>
            <Button href="/tours" variant="secondary" size="lg">
              Browse experiences
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

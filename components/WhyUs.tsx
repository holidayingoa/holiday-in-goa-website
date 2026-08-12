import { Section } from "./ui";
import SectionHead from "./SectionHead";
import { Pin, Coins, Shield, WhatsApp } from "./icons";

const features = [
  {
    icon: Pin,
    title: "Local experts",
    text: "Every tour is run and vetted by trusted Goa operators we know personally.",
  },
  {
    icon: Coins,
    title: "Best price, always",
    text: "Transparent pricing with no hidden charges. Find it cheaper? We'll match it.",
  },
  {
    icon: Shield,
    title: "Free cancellation",
    text: "Plans change. Cancel free up to 24 hours before most experiences.",
  },
  {
    icon: WhatsApp,
    title: "24/7 WhatsApp support",
    text: "Real humans, instant replies. Book and get confirmed on WhatsApp.",
  },
];

export default function WhyUs() {
  return (
    <div className="bg-sand py-20">
      <Section>
        <SectionHead
          eyebrow="Why Holiday In Goa"
          title="Booked with confidence"
          align="center"
        >
          Thousands of happy travellers trust us to handle the details so they
          can just enjoy Goa.
        </SectionHead>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal rounded-[var(--radius-lg)] border border-sea-glass bg-white p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-sea-glass text-emerald">
                <Icon size={22} />
              </span>
              <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
                {title}
              </h3>
              <p className="text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

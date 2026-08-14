import type { Metadata } from "next";
import { site, categories } from "@/lib/data";
import { Section } from "@/components/ui";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { WhatsApp, Pin, Clock } from "@/components/icons";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name}. Call ${site.phone}, email ${site.email} or message us on WhatsApp.`,
};

function Mail({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Phone({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export default function ContactPage() {
  const contacts = [
    {
      icon: <Phone />,
      label: "Contact",
      value: site.phone,
      href: `tel:${site.phoneRaw}`,
    },
    {
      icon: <Phone />,
      label: "Office",
      value: site.office,
      href: `tel:${site.officeRaw}`,
    },
    {
      icon: <WhatsApp size={20} />,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: site.whatsappUrl,
    },
    {
      icon: <Mail />,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <main>
      <PageHero
        title="Get in touch"
        subtitle="Questions, custom itineraries or group bookings — our Goa team is available 24x7."
        image={categories[1].image}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        subtitleNoWrap
      />

      <Section className="py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
              Talk to a Goa expert
            </h2>
            <p className="mt-2 text-muted">
              Reach us any time — we usually reply within minutes on WhatsApp.
            </p>

            <div className="mt-6 space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-sea-glass bg-white p-4 transition-colors hover:border-emerald"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-md)] bg-sea-glass text-emerald">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {c.label}
                    </span>
                    <span className="font-medium text-sea-deep">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-[var(--radius-lg)] bg-sand p-4 text-sm text-muted">
              <Clock size={18} className="text-emerald" />
              Available 24x7, Monday to Sunday
            </div>
          </div>

          {/* Enquiry form */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-sea-deep">
              Send us an enquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/lib/data";
import { policies, getPolicy } from "@/lib/content";
import { Section, Button } from "@/components/ui";
import PageHero from "@/components/PageHero";
import { WhatsApp } from "@/components/icons";

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return { title: "Not found" };
  return {
    title: `${policy.title} — ${site.name}`,
    description: `${policy.title} for ${site.name}.`,
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  return (
    <main>
      <PageHero
        title={policy.title}
        subtitle={`Last updated: ${policy.updated}`}
        crumbs={[{ label: "Home", href: "/" }, { label: policy.title }]}
      />

      <Section className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <div className="max-w-3xl">
            {policy.sections.map((s) => (
              <div key={s.heading} className="mb-8">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-sea-deep">
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-ink/90">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <p className="mt-8 text-sm text-muted">
              Questions about this policy? Contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-emerald">
                {site.email}
              </a>{" "}
              or on WhatsApp.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-lg)] border border-sea-glass bg-white p-5">
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-base font-semibold text-sea-deep">
                Policies
              </h3>
              <ul className="space-y-1.5">
                {policies.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/policies/${p.slug}`}
                      className={`block rounded-[var(--radius-sm)] px-3 py-2 text-sm ${
                        p.slug === policy.slug
                          ? "bg-sea-glass font-semibold text-sea-deep"
                          : "text-muted hover:bg-sea-glass hover:text-sea-deep"
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/faqs"
                    className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-muted hover:bg-sea-glass hover:text-sea-deep"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <Button href={site.whatsappUrl} variant="whatsapp" size="sm">
                  <WhatsApp size={16} /> Ask a question
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}

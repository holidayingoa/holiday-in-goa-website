import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, site } from "@/lib/data";
import { Section, Button } from "@/components/ui";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { WhatsApp, Arrow } from "@/components/icons";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return { title: `${post.title} — ${site.name}`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    articleSection: post.tag,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
  };

  return (
    <main>
      <JsonLd data={articleLd} />
      <PageHero
        title={post.title}
        image={post.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.tag },
        ]}
      />

      <Section className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <article>
            <p className="text-sm text-muted">
              {post.date} · {post.tag}
            </p>
            <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6 space-y-4">
              {post.body.map((p, i) => (
                <p key={i} className="text-ink/90">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 rounded-[var(--radius-lg)] bg-sand p-6">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
                  Ready to plan your trip?
                </h3>
                <p className="text-sm text-muted">
                  Message our team and we&apos;ll build it around your dates.
                </p>
              </div>
              <Button href={site.whatsappUrl} variant="whatsapp" size="lg">
                <WhatsApp /> Chat on WhatsApp
              </Button>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold text-sea-deep">
              More from the blog
            </h3>
            <div className="space-y-4">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-3 rounded-[var(--radius-md)] border border-sea-glass bg-white p-3 hover:border-emerald"
                >
                  <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm font-medium text-sea-deep group-hover:text-emerald">
                    {p.title}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald"
            >
              All articles <Arrow size={14} />
            </Link>
          </aside>
        </div>
      </Section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";
import { Section } from "./ui";
import SectionHead from "./SectionHead";
import { Arrow } from "./icons";

export default function BlogTeaser() {
  return (
    <Section className="py-20">
      <SectionHead eyebrow="Travel guide" title="Plan a smarter Goa trip">
        Local tips, budgets and hidden gems to help you make the most of your
        visit.
      </SectionHead>

      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="reveal group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-sea-glass bg-white transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 90vw, 32vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-[var(--radius-pill)] bg-white/90 px-3 py-1 text-xs font-semibold text-emerald">
                {post.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs text-muted">{post.date}</p>
              <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-sea-deep">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald">
                Read more{" "}
                <Arrow
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

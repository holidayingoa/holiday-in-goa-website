import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-pill)] transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald";

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

const variants = {
  primary:
    "text-white brand-gradient shadow-[0_8px_24px_rgba(16,137,123,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(16,137,123,0.45)]",
  secondary:
    "text-sea-deep bg-mint-soft/70 hover:bg-mint-soft border border-mint/40 hover:-translate-y-0.5",
  ghost:
    "text-sea-deep bg-white/60 border border-sea-glass hover:bg-white hover:-translate-y-0.5",
  whatsapp:
    "text-white bg-[#25D366] hover:bg-[#1fb457] shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:-translate-y-0.5",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}

export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-[var(--radius-lg)] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-emerald"
      aria-label={`${rating} out of 5 stars`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <span className="text-sm font-semibold text-ink">{rating.toFixed(1)}</span>
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 ${className}`}>
      {children}
    </section>
  );
}

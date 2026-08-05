import type { ReactNode } from "react";

export default function SectionHead({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`reveal mb-8 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-emerald">
          {eyebrow}
        </span>
      )}
      <h2 className="h-section text-sea-deep">{title}</h2>
      {children && <p className="mt-3 text-muted">{children}</p>}
    </div>
  );
}

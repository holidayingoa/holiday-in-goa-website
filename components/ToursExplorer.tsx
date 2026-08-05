"use client";

import { useMemo, useState } from "react";
import type { Tour, Category } from "@/lib/data";
import TourCard from "./TourCard";

type SortKey = "popular" | "price-asc" | "price-desc" | "rating";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "popular", label: "Most popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top rated" },
];

export default function ToursExplorer({
  tours,
  categories,
}: {
  tours: Tour[];
  categories: Category[];
}) {
  const [active, setActive] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("popular");

  const visible = useMemo(() => {
    const filtered =
      active === "all"
        ? tours
        : tours.filter((t) => t.categorySlug === active);

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      default:
        sorted.sort((a, b) => b.reviews - a.reviews);
    }
    return sorted;
  }, [tours, active, sort]);

  const chip = (slug: string, label: string) => {
    const isActive = active === slug;
    return (
      <button
        key={slug}
        onClick={() => setActive(slug)}
        aria-pressed={isActive}
        className={`whitespace-nowrap rounded-[var(--radius-pill)] border px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "border-emerald bg-emerald text-white"
            : "border-sea-glass bg-white text-sea-deep hover:bg-sea-glass"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {chip("all", "All")}
          {categories.map((c) => chip(c.slug, c.name))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <label
            htmlFor="tour-sort"
            className="text-sm font-medium text-muted"
          >
            Sort by
          </label>
          <select
            id="tour-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-[var(--radius-pill)] border border-sea-glass bg-white px-4 py-2 text-sm font-medium text-sea-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-6 text-sm text-muted">
        Showing <span className="font-semibold text-sea-deep">{visible.length}</span>{" "}
        {visible.length === 1 ? "experience" : "experiences"}
      </p>

      {visible.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="rounded-[var(--radius-lg)] border border-sea-glass bg-white p-10 text-center text-muted">
          No experiences in this category yet.
        </div>
      )}
    </>
  );
}

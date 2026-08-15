"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Gallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const show = useCallback(
    (i: number) => {
      setIndex((i + images.length) % images.length);
      setOpen(true);
    },
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => show(i)}
            aria-label={`View photo ${i + 2} of ${title}`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-[var(--radius-md)] border border-sea-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 2}`}
              fill
              sizes="(max-width: 640px) 50vw, 220px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo viewer`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white transition hover:bg-white/30"
          >
            &times;
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/30 sm:left-6"
            >
              &#8249;
            </button>
          )}

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${title} — photo ${index + 2}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/30 sm:right-6"
            >
              &#8250;
            </button>
          )}

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}

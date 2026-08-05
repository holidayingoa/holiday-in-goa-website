type IconProps = { className?: string; size?: number };

const svg = (path: React.ReactNode, size = 20, className = "") => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {path}
  </svg>
);

export const WaveMark = ({ className = "", size = 26 }: IconProps) =>
  svg(
    <path d="M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />,
    size,
    className,
  );

export const Search = ({ className = "", size = 20 }: IconProps) =>
  svg(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>,
    size,
    className,
  );

export const Calendar = ({ className = "", size = 18 }: IconProps) =>
  svg(
    <>
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M3 10h18M8 2v4M16 2v4" />
    </>,
    size,
    className,
  );

export const Users = ({ className = "", size = 18 }: IconProps) =>
  svg(
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>,
    size,
    className,
  );

export const Tag = ({ className = "", size = 18 }: IconProps) =>
  svg(
    <>
      <path d="M20.6 13.4 12 22l-9-9V4a1 1 0 0 1 1-1h8l8.6 8.6a1.4 1.4 0 0 1 0 2Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </>,
    size,
    className,
  );

export const Clock = ({ className = "", size = 16 }: IconProps) =>
  svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
    size,
    className,
  );

export const Pin = ({ className = "", size = 16 }: IconProps) =>
  svg(
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>,
    size,
    className,
  );

export const Shield = ({ className = "", size = 22 }: IconProps) =>
  svg(
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>,
    size,
    className,
  );

export const Bolt = ({ className = "", size = 22 }: IconProps) =>
  svg(<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />, size, className);

export const Heart = ({ className = "", size = 22 }: IconProps) =>
  svg(
    <path d="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5.5 6 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 7C19 16.65 12 21 12 21Z" />,
    size,
    className,
  );

export const Coins = ({ className = "", size = 22 }: IconProps) =>
  svg(
    <>
      <ellipse cx="9" cy="6" rx="6" ry="3" />
      <path d="M3 6v6c0 1.66 2.7 3 6 3M15 9.5c3.3 0 6 1.34 6 3v6c0 1.66-2.7 3-6 3s-6-1.34-6-3v-6" />
      <path d="M21 15c0 1.66-2.7 3-6 3" />
    </>,
    size,
    className,
  );

export const WhatsApp = ({ className = "", size = 18 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02s-.43.06-.66.31c-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

export const Menu = ({ className = "", size = 24 }: IconProps) =>
  svg(<path d="M3 6h18M3 12h18M3 18h18" />, size, className);

export const Close = ({ className = "", size = 24 }: IconProps) =>
  svg(<path d="M18 6 6 18M6 6l12 12" />, size, className);

export const Arrow = ({ className = "", size = 18 }: IconProps) =>
  svg(<path d="M5 12h14M13 6l6 6-6 6" />, size, className);

export const Anchor = ({ className = "", size = 18 }: IconProps) =>
  svg(
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14M5 12H3l1 3a8 8 0 0 0 16 0l1-3h-2M8 11h8" />
    </>,
    size,
    className,
  );

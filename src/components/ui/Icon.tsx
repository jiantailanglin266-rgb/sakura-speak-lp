type Props = { name: string; className?: string };

/** Lightweight inline icon set (stroke style) used across feature cards. */
export default function Icon({ name, className = "h-7 w-7" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "dashboard":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="9" rx="2" />
          <rect x="14" y="3" width="7" height="5" rx="2" />
          <rect x="14" y="12" width="7" height="9" rx="2" />
          <rect x="3" y="16" width="7" height="5" rx="2" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
          <path d="M4 19a2 2 0 0 0 2 2h13" />
        </svg>
      );
    case "cards":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="13" height="13" rx="2" />
          <path d="M8 4h11a2 2 0 0 1 2 2v11" />
        </svg>
      );
    case "game":
      return (
        <svg {...common}>
          <path d="M6 11h4M8 9v4" />
          <circle cx="16" cy="10" r="0.6" fill="currentColor" />
          <circle cx="18" cy="13" r="0.6" fill="currentColor" />
          <rect x="2" y="6" width="20" height="12" rx="5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-6A8.4 8.4 0 1 1 21 11.5z" />
          <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" />
          <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "device":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="14" height="10" rx="2" />
          <rect x="17" y="8" width="5" height="12" rx="2" />
          <path d="M6 18h6" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h5v-6h4v6h5V10" />
        </svg>
      );
    case "vocab":
      return (
        <svg {...common}>
          <path d="M4 5h16M4 5v14M20 5v14M4 19h16" />
          <path d="M8 9h4M8 12h4M8 15h2" />
          <circle cx="16" cy="11" r="2" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M4 9a8 8 0 0 1 14-3l2 2M20 4v4h-4" />
          <path d="M20 15a8 8 0 0 1-14 3l-2-2M4 20v-4h4" />
        </svg>
      );
    case "mic":
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
        </svg>
      );
    case "news":
      return (
        <svg {...common}>
          <path d="M4 5h12v14H6a2 2 0 0 1-2-2z" />
          <path d="M16 8h3a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2M7 8h6M7 11h6M7 14h4" />
        </svg>
      );
    case "profile":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
          <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4-4" />
        </svg>
      );
    case "fire":
      return (
        <svg {...common}>
          <path d="M12 3c1 3-1 4-2 6s-1 4 2 4 4-2 3-5c2 1 3 3 3 5a6 6 0 0 1-12 0c0-4 4-6 6-10z" />
        </svg>
      );
    case "coin":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path d="M7 5l12 7-12 7z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "gem":
      return (
        <svg {...common}>
          <path d="M6 3h12l3 6-9 12L3 9z" />
          <path d="M3 9h18M9 3l-3 6 6 12 6-12-3-6" />
        </svg>
      );
    default:
      return null;
  }
}

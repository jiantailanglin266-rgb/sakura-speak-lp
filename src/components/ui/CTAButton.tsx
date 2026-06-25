import Link from "next/link";

type Variant = "primary" | "ghost" | "blue";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  size?: "md" | "lg";
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 ease-[var(--ease-bounce)] focus:outline-none focus-visible:ring-4 focus-visible:ring-pink/40 active:scale-[0.97]";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-pink-deep to-pink text-white shadow-pop hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-16px_rgba(236,111,160,0.6)]",
  blue: "bg-gradient-to-r from-blue-deep to-blue text-white shadow-soft hover:-translate-y-0.5",
  ghost:
    "bg-white/80 text-pink-ink ring-2 ring-pink-soft hover:bg-white hover:-translate-y-0.5",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  size = "lg",
}: Props) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

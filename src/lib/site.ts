export const site = {
  name: "Sakura Speak",
  tagline: "Speak Japanese, beautifully.",
  description:
    "Sakura Speak is a long-term, structured platform for becoming fluent in Japanese — 80 lessons, vocabulary sheets, mini-games, achievements, and a warm community, all guided by your companion Meemi.",
  // Set NEXT_PUBLIC_SITE_URL once the real domain is ready — drives canonical
  // URLs, OpenGraph, sitemap and robots. Placeholder until then.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sakura-speak.example.com",
  email: "hello@sakura-speak.com",
  freeTrialDays: 3,
  nav: [
    { label: "Why Sakura Speak", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Meemi", href: "#meemi" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

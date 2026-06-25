"use client";

import { useMemo } from "react";

/** Gentle falling sakura petals — pure CSS animation, decorative only. */
export default function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // deterministic pseudo-spread so SSR & client match
        const left = (i * 97) % 100;
        const delay = (i * 1.37) % 9;
        const dur = 9 + ((i * 2.3) % 8);
        const size = 9 + ((i * 5) % 10);
        const tone = i % 3;
        return { left, delay, dur, size, tone };
      }),
    [count]
  );

  const tones = ["#ffd6e5", "#f7a8c4", "#ffe1ec"];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `fall ${p.dur}s linear ${p.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 20 20" width={p.size} height={p.size}>
            <path
              d="M10 1c4 3 7 7 7 11a7 7 0 0 1-14 0c0-4 3-8 7-11z"
              fill={tones[p.tone]}
              opacity={0.85}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

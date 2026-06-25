"use client";

export default function TourButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("sakura:start-tour"))}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold text-white ring-1 ring-white/40 backdrop-blur-sm transition-colors hover:bg-white/30"
    >
      👋 Take a tour
    </button>
  );
}

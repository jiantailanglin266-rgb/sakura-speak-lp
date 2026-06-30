import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Branded social-share card, generated at build (no design assets needed).
// Replace with a real key-visual once the client's imagery arrives.
export const dynamic = "force-static";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "84px",
          background: "linear-gradient(135deg,#fff1f6 0%,#ffe3ee 45%,#e7f0ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 30,
              background: "#f48fb6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 58,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 42, fontWeight: 700, color: "#d6557a" }}>{site.name}</div>
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 800,
            color: "#3a2b33",
            lineHeight: 1.1,
          }}
        >
          <div>Speak Japanese,</div>
          <div>beautifully.</div>
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#7a6470", maxWidth: 920 }}>
          80 lessons · vocabulary · mini-games · a warm community — guided by Meemi.
        </div>
      </div>
    ),
    { ...size }
  );
}

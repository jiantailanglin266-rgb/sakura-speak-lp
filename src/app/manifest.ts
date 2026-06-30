import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// PWA manifest. Icon path is relative so it resolves correctly under the
// GitHub Pages basePath too. Replace icon.svg with branded PNGs once design
// assets arrive (add 192/512 maskable icons for full installability).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: ".",
    display: "standalone",
    background_color: "#fff1f6",
    theme_color: "#f7a8c4",
    icons: [{ src: "icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}

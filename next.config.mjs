/** @type {import('next').NextConfig} */

// GitHub Pages（プロジェクトサイト）配信用の設定。
// CI（GitHub Actions）でのビルド時のみ basePath を付与し、
// ローカル開発（npm run dev）ではルート配信のまま動作させる。
const repo = "sakura-speak-lp";
const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

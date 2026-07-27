/** @type {import('next').NextConfig} */

// GitHub Pages serves this site under a subpath (/rsdhiman/), so we set a
// basePath ONLY when building for Pages. Local dev and other hosts (Vercel,
// custom domain) keep the root path. Toggle via the DEPLOY_TARGET env var
// (set automatically by the GitHub Actions workflow).
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const repo = "rsdhiman";

const nextConfig = {
  // Static export so the site can be hosted on any static host
  // (GitHub Pages, Vercel, Netlify, cPanel, etc.)
  output: "export",
  reactStrictMode: true,
  images: {
    // next/image with static export requires unoptimized images
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;

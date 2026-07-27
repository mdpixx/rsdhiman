/**
 * Resolves a public asset path against the configured basePath.
 *
 * Why this exists: with `output: 'export'` + `images.unoptimized: true`,
 * Next's <Image> component does NOT auto-prefix its `src` with `basePath`
 * (it only does so for optimized images). On GitHub Pages the site lives
 * under /rsdhiman/, so a raw "/consultant.png" would 404.
 *
 * Usage: pass any root-absolute public path (e.g. "/consultant.png")
 * through asset() before feeding it to <Image src={...} /> or a url().
 */

const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// normalize to "" or "/segment" with no trailing slash
export const basePath =
  rawBase && rawBase !== "/" ? rawBase.replace(/\/$/, "") : "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // leave external/relative URLs alone
  return `${basePath}${path}`;
}

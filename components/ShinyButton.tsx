"use client";

import Link from "next/link";
import type { ComponentType } from "react";

type IconType = ComponentType<{ className?: string }>;

type Props = {
  href: string;
  children: React.ReactNode;
  icon?: IconType;
  variant?: "primary" | "light";
  className?: string;
};

/**
 * Button with a glossy shine-sweep on hover. The ::after sweep is implemented
 * via Tailwind arbitrary properties so it needs no extra CSS file.
 */
export default function ShinyButton({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";
  const tone =
    variant === "light"
      ? "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
      : "bg-accent-500 text-white shadow-soft hover:bg-accent-600 hover:shadow-card";

  return (
    <Link href={href} className={`${base} ${tone} ${className}`}>
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">
        {children}
        {Icon && <Icon className="transition-transform duration-200 group-hover:translate-x-1" />}
      </span>
    </Link>
  );
}

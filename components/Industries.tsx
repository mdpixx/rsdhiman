"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { industries } from "@/lib/content";
import Reveal from "./Reveal";

export default function Industries() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...industries, ...industries];

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-navy-radial opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] opacity-30" />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur">
              Industries We Serve
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Trusted Across Diverse Sectors
            </h2>
            <p className="mt-4 max-w-xl !text-center text-base leading-relaxed text-navy-100/75">
              Sector-specific knowledge that helps us prepare bids aligned to
              each industry&apos;s unique requirements.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite marquee ribbon */}
      <Reveal delay={0.1}>
        <div className="marquee-mask relative mt-14 flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
            {loop.map((ind, i) => (
              <span
                key={`${ind}-${i}`}
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-navy-50 backdrop-blur transition-colors duration-300 hover:border-accent-400/50 hover:bg-accent-500/20"
              >
                {ind}
                <FiArrowUpRight className="text-accent-300/70 transition-colors group-hover:text-accent-200" />
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

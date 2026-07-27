"use client";

import { industries } from "@/lib/content";
import Reveal from "./Reveal";

export default function Industries() {
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
            <p className="mt-4 text-base leading-relaxed text-navy-100/75">
              Sector-specific knowledge that helps us prepare bids aligned to
              each industry&apos;s unique requirements.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-navy-50 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:bg-accent-500/20 hover:text-white"
              >
                {ind}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

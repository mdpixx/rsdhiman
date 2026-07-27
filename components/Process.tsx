"use client";

import { process } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Work Process</span>
            <h2 className="section-title mt-4">
              A Clear Path from Opportunity to Award
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              A structured, transparent process that keeps every bid on track
              and fully compliant.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 4) * 0.08}>
              <div className="group relative h-full rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
                <span className="font-display text-5xl font-extrabold text-navy-100 transition-colors duration-300 group-hover:text-accent-200">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {p.desc}
                </p>

                {/* connector arrow */}
                {i < process.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                        stroke="#1d6fe0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.4"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

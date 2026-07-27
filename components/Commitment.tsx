"use client";

import { FiCheck } from "react-icons/fi";
import { commitments, company } from "@/lib/content";
import Reveal from "./Reveal";

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Commitments */}
          <Reveal>
            <div>
              <span className="eyebrow">Our Commitment</span>
              <h2 className="section-title mt-4">Your Success is Our Commitment.</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Six principles guide every engagement and every bid we touch.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {commitments.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-cream px-4 py-3.5"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
                      <FiCheck size={14} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-navy-800">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Mission card */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-500/20 to-navy-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-navy-900 p-8 text-white shadow-card sm:p-10">
                <div className="pointer-events-none absolute inset-0 bg-navy-radial opacity-80" />
                <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-20" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200">
                    Our Mission
                  </span>

                  <p className="mt-6 font-display text-2xl font-bold leading-snug sm:text-[1.6rem]">
                    {company.mission}
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-navy-700 font-display text-base font-extrabold">
                      RS
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold">RS Consultants &amp; E Solutions</p>
                      <p className="text-xs text-navy-100/70">
                        Government &amp; Private Tender Consultants
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

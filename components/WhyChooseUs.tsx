"use client";

import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineHandRaised,
} from "react-icons/hi2";
import { whyChooseUs } from "@/lib/content";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  expertise: HiOutlineAcademicCap,
  support: HiOutlineSparkles,
  doc: HiOutlineDocumentText,
  clock: HiOutlineClock,
  shield: HiOutlineShieldCheck,
  handshake: HiOutlineHandRaised,
};

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title mt-4">
              A Partner You Can Trust with Every Bid
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Every engagement is built on accuracy, confidentiality, and a
              relentless focus on timely, compliant submissions.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f, i) => {
            const Icon = iconMap[f.icon] ?? HiOutlineSparkles;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
                  {/* hover wash */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { about, consultant } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-accent-200" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-accent-100" />
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <div className="aspect-[4/3]">
                  <Image
                    src={consultant.photo}
                    alt={consultant.name}
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* mission quote chip */}
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-navy-100 bg-white/95 p-5 shadow-card backdrop-blur sm:left-10 sm:right-10">
                <p className="text-sm font-semibold leading-relaxed text-navy-800">
                  &ldquo;Every business deserves the opportunity to compete with
                  confidence.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy side */}
          <div>
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
              <h2 className="section-title mt-4">{about.title}</h2>
            </Reveal>

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <p className="text-base leading-relaxed text-navy-600">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-6 rounded-2xl border border-accent-100 bg-accent-50 p-4 text-sm font-semibold text-navy-800">
                {about.belief}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <ul className="mt-6 space-y-3">
                {about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-accent-500" size={20} />
                    <span className="text-sm font-medium text-navy-700">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

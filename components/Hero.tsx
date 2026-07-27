"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
import { company, consultant, heroChips } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 pt-32 pb-20 text-white sm:pt-36 lg:pt-40 lg:pb-28"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-400" />
              {company.tagline}
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Turning Opportunities into{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                Successful Contracts.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
              {company.heroSub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary group">
                Get a Free Consultation
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-light">
                Explore Services
              </a>
            </div>

            {/* Trust chips */}
            <ul className="mt-10 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {heroChips.slice(0, 6).map((chip) => (
                <li key={chip} className="flex items-center gap-2 text-sm text-navy-50/90">
                  <FiCheckCircle className="shrink-0 text-accent-400" />
                  {chip}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: consultant photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              {/* glow frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent-500/30 via-transparent to-navy-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-card backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={consultant.photo}
                    alt={`${consultant.name} — ${consultant.title}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* floating badge: name & title */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 rounded-2xl border border-white/15 bg-white/95 p-4 shadow-card backdrop-blur sm:-left-8"
              >
                <p className="font-display text-base font-extrabold text-navy-900">
                  {consultant.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {consultant.title}
                </p>
              </motion.div>

              {/* floating stat */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-3 top-8 rounded-2xl border border-white/15 bg-navy-800/90 px-4 py-3 shadow-card backdrop-blur sm:-right-6"
              >
                <p className="font-display text-2xl font-extrabold text-accent-300">12+</p>
                <p className="text-[11px] font-medium text-navy-100/80">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom curve into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 80" className="h-[60px] w-full" preserveAspectRatio="none">
          <path d="M0,80 L0,40 C360,0 1080,0 1440,40 L1440,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

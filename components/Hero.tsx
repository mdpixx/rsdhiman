"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FiCheckCircle, FiStar } from "react-icons/fi";
import { company, consultant, heroChips } from "@/lib/content";
import { asset } from "@/lib/paths";
import ShinyButton from "./ShinyButton";

const ease = [0.22, 1, 0.36, 1] as const;

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
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              {company.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Turning Opportunities into{" "}
              <span className="relative inline-block">
                <span className="text-gradient animate-gradient">
                  Successful Contracts.
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease }}
                  className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-accent-400 to-accent-600"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg"
            >
              {company.heroSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ShinyButton href="#contact" icon={HiArrowRight}>
                Get a Free Consultation
              </ShinyButton>
              <a href="#services" className="btn-light">
                Explore Services
              </a>
            </motion.div>

            {/* rating row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>
              <p className="!text-left text-sm text-navy-100/70">
                Trusted by 350+ businesses across India
              </p>
            </motion.div>

            {/* Trust chips */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
              }}
              className="mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
            >
              {heroChips.slice(0, 6).map((chip) => (
                <motion.li
                  key={chip}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-2 text-sm text-navy-50/90"
                >
                  <FiCheckCircle className="shrink-0 text-accent-400" />
                  {chip}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: consultant photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              {/* glow frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent-500/30 via-transparent to-navy-400/20 blur-2xl" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-card backdrop-blur"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={asset(consultant.photo)}
                    alt={`${consultant.name} — ${consultant.title}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* floating badge: name & title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease }}
                className="absolute -bottom-5 -left-5 rounded-2xl border border-white/15 bg-white/95 p-4 shadow-card backdrop-blur sm:-left-8"
              >
                <p className="font-display text-base font-extrabold text-navy-900">
                  {consultant.name}
                </p>
                <p className="!text-left text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {consultant.title}
                </p>
              </motion.div>

              {/* floating stat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease }}
                className="absolute -right-3 top-8 rounded-2xl border border-white/15 bg-navy-800/90 px-4 py-3 shadow-card backdrop-blur sm:-right-6"
              >
                <p className="font-display text-2xl font-extrabold text-accent-300">12+</p>
                <p className="!text-left text-[11px] font-medium text-navy-100/80">Years Experience</p>
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

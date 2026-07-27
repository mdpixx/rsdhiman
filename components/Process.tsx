"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import { staggerContainer, fadeUpItem } from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="relative bg-cream py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpItem} className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Work Process</span>
            <h2 className="section-title mt-4">
              A Clear Path from Opportunity to Award
            </h2>
            <p className="mt-4 max-w-xl !text-center text-base leading-relaxed text-navy-600">
              A structured, transparent process that keeps every bid on track
              and fully compliant.
            </p>
          </motion.div>

          <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* animated horizontal connector (desktop) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-0.5 origin-left bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300 lg:block"
            />

            {process.map((p) => (
              <motion.div
                key={p.step}
                variants={fadeUpItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                {/* number badge sitting on the connector line */}
                <div className="relative z-10 mb-4 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy-900 to-accent-600 font-display text-base font-extrabold text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    {p.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

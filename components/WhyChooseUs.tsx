"use client";

import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineHandRaised,
} from "react-icons/hi2";
import { whyChooseUs } from "@/lib/content";
import { staggerContainer, scaleInItem } from "./Reveal";

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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleInItem} className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title mt-4">
              A Partner You Can Trust with Every Bid
            </h2>
            <p className="mt-4 max-w-xl !text-center text-base leading-relaxed text-navy-600">
              Every engagement is built on accuracy, confidentiality, and a
              relentless focus on timely, compliant submissions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((f) => {
            const Icon = iconMap[f.icon] ?? HiOutlineSparkles;
            return (
              <motion.div
                key={f.title}
                variants={scaleInItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-soft"
              >
                {/* gradient border glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-400/0 via-accent-400/0 to-accent-400/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-400/10 group-hover:to-navy-400/10 group-hover:opacity-100" />
                {/* top accent line that grows on hover */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-accent-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-50 to-navy-50 text-accent-600 transition-all duration-300 group-hover:from-accent-500 group-hover:to-navy-700 group-hover:text-white group-hover:shadow-glow">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

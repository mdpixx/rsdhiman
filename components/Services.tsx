"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineBuildingLibrary,
  HiOutlineShoppingCart,
  HiOutlineClipboardDocumentCheck,
  HiOutlineIdentification,
  HiOutlineKey,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { FiPlus, FiArrowUpRight } from "react-icons/fi";
import { services } from "@/lib/content";
import type { Service } from "@/lib/content";
import { staggerContainer, fadeUpItem } from "./Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  landmark: HiOutlineBuildingLibrary,
  cart: HiOutlineShoppingCart,
  clipboard: HiOutlineClipboardDocumentCheck,
  register: HiOutlineIdentification,
  key: HiOutlineKey,
  chat: HiOutlineChatBubbleLeftRight,
};

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[service.icon] ?? HiOutlineChatBubbleLeftRight;

  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-colors duration-300 hover:border-accent-200"
    >
      {/* top accent line grows on hover */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-accent-600 transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-900 to-accent-600 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
          <Icon size={26} />
        </div>
        <FiArrowUpRight className="text-navy-200 transition-colors group-hover:text-accent-500" size={22} />
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">
        {service.description}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-600 hover:text-accent-700"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <FiPlus />
        </motion.span>
        {open ? "Hide details" : "View details"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="items"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 overflow-hidden"
          >
            <ul className="grid gap-2 border-t border-navy-100 pt-4">
              {service.items.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  className="flex items-center gap-2.5 text-sm text-navy-700"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpItem} className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title mt-4">
              Complete Tender Solutions, Under One Roof
            </h2>
            <p className="mt-4 max-w-xl !text-center text-base leading-relaxed text-navy-600">
              From your first Government tender to ongoing GeM participation, we
              manage every step of the e-tendering lifecycle with precision and
              compliance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <p className="!text-left font-display text-lg font-bold text-navy-900">
                Not sure which service you need?
              </p>
              <p className="!text-left text-sm text-navy-500">
                Tell us about your business and we&apos;ll recommend the right path.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              Talk to a Consultant
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  HiOutlineBuildingLibrary,
  HiOutlineShoppingCart,
  HiOutlineClipboardDocumentCheck,
  HiOutlineIdentification,
  HiOutlineKey,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";
import { services } from "@/lib/content";
import type { Service } from "@/lib/content";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  landmark: HiOutlineBuildingLibrary,
  cart: HiOutlineShoppingCart,
  clipboard: HiOutlineClipboardDocumentCheck,
  register: HiOutlineIdentification,
  key: HiOutlineKey,
  chat: HiOutlineChatBubbleLeftRight,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = iconMap[service.icon] ?? HiOutlineChatBubbleLeftRight;

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <div className="card group flex h-full flex-col hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
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
          {open ? (
            <>
              <FiMinus /> Hide details
            </>
          ) : (
            <>
              <FiPlus /> View details
            </>
          )}
        </button>

        {open && (
          <ul className="mt-4 grid gap-2 border-t border-navy-100 pt-4">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-navy-700"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title mt-4">
              Complete Tender Solutions, Under One Roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              From your first Government tender to ongoing GeM participation, we
              manage every step of the e-tendering lifecycle with precision and
              compliance.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-bold text-navy-900">
                Not sure which service you need?
              </p>
              <p className="text-sm text-navy-500">
                Tell us about your business and we&apos;ll recommend the right path.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              Talk to a Consultant
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

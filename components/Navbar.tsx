"use client";

import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { nav, company } from "@/lib/content";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // "light" = over the dark hero (top of page, not scrolled, menu closed).
  // Once scrolled, the bar turns white and we switch to dark text.
  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100/70 bg-white/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo light={light} />

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                light
                  ? "text-white/85 hover:bg-white/10 hover:text-white"
                  : "text-navy-700 hover:bg-navy-50 hover:text-accent-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={`btn transition-colors duration-300 ${
              light
                ? "bg-white text-navy-900 hover:-translate-y-0.5 hover:bg-accent-50"
                : "bg-accent-500 text-white hover:-translate-y-0.5 hover:bg-accent-600"
            }`}
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden ${
            light
              ? "border-white/20 bg-white/10 text-white"
              : "border-navy-100 bg-white text-navy-800"
          }`}
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div className="container-x border-t border-navy-100 bg-white pb-6 pt-2">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-navy-800 hover:bg-navy-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Free Consultation
            </a>
            <p className="mt-4 text-center text-xs text-navy-400">
              {company.email} · {company.phone}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { company, nav } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: FiLinkedin, href: company.social.linkedin, label: "LinkedIn" },
    { icon: FiFacebook, href: company.social.facebook, label: "Facebook" },
    { icon: FaWhatsapp, href: company.social.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <div className="[&_span]:text-white">
              <Logo light />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-100/70">
              Professional consultancy specializing in Government and Private
              Tender Management across India.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-accent-400 hover:bg-accent-500"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-navy-100/70 transition-colors hover:text-accent-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-100/70">
              <li>Government Tenders</li>
              <li>GeM Portal</li>
              <li>Bid Management</li>
              <li>Vendor Registration</li>
              <li>DSC Support</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-100/70">
              <li className="flex items-center gap-2.5">
                <FiPhone className="shrink-0 text-accent-400" />
                <a href={`tel:${company.phone}`} className="hover:text-accent-300">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="shrink-0 text-accent-400" />
                <a href={`mailto:${company.email}`} className="hover:text-accent-300">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="mt-0.5 shrink-0 text-accent-400" />
                <span>{company.locations.join(" | ")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-100/60">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-navy-100/60">
            Government &amp; Private Tender Consultants · {company.website}
          </p>
        </div>
      </div>
    </footer>
  );
}

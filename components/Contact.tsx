"use client";

import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiGlobe,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { company } from "@/lib/content";
import Reveal from "./Reveal";

const contactCards = [
  {
    icon: FiPhone,
    label: "Call Us",
    value: company.phone,
    href: `tel:${company.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: FiMail,
    label: "Email Us",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: FiGlobe,
    label: "Website",
    value: company.website,
    href: `https://${company.website}`,
  },
];

const socials = [
  { icon: FiLinkedin, label: "LinkedIn", href: company.social.linkedin },
  { icon: FiFacebook, label: "Facebook", href: company.social.facebook },
  { icon: FaWhatsapp, label: "WhatsApp", href: company.social.whatsapp },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired — show a success state. TODO_EDIT: connect to form handler / email API.
    setSubmitted(true);
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Contact Us</span>
            <h2 className="section-title mt-4">Let&apos;s Win Your Next Tender Together</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Share your requirement and our team will get back to you with a
              tailored approach — usually within one business day.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-1">
                {contactCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-card"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                        <Icon size={22} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                          {c.label}
                        </span>
                        <span className="font-semibold text-navy-800">{c.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* locations */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5">
                <div className="flex items-center gap-2 text-navy-400">
                  <FiMapPin size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Serving
                  </span>
                </div>
                <p className="mt-2 font-display text-base font-bold text-navy-900">
                  {company.locations.join(" | ")}
                </p>
              </div>

              {/* socials */}
              <div className="rounded-2xl border border-navy-100 bg-navy-900 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-100/70">
                  Follow Us
                </p>
                <div className="mt-3 flex gap-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:bg-accent-500"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-50 text-accent-600">
                    <FiCheckCircle size={36} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    Thank you, {form.name || "there"}!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-navy-500">
                    Your message has been received. Our team will reach out
                    shortly. For urgent queries, call us at{" "}
                    <a href={`tel:${company.phone}`} className="font-semibold text-accent-600">
                      {company.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="name">
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                        className="input"
                      />
                    </Field>
                    <Field label="Phone" htmlFor="phone">
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+91 ..."
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className="input"
                    />
                  </Field>

                  <Field label="Service of Interest" htmlFor="service">
                    <select
                      id="service"
                      value={form.service}
                      onChange={update("service")}
                      className="input"
                    >
                      <option value="">Select a service (optional)</option>
                      <option>Government Tender Consultancy</option>
                      <option>GeM Portal Consultancy</option>
                      <option>End-to-End Bid Management</option>
                      <option>Vendor Registration</option>
                      <option>Digital Signature (DSC) Support</option>
                      <option>Consultancy & Advisory</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your tender requirement..."
                      className="input resize-none"
                    />
                  </Field>

                  <button type="submit" className="btn-primary group w-full">
                    Send Message
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-navy-400">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* shared input styles */}
      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d6e0f5;
          background: #f6f8fc;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #0a173d;
          transition: all 0.2s;
        }
        :global(.input:focus) {
          outline: none;
          border-color: #1d6fe0;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(29, 111, 224, 0.12);
        }
        :global(.input::placeholder) {
          color: #9aa7bd;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-navy-700">{label}</span>
      {children}
    </label>
  );
}

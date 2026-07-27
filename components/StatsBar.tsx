"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/content";

function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative z-10 bg-white">
      <div className="container-x">
        <div className="-mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:gap-6 sm:p-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-2xl bg-cream px-4 py-6 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
                <Counter
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix}
                />
              </p>
              <p className="mt-2 text-xs font-medium text-navy-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-navy-400">
          * Indicative figures — update with your live numbers.
        </p>
      </div>
    </section>
  );
}

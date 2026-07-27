import Link from "next/link";

/* Monogram wordmark — TODO_EDIT: swap for a real logo when available. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="#home" className="group flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-navy-700 font-display text-lg font-extrabold text-white shadow-soft transition-transform duration-300 group-hover:scale-105 ${
          light ? "" : ""
        }`}
      >
        RS
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          RS Consultants
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/60" : "text-navy-400"
          }`}
        >
          & E Solutions
        </span>
      </span>
    </Link>
  );
}

"use client";
import { useState } from "react";

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-xl border bg-white dark:bg-slate-900 transition-colors ${
        open ? "border-brand-blue/40 shadow-card" : "border-slate-200 dark:border-slate-800 shadow-sm"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-brand-navy dark:text-white">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
            open ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-500 dark:text-slate-400"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a}</div>
      )}
    </div>
  );
}

const categoryStyles = {
  General: "bg-blue-50 text-blue-700",
  Pricing: "bg-violet-50 text-violet-700",
  Features: "bg-teal-50 text-teal-700",
  WhatsApp: "bg-green-50 text-green-700",
  Security: "bg-rose-50 text-rose-700",
};

export default function FaqAccordion({ categories }) {
  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <div key={cat.category}>
          <span
            className={`inline-block mb-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
              categoryStyles[cat.category] || "bg-slate-100 text-slate-600 dark:text-slate-400"
            }`}
          >
            {cat.category}
          </span>
          <div className="space-y-3">
            {cat.items.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={cat.category === "General" && i === 0} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

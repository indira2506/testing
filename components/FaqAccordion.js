"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-2xl border bg-white dark:bg-slate-900 transition-all duration-200 overflow-hidden ${
        open ? "border-brand-blue/50 shadow-card" : "border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-brand-navy dark:text-white group-hover:text-brand-blue transition-colors">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "bg-brand-blue text-white rotate-180" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 mt-1">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

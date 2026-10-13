"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { moduleGroups } from "../lib/modules";
import { themes, moduleIcons } from "../lib/theme";

export default function ModuleGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {moduleGroups.map((m, idx) => {
        const theme = themes[m.theme] || themes.blue;
        return (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <Link
              href={`/features/#${m.id}`}
              className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card hover:shadow-cardHover transition-all duration-300"
            >
              <div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={moduleIcons[m.id]} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy dark:text-white group-hover:text-brand-blue transition-colors">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                  {m.summary}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${theme.text}`}>
                  Explore module
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-brand-blue group-hover:scale-150 transition-all duration-300" />
              </div>
              <div className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full ${theme.soft} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-80 group-hover:scale-125`} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}


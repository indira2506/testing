"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const stats = [
  { value: "8", label: "live service ticket stages tracked", icon: "⚡" },
  { value: "4", label: "ledger types: purchase, sales, service, business", icon: "📊" },
  { value: "3", label: "flexible pricing plans, every feature included", icon: "🎯" },
  { value: "24/7", label: "phone, WhatsApp & email support", icon: "💬" },
];

export default function StatsStrip() {
  return (
    <section className="relative border-y border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-10 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl p-4 text-center transition-all bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-800/20 hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 shadow-none hover:shadow-card cursor-default"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="text-sm opacity-80 group-hover:scale-125 transition-transform duration-300">
                  {s.icon}
                </span>
                <p className="text-3xl sm:text-4xl font-black text-gradient group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </p>
              </div>
              <p className="mt-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 leading-snug">
                {s.label}
              </p>
              <div className="mt-2 mx-auto w-8 h-0.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:w-16 group-hover:bg-brand-blue transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

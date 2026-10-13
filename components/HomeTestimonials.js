"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { testimonials } from "../lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          whileHover={{ scale: 1.3, rotate: 15 }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="cursor-pointer"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/40 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-24">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-400/10 blur-3xl pointer-events-none" />

      <Container className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <Eyebrow>What shop owners say</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            Trusted by centres across India
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card hover:shadow-cardHover transition-all duration-300"
            >
              <div>
                <Stars />
                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 dark:border-slate-800 pt-5">
                <motion.span 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-violet-500 text-xs font-black text-white shadow-md ring-2 ring-white/50 dark:ring-slate-800"
                >
                  {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </motion.span>
                <div>
                  <p className="text-sm font-bold text-brand-navy dark:text-white group-hover:text-brand-blue transition-colors">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          Sample testimonials illustrating the ServicePro workflow — to be replaced with real customer quotes.
        </p>
      </Container>
    </section>
  );
}

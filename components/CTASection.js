"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { site } from "../lib/site";

export default function CTASection({
  title = "Ready to run your service centre smarter?",
  subtitle = "Start your 15-day free trial today. No credit card required.",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating Animated Ambient Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-blue/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl"
      />
      
      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
          
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={site.trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full bg-brand-blue px-8 py-4 text-sm font-bold text-white shadow-cardHover hover:bg-brand-blueLight transition-all group"
            >
              <span className="relative z-10">Start Free Trial</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="/contact/"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
            >
              Talk to Us
            </motion.a>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {site.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


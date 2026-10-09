"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Container from "./Container";
import { site } from "../lib/site";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50/40 to-amber-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-[95vh] flex flex-col justify-center perspective-[1200px]"
    >
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      
      <Container className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 px-4 py-1.5 text-xs font-bold text-brand-blue shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            ServicePro by BUYP Technologies
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-brand-navy dark:text-white tracking-tight">
            Run your service centre <span className="text-gradient block mt-2">smarter & faster.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-blue px-10 py-4 text-center text-base font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-brand-navy hover:-translate-y-1 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <Link
              href="/pricing/"
              className="rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 dark:border-slate-800 px-10 py-4 text-center text-base font-bold text-brand-navy dark:text-white hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
            >
              See Pricing
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            {site.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ scale, rotateX }}
          className="mt-16 w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 ring-1 ring-black/10 transform-gpu bg-slate-900/5 p-2 backdrop-blur-md"
        >
          <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-inner">
             <Image 
               src="/dashboard-hero.jpg" 
               alt="ServicePro Dashboard UI" 
               fill
               priority
               className="object-cover object-top hover:scale-105 transition-transform duration-[10s] ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

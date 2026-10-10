"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Container from "./Container";
import { site } from "../lib/site";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

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
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 min-h-[95vh] flex flex-col justify-center perspective-[1200px]"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      
      <Container className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
            ServicePro by BUYP Technologies
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Run your service centre for Vijay{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-white bg-clip-text text-transparent block mt-2">
              <TypeAnimation
                sequence={[
                  'smarter & faster.',
                  2000,
                  'like a pro.',
                  2000,
                  'with zero hassle.',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-10 py-4 text-center text-base font-bold text-blue-700 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <Link
              href="/pricing/"
              className="rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-md px-10 py-4 text-center text-base font-bold text-white hover:border-white hover:bg-white/20 transition-all duration-300"
            >
              See Pricing
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-blue-100">
            {site.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="3">
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
          className="mt-16 w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 ring-1 ring-white/10 transform-gpu bg-white/10 p-2 backdrop-blur-md"
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

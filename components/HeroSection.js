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
      {/* Dynamic Animated Ambient Glow Blobs */}
      <motion.div
        animate={{ x: [0, 45, 0], y: [0, -35, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 45, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-indigo-400/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl"
      />

      <div className="absolute inset-0 bg-dot-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      
      <Container className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white shadow-sm mb-6 cursor-default transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
            </span>
            ServicePro by BUYP Technologies
          </motion.span>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Run your service centre for indira{" "}
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
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl"
          >
            {site.description}
          </motion.p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={site.trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full bg-white px-10 py-4 text-center text-base font-bold text-blue-700 shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:bg-blue-50 transition-all duration-300 group"
            >
              <span className="relative z-10">Start Free Trial</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/pricing/"
                className="block rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-md px-10 py-4 text-center text-base font-bold text-white hover:border-white hover:bg-white/20 transition-all duration-300"
              >
                See Pricing
              </Link>
            </motion.div>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-blue-100">
            {site.badges.map((b, idx) => (
              <motion.span 
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-1.5 cursor-default"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="3" className="animate-pulse">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Dashboard Preview with 3D Tilt and Interactive Floating Live Badges */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ scale, rotateX }}
          className="relative mt-16 w-full max-w-5xl mx-auto rounded-[2rem] shadow-2xl border border-white/20 ring-1 ring-white/10 transform-gpu bg-white/10 p-2 backdrop-blur-md"
        >
          {/* Floating Live Badge 1: Repair Done */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, y: [-7, 7, -7] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.6 },
              x: { duration: 0.7, delay: 0.6 },
              y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.06, y: -10 }}
            className="absolute -top-7 -left-3 sm:-left-6 z-30 flex items-center gap-3 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/20 p-3 pr-4 shadow-2xl text-left cursor-pointer group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30 group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Job #1084 Delivered
              </div>
              <p className="text-xs font-bold text-white">Turnaround: 35 mins</p>
            </div>
          </motion.div>

          {/* Floating Live Badge 2: Revenue Counter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, y: [7, -7, 7] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.8 },
              x: { duration: 0.7, delay: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.06, y: -10 }}
            className="absolute -bottom-6 -right-3 sm:-right-6 z-30 flex items-center gap-3 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/20 p-3 pr-4 shadow-2xl text-left cursor-pointer group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30 group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">Today's Collection</p>
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                ₹2,48,500 <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded-md">↑ +38%</span>
              </p>
            </div>
          </motion.div>

          <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-inner">
             <Image 
               src="/dashboard-hero.jpg" 
               alt="ServicePro Dashboard UI" 
               fill
               priority
               className="object-cover object-top hover:scale-105 transition-transform duration-[8s] ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
             
             {/* Subtle Shimmer Sweep across dashboard image */}
             <div className="pointer-events-none absolute inset-0 overflow-hidden">
               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer" />
             </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


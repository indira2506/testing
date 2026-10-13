"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";

export default function WhoItsForHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <Eyebrow>Built for repair &amp; retail businesses</Eyebrow>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
        One app for your entire electronics business
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
        ServicePro is designed for electronics shops, mobile and computer stores, home
        appliance businesses, and dedicated repair centres — anywhere you need to manage
        sales, inventory, accounts and service jobs under one roof.
      </p>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import FeaturePanel from "./FeaturePanel";

const serviceSteps = [
  "5-step guided intake with a printable Service Job Card",
  "Diagnosis notes, estimated cost & customer approve/reject decision",
  "Live status board: Pending → Diagnosis → In Progress → Delivered",
  "Delivery with automatic inventory adjustment & final invoice",
];

export default function HomeWorkflow() {
  return (
    <>
      {/* Service workflow highlight */}
      <section className="relative overflow-hidden bg-rose-50/50 dark:bg-slate-900/60 py-16 sm:py-24">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-rose-200/30 dark:bg-rose-900/10 blur-3xl pointer-events-none" />
        
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Eyebrow>End-to-end service tracking</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white leading-tight">
                Every repair, from intake to delivery — never lost in a notebook again
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                A guided, tutorial-backed wizard captures customer, product, device-lock and
                problem details in minutes. Every job is tracked live across 8 stages, with a
                printable repair estimate, a clear customer approval step, and a full timeline
                history nobody can dispute.
              </p>
              
              <ul className="mt-8 space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
                {serviceSteps.map((t, idx) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 p-2 rounded-xl transition-colors hover:bg-rose-100/50 dark:hover:bg-slate-800/50 cursor-default group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/50 shadow-sm"
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                    <span className="font-medium group-hover:text-rose-900 dark:group-hover:text-rose-200 transition-colors">
                      {t}
                    </span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                whileHover={{ x: 4 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/features/#service"
                  className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700 dark:text-rose-400 transition-colors group"
                >
                  See the full service workflow
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <FeaturePanel moduleId="service" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Accounting & reports */}
      <section className="relative overflow-hidden bg-emerald-50/50 dark:bg-slate-900/60 py-16 sm:py-24">
        {/* Subtle decorative background gradient */}
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-200/30 dark:bg-emerald-900/10 blur-3xl pointer-events-none" />
        
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <FeaturePanel moduleId="reports" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <Eyebrow>Accounting built in, not bolted on</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white leading-tight">
                GST-ready reports, without a separate accounting tool
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                Every sale, purchase and service job flows straight into your books. Generate
                GSTR-1 ready auditing reports, a live Profit &amp; Loss statement, and four
                dedicated ledgers — purchase, sales, service and a unified business ledger —
                exportable to Excel or PDF in one click.
              </p>
              
              <motion.div 
                whileHover={{ x: 4 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/features/#reports"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors group"
                >
                  Explore reports &amp; auditing
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

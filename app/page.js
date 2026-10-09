import Link from "next/link";
import Container from "../components/Container";
import Eyebrow from "../components/Eyebrow";
import CTASection from "../components/CTASection";
import ModuleGrid from "../components/ModuleGrid";
import FeaturePanel from "../components/FeaturePanel";
import HeroIllustration from "../components/HeroIllustration";
import { site, testimonials } from "../lib/site";

import HeroSection from "../components/HeroSection";

export const metadata = {
  title: "ServicePro — Billing, Inventory, CRM & Repair Service Software for Electronics Shops",
  description:
    "ServicePro is an all-in-one platform for electronics stores and repair centres in India — sales & billing, inventory & purchases, CRM, accounting and end-to-end service ticket tracking, in one app.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "8", label: "live service ticket stages tracked" },
  { value: "4", label: "ledger types: purchase, sales, service, business" },
  { value: "3", label: "flexible pricing plans, every feature included" },
  { value: "24/7", label: "phone, WhatsApp & email support" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats strip */}
      <section className="border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 py-10">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-gradient">{s.value}</p>
                <p className="mt-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-slate-950 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Built for repair &amp; retail businesses</Eyebrow>
            <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">
              One app for your entire electronics business
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              ServicePro is designed for electronics shops, mobile and computer stores, home
              appliance businesses, and dedicated repair centres — anywhere you need to manage
              sales, inventory, accounts and service jobs under one roof.
            </p>
          </div>

          <div className="mt-12">
            <ModuleGrid />
          </div>
        </Container>
      </section>

      {/* Service workflow highlight */}
      <section className="relative overflow-hidden bg-rose-50/50 dark:bg-slate-900/60 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>End-to-end service tracking</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">
                Every repair, from intake to delivery — never lost in a notebook again
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                A guided, tutorial-backed wizard captures customer, product, device-lock and
                problem details in minutes. Every job is tracked live across 8 stages, with a
                printable repair estimate, a clear customer approval step, and a full timeline
                history nobody can dispute.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                {[
                  "5-step guided intake with a printable Service Job Card",
                  "Diagnosis notes, estimated cost & customer approve/reject decision",
                  "Live status board: Pending → Diagnosis → In Progress → Delivered",
                  "Delivery with automatic inventory adjustment & final invoice",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/features/#service"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-rose-600"
              >
                See the full service workflow
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <FeaturePanel moduleId="service" />
          </div>
        </Container>
      </section>

      {/* Accounting & reports */}
      <section className="bg-emerald-50/50 dark:bg-slate-900/60 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <FeaturePanel moduleId="reports" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Accounting built in, not bolted on</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">
                GST-ready reports, without a separate accounting tool
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                Every sale, purchase and service job flows straight into your books. Generate
                GSTR-1 ready auditing reports, a live Profit &amp; Loss statement, and four
                dedicated ledgers — purchase, sales, service and a unified business ledger —
                exportable to Excel or PDF in one click.
              </p>
              <Link
                href="/features/#reports"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600"
              >
                Explore reports &amp; auditing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-violet-50/40 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <Eyebrow>What shop owners say</Eyebrow>
            <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">Trusted by centres across India</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all">
                <Stars />
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-violet-500 text-xs font-bold text-white">
                    {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-navy dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
            Sample testimonials illustrating the ServicePro workflow — to be replaced with real customer quotes.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

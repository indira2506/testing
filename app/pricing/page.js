import Link from "next/link";
import Container from "../../components/Container";
import Eyebrow from "../../components/Eyebrow";
import PricingCard from "../../components/PricingCard";
import CTASection from "../../components/CTASection";
import { pricingPlans, pricingTrustBadges, faqData } from "../../lib/site";

export const metadata = {
  title: "Pricing — Simple, Transparent Plans",
  description:
    "ServicePro pricing: Starter ₹399/month, Growth ₹2,199/6 months, Pro Business ₹3,999/year. Every plan includes every feature — no restrictions, no hidden charges, cancel anytime.",
  alternates: { canonical: "/pricing/" },
};

const pricingFaqs = faqData.find((c) => c.category === "Pricing")?.items || [];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="text-4xl font-extrabold text-brand-navy dark:text-white">Choose Your Perfect Plan</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Every plan includes every feature. The only difference is billing duration and how much you save.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {pricingTrustBadges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-violet-50/40 dark:bg-slate-900/60 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-brand-navy dark:text-white">Pricing questions</h2>
          </div>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {pricingFaqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
                <p className="text-sm font-bold text-brand-navy dark:text-white">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq/" className="text-sm font-bold text-brand-blue">
              See the full FAQ →
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

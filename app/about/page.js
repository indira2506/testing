import Image from "next/image";
import Container from "../../components/Container";
import Eyebrow from "../../components/Eyebrow";
import CTASection from "../../components/CTASection";
import { site, testimonials } from "../../lib/site";

export const metadata = {
  title: "About Us — BUYP Technologies",
  description:
    "ServicePro is built by BUYP Technologies Pvt. Ltd., a Tirunelveli-based software company specialising in billing software, service management platforms, mobile app development and digital marketing.",
  alternates: { canonical: "/about/" },
};

const values = [
  {
    title: "Built for real shop floors",
    description:
      "Every workflow in ServicePro — from a guided repair intake to a printable job card — is modelled on how electronics and repair shops actually work day to day.",
  },
  {
    title: "No paperwork, no guesswork",
    description:
      "Paper job slips and separate notebooks for sales, purchases and accounts get replaced with one connected system, so owners always know where their business stands.",
  },
  {
    title: "Built by an all-women team",
    description:
      "ServicePro is proudly built by an all-women engineering team at BUYP Technologies, based in Tamil Nadu, India.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow>About Us</Eyebrow>
            <h1 className="text-4xl font-extrabold text-brand-navy dark:text-white">Built by BUYP Technologies</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {site.company.legalName} is a Tirunelveli-based software company dedicated to
              empowering businesses with smart digital solutions. We specialise in billing
              software, service management platforms, mobile app development, and digital
              marketing — all under one roof.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              ServicePro is our flagship product for electronics and appliance service centres,
              designed to eliminate paperwork, reduce errors, and give business owners real-time
              visibility into their operations. Trusted by centres across India, ServicePro is
              the platform that works as hard as you do.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-slate-950 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card">
                <h3 className="text-lg font-bold text-brand-navy dark:text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-amber-50/50 dark:bg-slate-900/60 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Where we serve</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">
                Across India today, the GCC next
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                ServicePro currently serves electronics and repair businesses all over India,
                from single-counter mobile repair shops to multi-brand appliance service centres.
                We&rsquo;re actively working on expanding ServicePro to the GCC and other
                international markets, alongside a connected ecosystem that lets purchasers and
                sellers transfer stock between each other directly inside the platform.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center shadow-card">
                <p className="text-3xl font-extrabold text-brand-blue">India</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">Live &amp; serving customers today</p>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-center">
                <p className="text-3xl font-extrabold text-slate-400 dark:text-slate-500">GCC</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">Expansion planned next</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-violet-50/40 dark:bg-slate-900/60 py-16 sm:py-20">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <Eyebrow>In their words</Eyebrow>
            <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">What shop owners say</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">&ldquo;{t.quote}&rdquo;</p>
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

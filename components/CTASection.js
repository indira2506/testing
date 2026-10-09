import Container from "./Container";
import { site } from "../lib/site";

export default function CTASection({
  title = "Ready to run your service centre smarter?",
  subtitle = "Start your 15-day free trial today. No credit card required.",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <Container className="relative text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h2>
        <p className="mt-3 text-slate-300 max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={site.trialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-bold text-white shadow-cardHover hover:bg-brand-blueLight hover:-translate-y-0.5 transition-all"
          >
            Start Free Trial
          </a>
          <a
            href="/contact/"
            className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            Talk to Us
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          {site.badges.map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-400">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

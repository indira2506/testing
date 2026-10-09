import { site } from "../lib/site";

export default function PricingCard({ plan }) {
  const isHighlighted = plan.highlighted;
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white dark:bg-slate-900 p-7 transition-all duration-300 ${
        isHighlighted
          ? "border-brand-blue shadow-cardHover scale-[1.03] z-10"
          : "border-slate-200 dark:border-slate-800 shadow-card hover:shadow-cardHover hover:-translate-y-1"
      }`}
    >
      {isHighlighted && (
        <div className="absolute inset-x-0 -top-px h-1.5 rounded-t-2xl bg-gradient-to-r from-brand-blue to-violet-500" />
      )}
      {plan.tag && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-sm ${
            plan.tag === "MOST POPULAR" ? "bg-gradient-to-r from-brand-blue to-violet-500" : "bg-orange-500"
          }`}
        >
          {plan.tag}
        </span>
      )}
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white text-xs font-extrabold"
          style={{ backgroundColor: plan.dotColor }}
        >
          {plan.name.charAt(0)}
        </span>
        <h3 className="text-lg font-extrabold text-brand-navy dark:text-white">{plan.name}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{plan.blurb}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-brand-navy dark:text-white">{plan.price}</span>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{plan.period}</span>
      </div>
      {plan.subPrice && (
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-xs text-slate-400 dark:text-slate-500">({plan.subPrice})</span>
          {plan.savingBadge && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">
              {plan.savingBadge}
            </span>
          )}
        </div>
      )}

      <a
        href={site.trialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 block rounded-full py-3 text-center text-sm font-bold text-white shadow-card transition-all hover:shadow-cardHover hover:-translate-y-0.5 ${
          plan.ctaStyle === "gradient"
            ? "bg-gradient-to-r from-brand-blue to-violet-500"
            : "bg-brand-navy"
        }`}
      >
        {plan.cta}
      </a>

      <ul className="mt-7 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="4">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {plan.footnote && (
        <p className="mt-6 text-xs font-semibold text-brand-blue">{plan.footnote}</p>
      )}
    </div>
  );
}

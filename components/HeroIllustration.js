export default function HeroIllustration() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-brand-blue to-violet-500 opacity-20 blur-2xl" />
      <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 opacity-20 blur-2xl" />

      <div className="relative rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-cardHover">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-[11px] font-bold text-brand-blue dark:text-blue-400">Business overview</span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: "Sales", grad: "from-blue-500 to-blue-700", h: "h-16" },
            { label: "Purchase", grad: "from-teal-500 to-emerald-700", h: "h-10" },
            { label: "Service", grad: "from-rose-500 to-pink-700", h: "h-20" },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center justify-end gap-2 rounded-2xl bg-slate-50 dark:bg-slate-800 p-3">
              <div className={`w-6 rounded-full bg-gradient-to-t ${b.grad} ${b.h}`} />
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2.5">
          {[
            { label: "iPhone 15 Pro — screen repair", tone: "bg-amber-100 text-amber-700", status: "Diagnosis" },
            { label: "Samsung S24 Ultra — battery", tone: "bg-blue-100 text-blue-700", status: "In progress" },
            { label: "Dell laptop — service delivered", tone: "bg-emerald-100 text-emerald-700", status: "Delivered" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-xl border border-slate-100 dark:border-slate-800 px-3.5 py-2.5">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{row.label}</span>
              <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${row.tone}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 shadow-cardHover animate-float">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-bold text-brand-navy dark:text-white">Invoice sent on WhatsApp</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">Automatic on delivery</p>
        </div>
      </div>
    </div>
  );
}

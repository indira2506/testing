import FeaturePanel from "./FeaturePanel";

export default function ModuleBlock({ mod, reverse = false }) {
  return (
    <div
      id={mod.id}
      className={`grid grid-cols-1 gap-10 py-14 scroll-mt-24 lg:grid-cols-2 lg:gap-16 items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <h3 className="text-2xl font-extrabold text-brand-navy dark:text-white">{mod.title}</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{mod.summary}</p>
        <ul className="mt-6 space-y-2.5">
          {mod.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1E6FEB" strokeWidth="3.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
        <FeaturePanel moduleId={mod.id} />
      </div>
    </div>
  );
}

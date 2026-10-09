import Link from "next/link";
import { moduleGroups } from "../lib/modules";
import { themes, moduleIcons } from "../lib/theme";

export default function ModuleGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {moduleGroups.map((m) => {
        const theme = themes[m.theme] || themes.blue;
        return (
          <Link
            key={m.id}
            href={`/features/#${m.id}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} text-white`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d={moduleIcons[m.id]} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-navy dark:text-white">{m.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">{m.summary}</p>
            <span className={`mt-4 inline-flex items-center gap-1 text-xs font-bold ${theme.text}`}>
              Explore module
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full ${theme.soft} opacity-0 blur-2xl transition-opacity group-hover:opacity-70`} />
          </Link>
        );
      })}
    </div>
  );
}

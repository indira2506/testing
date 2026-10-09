import { themes, moduleIcons } from "../lib/theme";
import { moduleGroups } from "../lib/modules";

const chipPositions = [
  "top-6 left-6",
  "bottom-8 right-8",
  "top-1/2 -translate-y-1/2 right-6",
];

export default function FeaturePanel({ moduleId, size = "lg" }) {
  const mod = moduleGroups.find((m) => m.id === moduleId);
  const theme = themes[mod?.theme] || themes.blue;
  const icon = moduleIcons[moduleId];
  const height = size === "lg" ? "h-80 sm:h-96" : "h-56";

  return (
    <div className={`relative ${height} w-full overflow-hidden rounded-3xl bg-gradient-to-br ${theme.gradient} shadow-cardHover`}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-black/10 blur-2xl" />

      <div className="relative flex h-full items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
            <path d={icon} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {(mod?.chips || []).map((chip, i) => (
        <span
          key={chip}
          className={`absolute ${chipPositions[i % chipPositions.length]} rounded-full ${theme.chip} px-3.5 py-1.5 text-xs font-bold shadow-md`}
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { themes, moduleIcons } from "../lib/theme";
import { moduleGroups } from "../lib/modules";

const chipPositions = [
  "top-6 left-6",
  "bottom-8 right-8",
  "top-1/2 -translate-y-1/2 right-6",
];

const floatVariants = [
  { y: [0, -10, 0], x: [0, 4, 0], duration: 4.2 },
  { y: [0, 10, 0], x: [0, -4, 0], duration: 5.1 },
  { y: [0, -8, 0], x: [0, -5, 0], duration: 4.7 },
];

export default function FeaturePanel({ moduleId, size = "lg" }) {
  const mod = moduleGroups.find((m) => m.id === moduleId);
  const theme = themes[mod?.theme] || themes.blue;
  const icon = moduleIcons[moduleId];
  const height = size === "lg" ? "h-80 sm:h-96" : "h-56";

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`relative ${height} w-full overflow-hidden rounded-3xl bg-gradient-to-br ${theme.gradient} shadow-cardHover group`}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Animated ambient backdrops */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-black/20 blur-2xl pointer-events-none" 
      />

      {/* Central Icon with pulsing halo */}
      <div className="relative flex h-full items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl bg-white/20 blur-lg"
          />
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md ring-1 ring-white/40 shadow-xl"
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
              <path d={icon} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Floating Chips */}
      {(mod?.chips || []).map((chip, i) => {
        const floatConfig = floatVariants[i % floatVariants.length];
        return (
          <motion.span
            key={chip}
            animate={{ y: floatConfig.y, x: floatConfig.x }}
            transition={{ duration: floatConfig.duration, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, y: -4 }}
            className={`absolute ${chipPositions[i % chipPositions.length]} rounded-full ${theme.chip} px-4 py-2 text-xs font-bold shadow-lg backdrop-blur-sm cursor-default transition-shadow`}
          >
            {chip}
          </motion.span>
        );
      })}
    </motion.div>
  );
}


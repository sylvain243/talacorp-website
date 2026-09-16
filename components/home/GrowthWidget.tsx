"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { stats } from "@/data/content";

const linePath =
  "M4 92 C 36 90, 58 86, 82 72 S 132 38, 168 28 S 228 18, 276 8";
const areaPath = `${linePath} L 276 108 L 4 108 Z`;

export default function GrowthWidget() {
  const acquisition = stats[2];
  const projects = stats[0];
  const roi = stats[3];

  return (
    <div className="ml-auto w-full max-w-sm rounded-card bg-white p-6 shadow-2xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
            Croissance mesurée
          </p>
          <p className="mt-2 text-3xl font-semibold leading-none text-navy">
            {acquisition.value}
          </p>
          <p className="mt-1.5 text-sm text-navy/60">{acquisition.label}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-pill bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold-dark">
          <TrendingUp size={14} aria-hidden="true" />
          En hausse
        </span>
      </div>

      <div className="mt-5" aria-hidden="true">
        <svg viewBox="0 0 280 112" className="h-28 w-full" role="img">
          <title>Courbe de croissance de l'acquisition</title>
          <defs>
            <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E0A82E" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E0A82E" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <line x1="4" y1="108" x2="276" y2="108" stroke="#1B2A4A" strokeOpacity="0.08" />
          <motion.path
            d={areaPath}
            fill="url(#growthFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          />
          <motion.path
            d={linePath}
            fill="none"
            stroke="#E0A82E"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
          />
          <motion.circle
            cx="276"
            cy="8"
            r="5"
            fill="#E0A82E"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 1.3 }}
          />
        </svg>
        <div className="mt-1 flex justify-between text-[11px] font-medium text-navy/40">
          <span>Départ</span>
          <span>Résultat</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy/10 pt-4">
        <div>
          <p className="text-base font-semibold text-navy">{projects.value}</p>
          <p className="text-xs text-navy/55">{projects.label}</p>
        </div>
        <div>
          <p className="text-base font-semibold text-navy">{roi.value}</p>
          <p className="text-xs text-navy/55">{roi.label}</p>
        </div>
      </div>
    </div>
  );
}

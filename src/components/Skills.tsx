import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { EASE, cardEnter, chipEnter } from "../lib/animations";
import { skillCategories } from "../data/skills";
import type { SkillItem } from "../types";

// ---------- Helpers -------------------------------------------------------
/** Returns a CSS-safe hex (with #).
 *  If the color is nearly black (luminance < 0.06) we swap to white. */
function safeColor(hex: string, override?: string): string {
  if (override) return `#${override}`;
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.06 ? "#ffffff" : `#${hex}`;
}

// ---------- Sub-components -----------------------------------------------
function SkillChip({ item, index }: { item: SkillItem; index: number }) {
  const hexToUse = item.icon?.hex || item.customHex || "ffffff";
  const color = safeColor(hexToUse, item.colorOverride);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={chipEnter}
      className="skill-icon-item group flex flex-col items-center gap-[10px] p-[14px_10px] rounded-2xl cursor-default
                 border border-transparent
                 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                 hover:border-[rgba(255,255,255,0.06)]
                 hover:-translate-y-[3px]"
      style={{ "--brand": color, "--glow": `${color}26` } as CSSProperties}
    >
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-xl
                   bg-[rgba(255,255,255,0.04)]
                   transition-all duration-300
                   group-hover:bg-[var(--glow)]
                   group-hover:shadow-[0_0_22px_var(--glow)]"
      >
        {item.icon ? (
          <svg
            viewBox="0 0 24 24"
            width={28}
            height={28}
            aria-label={item.name}
            style={{ fill: color }}
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <path d={item.icon.path} />
          </svg>
        ) : (
          <div
            className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center"
            style={{ color, width: "28px", height: "28px" }}
          >
            {item.customIcon}
          </div>
        )}
      </span>

      <span
        className="text-[11px] font-medium text-muted-foreground text-center leading-tight
                   tracking-[0.03em] transition-colors duration-300 group-hover:text-foreground"
      >
        {item.name}
      </span>
    </motion.div>
  );
}

function CategoryCard({ category, index }: { category: typeof skillCategories[number]; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardEnter}
      className="relative rounded-2xl overflow-hidden
                 border border-[rgba(255,255,255,0.07)]
                 bg-[rgba(10,14,26,0.9)]
                 transition-all duration-400
                 hover:border-[rgba(255,255,255,0.12)]
                 hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-20 blur-3xl"
        style={{ background: `#${category.accent}` }}
      />

      {/* Card header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-[rgba(255,255,255,0.05)]">
        <span className="w-1.5 h-5 rounded-full" style={{ background: `#${category.accent}` }} />
        <h3 className="text-[13px] font-bold tracking-[0.06em] uppercase text-foreground/80">
          {category.title}
        </h3>
        <span className="ml-auto text-[11px] text-muted-foreground/50 tabular-nums">
          {category.items.length}
        </span>
      </div>

      {/* Icons grid */}
      <div className="p-4 grid grid-cols-4 sm:grid-cols-4 gap-1">
        {category.items.map((item, j) => (
          <SkillChip key={item.name} item={item} index={j} />
        ))}
      </div>
    </motion.div>
  );
}

// ---------- Main section -------------------------------------------------
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-[clamp(20px,5vw,80px)] pt-[var(--section-pad,48px)] max-w-[1200px] mx-auto"
    >
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-[1.1] text-foreground mb-3">
          Skills
        </h2>
        <p className="text-[15px] text-[rgba(240,240,240,0.5)] max-w-[480px] mx-auto leading-relaxed tracking-[0.01em]">
          Herramientas de desarrollo que domino y uso en mi día a día
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => (
          <CategoryCard key={category.title} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}

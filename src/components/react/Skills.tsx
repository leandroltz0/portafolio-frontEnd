"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siTailwindcss,
  siAngular,
  siSass,
  siNodedotjs,
  siExpress,
  siNestjs,
  siSpring,
  siMysql,
  siMongodb,
  siPostgresql,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siGitlab,
  siDocker,
  siVscodium,
  siPython,
  siAstro,
  siFastapi,
} from "simple-icons";
import { IconBrandAws, IconBrandAzure, IconBrandVscode, IconCoffee } from "@tabler/icons-react";
import type { ReactNode } from "react";

// ---------- types -------------------------------------------------------
interface SimpleIcon {
  path: string;
  hex: string;
  title: string;
}

interface SkillItem {
  name: string;
  icon?: SimpleIcon;
  customIcon?: ReactNode;
  customHex?: string;
  /** Override the brand hex when it's too dark for a dark background */
  colorOverride?: string;
}

interface SkillCategory {
  title: string;
  accent: string;
  items: SkillItem[];
}

// ---------- helper -------------------------------------------------------
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

// ---------- data ---------------------------------------------------------
const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "61DAFB",
    items: [
      { name: "HTML5",      icon: siHtml5 },
      { name: "CSS",        icon: siCss },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "React",      icon: siReact },
      { name: "TailwindCSS",icon: siTailwindcss },
      { name: "Angular",    icon: siAngular,  colorOverride: "DD0031" },
      { name: "SCSS",       icon: siSass },
      { name: "Astro",      icon: siAstro },
    ],
  },
  {
    title: "Backend",
    accent: "5FA04E",
    items: [
      { name: "Node.js",    icon: siNodedotjs },
      { name: "Express",    icon: siExpress,   colorOverride: "ffffff" },
      { name: "NestJS",     icon: siNestjs },
      { name: "Python",     icon: siPython },
      { name: "FastAPI",    icon: siFastapi },
      { name: "MySQL",      icon: siMysql },
      { name: "MongoDB",    icon: siMongodb },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Docker",     icon: siDocker },
    ],
  },
  {
    title: "Design & Tools",
    accent: "F24E1E",
    items: [
      { name: "Figma",   icon: siFigma },
      { name: "Framer",  icon: siFramer },
      { name: "Git",     icon: siGit },
      { name: "GitHub",  icon: siGithub, colorOverride: "ffffff" },
      { name: "GitLab",  icon: siGitlab },
      { name: "VS Code", customIcon: <IconBrandVscode size={28} stroke={1.5} />, customHex: "007ACC" },
    ],
  },
  {
    title: "Learning",
    accent: "3776AB",
    items: [
      { name: "Spring Boot",icon: siSpring },
      { name: "Java",       customIcon: <IconCoffee size={28} stroke={1.5} />, customHex: "f89820" },
      { name: "AWS",        customIcon: <IconBrandAws size={28} stroke={1.5} />, customHex: "FF9900" },
      { name: "Azure",      customIcon: <IconBrandAzure size={28} stroke={1.5} />, customHex: "0089D6" },
    ],
  },
];

// ---------- animation variants ------------------------------------------
const cardVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

const chipVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      delay: i * 0.045,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

// ---------- sub-components ----------------------------------------------
function SkillChip({ item, index }: { item: SkillItem; index: number }) {
  const hexToUse = item.icon?.hex || item.customHex || "ffffff";
  const color = safeColor(hexToUse, item.colorOverride);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={chipVariants}
      className="skill-icon-item group flex flex-col items-center gap-[10px] p-[14px_10px] rounded-2xl cursor-default
                 border border-transparent
                 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                 hover:border-[rgba(255,255,255,0.06)]
                 hover:-translate-y-[3px]"
      style={
        {
          "--brand": color,
          "--glow": `${color}26`,
        } as CSSProperties
      }
    >
      {/* icon wrapper with brand-colored glow on hover */}
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
            style={{ color: color, width: "28px", height: "28px" }}
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

function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="relative rounded-2xl overflow-hidden
                 border border-[rgba(255,255,255,0.07)]
                 bg-[rgba(10,14,26,0.9)]
                 transition-all duration-400
                 hover:border-[rgba(255,255,255,0.12)]
                 hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
    >
      {/* subtle top-left glow accent */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-20 blur-3xl"
        style={{ background: `#${category.accent}` }}
      />

      {/* card header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-[rgba(255,255,255,0.05)]">
        <span
          className="w-1.5 h-5 rounded-full"
          style={{ background: `#${category.accent}` }}
        />
        <h3 className="text-[13px] font-bold tracking-[0.06em] uppercase text-foreground/80">
          {category.title}
        </h3>
        <span className="ml-auto text-[11px] text-muted-foreground/50 tabular-nums">
          {category.items.length}
        </span>
      </div>

      {/* icons grid */}
      <div className="p-4 grid grid-cols-4 sm:grid-cols-4 gap-1">
        {category.items.map((item, j) => (
          <SkillChip key={item.name} item={item} index={j} />
        ))}
      </div>
    </motion.div>
  );
}

// ---------- main section -------------------------------------------------
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-[clamp(20px,5vw,80px)] pt-[var(--section-pad,48px)] max-w-[1200px] mx-auto"
    >
      {/* section header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-[1.1] text-foreground mb-3">
          Skills
        </h2>
        <p className="text-[15px] text-[rgba(240,240,240,0.5)] max-w-[480px] mx-auto leading-relaxed tracking-[0.01em]">
          Herramientas de desarrollo que domino y uso en mi día a día
        </p>
      </motion.div>

      {/* 2-column bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => (
          <CategoryCard key={category.title} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}

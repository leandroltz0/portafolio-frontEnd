"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import {
  siAngular,
  siReact,
  siExpress,
  siPostgresql,
  siNodedotjs,
  siTypescript,
  siTailwindcss,
  siNextdotjs,
  siDocker,
  siMongodb,
  siMysql,
  siGithub,
  siGit,
  siHtml5,
  siCss,
  siJavascript,
  siPython,
  siSpring,
  siNestjs,
  siFigma,
  siSass,
} from "simple-icons";

// ---------- icon registry -----------------------------------------------
/** Maps a tag label → { path, hex } from simple-icons.
 *  Add more entries here whenever you add new tags. */
const TECH_ICONS: Record<string, { path: string; hex: string }> = {
  Angular:     { path: siAngular.path,    hex: "DD0031" }, // override dark brand color
  React:       { path: siReact.path,      hex: siReact.hex },
  Express:     { path: siExpress.path,    hex: "ffffff" }, // brand is black — use white
  PostgreSQL:  { path: siPostgresql.path, hex: siPostgresql.hex },
  "Node.js":   { path: siNodedotjs.path,  hex: siNodedotjs.hex },
  TypeScript:  { path: siTypescript.path, hex: siTypescript.hex },
  TailwindCSS: { path: siTailwindcss.path,hex: siTailwindcss.hex },
  "Next.js":   { path: siNextdotjs.path,  hex: "ffffff" }, // brand is black
  Docker:      { path: siDocker.path,     hex: siDocker.hex },
  MongoDB:     { path: siMongodb.path,    hex: siMongodb.hex },
  MySQL:       { path: siMysql.path,      hex: siMysql.hex },
  GitHub:      { path: siGithub.path,     hex: "ffffff" }, // brand is black
  Git:         { path: siGit.path,        hex: siGit.hex },
  HTML5:       { path: siHtml5.path,      hex: siHtml5.hex },
  CSS:         { path: siCss.path,        hex: siCss.hex },
  JavaScript:  { path: siJavascript.path, hex: siJavascript.hex },
  Python:      { path: siPython.path,     hex: siPython.hex },
  "Spring Boot":{ path: siSpring.path,   hex: siSpring.hex },
  NestJS:      { path: siNestjs.path,     hex: siNestjs.hex },
  Figma:       { path: siFigma.path,      hex: siFigma.hex },
  SCSS:        { path: siSass.path,       hex: siSass.hex },
};

// ---------- TechBadge ---------------------------------------------------
function TechBadge({ tag }: { tag: string }) {
  const icon = TECH_ICONS[tag];

  return (
    <span
      className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-full
                 font-mono text-[10px] font-semibold text-muted-foreground
                 border border-border bg-[rgba(255,255,255,0.02)]
                 tracking-[0.03em] transition-colors duration-200
                 hover:border-[rgba(255,255,255,0.12)] hover:text-foreground/80"
    >
      {icon && (
        <svg
          viewBox="0 0 24 24"
          width={11}
          height={11}
          aria-hidden
          style={{ fill: `#${icon.hex}`, flexShrink: 0 }}
        >
          <path d={icon.path} />
        </svg>
      )}
      {tag}
    </span>
  );
}

// ---------- data --------------------------------------------------------
const experienceData = [
  {
    date: "2025 — Now",
    title: (
      <>
        <span className="text-accent">Freelance</span> Full Stack Developer
      </>
    ),
    subtitle: "Freelance · Remoto",
    description:
      "Desarrollo aplicaciones web completas para clientes — desde el frontend con Angular y React hasta el backend con Express y bases de datos relacionales. Disponible para nuevos proyectos.",
    tags: ["Angular", "React", "Express", "PostgreSQL", "Node.js", "TypeScript"],
  },
];

// ---------- section -----------------------------------------------------
export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress: textScroll } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 20%"],
  });
  const textOpacity = useTransform(textScroll, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(textScroll, [0, 0.3, 0.8, 1], [40, 0, 0, -40]);

  return (
    <section
      id="experience"
      className="relative max-w-[780px] mx-auto px-[clamp(20px,5vw,80px)] pt-[clamp(48px,5vw,72px)]"
    >
      <motion.div
        ref={textRef}
        style={{ opacity: textOpacity, y: textY }}
        className="flex items-center gap-3 mb-8"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[30px] h-[30px] text-accent shrink-0"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <path d="M12 13v.01" />
          <path d="M3 13a20 20 0 0 0 18 0" />
        </svg>
        <div>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-foreground tracking-[-0.02em]">
            Experience
          </h2>
          <p className="text-[13px] text-muted-foreground mt-0.5">
            Mi trayectoria profesional
          </p>
        </div>
      </motion.div>

      <div ref={containerRef} className="relative">
        <div ref={ref} className="relative pb-10">
          {experienceData.map((item, index) => (
            <div key={index} className="flex gap-6 pt-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#0A0F1A] border border-[rgba(108,99,255,0.2)] flex items-center justify-center shadow-[0_0_20px_rgba(108,99,255,0.08)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-3.5 h-3.5 text-accent"
                  >
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] font-semibold text-[#22C55E] bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.12)] mb-3 tracking-[0.02em]">
                  <span className="inline-block w-[5px] h-[5px] rounded-full bg-[#22C55E]" />
                  Currently active
                </div>

                <h3 className="text-[clamp(16px,1.5vw,19px)] font-semibold text-foreground mb-[2px]">
                  {item.title}
                </h3>
                <div className="text-[13px] font-medium text-muted-foreground mb-1">
                  {item.subtitle}
                </div>
                <div className="font-mono text-[11px] text-[rgba(255,255,255,0.3)] mb-3">
                  {item.date}
                </div>
                <p className="text-[14px] leading-[1.7] text-muted-foreground max-w-[520px] mb-[14px]">
                  {item.description}
                </p>

                {/* tech tags with real icons */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute left-[15px] top-0 bottom-0 w-[2px] overflow-hidden rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(108,99,255,0.15), transparent)",
          }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="w-full bg-gradient-to-b from-accent via-[rgba(108,99,255,0.3)] to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

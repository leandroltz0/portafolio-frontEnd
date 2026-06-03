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
import type { TechIcon, ExperienceItem } from "../types";

// ---------- Tech icon registry -------------------------------------------
/** Maps a tag label → { path, hex } from simple-icons.
 *  Add more entries here whenever you add new tags. */
export const TECH_ICONS: Record<string, TechIcon> = {
  Angular:       { path: siAngular.path,     hex: "DD0031" }, // override dark brand color
  React:         { path: siReact.path,       hex: siReact.hex },
  Express:       { path: siExpress.path,     hex: "ffffff" }, // brand is black — use white
  PostgreSQL:    { path: siPostgresql.path,  hex: siPostgresql.hex },
  "Node.js":     { path: siNodedotjs.path,   hex: siNodedotjs.hex },
  TypeScript:    { path: siTypescript.path,  hex: siTypescript.hex },
  TailwindCSS:   { path: siTailwindcss.path, hex: siTailwindcss.hex },
  "Next.js":     { path: siNextdotjs.path,   hex: "ffffff" }, // brand is black
  Docker:        { path: siDocker.path,      hex: siDocker.hex },
  MongoDB:       { path: siMongodb.path,     hex: siMongodb.hex },
  MySQL:         { path: siMysql.path,       hex: siMysql.hex },
  GitHub:        { path: siGithub.path,      hex: "ffffff" }, // brand is black
  Git:           { path: siGit.path,         hex: siGit.hex },
  HTML5:         { path: siHtml5.path,       hex: siHtml5.hex },
  CSS:           { path: siCss.path,         hex: siCss.hex },
  JavaScript:    { path: siJavascript.path,  hex: siJavascript.hex },
  Python:        { path: siPython.path,      hex: siPython.hex },
  "Spring Boot": { path: siSpring.path,      hex: siSpring.hex },
  NestJS:        { path: siNestjs.path,      hex: siNestjs.hex },
  Figma:         { path: siFigma.path,       hex: siFigma.hex },
  SCSS:          { path: siSass.path,        hex: siSass.hex },
};

// ---------- Experience data ----------------------------------------------
export const experienceData: ExperienceItem[] = [
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

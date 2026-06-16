import {
  siHtml5, siCss, siJavascript, siTypescript, siReact,
  siTailwindcss, siAngular, siSass, siAstro,
  siNodedotjs, siExpress, siNestjs, siPython, siFastapi,
  siMysql, siMongodb, siPostgresql, siDocker,
  siFigma, siFramer, siGit, siGithub, siGitlab,
  siSpring,
} from "simple-icons";
import { IconBrandAws, IconBrandAzure, IconBrandVscode } from "@tabler/icons-react";
import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "61DAFB",
    items: [
      { name: "HTML5",       icon: siHtml5 },
      { name: "CSS",         icon: siCss },
      { name: "JavaScript",  icon: siJavascript },
      { name: "TypeScript",  icon: siTypescript },
      { name: "React",       icon: siReact },
      { name: "TailwindCSS", icon: siTailwindcss },
      { name: "Angular",     icon: siAngular,  colorOverride: "DD0031" },
      { name: "SCSS",        icon: siSass },
      { name: "Astro",       icon: siAstro },
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
      { name: "Spring Boot", icon: siSpring },
      { name: "Java", customIcon: <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>, customHex: "E76F00" },
      { name: "AWS",         customIcon: <IconBrandAws   size={28} stroke={1.5} />, customHex: "FF9900" },
      { name: "Azure",       customIcon: <IconBrandAzure size={28} stroke={1.5} />, customHex: "0089D6" },
    ],
  },
];

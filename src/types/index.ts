import type { ReactNode } from "react";

// ---------- Simple Icons -------------------------------------------------
export interface SimpleIcon {
  path: string;
  hex: string;
  title: string;
}

// ---------- Skills -------------------------------------------------------
export interface SkillItem {
  name: string;
  icon?: SimpleIcon;
  customIcon?: ReactNode;
  customHex?: string;
  /** Override the brand hex when it's too dark for a dark background */
  colorOverride?: string;
}

export interface SkillCategory {
  title: string;
  accent: string;
  items: SkillItem[];
}

// ---------- Experience ---------------------------------------------------
export interface TechIcon {
  path: string;
  hex: string;
}

export interface ExperienceItem {
  date: string;
  title: ReactNode;
  subtitle: string;
  description: string;
  tags: string[];
}

// ---------- Projects -----------------------------------------------------
export interface ProjectLink {
  label: string;
  href: string;
  primary: boolean;
}

export interface Project {
  title: string;
  subtitle: string;
  projectType?: "Frontend" | "Backend" | "Full Stack";
  tag: string | null;
  description: string;
  techs: string[];
  screenBg: string;
  screenContent: ReactNode;
  coming?: boolean;
  inProgress?: boolean;
  links: ProjectLink[];
}

// ---------- Education ----------------------------------------------------
export interface Certificate {
  title: string;
  institution: string;
  year: string;
  image?: string;
}

// ---------- Social -------------------------------------------------------
export interface SocialLink {
  label: string;
  href: string;
}

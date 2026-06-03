export const navItems = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work",       href: "#projects" },
  { name: "Skills",     href: "#skills" },
] as const;

/** Full list including non-navbar sections — used by the mobile menu */
export const mobileNavItems = [
  ...navItems,
  { name: "Education", href: "#education" },
  { name: "Contact",   href: "#contact" },
] as const;

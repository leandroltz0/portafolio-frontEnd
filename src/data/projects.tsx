import type { Project } from "../types";
import atmosPreview from "../assets/atmos-preview.png";
import barberPreview from "../assets/barber-preview.png";
import animalGymPreview from "../assets/animalgym-preview.png";

export const projects: Project[] = [
  {
    title: "ATMOS",
    subtitle: "Real-time weather intelligence platform",
    projectType: "Full Stack",
    tag: "Featured project",
    description:
      "Beautiful weather application with real-time data, full authentication system, interactive maps, and 7-day forecasts. Deployed on Vercel + Railway.",
    techs: ["Angular 19", "NestJS", "PostgreSQL", "OpenWeatherMap"],
    screenBg: "linear-gradient(135deg, #0D111D, #12162A)",
    screenContent: (
      <img
        src={atmosPreview.src}
        alt="ATMOS weather platform interface"
        className="absolute inset-0 w-full h-full object-cover z-[3]"
      />
    ),
    links: [
      { label: "Sitio Web", href: "https://atmos-front-end.vercel.app", primary: true },
      { label: "View Front-End", href: "https://github.com/leandroltz0/Atmos-web", primary: false },
      { label: "View Back-End", href: "https://github.com/leandroltz0/atmos-backEnd", primary: false },
    ],
  },
  {
    title: "Santillán Barbería",
    subtitle: "Web completa para barbería independiente",
    projectType: "Full Stack",
    tag: "New project",
    description:
      "Página web para un barbero con sistema de reseñas, galería de cortes, contacto, visagismo y reservas. Una web muy completa con diseño oscuro y elegante.",
    techs: ["Astro", "Express", "MongoDB"],
    screenBg: "linear-gradient(135deg, #1a1a1a, #0d0d0d)",
    screenContent: (
      <img
        src={barberPreview.src}
        alt="Santillán Barbería website interface"
        className="absolute inset-0 w-full h-full object-cover z-[3]"
      />
    ),
    links: [
      { label: "Sitio Web", href: "https://barbersantillan.vercel.app/", primary: true },
      { label: "View Front-End", href: "https://github.com/leandroltz0/SantillanBarber", primary: false },
      { label: "View Back-End", href: "https://github.com/leandroltz0/barberSantillan-backEnd", primary: false },
    ],
  },
  {
    title: "Animal Gym",
    subtitle: "Web para gimnasio con video hero y tienda online",
    projectType: "Frontend",
    tag: "New project",
    description:
      "Sitio web completo para un gimnasio con hero animado con video de fondo, sección de servicios, galería de fotos, horarios, tienda y contacto. Diseño oscuro e impactante con React y SCSS.",
    techs: ["React"],
    screenBg: "linear-gradient(135deg, #0a0a0a, #1a0505)",
    screenContent: (
      <img
        src={animalGymPreview.src}
        alt="Animal Gym website interface"
        className="absolute inset-0 w-full h-full object-cover object-left-top z-[3]"
      />
    ),
    links: [
      { label: "Sitio Web", href: "https://animal-gym-front-end.vercel.app/", primary: true },
      { label: "View Front-End", href: "https://github.com/leandroltz0/animalGym-frontEnd", primary: false },
    ],
  },
  {
    title: "Coming next",
    subtitle: "Something new in development",
    tag: null,
    description:
      "I'm always building. Reach out if you'd like to collaborate or want early access.",
    techs: ["Stack TBD"],
    screenBg: "linear-gradient(135deg, #0A0D16, #0F0F1A)",
    screenContent: (
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-[10px] z-[3]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="font-mono text-[11px] text-[rgba(255,255,255,0.2)] tracking-[0.12em]">
          Next project
        </span>
      </div>
    ),
    coming: true,
    links: [{ label: "Get in touch", href: "#contact", primary: false }],
  },
];

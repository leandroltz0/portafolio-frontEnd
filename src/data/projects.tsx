import type { Project } from "../types";
import atmosPreview from "../assets/atmos-preview.png";

export const projects: Project[] = [
  {
    title: "ATMOS",
    subtitle: "Real-time weather intelligence platform",
    projectType: "Full Stack",
    tag: "Featured project",
    description:
      "Beautiful weather application with real-time data, full authentication system, interactive maps, and 7-day forecasts. Deployed on Vercel + Railway.",
    techs: ["Angular 19", "Express", "PostgreSQL", "OpenWeatherMap"],
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

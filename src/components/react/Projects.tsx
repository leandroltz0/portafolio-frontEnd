"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "ATMOS",
    subtitle: "Real-time weather intelligence platform",
    tag: "Featured project",
    description:
      "Beautiful weather application with real-time data, full authentication system, interactive maps, and 7-day forecasts. Deployed on Vercel + Railway.",
    techs: ["Angular 19", "Express", "PostgreSQL", "OpenWeatherMap"],
    screenBg: "linear-gradient(135deg, #0D111D, #12162A)",
    screenContent: (
      <>
        <div className="absolute top-3 right-[14px] w-[6px] h-[6px] rounded-full bg-[rgba(108,99,255,0.5)] z-[3] shadow-[0_0_8px_rgba(108,99,255,0.4)] animate-pulse-dot" />
        <div className="font-heading text-[38px] text-[rgba(255,255,255,0.85)] z-[3] tracking-[0.04em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          ATMOS
        </div>
        <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] z-[3] tracking-[0.15em]">
          angular · express · postgresql
        </div>
      </>
    ),
    links: [
      { label: "Sitio Web", href: "#", primary: true },
      { label: "GitHub →", href: "#", primary: false },
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

export default function Projects() {
  return (
    <section id="projects" className="relative px-[clamp(20px,5vw,80px)] pt-[var(--section-pad,48px)] max-w-[1200px] mx-auto">
      <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-[1.1] text-foreground text-center mb-3">
        Projects
      </h2>
      <p className="text-center text-[14px] text-muted-foreground mb-12 tracking-[0.02em]">
        Selected work I've built and shipped
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`project-card group bg-surface border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden transition-all duration-[500ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-[6px] hover:scale-[1.01] hover:border-[rgba(108,99,255,0.25)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(108,99,255,0.08)] relative ${project.coming ? "coming" : ""}`}
            initial={{ x: i === 0 ? -60 : 60, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            {project.coming && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] bg-[rgba(255,107,107,0.12)] backdrop-blur-md border border-[rgba(255,107,107,0.2)] px-[22px] py-[10px] rounded-full font-mono text-[11px] font-semibold text-destructive tracking-[0.08em] uppercase">
                In progress
              </div>
            )}

            <div className="relative w-full pt-[60%] bg-transparent">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3A3A3C] to-[#1C1C1E] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]">
                  <div className="absolute inset-[10px] bg-black rounded-[6px] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[7px] bg-black rounded-b-[10px] z-[3]" />
                    <div className="absolute bottom-0 left-0 right-0 h-[7px] bg-[#1C1C1E] z-[2]" />
                    <div
                      className={`absolute inset-0 z-[1] overflow-hidden flex items-center justify-center flex-col gap-[6px] ${project.coming ? "blur-[6px] saturate-[0.3] opacity-35" : ""}`}
                      style={{ background: project.screenBg }}
                    >
                      <div className="absolute inset-0 bg-gradient-radial pointer-events-none z-[2]" />
                      {project.screenContent}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-[14px] left-[5%] right-[5%] h-7 bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.18)_0%,transparent_70%)] blur-xl z-0" />
            </div>

            <div className={`p-[26px_30px_30px] relative z-[1] ${project.coming ? "opacity-50" : ""}`}>
              {project.tag && (
                <div className="inline-flex items-center gap-[5px] font-mono text-[10px] font-semibold text-accent tracking-[0.08em] uppercase mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {project.tag}
                </div>
              )}

              <h3 className={`font-heading text-[clamp(24px,2.5vw,32px)] text-foreground mb-[6px] leading-[1.1] tracking-[0.02em] ${project.coming ? "text-[rgba(240,240,240,0.45)]" : ""}`}>
                {project.title}
              </h3>

              <div className={`text-[13px] text-muted-foreground mb-4 leading-[1.5] ${project.coming ? "text-[rgba(107,114,128,0.5)]" : ""}`}>
                {project.subtitle}
              </div>

              <div className="flex flex-wrap gap-2 mb-[18px]">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-[5px] px-3 py-1 pl-[7px] rounded-full border border-[rgba(255,255,255,0.08)] font-mono text-[10px] font-medium text-[rgba(255,255,255,0.6)] tracking-[0.01em] bg-[rgba(255,255,255,0.02)] transition-all duration-250 hover:border-[rgba(108,99,255,0.25)] hover:bg-[rgba(108,99,255,0.06)] hover:text-foreground ${project.coming ? "!border-[rgba(255,255,255,0.04)] !text-[rgba(255,255,255,0.25)]" : ""}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`text-[14px] leading-[1.65] text-muted-foreground mb-[22px] max-w-[520px] ${project.coming ? "text-[rgba(107,114,128,0.5)]" : ""}`}>
                {project.description}
              </p>

              <div className="flex gap-3 flex-wrap">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`inline-flex items-center gap-2 px-6 py-[10px] rounded-full text-[12px] font-semibold tracking-[0.04em] transition-all duration-[300ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      link.primary
                        ? "bg-accent text-white shadow-[0_4px_16px_rgba(108,99,255,0.2)] hover:bg-[#5A52E0] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(108,99,255,0.35)]"
                        : "border border-border text-foreground hover:border-destructive hover:bg-[rgba(255,107,107,0.08)] hover:-translate-y-[2px]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { EASE } from "../lib/animations";
import { projects } from "../data/projects";
import { siAngular, siNestjs, siPostgresql, siGithub, siAstro, siMongodb, siExpress, siReact } from "simple-icons";
import { IconCloud } from "@tabler/icons-react";

const techIconMap: Record<string, any> = {
  "Angular 19": { type: "simple", icon: siAngular, color: "#DD0031" },
  "NestJS": { type: "simple", icon: siNestjs, color: `#${siNestjs.hex}` },
  "Express": { type: "simple", icon: siExpress, color: "#FFFFFF" },
  "PostgreSQL": { type: "simple", icon: siPostgresql, color: `#${siPostgresql.hex}` },
  "OpenWeatherMap": { type: "tabler", icon: IconCloud },
  "Astro": { type: "simple", icon: siAstro, color: "#BC52EE" },
  "MongoDB": { type: "simple", icon: siMongodb, color: "#47A248" },
  "React": { type: "simple", icon: siReact, color: `#${siReact.hex}` },
};

function TechIcon({ name }: { name: string }) {
  const data = techIconMap[name];
  if (!data) return null;
  if (data.type === "simple") {
    return (
      <svg viewBox="0 0 24 24" fill={data.color} width="12" height="12">
        <path d={data.icon.path} />
      </svg>
    );
  }
  if (data.type === "tabler") {
    const Icon = data.icon;
    return <Icon size={12} stroke={2} className="text-[rgba(255,255,255,0.6)]" />;
  }
  return null;
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-[clamp(20px,5vw,80px)] pt-[var(--section-pad,48px)] max-w-[1200px] mx-auto">
      <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-[1.1] text-foreground text-center mb-3 flex items-center justify-center gap-3">
        {"</>"} Projects
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
            transition={{ duration: 1, ease: EASE }}
          >
            {project.coming && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] bg-[rgba(255,107,107,0.12)] backdrop-blur-md border border-[rgba(255,107,107,0.2)] px-[22px] py-[10px] rounded-full font-mono text-[11px] font-semibold text-destructive tracking-[0.08em] uppercase">
                In progress
              </div>
            )}

            {/* Mockup screen */}
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

            {/* Card body */}
            <div className={`p-[26px_30px_30px] relative z-[1] ${project.coming ? "opacity-50" : ""}`}>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                {project.tag && (
                  <div className="inline-flex items-center gap-[5px] font-mono text-[10px] font-semibold text-accent tracking-[0.08em] uppercase leading-none py-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {project.tag}
                  </div>
                )}
                {project.projectType && (
                  <div className="inline-flex items-center gap-[5px] font-mono text-[10px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.08em] uppercase bg-[rgba(255,255,255,0.05)] px-[10px] pt-[5px] pb-[4px] leading-none rounded-md border border-[rgba(255,255,255,0.1)]">
                    {project.projectType}
                  </div>
                )}
                {project.inProgress && (
                  <div className="inline-flex items-center gap-[6px] font-mono text-[10px] font-semibold text-[#EAB308] tracking-[0.08em] uppercase bg-[rgba(234,179,8,0.08)] px-[10px] pt-[5px] pb-[4px] leading-none rounded-md border border-[rgba(234,179,8,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse"></span>
                    En proceso
                  </div>
                )}
              </div>

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
                    <TechIcon name={tech} />
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`text-[14px] leading-[1.65] text-muted-foreground mb-[22px] max-w-[520px] ${project.coming ? "text-[rgba(107,114,128,0.5)]" : ""}`}>
                {project.description}
              </p>

              <div className="flex gap-2 lg:gap-3 flex-row overflow-x-auto scrollbar-none pb-1 -mb-1">
                {project.links.map((link) => {
                  const labelLower = link.label.toLowerCase();
                  const isGithub = labelLower.includes("repo") || labelLower.includes("github") || labelLower.includes("front-end") || labelLower.includes("back-end");
                  return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href !== "#" && !link.href.startsWith("#") ? "_blank" : undefined}
                    rel={link.href !== "#" && !link.href.startsWith("#") ? "noopener noreferrer" : undefined}
                    className={`inline-flex whitespace-nowrap items-center shrink-0 gap-2 px-4 py-[8px] sm:px-5 sm:py-[10px] rounded-full text-[11px] sm:text-[12px] font-semibold tracking-[0.04em] transition-all duration-[300ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      link.primary
                        ? "bg-accent text-white shadow-[0_4px_16px_rgba(108,99,255,0.2)] hover:bg-[#5A52E0] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(108,99,255,0.35)]"
                        : isGithub
                        ? "bg-black text-white border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[#111] hover:-translate-y-[2px]"
                        : "border border-border text-foreground hover:border-destructive hover:bg-[rgba(255,107,107,0.08)] hover:-translate-y-[2px]"
                    }`}
                  >
                    {isGithub && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d={siGithub.path} />
                      </svg>
                    )}
                    {link.label}
                  </a>
                )})}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

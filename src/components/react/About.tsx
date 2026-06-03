"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative pt-0 max-w-[780px] mx-auto px-[clamp(20px,5vw,80px)] mt-[4.5rem] mb-4">
      <motion.div
        className="flex items-center gap-5 mb-6 flex-wrap"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-[rgba(108,99,255,0.25)] blur-xl scale-125" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent via-destructive to-accent p-[2px] shadow-[0_0_0_3px_rgba(108,99,255,0.15)]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <span className="font-heading text-[28px] text-accent">LM</span>
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-[6px] px-[14px] py-[5px] pl-[10px] rounded-full font-mono text-[11px] font-semibold text-[#22C55E] bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.12)] tracking-[0.04em] whitespace-nowrap">
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#22C55E] animate-pulse-avail" />
          Disponible para trabajar
        </span>
      </motion.div>

      <motion.h2
        className="font-heading text-[clamp(30px,3.5vw,42px)] leading-[1.15] text-foreground mb-4"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        Hola, soy <span className="text-accent">Lean</span>
      </motion.h2>

      <motion.p
        className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-muted-foreground max-w-[600px] mb-7"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      >
        <strong className="text-accent font-mono font-bold">2 años</strong> de experiencia. Desarrollador web creando aplicaciones frontend y backend — desde dashboards en <strong className="text-foreground font-semibold">Angular</strong> y <strong className="text-foreground font-semibold">React</strong> hasta APIs con <strong className="text-foreground font-semibold">Express</strong> y bases de datos <strong className="text-foreground font-semibold">PostgreSQL</strong>. Cada proyecto es una oportunidad de resolver problemas reales con código limpio y diseño pensado.
      </motion.p>

      <motion.div
        className="flex gap-3 flex-wrap"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {[
          {
            label: "GitHub",
            href: "https://github.com/leandroltz0",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            ),
          },
          {
            label: "LinkedIn",
            href: "#",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
          },
          {
            label: "Email",
            href: "mailto:leandro@example.com",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            ),
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium text-muted-foreground border border-border transition-all duration-250 hover:text-foreground hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.03)] hover:-translate-y-px"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}

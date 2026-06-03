import { motion } from "motion/react";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { EASE, EASE_SPRING, scaleIn, fadeUp } from "../../lib/animations";
import { socialLinks } from "../../data/social";

// Map label → tabler icon
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub:   <IconBrandGithub   size={16} stroke={1.5} />,
  LinkedIn: <IconBrandLinkedin size={16} stroke={1.5} />,
  Email:    <IconMail          size={16} stroke={1.5} />,
};

export default function About() {
  return (
    <section id="about" className="relative pt-0 max-w-[780px] mx-auto px-[clamp(20px,5vw,80px)] mt-[4.5rem] mb-4">
      <motion.div
        className="flex items-center gap-5 mb-6 flex-wrap"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE_SPRING }}
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
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Hola, soy <span className="text-accent">Lean</span>
      </motion.h2>

      <motion.p
        className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-muted-foreground max-w-[600px] mb-7"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
      >
        <strong className="text-accent font-mono font-bold">2 años</strong> de experiencia. Desarrollador web creando aplicaciones frontend y backend — desde dashboards en <strong className="text-foreground font-semibold">Angular</strong> y <strong className="text-foreground font-semibold">React</strong> hasta APIs con <strong className="text-foreground font-semibold">Express</strong> y bases de datos <strong className="text-foreground font-semibold">PostgreSQL</strong>. Cada proyecto es una oportunidad de resolver problemas reales con código limpio y diseño pensado.
      </motion.p>

      <motion.div
        className="flex gap-3 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium text-muted-foreground border border-border transition-all duration-250 hover:text-foreground hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.03)] hover:-translate-y-px"
          >
            {SOCIAL_ICONS[link.label]}
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}

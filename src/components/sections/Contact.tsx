import { motion } from "motion/react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { socialLinks } from "../../data/social";
import { fadeUp, EASE } from "../../lib/animations";

// Map label → tabler icon
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub:   <IconBrandGithub   size={16} stroke={1.5} />,
  LinkedIn: <IconBrandLinkedin size={16} stroke={1.5} />,
  Email:    <IconMail          size={16} stroke={1.5} />,
};

export default function Contact() {
  const placeholders = [
    "your@email.com",
    "Tell me about your project",
    "Let's build something great",
    "I have an idea to discuss",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Removed console.log
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input");
    if (input?.value) {
      const btn = e.currentTarget.querySelector("button[type=submit]");
      if (btn) {
        (btn as HTMLButtonElement).disabled = true;
      }
      setTimeout(() => {
        input.value = "";
        if (btn) {
          (btn as HTMLButtonElement).disabled = false;
        }
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative px-[clamp(20px,5vw,80px)] pt-[var(--section-pad,48px)] pb-[calc(var(--section-pad,48px)*0.8)] max-w-[640px] mx-auto">
      <motion.h2
        className="font-heading text-[clamp(32px,5vw,52px)] leading-[1.1] text-foreground mb-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Let's build something great together.
      </motion.h2>

      <motion.p
        className="text-[15px] text-muted-foreground leading-[1.6] mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
      >
        Have a project, idea, or just want to connect? Drop a message.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
        className="mb-10"
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <p className="text-[11px] text-muted-foreground mt-3 text-center opacity-50 tracking-[0.04em]">
          Your message disappears as it sends ✦
        </p>
      </motion.div>

      <motion.div
        className="flex gap-6 justify-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.36, ease: EASE }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener"}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground tracking-[0.05em] transition-colors duration-250 hover:text-accent"
          >
            {SOCIAL_ICONS[link.label]}
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}

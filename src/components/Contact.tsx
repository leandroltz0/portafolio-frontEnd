import { useState } from "react";
import { motion } from "motion/react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { socialLinks } from "../data/social";
import { fadeUp, EASE } from "../lib/animations";

// Map label → tabler icon
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub:    <IconBrandGithub    size={16} stroke={1.5} />,
  LinkedIn:  <IconBrandLinkedin  size={16} stroke={1.5} />,
  Instagram: <IconBrandInstagram size={16} stroke={1.5} />,
  WhatsApp:  <IconBrandWhatsapp  size={16} stroke={1.5} />,
  Email:     <IconMail           size={16} stroke={1.5} />,
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("sent");
        e.currentTarget.reset();
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
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

      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
        onSubmit={handleSubmit}
        className="space-y-5 mb-10"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
          />
        </div>

        <div>
          <select
            name="project_type"
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-border text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="" disabled selected className="bg-background text-foreground">Project type</option>
            <option value="website" className="bg-background text-foreground">Website</option>
            <option value="web_app" className="bg-background text-foreground">Web Application</option>
            <option value="ecommerce" className="bg-background text-foreground">E-commerce</option>
            <option value="other" className="bg-background text-foreground">Other</option>
          </select>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={formStatus === "sending"}
          className="w-full py-3 px-6 rounded-lg bg-accent text-white font-semibold tracking-[0.04em] transition-all duration-300 hover:bg-[#5A52E0] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(108,99,255,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {formStatus === "sending" && "Sending..."}
          {formStatus === "sent" && "Message sent!"}
          {formStatus === "error" && "Error. Try again."}
          {formStatus === "idle" && "Send message"}
        </button>

        {formStatus === "sent" && (
          <p className="text-[11px] text-[#22C55E] text-center tracking-[0.04em]">
            Thanks! I'll get back to you soon.
          </p>
        )}
      </motion.form>

      <motion.div
        className="flex gap-6 justify-center flex-wrap"
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

"use client";

import { motion } from "motion/react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function Contact() {
  const placeholders = [
    "your@email.com",
    "Tell me about your project",
    "Let's build something great",
    "I have an idea to discuss",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        Let's build something great together.
      </motion.h2>

      <motion.p
        className="text-[15px] text-muted-foreground leading-[1.6] mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
      >
        Have a project, idea, or just want to connect? Drop a message.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
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
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.36, ease: [0.23, 1, 0.32, 1] }}
      >
        <a
          href="https://github.com/leandroltz0"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground tracking-[0.05em] transition-colors duration-250 hover:text-accent"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground tracking-[0.05em] transition-colors duration-250 hover:text-accent"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:leandro@example.com"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground tracking-[0.05em] transition-colors duration-250 hover:text-accent"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Email
        </a>
      </motion.div>
    </section>
  );
}

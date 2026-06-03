"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const lastScrollRef = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else if (y > lastScrollRef.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollRef.current = y;
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-4 inset-x-0 mx-auto z-[5000] flex items-center justify-center px-4"
        >
          <div className="flex items-center justify-between gap-2 rounded-full border border-[rgba(108,99,255,0.08)] bg-[rgba(8,11,24,0.7)] backdrop-blur-[28px] saturate-[1.5] shadow-[0_0_60px_rgba(108,99,255,0.03),inset_0_1px_0_rgba(255,255,255,0.04)] px-[18px] py-[6px] min-w-0 w-auto max-w-full md:min-w-[420px]">
            <a href="#hero" className="font-heading text-lg text-accent tracking-[0.06em] leading-none mr-2 shrink-0">
              LM
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.06em] bg-accent text-white transition-all duration-[300ms] hover:bg-[#5A52E0] hover:shadow-[0_4px_20px_rgba(108,99,255,0.3)]"
              >
                Contact
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-[4px] p-2 bg-transparent border-none"
                aria-label="Menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                  className="block w-[18px] h-[1.5px] bg-foreground rounded"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-[18px] h-[1.5px] bg-foreground rounded"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                  className="block w-[18px] h-[1.5px] bg-foreground rounded"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[4999] bg-[rgba(5,8,15,0.97)] backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {[...navItems, { name: "Education", href: "#education" }, { name: "Contact", href: "#contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-[clamp(28px,5vw,42px)] text-foreground transition-colors duration-250 hover:text-accent"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative px-3 py-1.5 text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground rounded-full transition-colors duration-250 hover:text-foreground hover:bg-[rgba(255,255,255,0.04)] group"
    >
      <span className="flex flex-col overflow-hidden h-[13px]">
        <span className="block leading-[13px] h-[13px] whitespace-nowrap transition-transform duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
          <span className="block leading-[13px] h-[13px]">{children}</span>
          <span className="block leading-[13px] h-[13px] text-accent">{children}</span>
        </span>
      </span>
    </a>
  );
}

"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";

// ---------- data --------------------------------------------------------
const certificates = [
  { title: "Programming Course", institution: "Maxiprograma", year: "2023" },
  { title: "Full Stack Development", institution: "Online", year: "2024" },
  { title: "Backend Development", institution: "Online", year: "2024" },
];

// ---------- TiltCard ----------------------------------------------------
const TILT_MAX = 14; // max degrees of rotation
const GLARE_OPACITY = 0.07;

function TiltCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    const rotY = (px - 0.5) * TILT_MAX * 2;
    const rotX = -(py - 0.5) * TILT_MAX * 2;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: rotX, y: rotY });
      setGlare({ x: px * 100, y: py * 100, opacity: GLARE_OPACITY });
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setGlare((g) => ({ ...g, opacity: GLARE_OPACITY }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((g) => ({ ...g, opacity: 0 }));
  }, []);

  const cardStyle: CSSProperties = {
    transform: isHovered
      ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03,1.03,1.03)`
      : "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    transition: isHovered
      ? "transform 0.1s linear"
      : "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
    transformStyle: "preserve-3d",
    willChange: "transform",
  };

  const glareStyle: CSSProperties = {
    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity * 1.2}) 0%, rgba(255,255,255,0) 70%)`,
    transition: isHovered ? "opacity 0.1s linear" : "opacity 0.55s ease",
    opacity: glare.opacity > 0 ? 1 : 0,
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={cardStyle}
      className={`relative cursor-pointer ${className}`}
    >
      {children}

      {/* Glare overlay — sits on top of everything, pointer-events none */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-[10]"
        style={glareStyle}
      />

      {/* Subtle border shimmer */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-[9]"
        style={{
          boxShadow: isHovered
            ? `0 ${14 + Math.abs(tilt.x)}px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(108,99,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)`
            : "0 4px 16px rgba(0,0,0,0.2)",
          transition: isHovered
            ? "box-shadow 0.1s linear"
            : "box-shadow 0.55s cubic-bezier(0.23,1,0.32,1)",
        }}
      />
    </div>
  );
}

// ---------- main section ------------------------------------------------
export default function Education() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section
      id="education"
      className="relative px-[clamp(20px,5vw,80px)] pt-[var(--section-pad,48px)] max-w-[1080px] mx-auto"
    >
      <motion.h2
        className="font-heading text-[clamp(28px,4vw,42px)] leading-[1.1] text-foreground mb-9"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        Education &amp; Training
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <TiltCard
              className="bg-surface border border-border rounded-[var(--radius,16px)] overflow-hidden"
              onClick={() => setLightboxOpen(true)}
            >
              {/* image / placeholder area */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0D1420] group">
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground
                                bg-gradient-to-br from-[#0D1420] via-[#0A0F1A] to-[#0F1A2E]"
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 opacity-25"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  </svg>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-25">
                    Certificate
                  </span>
                </div>

                {/* hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center
                              bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px]
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-9 h-9 text-white opacity-80 scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6" />
                    <path d="M8 11h6" />
                  </svg>
                </div>
              </div>

              {/* card body — floats slightly in Z */}
              <div
                className="p-5 pb-6"
                style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
              >
                <h4 className="text-[15px] font-semibold text-foreground mb-[3px] leading-[1.3]">
                  {cert.title}
                </h4>
                <div className="text-[13px] text-muted-foreground mb-3">
                  {cert.institution}
                </div>
                <span
                  className="inline-block font-mono text-[10px] font-semibold text-accent tracking-[0.06em]
                               bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.15)]
                               rounded-full px-3 py-[3px]"
                >
                  {cert.year}
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[9998] bg-[rgba(0,0,0,0.92)] backdrop-blur-md flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxOpen(false);
            }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[rgba(255,255,255,0.06)]
                         border border-[rgba(255,255,255,0.1)] text-white text-[22px] leading-none
                         flex items-center justify-center transition-all duration-250
                         hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.2)]"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                         bg-[#0D1420] border border-[rgba(255,255,255,0.06)]
                         flex items-center justify-center p-10"
            >
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-16 h-16 opacity-25"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                </svg>
                <span className="font-mono text-sm tracking-wider opacity-50">
                  Certificate image not yet available
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

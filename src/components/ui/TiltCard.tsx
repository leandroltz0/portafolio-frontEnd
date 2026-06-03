"use client";

import { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  glareMax?: number;
  perspective?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltMax = 8,
  glareMax = 0.12,
  perspective = 800,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltMax;
      const rotateY = ((x - centerX) / centerX) * tiltMax;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: "transform 0.08s cubic-bezier(0.23, 1, 0.32, 1)",
      });

      const glareX = ((x - centerX) / centerX) * glareMax;
      const glareY = ((y - centerY) / centerY) * glareMax;
      setGlareStyle({
        background: `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(108,99,255,${0.06 + glareX + glareY}), transparent 60%)`,
      });
    },
    [tiltMax, glareMax, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    });
    setGlareStyle({});
  }, [perspective]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ perspective: `${perspective}px` } as React.CSSProperties}
      className={`relative ${className}`}
    >
      <div
        style={style as React.CSSProperties}
        className="relative w-full h-full rounded-inherit"
      >
        {children}
        {isHovered && (
          <div
            style={glareStyle as React.CSSProperties}
            className="pointer-events-none absolute inset-0 rounded-inherit z-10"
          />
        )}
      </div>
    </div>
  );
}

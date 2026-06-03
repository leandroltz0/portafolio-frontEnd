"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    if (matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const hoverEls = document.querySelectorAll(
      "a, button, .btn, .project-card, .skill-icon-item, input, textarea"
    );

    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed pointer-events-none z-[9999] w-5 h-5 rounded-full border-[1.5px] border-accent bg-[rgba(108,99,255,0.06)] transition-[width,height,background,border-color] duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[transform,width,height] -translate-x-1/2 -translate-y-1/2 left-0 top-0 [&.hover]:w-[52px] [&.hover]:h-[52px] [&.hover]:bg-[rgba(108,99,255,0.1)] [&.hover]:border-destructive"
      />
      <div
        ref={dotRef}
        id="cursor-dot"
        className="fixed pointer-events-none z-[9999] w-1 h-1 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 left-0 top-0 will-change-transform"
      />
    </>
  );
}

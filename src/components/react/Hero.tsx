"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "motion/react";
import type * as THREE from "three";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const nameWords = useMemo(
    () => "Leandro Maciel".split(" ").map(word => word.split("")),
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer | null = null,
      particleSystem: THREE.Points,
      knot1: THREE.Mesh,
      knot2: THREE.Mesh,
      ico: THREE.Mesh,
      mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0,
      animId: number;

    const initThree = async () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 1 || h < 1) return;

      const THREE = await import("three");

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(70, w / h, 0.1, 1000);
      camera.position.z = 8;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const particleCount = Math.min(1500, Math.floor((w * h) / 800));
      const positions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 28;
        positions[i3 + 1] = (Math.random() - 0.5) * 18;
        positions[i3 + 2] = (Math.random() - 0.5) * 20 - 5;
        const isViolet = Math.random() > 0.5;
        particleColors[i3] = isViolet ? 108 / 255 : 255 / 255;
        particleColors[i3 + 1] = isViolet ? 99 / 255 : 107 / 255;
        particleColors[i3 + 2] = isViolet ? 255 / 255 : 107 / 255;
        sizes[i] = Math.random() * 2.5 + 0.5;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
      particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const particleMat = new THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      const knotGeo1 = new THREE.TorusKnotGeometry(1.4, 0.45, 128, 16);
      const knotMat1 = new THREE.MeshBasicMaterial({
        color: 0x6c63ff,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      knot1 = new THREE.Mesh(knotGeo1, knotMat1);
      knot1.position.set(-1.5, 0.5, -3);
      scene.add(knot1);

      const knotGeo2 = new THREE.TorusKnotGeometry(0.9, 0.3, 96, 12);
      const knotMat2 = new THREE.MeshBasicMaterial({
        color: 0xff6b6b,
        wireframe: true,
        transparent: true,
        opacity: 0.06,
      });
      knot2 = new THREE.Mesh(knotGeo2, knotMat2);
      knot2.position.set(2, -1, -2);
      scene.add(knot2);

      const icoGeo = new THREE.IcosahedronGeometry(0.8, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0x6c63ff,
        wireframe: true,
        transparent: true,
        opacity: 0.04,
      });
      ico = new THREE.Mesh(icoGeo, icoMat);
      ico.position.set(0.5, -1.8, -1);
      scene.add(ico);

      document.addEventListener("mousemove", (e) => {
        targetX = (e.clientX / w - 0.5) * 2;
        targetY = (e.clientY / h - 0.5) * 2;
      });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        mouseX += (targetX - mouseX) * 0.03;
        mouseY += (targetY - mouseY) * 0.03;

        particleSystem.rotation.y += 0.0004;
        particleSystem.rotation.x = Math.sin(Date.now() * 0.0001) * 0.05;

        knot1.rotation.x += 0.005;
        knot1.rotation.y += 0.008;
        knot1.rotation.z += 0.003;
        knot1.position.x = -1.5 + mouseX * 0.6;
        knot1.position.y = 0.5 + mouseY * 0.4;

        knot2.rotation.x += 0.008;
        knot2.rotation.y -= 0.005;
        knot2.position.x = 2 + mouseX * 0.4;
        knot2.position.y = -1 + mouseY * 0.3;

        ico.rotation.x += 0.006;
        ico.rotation.y += 0.01;
        ico.position.x = 0.5 + mouseX * 0.5;
        ico.position.y = -1.8 + mouseY * 0.3;

        renderer.render(scene, camera);
      };
      animate();
    };

    const cleanup = () => {
      if (animId) cancelAnimationFrame(animId);
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer = null;
      }
    };

    initThree().catch(console.error);

    const onResize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      if (cw < 1 || ch < 1) return;
      if (camera) {
        camera.aspect = cw / ch;
        camera.updateProjectionMatrix();
      }
      if (renderer) renderer.setSize(cw, ch);
    };
    
    window.addEventListener("resize", onResize);

    return () => {
      cleanup();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const taglineWords = "I build complete digital products — from design to server.".split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-[clamp(20px,5vw,80px)] max-w-none overflow-hidden"
    >
      <div ref={containerRef} className="absolute inset-0 z-[1]" />

      <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.07)_0%,transparent_70%)] pointer-events-none z-[2]" />
      <div className="absolute bottom-[-25%] right-[-15%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.07)_0%,transparent_70%)] pointer-events-none z-[2]" />

      <div className="relative z-[3] text-center max-w-[860px]">
        <h1 className="font-heading text-[clamp(56px,10vw,140px)] leading-[1.04] text-foreground tracking-[0.03em] mb-4 flex flex-wrap justify-center gap-[0.25em]">
          {nameWords.map((word, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {word.map((char, cIdx) => {
                const i = wIdx === 0 ? cIdx : nameWords[0].length + cIdx;
                return (
                  <motion.span
                    key={cIdx}
                    className="inline-block"
                    initial={{ opacity: 0, y: 60, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          className="text-[clamp(15px,1.8vw,20px)] font-medium text-muted-foreground tracking-[0.08em] mb-[14px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="text-accent">Full Stack Developer</span> &amp; UI Designer
          <motion.span
            className="inline-block ml-[1px] text-accent font-light"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
          >
            |
          </motion.span>
        </motion.p>

        <motion.p
          className="text-[clamp(14px,1.3vw,17px)] text-muted-foreground leading-[1.65] max-w-[580px] mx-auto mb-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
        >
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 1.4 + i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="flex gap-[14px] justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#projects"
            className="btn btn-primary inline-flex items-center gap-2 px-[30px] py-[13px] rounded-full text-[13px] font-semibold tracking-[0.04em] bg-accent text-white transition-all duration-[300ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#5A52E0] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(108,99,255,0.35)]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="btn btn-outline inline-flex items-center gap-2 px-[30px] py-[13px] rounded-full text-[13px] font-semibold tracking-[0.04em] border border-border text-foreground transition-all duration-[300ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-destructive hover:bg-[rgba(255,107,107,0.08)] hover:-translate-y-[2px]"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-background to-transparent pointer-events-none z-[2]" />

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-[6px] text-muted-foreground text-[9px] tracking-[0.15em] uppercase opacity-35 animate-bounce-y">
        Scroll
        <span className="block w-px h-7 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}

/** Shared Motion easings and animation variants */

// Primary ease — used across all sections
export const EASE = [0.23, 1, 0.32, 1] as const;

// Spring ease — used for scale-based entrances (e.g. About avatar)
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

// ---------- Reusable variants --------------------------------------------

export const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

// Card entrance used in Skills section
export const cardEnter = {
  hidden: { y: 32, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

// Chip entrance used in Skills section
export const chipEnter = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      delay: i * 0.045,
      ease: EASE,
    },
  }),
};

/**
 * Centralized design tokens — mirrors tailwind.config.ts
 * and the approved design artifact.
 *
 * Use these for inline styles, dynamic calculations, or data files
 * where a Tailwind class won't do.
 */

export const colors = {
  forest: "#2C5F2D",
  forestDark: "#1F4620",
  earth: "#6B4423",
  earthDark: "#4A2F18",
  gold: "#C9A961",
  goldDark: "#B8860B",
  charcoal: "#1F2821",
  offwhite: "#FAFAF7",
  cream: "#F5F1E8",
  taupe: "#E6E1D6",
  muted: "#A89680",
} as const;

export const radii = {
  card: "12px",
  button: "8px",
} as const;

export const shadows = {
  card: "0 4px 20px rgba(0,0,0,0.08)",
  cardHover: "0 8px 32px rgba(0,0,0,0.12)",
  button: "0 2px 8px rgba(44,95,45,0.25)",
  buttonGold: "0 4px 16px rgba(201,169,97,0.4)",
} as const;

export const spacing = {
  // From the Spec sheet: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
  "4xl": "96px",
} as const;

export const maxContentWidth = "1200px";

/**
 * Navy tint laid over every background photo (heroes, division cards,
 * about preview, factory showcase) so all imagery shares one look.
 */
export const imageOverlay =
  "linear-gradient(135deg, rgba(29, 59, 80, 0.57) 90%, rgba(16,35,50,0.88) 100%)";

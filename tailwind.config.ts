import type { Config } from "tailwindcss";

/**
 * Design tokens from the approved Claude Design artifact.
 * Natural palette: Forest Green + Earthy Brown + Warm Gold on Cream.
 * Do NOT invent new values — every token here is traceable to the design.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette (from approved design)
        forest: {
          DEFAULT: "#2C5F2D", // primary brand green
          dark: "#1F4620",
        },
        earth: {
          DEFAULT: "#6B4423", // secondary earthy brown
          dark: "#4A2F18",
        },
        gold: {
          DEFAULT: "#C9A961", // accent for CTAs and stats
          dark: "#B8860B",
        },
        charcoal: "#1F2821",  // body text / dark surfaces
        offwhite: "#FAFAF7",  // page background
        cream: "#F5F1E8",     // alternating section background
        taupe: "#E6E1D6",     // borders / dividers
        muted: "#A89680",     // placeholder / helper text
      },
      fontFamily: {
        // English stacks
        heading: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        // Arabic stacks
        "heading-ar": ["var(--font-tajawal)", "Tajawal", "Cairo", "sans-serif"],
        "sans-ar": ["var(--font-cairo)", "Cairo", "Tajawal", "sans-serif"],
      },
      fontSize: {
        // Preserves exact sizes from the design brief
        "stat": ["56px", { lineHeight: "1" }],
        "h1-desktop": ["68px", { lineHeight: "1.05" }],
        "h1-mobile": ["36px", { lineHeight: "1.1" }],
        "h2-desktop": ["44px", { lineHeight: "1.1" }],
        "h2-mobile": ["28px", { lineHeight: "1.2" }],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12)",
        button: "0 2px 8px rgba(44,95,45,0.25)",
        "button-gold": "0 4px 16px rgba(201,169,97,0.4)",
        "footer-logo": "0 4px 20px rgba(0,0,0,0.25)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        // 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 scale (already in Tailwind as 1/2/4/6/8/12/16/24)
      },
      letterSpacing: {
        eyebrow: "3px", // tracking for small caps labels
      },
    },
  },
  plugins: [],
};

export default config;

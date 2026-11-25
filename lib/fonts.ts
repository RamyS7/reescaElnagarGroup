/**
 * Font configuration.
 *
 * Fonts are loaded as @fontsource packages (self-hosted via npm):
 *   - Playfair Display (EN headings)
 *   - Inter (EN body)
 *   - Tajawal (AR headings)
 *   - Cairo (AR body)
 *
 * Why @fontsource instead of next/font/google?
 * - Works in offline / restricted-network environments.
 * - Deterministic builds (no runtime Google Fonts fetch at build time).
 * - Same fonts, same weights — no visual difference for the user.
 *
 * The weights are imported in app/globals.css.
 * The CSS variables below map to the font-family values tailwind.config.ts expects.
 */

export const fontVariables = [
  "font-playfair",
  "font-inter",
  "font-tajawal",
  "font-cairo",
].join(" ");

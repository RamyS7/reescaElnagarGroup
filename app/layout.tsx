/**
 * Root layout — intentional passthrough.
 *
 * The real <html> wrapper lives in app/[locale]/layout.tsx so we can
 * set lang + dir based on the active locale. next-intl's standard pattern
 * for `localePrefix: "always"` routing.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Morfologi Tumbuhan • Herbarium Digitalis",
  description:
    "Kompendium komparatif organografi tumbuhan berbiji (Spermatophyta) dan instrumen karakterisasi spesimen herbarium berstandar botani.",
  keywords: [
    "morfologi tumbuhan",
    "organografi",
    "radix",
    "caulis",
    "folium",
    "flos",
    "fructus",
    "dikotil",
    "monokotil",
    "herbarium",
    "Gembong Tjitrosoepomo",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#111813" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;0,7..72,700;1,7..72,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

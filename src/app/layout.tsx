import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheatsheet Morfologi Tumbuhan: Akar, Batang, Daun",
  description:
    "Ringkasan morfologi tumbuhan berbiji (akar, batang, daun, bunga, buah) dilengkapi ilustrasi SVG dan generator deskripsi tanaman otomatis.",
  keywords: [
    "morfologi tumbuhan",
    "akar",
    "batang",
    "daun",
    "bunga",
    "buah",
    "dikotil",
    "monokotil",
    "botani",
    "Gembong Tjitrosoepomo",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1b14" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=Literata:ital,wght@0,400;0,600;1,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { MorphologyMateri } from "@/components/MorphologyMateri";
import { MorphologyDescriber } from "@/components/MorphologyDescriber";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"materi" | "deskripsi">("materi");
  const [activeSub, setActiveSub] = useState<string>("akar");
  const [theme, setTheme] = useState<"auto" | "light" | "dark">("auto");

  // Sinkronisasi URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "deskripsi") {
        setActiveTab("deskripsi");
      } else if (hash === "materi") {
        setActiveTab("materi");
      } else if (["akar", "batang", "daun", "bunga"].includes(hash)) {
        setActiveTab("materi");
        setActiveSub(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const switchTab = (tab: "materi" | "deskripsi") => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      window.history.replaceState(null, "", `#${tab}`);
    } catch {
      // Abaikan jika tidak didukung lingkungan
    }
  };

  const switchSub = (sub: string) => {
    setActiveSub(sub);
    try {
      window.history.replaceState(null, "", `#${sub}`);
    } catch {
      // Abaikan jika tidak didukung lingkungan
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "auto" ? "dark" : theme === "dark" ? "light" : "auto";
    setTheme(nextTheme);
    if (nextTheme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  };

  return (
    <main>
      <header className="header-bar">
        <div>
          <h1>Atlas &amp; Morfologi Tumbuhan</h1>
          <p className="sub-title">
            Panduan organografi tumbuhan berbiji dan lembar karakterisasi spesimen berbasis acuan botani.
          </p>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          title="Ubah tema tampilan"
        >
          {theme === "auto" ? "🌓 Sistem" : theme === "dark" ? "🌙 Gelap" : "☀️ Terang"}
        </button>
      </header>

      <nav className="tabs" aria-label="Navigasi Utama">
        <button
          type="button"
          className={activeTab === "materi" ? "on" : ""}
          onClick={() => switchTab("materi")}
          aria-pressed={activeTab === "materi"}
        >
          Atlas Materi
        </button>
        <button
          type="button"
          className={activeTab === "deskripsi" ? "on" : ""}
          onClick={() => switchTab("deskripsi")}
          aria-pressed={activeTab === "deskripsi"}
        >
          Karakterisasi Spesimen
        </button>
      </nav>

      {activeTab === "materi" ? (
        <MorphologyMateri activeSub={activeSub} onSubChange={switchSub} />
      ) : (
        <MorphologyDescriber />
      )}

      <footer>
        Disusun berdasarkan terminologi botani standar (Gembong Tjitrosoepomo) untuk observasi lapangan, praktikum biosistematika, dan dokumentasi spesimen herbarium.
      </footer>
    </main>
  );
}

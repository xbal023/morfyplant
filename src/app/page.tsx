"use client";

import React, { useState, useEffect } from "react";
import { MorphologyMateri } from "@/components/MorphologyMateri";
import { MorphologyDescriber } from "@/components/MorphologyDescriber";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"materi" | "deskripsi">("materi");
  const [activeSub, setActiveSub] = useState<string>("akar");
  // Default adalah light mode
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Inisialisasi tema saat mount (default: light)
  useEffect(() => {
    const saved = localStorage.getItem("plant_theme") as "light" | "dark" | null;
    const initialTheme = saved === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("plant_theme", newTheme);
    } catch {
      // Abaikan jika storage dinonaktifkan
    }
  };

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
      // Abaikan bila diabaikan browser
    }
  };

  const switchSub = (sub: string) => {
    setActiveSub(sub);
    try {
      window.history.replaceState(null, "", `#${sub}`);
    } catch {
      // Abaikan bila diabaikan browser
    }
  };

  return (
    <main>
      <header className="masthead">
        <div className="masthead-meta">
          <span>Herbarium &amp; Biosistematika Tumbuhan</span>
          <span className="badge">Standar Morfologi Tjitrosoepomo</span>
        </div>
        <div className="header-bar">
          <div>
            <h1>
              Atlas Morfologi Tumbuhan <em>(Spermatophyta)</em>
            </h1>
            <p className="sub-title">
              Kompendium komparatif organografi tumbuhan berbiji dan instrumen karakterisasi spesimen herbarium.
            </p>
          </div>
          
          {/* Segmented Light/Dark Switcher */}
          <div className="theme-switcher" role="radiogroup" aria-label="Pilih Mode Tampilan">
            <button
              type="button"
              className={`theme-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => applyTheme("light")}
              title="Aktifkan Mode Terang (Default)"
              aria-checked={theme === "light"}
              role="radio"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>Terang</span>
            </button>
            <button
              type="button"
              className={`theme-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => applyTheme("dark")}
              title="Aktifkan Mode Gelap"
              aria-checked={theme === "dark"}
              role="radio"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span>Gelap</span>
            </button>
          </div>
        </div>
      </header>

      <div className="tabs-container">
        <nav className="tabs" aria-label="Navigasi Utama">
          <button
            type="button"
            className={activeTab === "materi" ? "on" : ""}
            onClick={() => switchTab("materi")}
            aria-pressed={activeTab === "materi"}
          >
            Atlas Organografi
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
      </div>

      {activeTab === "materi" ? (
        <MorphologyMateri activeSub={activeSub} onSubChange={switchSub} />
      ) : (
        <MorphologyDescriber />
      )}

      <footer>
        <span>Acuan kurasi: <i>Morfologi Tumbuhan</i> (Gembong Tjitrosoepomo, UGM Press).</span>
        <span>Dokumentasi Herbarium &amp; Biosistematika</span>
      </footer>

      <WhatsAppFloating />
    </main>
  );
}

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
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            title="Ubah tema tampilan"
          >
            {theme === "auto" ? "Tema: Sistem" : theme === "dark" ? "Tema: Gelap" : "Tema: Terang"}
          </button>
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
    </main>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { GROUPS, OutputMode, generateDescription } from "@/data/morphologyData";
import { TraitPicker } from "./TraitPicker";

export const MorphologyDescriber: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [mode, setMode] = useState<OutputMode>("dua");
  const [copyFeedback, setCopyFeedback] = useState<string>("Salin deskripsi");

  const handleFieldChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReset = () => {
    setFormData({});
  };

  const descResult = useMemo(() => {
    return generateDescription(formData, mode);
  }, [formData, mode]);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(descResult.text);
        setCopyFeedback("Tersalin!");
        setTimeout(() => setCopyFeedback("Salin deskripsi"), 1500);
      } else {
        copyFallback();
      }
    } catch {
      copyFallback();
    }
  };

  const copyFallback = () => {
    const el = document.getElementById("out");
    if (el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      setCopyFeedback("Teks terpilih, salin manual");
      setTimeout(() => setCopyFeedback("Salin deskripsi"), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="deskripsi">
      <h2>Deskripsikan tumbuhan liar</h2>
      <p>
        Amati tumbuhan di lapangan, pilih ciri yang terlihat, lalu salin deskripsi morfologinya.
        Klik kotak pilihan untuk melihat gambar tiap ciri. Kolom yang dikosongkan dilewati.
        Istilah mengikuti konvensi buku <i>Morfologi Tumbuhan</i> karya Gembong Tjitrosoepomo.
        Cocokkan sekali lagi dengan bukunya untuk istilah yang persis.
      </p>

      <form className="grid" onSubmit={(e) => e.preventDefault()}>
        {GROUPS.map((group) => (
          <fieldset key={group.groupName}>
            <legend>{group.groupName}</legend>
            {group.fields.map((fld) => {
              if (fld.options && fld.options.length > 0) {
                return (
                  <TraitPicker
                    key={fld.id}
                    fieldId={fld.id}
                    label={fld.label}
                    options={fld.options}
                    value={formData[fld.id] || ""}
                    onChange={(val) => handleFieldChange(fld.id, val)}
                  />
                );
              }

              return (
                <div key={fld.id} className="fld">
                  <label htmlFor={`f_${fld.id}`} className="lb">
                    {fld.label}
                  </label>
                  <input
                    id={`f_${fld.id}`}
                    type="text"
                    value={formData[fld.id] || ""}
                    onChange={(e) => handleFieldChange(fld.id, e.target.value)}
                    placeholder="Ketik keterangan..."
                  />
                </div>
              );
            })}
          </fieldset>
        ))}
      </form>

      <div className="seg" id="seg">
        <button
          type="button"
          className={mode === "dua" ? "on" : ""}
          onClick={() => setMode("dua")}
        >
          Analitik + diagnostik
        </button>
        <button
          type="button"
          className={mode === "analitik" ? "on" : ""}
          onClick={() => setMode("analitik")}
        >
          Analitik
        </button>
        <button
          type="button"
          className={mode === "diagnostik" ? "on" : ""}
          onClick={() => setMode("diagnostik")}
        >
          Diagnostik
        </button>
        <button
          type="button"
          className={mode === "naratif" ? "on" : ""}
          onClick={() => setMode("naratif")}
        >
          Naratif
        </button>
      </div>

      <p className="mn">
        <b>Analitik:</b> uraian tiap bagian secara rinci.{" "}
        <b>Diagnostik:</b> ringkasan ciri pembeda untuk identifikasi, disusun otomatis dari ciri yang Anda isi.{" "}
        <b>Naratif:</b> kalimat mengalir per bagian.
      </p>

      <div id="out" aria-live="polite">
        {descResult.text}
      </div>

      <div className="btns">
        <button type="button" id="cp" onClick={handleCopy}>
          {copyFeedback}
        </button>
        <button type="button" id="pr" className="alt" onClick={handlePrint}>
          Cetak
        </button>
        <button type="button" id="rs" className="alt" onClick={handleReset}>
          Kosongkan
        </button>
      </div>

      {descResult.hintText && (
        <div className="tip" id="hint">
          {descResult.hintText}
        </div>
      )}
    </section>
  );
};

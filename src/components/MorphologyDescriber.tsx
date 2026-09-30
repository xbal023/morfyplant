"use client";

import React, { useState, useMemo } from "react";
import { GROUPS, OutputMode, generateDescription } from "@/data/morphologyData";
import { TraitPicker } from "./TraitPicker";

export const MorphologyDescriber: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [mode, setMode] = useState<OutputMode>("dua");
  const [copyFeedback, setCopyFeedback] = useState<string>("Salin Schedula");

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
        setCopyFeedback("Tersalin ke Clipboard!");
        setTimeout(() => setCopyFeedback("Salin Schedula"), 1500);
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
      setCopyFeedback("Teks terpilih, silakan salin");
      setTimeout(() => setCopyFeedback("Salin Schedula"), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="deskripsi">
      <h2>
        Karakterisasi Spesimen
        <span className="latin-tag">Schedula Morphologica</span>
      </h2>
      <p className="lead">
        Instrumen pencatatan karakter organ vegetatif dan generatif tumbuhan untuk dokumentasi taksonomi, herbarium, atau laporan praktikum biosistematika. Karakter yang tidak teramati dapat dilewati.
      </p>

      <form className="form-masonry" onSubmit={(e) => e.preventDefault()}>
        {GROUPS.map((group) => (
          <fieldset key={group.groupName}>
            <legend>
              {group.groupName}
              {group.latinName ? ` • ${group.latinName}` : ""}
            </legend>
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
                    placeholder={fld.placeholder || "Catatan karakter..."}
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
          Prosa Flora + Diagnosis
        </button>
        <button
          type="button"
          className={mode === "naratif" ? "on" : ""}
          onClick={() => setMode("naratif")}
        >
          Prosa Flora (Naratif)
        </button>
        <button
          type="button"
          className={mode === "diagnostik" ? "on" : ""}
          onClick={() => setMode("diagnostik")}
        >
          Diagnosis Pembeda
        </button>
        <button
          type="button"
          className={mode === "analitik" ? "on" : ""}
          onClick={() => setMode("analitik")}
        >
          Organografi Rinci
        </button>
      </div>

      <p className="mn">
        <b>Prosa Flora:</b> teks monograf taksonomi standar.{" "}
        <b>Diagnosis Pembeda:</b> sintesis karakter sinapomorfik untuk determinasi.{" "}
        <b>Organografi Rinci:</b> dokumentasi analitik per organ tanaman.
      </p>

      <div className="output-card">
        <div className="output-header">
          <span>Schedula Herbarii • Deskripsi Morfologi Spesimen</span>
          <span>{mode === "dua" ? "LENGKAP" : mode.toUpperCase()}</span>
        </div>
        <div id="out" aria-live="polite">
          {descResult.text}
        </div>
      </div>

      <div className="btns">
        <button type="button" id="cp" className="primary" onClick={handleCopy}>
          {copyFeedback}
        </button>
        <button type="button" id="pr" className="alt" onClick={handlePrint}>
          Cetak Lembar Spesimen
        </button>
        <button type="button" id="rs" className="alt" onClick={handleReset}>
          Kosongkan Formulir
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

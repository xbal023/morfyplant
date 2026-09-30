"use client";

import React, { useState, useMemo } from "react";
import { GROUPS, OutputMode, generateDescription } from "@/data/morphologyData";
import { TraitPicker } from "./TraitPicker";

export const MorphologyDescriber: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [mode, setMode] = useState<OutputMode>("dua");
  const [copyFeedback, setCopyFeedback] = useState<string>("Salin Deskripsi");

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
        setTimeout(() => setCopyFeedback("Salin Deskripsi"), 1500);
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
      setTimeout(() => setCopyFeedback("Salin Deskripsi"), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="deskripsi">
      <h2>Karakterisasi Morfologi Spesimen</h2>
      <p>
        Catat ciri morfologi vegetatif dan generatif tumbuhan yang diamati di lapangan atau laboratorium.
        Klik kotak pilihan untuk melihat sketsa ilustrasi tiap karakter. Kolom yang tidak teramati dapat
        dilewati. Terminologi mengacu pada buku acuan <i>Morfologi Tumbuhan</i> (Gembong Tjitrosoepomo).
      </p>

      <form className="form-masonry" onSubmit={(e) => e.preventDefault()}>
        {GROUPS.map((group) => (
          <fieldset key={group.groupName}>
            <legend>
              {group.groupName}
              {group.latinName ? ` (${group.latinName})` : ""}
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
                    placeholder={fld.placeholder || "Ketik keterangan pengamatan..."}
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
        <b>Prosa Flora:</b> gaya bahasa monograf taksonomi standar.{" "}
        <b>Diagnosis Pembeda:</b> sintesis karakter kunci pembeda untuk kunci determinasi.{" "}
        <b>Organografi Rinci:</b> pencatatan poin analitik per organ.
      </p>

      <div id="out" aria-live="polite">
        {descResult.text}
      </div>

      <div className="btns">
        <button type="button" id="cp" onClick={handleCopy}>
          {copyFeedback}
        </button>
        <button type="button" id="pr" className="alt" onClick={handlePrint}>
          Cetak Lembar Observasi
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

"use client";

import React, { useState, useRef, useEffect } from "react";
import { IC, NO } from "@/data/morphologyData";

interface TraitPickerProps {
  fieldId: string;
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export const TraitPicker: React.FC<TraitPickerProps> = ({
  fieldId,
  label,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const icons = IC[fieldId] || [];
  const selectedIdx = options.indexOf(value);
  const currentIcon = selectedIdx >= 0 && icons[selectedIdx] ? icons[selectedIdx] : NO;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const allChoices = ["", ...options];

  return (
    <div className="fld" ref={containerRef}>
      <div className="lb">{label}</div>
      <button
        type="button"
        className="pk"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          dangerouslySetInnerHTML={{ __html: currentIcon }}
          style={{ display: "inline-flex", alignItems: "center" }}
        />
        <span>{value || "(lewati)"}</span>
        <i>&#9662;</i>
      </button>

      {isOpen && (
        <div className="pop" role="listbox">
          {allChoices.map((opt, idx) => {
            const tileIcon = idx === 0 ? NO : icons[idx - 1] || NO;
            const isSelected = opt === value;
            return (
              <button
                key={opt || "__none__"}
                type="button"
                className={`tile ${isSelected ? "on" : ""}`}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={isSelected}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: tileIcon }}
                  style={{ display: "inline-flex", alignItems: "center" }}
                />
                <span>{opt || "lewati"}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

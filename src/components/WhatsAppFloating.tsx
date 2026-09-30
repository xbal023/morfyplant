"use client";

import React, { useState, useEffect } from "react";

export const WhatsAppFloating: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Tampilkan popup ajakan kontribusi sekilas setelah 1.5 detik
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const waUrl =
    "https://wa.me/6285879799927?text=" +
    encodeURIComponent(
      "Halo developer Atlas Morfologi Tumbuhan, saya butuh data lebih dan ingin berkontribusi..."
    );

  return (
    <aside className="wa-floating-wrapper" aria-label="Kontak WhatsApp Developer">
      {showPopup && !isDismissed && (
        <div className="wa-popup-bubble" role="dialog" aria-live="polite">
          <button
            type="button"
            className="wa-popup-close"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsDismissed(true);
            }}
            title="Tutup pesan"
            aria-label="Tutup pesan"
          >
            &times;
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-popup-content"
          >
            <div className="wa-popup-badge">Kontribusi &amp; Diskusi Data</div>
            <div className="wa-popup-title">
              Butuh data lebih dan ingin berkontribusi?
            </div>
            <div className="wa-popup-cta">
              Chat developernya sekarang &rarr;
            </div>
          </a>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        title="Chat developer via WhatsApp (085879799927)"
        aria-label="Chat WhatsApp Developer"
      >
        {/* Official WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 48 48"
          width="32"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 4C12.954 4 4 12.954 4 24c0 3.738 1.026 7.234 2.805 10.222L4 44l10.04-2.632A19.88 19.88 0 0024 44c11.046 0 20-8.954 20-20S35.046 4 24 4z"
            fill="#25D366"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.6 12.4C32.5 9.3 28.5 7.6 24.1 7.6c-9.3 0-16.9 7.6-16.9 16.9 0 3 .8 5.9 2.3 8.5L7 41l8.3-2.2c2.5 1.4 5.3 2.1 8.8 2.1h.01c9.3 0 16.9-7.6 16.9-16.9 0-4.5-1.8-8.5-4.9-11.6zm-11.5 25.8h-.01c-2.6 0-5.1-.7-7.3-2l-.5-.3-5.4 1.4 1.4-5.3-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.7 6.3-14 14-14 3.7 0 7.3 1.5 9.9 4.1 2.6 2.6 4.1 6.2 4.1 9.9 0 7.7-6.3 14-14 14.1zm7.7-10.5c-.4-.2-2.5-1.2-2.9-1.4-.4-.2-.7-.2-.9.2-.3.4-1.1 1.4-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.7.2-.9.2-.2.4-.5.7-.7.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.4-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6 0 2.1 1.5 4.2 1.8 4.5.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.4.9 1 .3 2 .3 2.7.2.8-.1 2.5-1 2.8-2 .4-.9.4-1.8.3-2-.1-.2-.4-.3-.8-.5z"
            fill="#FFFFFF"
          />
        </svg>
      </a>
    </aside>
  );
};

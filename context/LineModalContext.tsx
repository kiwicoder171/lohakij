"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { X, Copy, Check, MessageCircle, Phone, QrCode } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface LineModalContextType {
  isOpen: boolean;
  openLineModal: () => void;
  closeLineModal: () => void;
}

const LineModalContext = createContext<LineModalContextType | undefined>(undefined);

export function LineModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();

  const lineId = "0813722218.folk.folk";
  const lineUrl = "https://line.me/ti/p/lxRmbEaYGw";

  const openLineModal = () => setIsOpen(true);
  const closeLineModal = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLineModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lineId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard api blocked
      const input = document.createElement("input");
      input.value = lineId;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <LineModalContext.Provider value={{ isOpen, openLineModal, closeLineModal }}>
      {children}

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={closeLineModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="line-modal-title"
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 shadow-2xl border-2 border-[#123274] animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLineModal}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="text-center pb-4 border-b border-slate-100">
              <div className="mx-auto inline-flex items-center space-x-1.5 rounded bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 font-mono-data mb-2">
                <QrCode className="size-3.5" />
                <span>OFFICIAL LINE CONTACT</span>
              </div>
              <h2 id="line-modal-title" className="text-xl font-bold text-[#0a1329]">
                {lang === "th" ? "เพิ่มเพื่อน LINE บริษัท เอส.บี โลหะกิจ" : "Add S.B. Lohakij on LINE"}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "th"
                  ? "ส่งรูปเศษวัสดุ โครงสร้างอาคาร หรือพิกัดหน้างานเพื่อประเมินราคาได้ทันที"
                  : "Send scrap photos, demolition site details, or GPS for instant quotation"}
              </p>
            </div>

            {/* QR Code Container */}
            <div className="my-5 flex flex-col items-center">
              <div className="relative size-48 sm:size-52 rounded-xl border-2 border-[#123274] bg-white p-2.5 shadow-md">
                <Image
                  src="/line-qr.png"
                  alt="Official LINE QR Code - 0813722218.folk.folk"
                  width={208}
                  height={208}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="mt-2.5 font-mono-data text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                {lang === "th" ? "สแกน QR CODE ด้วยโทรศัพท์มือถือ" : "SCAN QR CODE WITH SMARTPHONE"}
              </span>
            </div>

            {/* LINE ID Copy Box */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex items-center justify-between">
              <div className="text-left">
                <span className="block text-[10px] font-mono-data font-bold uppercase text-slate-500">
                  LINE ID
                </span>
                <span className="font-mono-data text-sm sm:text-base font-black text-[#0e204d] select-all">
                  {lineId}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1.5 rounded bg-[#123274] hover:bg-[#0a1329] text-white px-3 py-1.5 text-xs font-mono-data font-bold transition-all active:scale-95 shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span>{lang === "th" ? "คัดลอกแล้ว!" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    <span>{lang === "th" ? "คัดลอก ID" : "Copy ID"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Open in LINE App */}
            <div className="mt-3.5 flex flex-col space-y-2">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-colors font-mono-data"
              >
                <MessageCircle className="size-4" />
                <span>{lang === "th" ? "คลิกเปิดแอป LINE ทันที" : "Open LINE App Directly"}</span>
              </a>

              <p className="text-[11px] text-center text-slate-500 font-mono-data">
                {lang === "th"
                  ? "คุณโฟล์ค (ฝ่ายจัดซื้อและประเมินราคา) ยินดีให้บริการตลอด 24 ชม."
                  : "Khun Folk (Procurement & Evaluation) available 24/7"}
              </p>
            </div>

            {/* Quick Hotline Fallback */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center space-x-4 text-xs font-mono-data text-slate-600">
              <span className="text-[11px] text-slate-400 uppercase">CALL DIRECT:</span>
              <a href="tel:0958269463" className="font-bold text-[#123274] hover:underline flex items-center space-x-1">
                <Phone className="size-3" />
                <span>095-826-9463</span>
              </a>
              <span className="text-slate-300">/</span>
              <a href="tel:0637019999" className="font-bold text-[#123274] hover:underline">
                <span>063-701-9999</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </LineModalContext.Provider>
  );
}

export function useLineModal() {
  const context = useContext(LineModalContext);
  if (!context) {
    throw new Error("useLineModal must be used within a LineModalProvider");
  }
  return context;
}

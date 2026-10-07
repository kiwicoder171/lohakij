"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
      {/* Expanded quick contact drawer */}
      {open && (
        <div className="corporate-card rounded-lg p-3.5 shadow-2xl flex flex-col space-y-2 w-64 border-2 border-[#123274]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="font-mono-data text-[10px] font-bold text-[#123274] uppercase tracking-wider">
              OPERATIONAL SPEED-DIAL
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5"
              aria-label="Close speed dial"
            >
              <X className="size-3.5" />
            </button>
          </div>

          <a
            href="tel:0958269463"
            className="flex items-center space-x-2.5 rounded border border-slate-200 bg-slate-50 p-2 text-xs font-mono-data text-slate-800 hover:border-[#123274] transition-colors"
          >
            <div className="flex size-7 items-center justify-center rounded bg-[#123274] text-white font-bold">
              <Phone className="size-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500">คุณแขก (ประมูลงาน)</div>
              <div className="font-bold tabular-nums text-[#0e204d]">095-826-9463</div>
            </div>
          </a>

          <a
            href="tel:0637019999"
            className="flex items-center space-x-2.5 rounded border border-slate-200 bg-slate-50 p-2 text-xs font-mono-data text-slate-800 hover:border-slate-400 transition-colors"
          >
            <div className="flex size-7 items-center justify-center rounded bg-slate-700 text-white font-bold">
              <Phone className="size-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500">คุณโฟล์ค (จัดซื้อ/ทั่วไป)</div>
              <div className="font-bold tabular-nums text-[#0e204d]">063-701-9999</div>
            </div>
          </a>

          <a
            href="https://line.me/ti/p/~0958269463"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2.5 rounded border border-emerald-200 bg-emerald-50 p-2 text-xs font-mono-data text-emerald-800 hover:border-emerald-600 transition-colors"
          >
            <div className="flex size-7 items-center justify-center rounded bg-emerald-600 text-white font-bold">
              <MessageCircle className="size-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-emerald-700">LINE (ส่งรูปหน้างาน)</div>
              <div className="font-bold">แอด LINE ด่วน</div>
            </div>
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 rounded-full border-2 border-white bg-[#123274] px-4 py-2.5 font-mono-data text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#0a1329] active:scale-95 transition-all"
        aria-label="Speed Dial Contact"
      >
        <Phone className="size-3.5" />
        <span>HOTLINE / LINE</span>
        <ChevronUp className={`size-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}

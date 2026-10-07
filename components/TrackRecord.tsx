"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export default function TrackRecord() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="relative bg-white py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <span>[SECTION // 02] {t.clients.tag}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {t.clients.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.clients.subtitle}
          </p>
        </div>

        {/* 2 Enterprise Specification Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* SCG */}
          <div className="corporate-card corporate-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="font-mono-data text-xs font-bold text-[#123274] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {t.clients.scgBadge}
                </span>
                <span className="font-mono-data text-[11px] text-slate-500">
                  CONTRACTOR ID: SCG-RECYCLE
                </span>
              </div>

              <div className="mt-5 flex items-center space-x-4">
                <div className="flex h-12 w-16 items-center justify-center rounded border-2 border-[#123274] bg-white font-mono-data text-lg font-black tracking-widest text-[#123274] shadow-xs">
                  SCG
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0e204d]">
                    {t.clients.scgTitle}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    เครือซิเมนต์ไทย (Siam Cement Group)
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.clients.scgDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-mono-data">
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>หม้อแปลงไฟฟ้าแรงสูง • มอเตอร์อุตสาหกรรม • เศษทองแดงเกรด A</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>รถเข้าเก็บตามรอบเวลา มีใบกำกับและการชำระเงินตรงเวลา</span>
              </div>
            </div>
          </div>

          {/* AIS */}
          <div className="corporate-card corporate-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="font-mono-data text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {t.clients.aisBadge}
                </span>
                <span className="font-mono-data text-[11px] text-slate-500">
                  AUCTION ID: AIS-SURPLUS
                </span>
              </div>

              <div className="mt-5 flex items-center space-x-4">
                <div className="flex h-12 w-16 items-center justify-center rounded border-2 border-emerald-700 bg-white font-mono-data text-lg font-black tracking-widest text-emerald-700 shadow-xs">
                  AIS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0e204d]">
                    {t.clients.aisTitle}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    แอดวานซ์ อินโฟร์ เซอร์วิส (Advanced Info Service)
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.clients.aisDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-mono-data">
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-emerald-700 shrink-0" />
                <span>เฟอร์นิเจอร์สำนักงานล็อตใหญ่ • ตู้แร็ค • อุปกรณ์สื่อสารปลดระวาง</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-emerald-700 shrink-0" />
                <span>ประมูลเหมาตามสภาพ พร้อมทีมงานยกขนย้ายเคลียร์พื้นที่เรียบร้อย</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Trust Statement */}
        <div className="mt-6 rounded border border-blue-200 bg-blue-50/60 p-4 font-mono-data text-xs text-[#0e204d] flex items-center justify-between flex-wrap gap-2">
          <span>{t.clients.quote}</span>
          <span className="text-[#123274] font-bold uppercase">// CERTIFIED RELIABILITY</span>
        </div>
      </div>
    </section>
  );
}

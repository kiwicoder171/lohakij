"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Check } from "lucide-react";

export default function CoverageMap() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-slate-50 py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="corporate-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
                <span>[LOGISTICS] {t.coverage.tag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
                {t.coverage.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                {t.coverage.subtitle}
              </p>

              <div className="flex items-center space-x-2.5 rounded border border-blue-200 bg-blue-50 px-3.5 py-2 font-mono-data text-xs text-[#123274] font-semibold">
                <MapPin className="size-4 text-[#123274] shrink-0" />
                <span>{t.coverage.hq}</span>
              </div>

              <div className="space-y-2 pt-2">
                {t.coverage.coverageList.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <Check className="size-3.5 text-[#123274] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Fleet Specs Table */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded border border-slate-200 bg-white p-5 space-y-3 font-mono-data text-xs shadow-2xs">
                <div className="border-b border-slate-200 pb-2 text-[11px] uppercase font-bold text-[#0e204d]">
                  EQUIPMENT & FLEET READINESS
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">รถสิบล้อ / เทรลเลอร์</span>
                  <span className="text-emerald-700 font-bold">READY DAILY</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">รถเฮี๊ยบ 3-5 ตัน & เครน</span>
                  <span className="text-emerald-700 font-bold">SAFETY CERTIFIED</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">แท่นชั่งน้ำหนักมาตรฐาน</span>
                  <span className="text-[#123274] font-bold">CALIBRATED</span>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:0958269463"
                    className="block text-center rounded bg-[#123274] py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#0e204d] shadow-sm transition-colors"
                  >
                    ประสานงานเข้าสำรวจหน้างาน
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

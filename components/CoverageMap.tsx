"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Check, ExternalLink, Navigation } from "lucide-react";

export default function CoverageMap() {
  const { t } = useLanguage();

  return (
    <section id="location" className="relative bg-slate-50 py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="corporate-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
                <span>[LOGISTICS & MAP] {t.coverage.tag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
                {t.coverage.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                {t.coverage.subtitle}
              </p>

              {/* Exact Address Box with Google Maps Link */}
              <div className="rounded border border-blue-200 bg-blue-50/70 p-4 space-y-3 font-mono-data text-xs">
                <div className="flex items-start space-x-2.5 text-[#0e204d]">
                  <MapPin className="size-4 text-[#123274] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[13px]">{t.coverage.hq}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      พิกัด GPS: อ.น้ำพอง จ.ขอนแก่น (รองรับรถพ่วง 18 ล้อ / หัวลากเทรลเลอร์เข้า-ออกสะดวก)
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-blue-200/80 flex flex-wrap items-center gap-2">
                  <a
                    href={t.coverage.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 rounded bg-[#123274] px-4 py-2 text-xs font-bold text-white hover:bg-[#0e204d] shadow-2xs transition-colors"
                  >
                    <Navigation className="size-3.5" />
                    <span>{t.coverage.openInMaps}</span>
                    <ExternalLink className="size-3" />
                  </a>

                  <a
                    href="tel:0958269463"
                    className="inline-flex items-center space-x-1.5 rounded border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>สอบถามเส้นทาง: 095-826-9463</span>
                  </a>
                </div>
              </div>

              {/* Regional Coverage List */}
              <div className="space-y-2 pt-2">
                {t.coverage.coverageList.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <Check className="size-3.5 text-[#123274] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Fleet Specs & Embedded Map View */}
            <div className="lg:col-span-5 space-y-4">
              {/* Interactive Google Maps Frame */}
              <div className="rounded overflow-hidden border border-slate-300 bg-slate-100 shadow-xs">
                <iframe
                  title="Google Maps Location - บริษัท เอส.บี โลหะกิจ จำกัด"
                  src="https://maps.google.com/maps?q=234%20%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%9A%E0%B8%B5%20%E0%B9%82%E0%B8%A5%E0%B8%AB%E0%B8%B0%E0%B8%81%E0%B8%B4%E0%B8%88%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94%20%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%8A%E0%B8%B1%E0%B8%A2%20%E0%B8%95%20Tambon%20Wang%20Chai,%20Nam%20Phong%20District,%20Khon%20Kaen%2040140&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-52 sm:h-56 border-0"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] font-mono-data text-slate-600">
                  <span className="flex items-center space-x-1.5">
                    <span className="size-2 rounded-full bg-emerald-600" />
                    <span>บจก. เอส.บี โลหะกิจ (ขอนแก่น)</span>
                  </span>
                  <a
                    href={t.coverage.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#123274] font-bold hover:underline"
                  >
                    ขยายแผนที่ใหญ่ &gt;
                  </a>
                </div>
              </div>

              {/* Equipment Readiness Card */}
              <div className="rounded border border-slate-200 bg-white p-4 space-y-2.5 font-mono-data text-xs shadow-2xs">
                <div className="border-b border-slate-200 pb-1.5 text-[11px] uppercase font-bold text-[#0e204d]">
                  EQUIPMENT & FLEET READINESS
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-600">รถสิบล้อ / เทรลเลอร์</span>
                  <span className="text-emerald-700 font-bold">READY DAILY</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-600">รถเฮี๊ยบ 3-5 ตัน & เครน</span>
                  <span className="text-emerald-700 font-bold">SAFETY CERTIFIED</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">แท่นชั่งน้ำหนักมาตรฐาน</span>
                  <span className="text-[#123274] font-bold">CALIBRATED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

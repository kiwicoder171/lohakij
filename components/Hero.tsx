"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useLineModal } from "@/context/LineModalContext";
import { ArrowRight, MessageCircle, Phone, CheckSquare, Award } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const { openLineModal } = useLineModal();

  return (
    <section className="relative border-b border-slate-200 bg-white industrial-grid-light pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Proposition (Left 7.5 Cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            {/* Stamp Logo & Status Pill */}
            <div className="flex items-center space-x-3">
              <div className="relative size-12 sm:size-14 overflow-hidden rounded-full border-2 border-[#123274] bg-white p-0.5 shadow-sm shrink-0">
                <Image
                  src="/logo.png"
                  alt="S.B. Lohakij Stamp Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div className="inline-flex items-center space-x-2 border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs text-[#123274] font-medium rounded">
                <span className="size-2 rounded-full bg-[#123274] animate-pulse" />
                <span className="font-mono-data uppercase tracking-wider text-[11px] font-bold">
                  {t.hero.badge}
                </span>
              </div>
            </div>

            {/* Structured Headline */}
            <div className="border-l-4 border-[#123274] pl-4 sm:pl-5 space-y-2">
              <span className="inline-block font-mono-data text-xs font-bold uppercase tracking-wider text-[#123274] bg-blue-50/80 px-2.5 py-1 rounded border border-blue-200/80">
                INDUSTRIAL RECYCLING & DEMOLITION CONTRACTOR
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-[#0a1329] leading-[1.28] tracking-normal">
                <span className="text-[#123274] block">
                  {t.hero.titleHighlight}
                </span>
                <span className="text-slate-900 block font-extrabold mt-1">
                  {t.hero.titleMain}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="https://line.me/ti/p/lxRmbEaYGw"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openLineModal();
                }}
                className="flex items-center justify-center space-x-2 rounded bg-emerald-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 shadow-sm transition-colors"
              >
                <MessageCircle className="size-4" />
                <span>{t.hero.ctaLine}</span>
                <ArrowRight className="size-3.5" />
              </a>

              <a
                href="tel:0958269463"
                className="flex items-center justify-center space-x-2 rounded border border-[#123274] bg-[#123274] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0e204d] shadow-sm transition-colors"
              >
                <Phone className="size-4" />
                <span>{t.hero.ctaCall}</span>
              </a>
            </div>

            {/* Industrial Specs Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-200 text-xs text-slate-600 font-mono-data">
              <div className="flex items-center space-x-2">
                <CheckSquare className="size-3.5 text-[#123274] shrink-0" />
                <span>ใบชั่งน้ำหนักตรวจรับรอง</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckSquare className="size-3.5 text-[#123274] shrink-0" />
                <span>โอนเงินทันทีก่อนยกของ</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckSquare className="size-3.5 text-[#123274] shrink-0" />
                <span>ใบกำกับภาษี & Manifest ครบ</span>
              </div>
            </div>
          </div>

          {/* Technical Spec Instrumentation Box (Right Cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-3">
            <div className="corporate-card p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="font-mono-data text-xs uppercase font-bold text-[#0e204d]">
                  SPECIFICATION / CAPABILITIES
                </span>
                <span className="font-mono-data text-[10px] text-[#123274] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                  DIW VERIFIED
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">ใบอนุญาตโรงงาน (กรอ.)</span>
                  <span className="font-mono-data font-bold text-[#0e204d] text-right">
                    ร.ง.4 (105 & 106)
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">เลขทะเบียนนิติบุคคล</span>
                  <span className="font-mono-data font-bold text-[#123274] tabular-nums">
                    0115558009992
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">ปีที่จดทะเบียนจัดตั้ง</span>
                  <span className="font-mono-data text-slate-700">
                    2558 (2015) / 10+ ปี
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">คู่สัญญารายปีตัวแทน</span>
                  <span className="font-bold text-[#0e204d] bg-slate-100 px-2 py-0.5 rounded font-mono-data">
                    SCG, AIS
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-500 font-medium">พื้นที่ปฏิบัติการ</span>
                  <span className="font-mono-data text-slate-700">
                    ขอนแก่น HQ / ทั่วประเทศ
                  </span>
                </div>
              </div>

              {/* Bottom Quick Line */}
              <div className="pt-2">
                <a
                  href="#rfq"
                  className="block text-center rounded border border-[#123274] bg-blue-50/60 py-2.5 font-mono-data text-xs font-bold text-[#123274] hover:bg-[#123274] hover:text-white transition-colors uppercase"
                >
                  [+] ประเมินราคากากอุตสาหกรรม / นัดดูหน้างาน
                </a>
              </div>
            </div>

            {/* Industrial Metrics Ribbon */}
            <div className="grid grid-cols-2 gap-2.5 font-mono-data text-xs">
              <div className="corporate-card p-3">
                <div className="text-slate-500 text-[10px] uppercase font-bold">EXPERIENCE</div>
                <div className="text-xl font-bold text-[#0e204d] tabular-nums">10+ YEARS</div>
                <div className="text-slate-500 text-[10px]">ในอุตสาหกรรมรับเหมา</div>
              </div>
              <div className="corporate-card p-3">
                <div className="text-slate-500 text-[10px] uppercase font-bold">PAYMENT SETTLEMENT</div>
                <div className="text-xl font-bold text-emerald-700">INSTANT CASH</div>
                <div className="text-slate-500 text-[10px]">จ่ายสด/โอนทันทีก่อนยก</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

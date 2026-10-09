"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useLineModal } from "@/context/LineModalContext";
import { Phone, MessageCircle, Clock, ShieldCheck, User, QrCode, Copy, Check } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const { openLineModal } = useLineModal();
  const [copied, setCopied] = React.useState(false);

  const handleCopyLineId = async () => {
    try {
      await navigator.clipboard.writeText("0813722218.folk.folk");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="relative bg-slate-50 py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <span>[COMMUNICATION] {t.contact.tag}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2 Executive Technical Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {/* Executive 1: คุณแขก */}
          <div className="corporate-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
                <div className="flex size-9 items-center justify-center rounded border border-blue-200 bg-blue-50 text-[#123274]">
                  <User className="size-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0e204d]">
                    {t.contact.person1Name}
                  </h3>
                  <p className="font-mono-data text-[11px] text-[#123274] font-semibold">
                    {t.contact.person1Role}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href="tel:0958269463"
                  className="flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3 hover:border-[#123274] transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <Phone className="size-4 text-[#123274]" />
                    <span className="font-mono-data text-sm font-bold text-[#0e204d] tabular-nums">
                      {t.contact.person1Phone}
                    </span>
                  </div>
                  <span className="rounded bg-[#123274] px-2 py-0.5 text-[10px] font-bold text-white uppercase font-mono-data">
                    CALL DIRECT
                  </span>
                </a>

                <a
                  href="https://line.me/ti/p/lxRmbEaYGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openLineModal();
                  }}
                  className="flex items-center justify-between rounded border border-emerald-200 bg-emerald-50 p-3 hover:border-emerald-600 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <MessageCircle className="size-4 text-emerald-700" />
                    <div>
                      <span className="font-mono-data text-xs font-semibold text-emerald-900 block">
                        LINE ID: 0813722218.folk.folk
                      </span>
                      <span className="text-[10px] text-emerald-700 block">
                        ส่งรูปหน้างานประมูลด่วน
                      </span>
                    </div>
                  </div>
                  <span className="rounded bg-emerald-700 px-2 py-0.5 text-[10px] font-bold text-white uppercase font-mono-data">
                    ADD LINE
                  </span>
                </a>
              </div>
            </div>

            <p className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono-data">
              * รับผิดชอบ: งานประมูลโรงงาน, รื้อถอนโครงสร้าง, สัญญารายปี
            </p>
          </div>

          {/* Executive 2: คุณโฟล์ค (with direct LINE QR) */}
          <div className="corporate-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
                <div className="flex size-9 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-700">
                  <User className="size-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0e204d]">
                    {t.contact.person2Name}
                  </h3>
                  <p className="font-mono-data text-[11px] text-slate-600 font-semibold">
                    {t.contact.person2Role}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href="tel:0637019999"
                  className="flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3 hover:border-slate-500 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <Phone className="size-4 text-slate-700" />
                    <span className="font-mono-data text-sm font-bold text-[#0e204d] tabular-nums">
                      {t.contact.person2Phone}
                    </span>
                  </div>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-white uppercase font-mono-data">
                    CALL DIRECT
                  </span>
                </a>

                <a
                  href="https://line.me/ti/p/lxRmbEaYGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openLineModal();
                  }}
                  className="flex items-center justify-between rounded border border-emerald-200 bg-emerald-50 p-3 hover:border-emerald-600 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <MessageCircle className="size-4 text-emerald-700" />
                    <div>
                      <div className="font-mono-data text-xs font-bold text-emerald-900">
                        LINE ID: 0813722218.folk.folk
                      </div>
                      <div className="text-[10px] text-emerald-700">
                        คลิกเพื่อสแกน QR / แอดเพื่อนทันที
                      </div>
                    </div>
                  </div>
                  <span className="rounded bg-emerald-700 px-2 py-0.5 text-[10px] font-bold text-white uppercase font-mono-data">
                    ADD LINE
                  </span>
                </a>
              </div>
            </div>

            <p className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono-data">
              * รับผิดชอบ: รับซื้อทองแดง-โลหะทั่วไป, ไม้พาเลท, ประสานงานจัดซื้อ
            </p>
          </div>
        </div>

        {/* Dedicated Official LINE QR Code Card */}
        <div className="mt-6 max-w-4xl corporate-card p-6 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* QR Code Preview */}
            <div className="sm:col-span-4 flex flex-col items-center justify-center text-center">
              <button
                onClick={openLineModal}
                className="group relative size-36 sm:size-40 overflow-hidden rounded-xl border-2 border-[#123274] bg-white p-2 shadow-xs hover:border-emerald-600 transition-all focus:outline-none"
                title="คลิกเพื่อดู QR Code ขนาดใหญ่"
              >
                <Image
                  src="/line-qr.png"
                  alt="LINE Official QR Code - S.B. Lohakij"
                  width={160}
                  height={160}
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </button>
              <button
                onClick={openLineModal}
                className="mt-2 font-mono-data text-[11px] text-slate-500 hover:text-[#123274] font-bold uppercase tracking-wide flex items-center space-x-1"
              >
                <QrCode className="size-3" />
                <span>SCAN / CLICK TO ZOOM</span>
              </button>
            </div>

            {/* QR Instructions and Button */}
            <div className="sm:col-span-8 space-y-3 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 rounded bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 font-mono-data">
                <QrCode className="size-3.5" />
                <span>OFFICIAL LINE DIRECT ACCESS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0a1329]">
                สแกน QR Code หรือแอด LINE ID: <span className="text-[#123274] font-mono-data font-black">0813722218.folk.folk</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ส่งรูปถ่ายเศษวัสดุ โครงสร้างอาคารที่ต้องการรื้อถอน หรือพิกัดหน้างานเพื่อรับการประเมินราคาเบื้องต้นได้ทันทีตลอด 24 ชั่วโมง
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <a
                  href="https://line.me/ti/p/lxRmbEaYGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rounded bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 shadow-xs transition-colors font-mono-data"
                >
                  <MessageCircle className="size-3.5" />
                  <span>เปิด LINE โดยตรง</span>
                </a>

                <button
                  onClick={handleCopyLineId}
                  className="inline-flex items-center space-x-1.5 rounded border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:border-[#123274] hover:text-[#123274] shadow-2xs transition-colors font-mono-data"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-600" />
                      <span className="text-emerald-700">คัดลอก ID แล้ว!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>คัดลอก LINE ID</span>
                    </>
                  )}
                </button>

                <button
                  onClick={openLineModal}
                  className="inline-flex items-center space-x-1.5 rounded border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs font-bold text-[#123274] hover:bg-blue-100 shadow-2xs transition-colors font-mono-data"
                >
                  <QrCode className="size-3.5" />
                  <span>ดู QR Code ขยายใหญ่</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Operating status bar */}
        <div className="mt-6 max-w-4xl rounded border border-slate-200 bg-white p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-data text-slate-600 shadow-2xs">
          <div className="flex items-center space-x-2">
            <Clock className="size-3.5 text-[#123274] shrink-0" />
            <span>OPERATING HOURS: MON - SUN (08:00 - 18:00)</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="size-3.5 text-emerald-700 shrink-0" />
            <span className="font-semibold text-emerald-800">24/7 HOTLINE FOR ENTERPRISE AUCTIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

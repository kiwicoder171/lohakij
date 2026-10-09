"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useLineModal } from "@/context/LineModalContext";
import { Phone, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function RfqForm() {
  const { t } = useLanguage();
  const { openLineModal } = useLineModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "metals",
    weight: "",
    location: "",
    notes: "",
  });

  const materialLabels: Record<string, string> = {
    metals: "เศษโลหะ (ทองแดง, เหล็ก, สแตนเลส, อะลูมิเนียม)",
    auction: "งานประมูลประจำปี / สัญญาโรงงาน",
    demolition: "รื้อถอนอาคาร / โครงสร้าง / ปลดระวางเครื่องจักร",
    packaging: "ไม้พาเลท / ถังน้ำมัน 200L / สินทรัพย์สำนักงาน",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getLinePrefillUrl = () => {
    return "https://line.me/ti/p/lxRmbEaYGw";
  };

  return (
    <section id="rfq" className="relative bg-white py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <span>[VALUATION] {t.rfq.tag}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {t.rfq.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.rfq.subtitle}
          </p>
        </div>

        {/* Priority Action Callout: Mainly Telephone, LINE as follow-up */}
        <div className="mt-8 max-w-3xl rounded border border-blue-200 bg-blue-50/70 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono-data text-[10px] font-bold uppercase tracking-wider text-[#123274]">
              PRIORITY CHANNEL // โทรติดต่อด่วนที่สุด
            </span>
            <p className="text-xs sm:text-sm text-[#0a1329] font-bold">
              ต้องการประเมินราคาเร่งด่วน หรือนัดดูหน้างานวันนี้ โทรสายตรงได้ทันที
            </p>
            <p className="text-xs text-slate-600">
              โทรหาเราโดยตรง ทีมงานรับสาย 24 ชม. แล้วส่งรูปประกอบทาง LINE ต่อเนื่อง
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="tel:0958269463"
              className="inline-flex items-center space-x-1.5 rounded bg-[#123274] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#0e204d] shadow-xs font-mono-data"
            >
              <Phone className="size-3.5" />
              <span>095-826-9463 (แขก)</span>
            </a>
            <a
              href="tel:0637019999"
              className="inline-flex items-center space-x-1.5 rounded border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-[#0a1329] hover:bg-slate-50 font-mono-data"
            >
              <Phone className="size-3.5" />
              <span>063-701-9999 (โฟล์ค)</span>
            </a>
          </div>
        </div>

        <div className="mt-8 max-w-3xl">
          <div className="corporate-card p-6 sm:p-8">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="text-center py-8 space-y-4"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded border border-emerald-500/40 bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0e204d]">
                  {t.rfq.successMsg}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  เจ้าหน้าที่ฝ่ายประเมินราคาจะโทรติดต่อกลับที่เบอร์ {formData.phone || "ที่คุณระบุ"} โดยเร็วที่สุด
                </p>

                {/* Next Step Options */}
                <div className="pt-3 max-w-lg mx-auto space-y-3">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 text-left font-mono-data space-y-1">
                    <div className="font-bold text-[#0e204d] uppercase mb-1">ข้อมูลที่คุณแจ้ง:</div>
                    <div>• ผู้ติดต่อ: {formData.name}</div>
                    <div>• เบอร์โทร: {formData.phone}</div>
                    <div>• ประเภท: {materialLabels[formData.material] || formData.material}</div>
                    {formData.location && <div>• สถานที่: {formData.location}</div>}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-2.5 pt-2">
                    <a
                      href="tel:0958269463"
                      className="inline-flex items-center justify-center space-x-2 rounded bg-[#123274] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0e204d] font-mono-data"
                    >
                      <Phone className="size-3.5" />
                      <span>โทรคุยฝ่ายประมูลทันที: 095-826-9463</span>
                    </a>
                    <a
                      href={getLinePrefillUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        openLineModal();
                      }}
                      className="inline-flex items-center justify-center space-x-2 rounded bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 uppercase font-mono-data shadow-xs"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>ส่งรูปหน้างานต่อทาง LINE (QR / ID)</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 underline hover:text-slate-800 pt-2"
                  >
                    กรอกข้อมูลชุดใหม่
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="rfq-name"
                      className="block text-xs font-mono-data font-semibold text-slate-700 mb-1 uppercase"
                    >
                      {t.rfq.namePlaceholder} <span className="text-[#123274]">*</span>
                    </label>
                    <input
                      id="rfq-name"
                      name="name"
                      autoComplete="name"
                      required
                      type="text"
                      placeholder="เช่น คุณสมชาย (บจก. อุตสาหกรรมไทย)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#123274] focus:ring-1 focus:ring-[#123274] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-phone"
                      className="block text-xs font-mono-data font-semibold text-slate-700 mb-1 uppercase"
                    >
                      {t.rfq.phonePlaceholder} <span className="text-[#123274]">*</span>
                    </label>
                    <input
                      id="rfq-phone"
                      name="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      type="tel"
                      placeholder="เช่น 081-234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#123274] focus:ring-1 focus:ring-[#123274] focus:outline-none font-mono-data"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="rfq-material"
                      className="block text-xs font-mono-data font-semibold text-slate-700 mb-1 uppercase"
                    >
                      {t.rfq.materialType} <span className="text-[#123274]">*</span>
                    </label>
                    <select
                      id="rfq-material"
                      name="material"
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#123274] focus:ring-1 focus:ring-[#123274] focus:outline-none"
                    >
                      <option value="metals">{t.rfq.optMetals}</option>
                      <option value="auction">{t.rfq.optAuction}</option>
                      <option value="demolition">{t.rfq.optDemolition}</option>
                      <option value="packaging">{t.rfq.optPackaging}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-weight"
                      className="block text-xs font-mono-data font-semibold text-slate-700 mb-1 uppercase"
                    >
                      {t.rfq.weightPlaceholder}
                    </label>
                    <input
                      id="rfq-weight"
                      name="weight"
                      type="text"
                      placeholder="เช่น 5-10 ตัน / 1 ล็อต"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#123274] focus:ring-1 focus:ring-[#123274] focus:outline-none font-mono-data"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rfq-location"
                    className="block text-xs font-mono-data font-semibold text-slate-700 mb-1 uppercase"
                  >
                    {t.rfq.locationPlaceholder} <span className="text-[#123274]">*</span>
                  </label>
                  <input
                    id="rfq-location"
                    name="location"
                    required
                    type="text"
                    placeholder="เช่น นิคมฯ อมตะซิตี้ ชลบุรี หรือ อ.เมือง ขอนแก่น"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#123274] focus:ring-1 focus:ring-[#123274] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rfq-notes"
                    className="block text-xs font-mono-data font-semibold text-slate-700 mb-1 uppercase"
                  >
                    {t.rfq.notesPlaceholder}
                  </label>
                  <textarea
                    id="rfq-notes"
                    name="notes"
                    rows={2}
                    placeholder="รายละเอียดเพิ่มเติม เช่น มีสายไฟปอกแล้ว หรือต้องการให้เข้าดูวันศุกร์..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#123274] focus:ring-1 focus:ring-[#123274] focus:outline-none"
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 rounded bg-[#123274] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0e204d] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#123274] focus:ring-offset-2 transition-all flex items-center justify-center space-x-2 shadow-xs"
                  >
                    <Phone className="size-3.5" />
                    <span>แจ้งข้อมูลเพื่อนัดโทรกลับด่วน</span>
                  </button>

                  <a
                    href="tel:0958269463"
                    className="sm:w-auto inline-flex items-center justify-center space-x-2 rounded border border-[#123274] bg-white px-5 py-3 text-xs font-bold text-[#123274] hover:bg-blue-50 font-mono-data transition-colors"
                  >
                    <Phone className="size-3.5" />
                    <span>โทรทันที: 095-826-9463</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono-data text-slate-600">
                  <span>ส่งรูปและพิกัดโรงงานทาง LINE ทันที (ID: 0813722218.folk.folk):</span>
                  <a
                    href="https://line.me/ti/p/lxRmbEaYGw"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      openLineModal();
                    }}
                    className="text-emerald-700 font-bold hover:underline inline-flex items-center space-x-1"
                  >
                    <MessageCircle className="size-3.5 text-emerald-600" />
                    <span>แอด LINE ส่งรูปหน้างาน (QR / ID) &gt;&gt;</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

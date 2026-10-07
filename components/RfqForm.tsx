"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function RfqForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "metals",
    weight: "",
    location: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

        <div className="mt-10 max-w-3xl">
          <div className="corporate-card p-6 sm:p-8">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="text-center py-10 space-y-4"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded border border-emerald-500/40 bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0e204d]">
                  {t.rfq.successMsg}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  เจ้าหน้าที่ฝ่ายประเมินราคาจะโทรติดต่อกลับที่เบอร์ {formData.phone || "ที่คุณระบุ"} ภายใน 15 นาที
                </p>
                <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2.5">
                  <a
                    href="https://line.me/ti/p/~0958269463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 rounded bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 uppercase font-mono-data shadow-xs"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>ส่งรูปหน้างานต่อทาง LINE ทันที</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 font-mono-data"
                  >
                    [+] กรอกข้อมูลใหม่
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

                <button
                  type="submit"
                  className="w-full rounded bg-[#123274] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0e204d] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#123274] focus:ring-offset-2 transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="size-3.5" />
                  <span>{t.rfq.submitBtn}</span>
                </button>

                <div className="pt-3 border-t border-slate-100 text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono-data text-slate-600">
                  <span>{t.rfq.lineAlt}</span>
                  <a
                    href="https://line.me/ti/p/~0958269463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    แอด LINE ทันที &gt;&gt;
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

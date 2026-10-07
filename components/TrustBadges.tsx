"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileBadge2, Scale, Recycle, FileCheck, Check } from "lucide-react";

export default function TrustBadges() {
  const { t } = useLanguage();

  return (
    <section id="licenses" className="relative bg-slate-50 py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <span>[SECTION // 01] {t.licenses.tag}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {t.licenses.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.licenses.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center space-x-3 rounded border border-blue-200 bg-white px-3.5 py-1.5 font-mono-data text-xs text-slate-700 shadow-2xs">
            <span className="text-[#123274] font-bold">{t.licenses.regNo}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">{t.licenses.regDate}</span>
          </div>
        </div>

        {/* 4 Technical Plates */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* License 105 */}
          <div className="corporate-card corporate-card-hover p-6">
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-3">
                <FileBadge2 className="size-6 text-[#123274]" />
                <h3 className="text-base font-bold text-[#0e204d]">
                  {t.licenses.license105Title}
                </h3>
              </div>
              <span className="rounded bg-blue-50 px-2 py-0.5 font-mono-data text-[10px] font-bold text-[#123274] border border-blue-200">
                ACTIVE
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              {t.licenses.license105Desc}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>ลานกักเก็บและอุปกรณ์แยกขยะอุตสาหกรรมตามระเบียบกรมโรงงาน</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>อนุญาตรับฝาก คัดแยก และลำเลียงสิ่งปฏิกูลไม่อันตราย</span>
              </div>
            </div>
          </div>

          {/* License 106 */}
          <div className="corporate-card corporate-card-hover p-6">
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-3">
                <Recycle className="size-6 text-emerald-700" />
                <h3 className="text-base font-bold text-[#0e204d]">
                  {t.licenses.license106Title}
                </h3>
              </div>
              <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono-data text-[10px] font-bold text-emerald-700 border border-emerald-200">
                CIRCULAR
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              {t.licenses.license106Desc}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-emerald-700 shrink-0" />
                <span>แปรรูปเศษโลหะและกากอุตสาหกรรมกลับสู่กระบวนการหลอมและรีไซเคิล</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-emerald-700 shrink-0" />
                <span>ลดความเสี่ยงด้านสิ่งแวดล้อมและเพิ่มตัวชี้วัด ESG ของโรงงาน</span>
              </div>
            </div>
          </div>

          {/* PP.20 */}
          <div className="corporate-card corporate-card-hover p-6">
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-3">
                <Scale className="size-6 text-[#123274]" />
                <h3 className="text-base font-bold text-[#0e204d]">
                  {t.licenses.taxTitle}
                </h3>
              </div>
              <span className="rounded bg-slate-100 px-2 py-0.5 font-mono-data text-[10px] font-bold text-slate-700">
                TAX COMPLIANT
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              {t.licenses.taxDesc}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>ออกใบกำกับภาษีเต็มรูป หักภาษี ณ ที่จ่ายถูกต้อง 100%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>งบการเงินส่งกรมพัฒนาธุรกิจการค้า ตรวจสอบความมั่นคงได้</span>
              </div>
            </div>
          </div>

          {/* Manifest */}
          <div className="corporate-card corporate-card-hover p-6">
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-3">
                <FileCheck className="size-6 text-[#123274]" />
                <h3 className="text-base font-bold text-[#0e204d]">
                  {t.licenses.manifestTitle}
                </h3>
              </div>
              <span className="rounded bg-slate-100 px-2 py-0.5 font-mono-data text-[10px] font-bold text-slate-700">
                e-LICENSE
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              {t.licenses.manifestDesc}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>ใบกำกับการขนส่งกากอุตสาหกรรมตามระเบียบ กรอ. ครบถ้วน</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="size-3.5 text-[#123274] shrink-0" />
                <span>รายงานระบบอิเล็กทรอนิกส์ ตรวจสอบย้อนกลับได้ทุกเที่ยวรถ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

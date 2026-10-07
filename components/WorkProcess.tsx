"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export default function WorkProcess() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative bg-white py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <span>[SECTION // 04] {t.process.tag}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Dense Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="corporate-card corporate-card-hover p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="font-mono-data text-xl font-black text-[#123274] tabular-nums">
                    STEP {step.step}
                  </span>
                  <span className="font-mono-data text-[10px] text-slate-500 uppercase font-bold">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#0e204d]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] text-[#123274] font-mono-data font-semibold">
                <Check className="size-3 text-[#123274] shrink-0" />
                <span>VERIFIED PROCEDURE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

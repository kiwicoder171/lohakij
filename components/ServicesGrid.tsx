"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Gavel, Layers, Wrench, Package, Check, ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const { t } = useLanguage();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "auction":
        return <Gavel className="size-5 text-[#123274]" />;
      case "metals":
        return <Layers className="size-5 text-[#123274]" />;
      case "demolition":
        return <Wrench className="size-5 text-[#123274]" />;
      case "surplus":
        return <Package className="size-5 text-[#123274]" />;
      default:
        return <Layers className="size-5 text-[#123274]" />;
    }
  };

  return (
    <section id="services" className="relative bg-slate-50 py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <span>[SECTION // 03] {t.services.tag}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.services.items.map((service, idx) => (
            <div
              key={service.id}
              className="corporate-card corporate-card-hover p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="flex size-8 items-center justify-center rounded border border-blue-200 bg-blue-50">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="font-mono-data text-xs text-slate-500 font-semibold">
                      SERVICE_0{idx + 1}
                    </span>
                  </div>
                  <span className="font-mono-data text-[10px] font-bold uppercase tracking-wider text-[#123274] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#0e204d]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features Checklist */}
                <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                      <Check className="size-3 text-[#123274] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono-data">
                <a
                  href="#rfq"
                  className="font-bold text-[#123274] hover:text-[#0a1329] inline-flex items-center space-x-1"
                >
                  <span>[+] ส่งข้อมูลประเมินราคา</span>
                  <ArrowRight className="size-3" />
                </a>
                <a href="tel:0958269463" className="text-slate-500 hover:text-slate-900">
                  สายตรง: 095-826-9463
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

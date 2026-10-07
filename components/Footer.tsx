"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, MapPin, Phone, FileText } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a1329] border-t border-slate-900 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Bio with Logo */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="relative size-10 overflow-hidden rounded-full border-2 border-white bg-white p-0.5 shrink-0">
                <Image
                  src="/logo.png"
                  alt="S.B. Lohakij Stamp Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">
                  {t.nav.brand}
                </span>
                <span className="text-[11px] text-slate-400 font-mono-data">
                  {t.nav.brandSub}
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              {t.footer.about}
            </p>

            <div className="flex items-center space-x-2 text-blue-300 font-mono-data text-[11px] font-semibold">
              <ShieldCheck className="size-3.5 text-blue-400" />
              <span>DIW FACTORY LICENSE TYPE 105 & 106 APPROVED</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-mono-data text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-blue-300 transition-colors">
                  &gt; {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#licenses" className="hover:text-blue-300 transition-colors">
                  &gt; {t.nav.licenses}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-blue-300 transition-colors">
                  &gt; {t.nav.clients} (SCG & AIS)
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-300 transition-colors">
                  &gt; {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#rfq" className="hover:text-blue-300 transition-colors">
                  &gt; ขอใบเสนอราคา / ส่งรูป
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Business Directory */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-mono-data text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.legalInfo}
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-mono-data">
              <div className="flex items-start space-x-2">
                <FileText className="size-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.footer.taxId} (18 พ.ค. 2558)</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="size-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.footer.hqLocation}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="size-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>HOTLINE: 095-826-9463 / 063-701-9999</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navy Seal strip divider */}
        <div className="mt-10 h-1 w-full navy-seal-strip opacity-60" />

        {/* Bottom Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-data text-[11px] text-slate-400">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-3">
            <span>DIW 105/106 VERIFIED</span>
            <span>•</span>
            <span>PP.20 COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

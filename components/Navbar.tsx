"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, ShieldCheck, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top Deep Navy Operational Bar */}
      <div className="border-b border-slate-900 bg-[#0a1329] px-4 py-1.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <span className="flex items-center space-x-1.5 text-blue-300 font-semibold tracking-wide">
              <ShieldCheck className="size-3.5 text-blue-400" />
              <span className="font-mono-data text-[11px] uppercase">DIW FACTORY PERMITS 105 & 106</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline font-mono-data text-[11px] text-slate-400">
              REG: 0115558009992 (KHON KAEN HQ)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-[11px] text-slate-400 font-mono-data uppercase">HOTLINE:</span>
            <a href="tel:0958269463" className="font-mono-data text-xs text-white hover:text-blue-300 tabular-nums font-semibold">
              095-826-9463
            </a>
            <span className="text-slate-600">/</span>
            <a href="tel:0637019999" className="font-mono-data text-xs text-white hover:text-blue-300 tabular-nums font-semibold">
              063-701-9999
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Brand with Official Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="relative size-11 overflow-hidden rounded-full border-2 border-[#123274] bg-white p-0.5 shadow-xs shrink-0">
            <Image
              src="/logo.png"
              alt="S.B. Lohakij Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-base sm:text-lg font-bold text-[#0e204d] tracking-tight">
                {t.nav.brand}
              </span>
              <span className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.2 font-mono-data text-[10px] text-[#123274] font-semibold">
                EST. 2558
              </span>
            </div>
            <p className="font-mono-data text-[10px] text-slate-500 tracking-wider">
              {t.nav.brandSub}
            </p>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-bold text-[#0e204d]">
          <a href="#services" className="hover:text-blue-600 transition-colors">
            {t.nav.services}
          </a>
          <a href="#licenses" className="hover:text-blue-600 transition-colors">
            {t.nav.licenses}
          </a>
          <a href="#clients" className="hover:text-blue-600 transition-colors">
            {t.nav.clients}
          </a>
          <a href="#process" className="hover:text-blue-600 transition-colors">
            {t.nav.process}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setLang(lang === "th" ? "en" : "th")}
            className="flex items-center space-x-1 rounded border border-slate-300 bg-slate-50 px-2.5 py-1.5 font-mono-data text-xs font-semibold text-slate-700 hover:border-[#123274] hover:text-[#123274] transition-colors"
            title="Toggle Language"
            aria-label="Toggle language"
          >
            <Globe className="size-3 text-[#123274]" />
            <span>{lang === "th" ? "EN" : "TH"}</span>
          </button>

          <a
            href="tel:0958269463"
            className="hidden sm:inline-flex items-center space-x-1.5 rounded bg-[#123274] px-4 py-2 text-xs font-bold text-white hover:bg-[#0e204d] shadow-sm transition-colors"
          >
            <Phone className="size-3.5" />
            <span>{t.nav.callNow}</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-1.5 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5 text-[#123274]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-5 md:hidden">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#123274]">
              {t.nav.services}
            </a>
            <a href="#licenses" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#123274]">
              {t.nav.licenses}
            </a>
            <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#123274]">
              {t.nav.clients}
            </a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#123274]">
              {t.nav.process}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#123274]">
              {t.nav.contact}
            </a>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <a
              href="tel:0958269463"
              className="flex items-center justify-center space-x-2 rounded bg-[#123274] py-2 text-xs font-bold text-white font-mono-data"
            >
              <Phone className="size-3.5" />
              <span>095-826-9463 (คุณแขก)</span>
            </a>
            <a
              href="tel:0637019999"
              className="flex items-center justify-center space-x-2 rounded border border-slate-300 bg-slate-100 py-2 text-xs font-bold text-slate-800 font-mono-data"
            >
              <Phone className="size-3.5" />
              <span>063-701-9999 (คุณโฟล์ค)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

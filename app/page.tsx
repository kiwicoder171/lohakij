"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import TrackRecord from "@/components/TrackRecord";
import ServicesGrid from "@/components/ServicesGrid";
import WorkProcess from "@/components/WorkProcess";
import CoverageMap from "@/components/CoverageMap";
import RfqForm from "@/components/RfqForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#0c0e12] text-slate-200 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          <Hero />
          <TrustBadges />
          <TrackRecord />
          <ServicesGrid />
          <WorkProcess />
          <CoverageMap />
          <RfqForm />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

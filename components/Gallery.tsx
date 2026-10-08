"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Camera, MapPin, Truck, Layers } from "lucide-react";

export default function Gallery() {
  const { lang } = useLanguage();

  const isTh = lang === "th";

  const photos = [
    {
      src: "/images/facility-front.jpg",
      title: isTh ? "ลานและอาคารสำนักงานใหญ่ บจก. เอส.บี โลหะกิจ" : "S.B. Lohakij Headquarters & Main Yard",
      desc: isTh
        ? "สถานที่ตั้งลานคัดแยกและอาคารสำนักงาน พร้อมลานกว้างรองรับรถบรรทุกหนักและตู้คอนเทนเนอร์เข้าออกสะดวก"
        : "Main facility & sorting yard equipped to receive heavy multi-axle freight trucks and industrial containers.",
      badge: isTh ? "สำนักงาน & ลานคัดแยก" : "HQ Facility & Yard",
      tag: "FACILITY",
      icon: <MapPin className="size-3.5 text-[#123274]" />,
    },
    {
      src: "/images/heavy-machinery.jpg",
      title: isTh ? "เครื่องจักรกลหนัก & รถแบ็คโฮหัวแม่เหล็กไฟฟ้าคัดแยกเศษเหล็ก" : "Excavator with Scrap Magnet & Heavy Shears",
      desc: isTh
        ? "รถแบ็คโฮ Komatsu PC160 ประจำหน้างาน พร้อมหัวแม่เหล็กไฟฟ้าและคีมตัดโลหะหนา ทำงานรวดเร็ว ปลอดภัยตามมาตรฐาน จป."
        : "Komatsu PC160 excavator with electromagnetic scrap lifter and demolition attachment for rapid on-site clearing.",
      badge: isTh ? "เครื่องจักรกลหนักหน้างาน" : "Heavy Machinery",
      tag: "EQUIPMENT",
      icon: <Truck className="size-3.5 text-amber-600" />,
    },
    {
      src: "/images/wooden-pallets.jpg",
      title: isTh ? "ลานสต็อกและคัดแยกไม้พาเลทอุตสาหกรรม" : "Industrial Wooden Pallet Staging Area",
      desc: isTh
        ? "รับซื้อไม้พาเลทคัดเกรดมาตรฐาน สภาพแข็งแรง พร้อมจัดส่งต่อโรงงานอุตสาหกรรมและคลังสินค้าทั่วประเทศ"
        : "Standard-grade reconditioned industrial wooden pallets stored and ready for distribution across logistics hubs.",
      badge: isTh ? "ไม้พาเลท & บรรจุภัณฑ์" : "Pallets & Packaging",
      tag: "INVENTORY",
      icon: <Layers className="size-3.5 text-emerald-700" />,
    },
  ];

  return (
    <section id="gallery" className="relative bg-white py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
            <Camera className="size-3.5 text-[#123274]" />
            <span>[EVIDENCE // 05] {isTh ? "ภาพหน้างานและสถานที่จริง" : "ON-SITE OPERATION GALLERY"}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
            {isTh ? "ภาพบรรยากาศหน้างาน & เครื่องจักรปฏิบัติการจริง" : "Real Operations & Heavy Equipment On-Site"}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {isTh
              ? "ความพร้อมด้านสถานที่ ลานคัดแยก รถแบ็คโฮ และทีมงานมืออาชีพ รองรับงานรื้อถอนและงานประมูลทุกขนาด"
              : "Demonstrated physical readiness with our dedicated scrap yard, excavators, lifting equipment, and staging capacity."}
          </p>
        </div>

        {/* 3 Real Photos Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="corporate-card corporate-card-hover rounded overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200 group">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-1.5 rounded bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-[#0e204d] shadow-xs font-mono-data border border-slate-200">
                    {item.icon}
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[10px] font-mono-data text-slate-500 font-bold uppercase mb-2">
                    <span>{item.tag}</span>
                    <span>IMG_0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0a1329] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-data text-slate-500">
                  <span>สถานะ: พร้อมปฏิบัติงาน</span>
                  <span className="text-[#123274] font-bold">VERIFIED SITE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

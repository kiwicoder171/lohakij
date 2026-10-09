"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Camera, MapPin, Truck, Layers, Building2, Hammer, Check } from "lucide-react";

export default function Gallery() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "facility" | "office" | "pallets">("all");

  const isTh = lang === "th";

  const allPhotos = [
    {
      category: "facility",
      src: "/images/facility-front.jpg",
      title: isTh ? "ลานและอาคารสำนักงานใหญ่ บจก. เอส.บี โลหะกิจ" : "S.B. Lohakij Headquarters & Main Yard",
      desc: isTh
        ? "สถานที่ตั้งลานคัดแยกและอาคารสำนักงาน อ.น้ำพอง จ.ขอนแก่น พร้อมลานกว้างรองรับรถพ่วง 18 ล้อและตู้คอนเทนเนอร์"
        : "Main facility & sorting yard in Khon Kaen equipped to receive heavy freight trailers and industrial containers.",
      badge: isTh ? "สำนักงานใหญ่ & ลานคัดแยก" : "HQ Facility & Yard",
      tag: "FACILITY",
      icon: <MapPin className="size-3.5 text-[#123274]" />,
    },
    {
      category: "facility",
      src: "/images/heavy-machinery.jpg",
      title: isTh ? "รถแบ็คโฮหัวแม่เหล็กไฟฟ้าคัดแยกเศษเหล็ก (Komatsu PC160)" : "Komatsu PC160 with Scrap Magnet & Shears",
      desc: isTh
        ? "รถแบ็คโฮประจำหน้างานพร้อมหัวแม่เหล็กไฟฟ้าดูดเศษเหล็กและกรรไกรตัดโครงสร้าง ปลอดภัยตามมาตรฐาน จป."
        : "Komatsu PC160 excavator with electromagnetic scrap lifter and demolition attachments for on-site processing.",
      badge: isTh ? "เครื่องจักรกลหนักหน้างาน" : "Heavy Machinery",
      tag: "EQUIPMENT",
      icon: <Truck className="size-3.5 text-amber-600" />,
    },
    {
      category: "office",
      src: "/images/office-loading-truck.jpg",
      title: isTh ? "ทีมงานขนย้ายโต๊ะและเฟอร์นิเจอร์สำนักงานประมูลขึ้นรถบรรทุก" : "On-Site Asset Transport & Loading",
      desc: isTh
        ? "ภาพทีมงานกำลังขนย้ายโต๊ะสำนักงานขนาดใหญ่ขึ้นรถบรรทุกสิบล้อ เคลียร์พื้นที่รวดเร็ว สะอาด เรียบร้อยตามสัญญา"
        : "Our logistics team loading auctioned corporate office desks onto 10-wheeler trucks for site clearance.",
      badge: isTh ? "งานประมูล & ขนย้ายหน้างาน" : "Asset Clearance",
      tag: "OPERATION",
      icon: <Building2 className="size-3.5 text-blue-600" />,
    },
    {
      category: "pallets",
      src: "/images/wooden-pallets.jpg",
      title: isTh ? "ลานสต็อกและคัดแยกไม้พาเลทอุตสาหกรรม" : "Industrial Wooden Pallet Staging Area",
      desc: isTh
        ? "รับซื้อไม้พาเลทคัดเกรดมาตรฐาน สภาพแข็งแรง มีสต็อกพร้อมจัดส่งต่อโรงงานอุตสาหกรรมและคลังสินค้า"
        : "Standard-grade reconditioned industrial wooden pallets stored and ready for distribution across logistics hubs.",
      badge: isTh ? "ไม้พาเลทอุตสาหกรรม" : "Pallets & Packaging",
      tag: "INVENTORY",
      icon: <Layers className="size-3.5 text-emerald-700" />,
    },
    {
      category: "office",
      src: "/images/office-task-chairs.png",
      title: isTh ? "สต็อกเก้าอี้สำนักงานและเก้าอี้ทำงานประมูลเหมาล็อต" : "Corporate Ergonomic Task Chairs Bulk Stock",
      desc: isTh
        ? "เก้าอี้สำนักงานผ้าตาข่ายและเก้าอี้ทำงานคุณภาพดี ประมูลออกมาจากอาคารสำนักงานและองค์กรชั้นนำ"
        : "Bulk surplus mesh task chairs and executive chairs acquired from corporate office liquidations.",
      badge: isTh ? "เฟอร์นิเจอร์ประมูล" : "Surplus Furniture",
      tag: "AUCTION ASSETS",
      icon: <Building2 className="size-3.5 text-indigo-600" />,
    },
    {
      category: "office",
      src: "/images/office-desks-stock.jpg",
      title: isTh ? "โต๊ะทำงาน โต๊ะประชุม และเก้าอี้บาร์ประมูล" : "Office Desks, Tables & Bar Stools Stock",
      desc: isTh
        ? "คลังเก็บโต๊ะทำงานและเก้าอี้สำนักงานประมูลสภาพดี พร้อมคัดแยกจัดจำหน่ายต่อในราคาส่ง"
        : "Warehouse staging for desks, conference tables, and bar stools ready for wholesale distribution.",
      badge: isTh ? "เฟอร์นิเจอร์สำนักงาน" : "Office Inventory",
      tag: "INVENTORY",
      icon: <Building2 className="size-3.5 text-slate-700" />,
    },
    {
      category: "office",
      src: "/images/office-cabinets-stock.jpg",
      title: isTh ? "โต๊ะทำงานพร้อมลิ้นชักและตู้เอกสารสำนักงาน" : "Office Workstations & File Drawers",
      desc: isTh
        ? "โต๊ะทำงานสำนักงานลายไม้พร้อมลิ้นชัก และตู้เอกสารเหล็ก/ไม้สภาพดีจากการประมูลเหมาตึกสำนักงาน"
        : "Office desks with integrated pedestal drawers and filing cabinets from enterprise facility upgrades.",
      badge: isTh ? "โต๊ะทำงาน & ตู้เอกสาร" : "Workstations",
      tag: "OFFICE SURPLUS",
      icon: <Building2 className="size-3.5 text-blue-700" />,
    },
    {
      category: "pallets",
      src: "/images/pallet-table.jpg",
      title: isTh ? "โต๊ะสนามไม้พาเลทแปรรูปรักษ์โลก (Upcycled Pallet Furniture)" : "Upcycled Handcrafted Pallet Table",
      desc: isTh
        ? "การต่อยอดไม้พาเลทเหลือใช้ นำมาขัดเคลือบเงาประกอบเป็นโต๊ะไม้คุณภาพดี เพิ่มมูลค่าตามหลักเศรษฐกิจหมุนเวียน"
        : "Upcycled industrial pallet wood transformed into durable, varnished outdoor wooden tables.",
      badge: isTh ? "เฟอร์นิเจอร์ไม้พาเลท" : "Upcycled Wood",
      tag: "CIRCULAR ECONOMY",
      icon: <Hammer className="size-3.5 text-amber-700" />,
    },
    {
      category: "pallets",
      src: "/images/pallet-swing.jpg",
      title: isTh ? "ชิงช้าไม้พาเลทสำหรับตกแต่งสวนและกลางแจ้ง" : "Custom Wooden Pallet Garden Swing",
      desc: isTh
        ? "ชิงช้าไม้คู่แข็งแรง ผลิตจากไม้พาเลทอุตสาหกรรมคัดเกรดหนาพิเศษ แข็งแรง ทนแดด ทนฝน"
        : "Heavy-duty outdoor twin garden swing crafted from high-durability reclaimed industrial pallet timber.",
      badge: isTh ? "ชิงช้าไม้พาเลท" : "Custom Garden Swing",
      tag: "VALUE ADDED",
      icon: <Hammer className="size-3.5 text-amber-700" />,
    },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="relative bg-white py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#123274] uppercase font-mono-data">
              <Camera className="size-3.5 text-[#123274]" />
              <span>[EVIDENCE // 05] {isTh ? "ภาพหน้างานและสถานที่จริง" : "ON-SITE OPERATION GALLERY"}</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a1329] tracking-tight">
              {isTh ? "ภาพบรรยากาศหน้างาน & สินทรัพย์จริงของบริษัท" : "Real Operations, Fleet & Warehouse Assets"}
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {isTh
                ? "ความพร้อม 100% ทั้งลานโรงงาน เครื่องจักรกลหนัก การขนย้าย และสต็อกสินค้าประมูลจากองค์กรชั้นนำ"
                : "Authentic proof of our operational readiness: yard facility, heavy machinery, logistics teams, and surplus inventory."}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono-data text-xs">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded px-3 py-1.5 font-bold transition-colors ${
                activeCategory === "all"
                  ? "bg-[#123274] text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {isTh ? "ทั้งหมด (9)" : "All (9)"}
            </button>
            <button
              onClick={() => setActiveCategory("facility")}
              className={`rounded px-3 py-1.5 font-bold transition-colors ${
                activeCategory === "facility"
                  ? "bg-[#123274] text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {isTh ? "สถานที่ & เครื่องจักร (2)" : "Facility & Heavy Machinery"}
            </button>
            <button
              onClick={() => setActiveCategory("office")}
              className={`rounded px-3 py-1.5 font-bold transition-colors ${
                activeCategory === "office"
                  ? "bg-[#123274] text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {isTh ? "งานขนย้าย & เฟอร์นิเจอร์ประมูล (4)" : "Asset Clearance & Furniture"}
            </button>
            <button
              onClick={() => setActiveCategory("pallets")}
              className={`rounded px-3 py-1.5 font-bold transition-colors ${
                activeCategory === "pallets"
                  ? "bg-[#123274] text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {isTh ? "ไม้พาเลท & งานแปรรูป (3)" : "Pallets & Upcycled Wood"}
            </button>
          </div>
        </div>

        {/* Dynamic Photo Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, idx) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <span>PHOTO_0{idx + 1}</span>
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
                  <span className="flex items-center space-x-1 text-emerald-700 font-bold">
                    <Check className="size-3.5" />
                    <span>สต็อกและหน้างานจริง</span>
                  </span>
                  <span className="text-[#123274] font-bold">VERIFIED ASSET</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

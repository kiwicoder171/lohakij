import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "บริษัท เอส.บี โลหะกิจ จำกัด | ประมูลเศษโลหะ รื้อถอนโรงงาน ขยะอุตสาหกรรม (ใบอนุญาต 105, 106)",
  description: "S.B. LOHAKIJ CO., LTD. รับซื้อและประมูลเศษวัสดุอุตสาหกรรม ทองแดง เหล็ก อะลูมิเนียม สแตนเลส ไม้พาเลท ถังน้ำมัน รื้อถอนโครงสร้างโรงงาน ถูกต้องตามกฎหมาย มีใบอนุญาต ร.ง.4 ประเภท 105 และ 106 ทั่วประเทศ",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "เอส.บี โลหะกิจ",
    "ประมูลเศษเหล็ก",
    "รับซื้อทองแดงโรงงาน",
    "รื้อถอนโรงงาน",
    "ใบอนุญาต 105 106",
    "กำจัดกากอุตสาหกรรม",
    "ประมูลไม้พาเลท",
    "ขอนแก่น",
    "SCG",
    "AIS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#123274] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:border-2 focus:border-[#123274] focus:bg-white focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-[#123274] focus:outline-none shadow-md"
        >
          ข้ามไปยังเนื้อหาหลัก (Skip to content)
        </a>
        {children}
      </body>
    </html>
  );
}

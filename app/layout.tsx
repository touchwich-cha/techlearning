import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-thai";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { brand, siteUrl } from "@/app/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — สื่ออบรมและระบบงาน HR`,
    template: `%s | ${brand.name}`,
  },
  description:
    "สื่ออบรม GMP / Food Safety แบบ 3D กว่า 300 เฟรม และระบบงาน HR อัตโนมัติบน Google Workspace — คัดกรองใบสมัคร Onboarding ประเมิน KPI บันทึกงานภาคสนาม และแจ้งเตือนเอกสาร ใช้งานจริงแล้ว 6 ระบบ",
  keywords: [
    "สื่ออบรม", "GMP", "Food Safety", "E-Learning", "ระบบ HR", "HR automation",
    "ระบบประเมินผล KPI", "Onboarding", "Google Apps Script", brand.name,
    "training media", "HR systems", "hr solution",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${brand.name} — สื่ออบรมและระบบงาน HR`,
    description: "สื่ออบรมที่คนอยากดู ระบบงาน HR ที่ทำงานแทนคุณ — ผลงานจริง ระบบใช้งานจริง",
    url: siteUrl,
    siteName: brand.name,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1200,
        height: 630,
        alt: `${brand.name} — Food Safety training media`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — สื่ออบรมและระบบงาน HR`,
    description: "สื่ออบรมที่คนอยากดู ระบบงาน HR ที่ทำงานแทนคุณ — ผลงานจริง ระบบใช้งานจริง",
  },
  alternates: {
    languages: {
      "th": `${siteUrl}/th`,
      "en": `${siteUrl}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <link rel="alternate" hrefLang="th" href={`${siteUrl}/th`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/th`} />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body>{children}</body>
    </html>
  );
}

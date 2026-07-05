import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-thai";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";

const siteUrl = "https://techlearning-sage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechLearning — สื่อการเรียนรู้ที่คนอยากเปิดดู",
    template: "%s | TechLearning",
  },
  description:
    "ออกแบบ E-Learning, สื่ออบรมความปลอดภัย, GMP, Infographic และสื่อการเรียนรู้สำหรับองค์กร โดย TechLearning — เปลี่ยนเนื้อหาที่ซับซ้อนให้เป็นสื่อภาพที่เข้าใจง่ายและนำไปใช้ได้จริง",
  keywords: [
    "E-Learning", "สื่ออบรม", "Safety", "GMP", "Infographic", "สื่อการเรียนรู้",
    "TechLearning", "training media", "corporate learning", "e-learning design"
  ],
  authors: [{ name: "TechLearning" }],
  creator: "TechLearning",
  publisher: "TechLearning",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TechLearning — สื่อการเรียนรู้ที่คนอยากเปิดดู",
    description: "เปลี่ยนเนื้อหาที่ซับซ้อนให้เป็นสื่อภาพที่เข้าใจง่ายและนำไปใช้ได้จริง",
    url: siteUrl,
    siteName: "TechLearning",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: `${siteUrl}/projects/gmp-pest-control/gmp-pest-control-01.png`,
        width: 1920,
        height: 1080,
        alt: "TechLearning — GMP Training Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechLearning — สื่อการเรียนรู้ที่คนอยากเปิดดู",
    description: "เปลี่ยนเนื้อหาที่ซับซ้อนให้เป็นสื่อภาพที่เข้าใจง่ายและนำไปใช้ได้จริง",
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
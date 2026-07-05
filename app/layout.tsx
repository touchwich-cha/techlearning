import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-thai";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techlearning-sage.vercel.app"),
  title: {
    default: "TechLearning — สื่อการเรียนรู้ที่คนอยากเปิดดู",
    template: "%s | TechLearning",
  },
  description:
    "ออกแบบ E-Learning, สื่ออบรมความปลอดภัย, GMP, Infographic และสื่อการเรียนรู้สำหรับองค์กร",
  openGraph: {
    title: "TechLearning",
    description: "เปลี่ยนเนื้อหาที่ซับซ้อนให้เป็นสื่อภาพที่เข้าใจง่ายและนำไปใช้ได้จริง",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

import Link from "next/link";
import { copy, type Locale } from "@/app/site-data";

export function CallToAction({ locale }: { locale: Locale }) {
  return (
    <section className="cta section-pad">
      <p className="eyebrow">Next project</p>
      <h2>{locale === "th" ? "พร้อมเปลี่ยนเนื้อหาให้เป็นการเรียนรู้ที่คนจดจำ?" : "Ready to make your content memorable?"}</h2>
      <Link className="button light" href={`/${locale}/contact`}>{copy[locale].quote} <span>↗</span></Link>
    </section>
  );
}
import Link from "next/link";
import { copy, type Locale } from "@/app/site-data";

export function CallToAction({ locale }: { locale: Locale }) {
  return (
    <section className="cta section-pad">
      <p className="eyebrow">Next project</p>
      <h2>{locale === "th" ? "มีโจทย์งานสื่อหรืองานระบบอยู่ในมือ? เล่าให้เราฟัง" : "Have a media or systems brief? Tell us about it."}</h2>
      <Link className="button light" href={`/${locale}/contact#quote`}>{copy[locale].quote} <span>↗</span></Link>
    </section>
  );
}
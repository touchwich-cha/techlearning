import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/layout/Shell";
import { HomePage } from "@/components/pages/HomePage";
import { PortfolioPage } from "@/components/pages/PortfolioPage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { HrSystemsPage } from "@/components/pages/HrSystemsPage";
import { ProcessPage } from "@/components/pages/ProcessPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { brand, type Locale } from "@/app/site-data";

const pages = ["", "services", "portfolio", "hr-systems", "process", "about", "contact"] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug?: string[] }> }): Promise<Metadata> {
  const { locale, slug = [] } = await params;
  const page = slug[0] || "";
  const titles: Record<string, { th: string; en: string }> = {
    "": { th: "สื่ออบรมและระบบงาน HR ที่ใช้งานจริง", en: "Training media & HR systems that deliver" },
    services: { th: "บริการ", en: "Services" }, portfolio: { th: "ผลงานสื่อ", en: "Learning Media" },
    "hr-systems": { th: "ระบบงาน HR", en: "HR Systems" },
    process: { th: "ขั้นตอนการทำงาน", en: "Process" }, about: { th: "เกี่ยวกับเรา", en: "About" },
    contact: { th: "ติดต่อ", en: "Contact" },
  };
  const language = locale === "en" ? "en" : "th";
  return { title: titles[page]?.[language] || brand.name };
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { locale: rawLocale, slug = [] } = await params;
  if (rawLocale !== "th" && rawLocale !== "en") notFound();
  const locale = rawLocale as Locale;
  const page = slug[0] || "";
  if (slug.length > 1 || !pages.includes(page as (typeof pages)[number])) notFound();

  const content =
    page === "portfolio" ? <PortfolioPage locale={locale} /> :
    page === "services" ? <ServicesPage locale={locale} /> :
    page === "hr-systems" ? <HrSystemsPage locale={locale} /> :
    page === "process" ? <ProcessPage locale={locale} /> :
    page === "about" ? <AboutPage locale={locale} /> :
    page === "contact" ? <ContactPage locale={locale} /> :
    <HomePage locale={locale} />;

  return <Shell locale={locale} page={page}>{content}</Shell>;
}

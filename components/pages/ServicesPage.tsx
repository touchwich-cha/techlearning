import { copy, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const extra = locale === "th"
    ? [
        ["05", "Corporate", "Presentation และ Company Profile ที่ดูเป็นมืออาชีพและสะท้อนภาพลักษณ์องค์กร"],
        ["06", "Onboarding", "สื่อปฐมนิเทศที่สื่อสารวัฒนธรรม กฎ และสิ่งที่พนักงานต้องรู้"],
      ]
    : [
        ["05", "Corporate", "Strategic presentations and company profiles that reflect your organization."],
        ["06", "Onboarding", "Warm, clear orientation media for culture, rules, and essential knowledge."],
      ];

  return (
    <main>
      <PageIntro
        eyebrow="Capabilities"
        title={locale === "th" ? "บริการออกแบบสื่อการเรียนรู้" : "Learning media services"}
        body={locale === "th"
          ? "เปลี่ยนข้อมูลที่ซับซ้อนให้เป็นประสบการณ์เรียนรู้ที่เข้าใจง่ายและน่าจดจำ"
          : "Turn complex information into clear, memorable learning experiences."}
      />
      <section className="service-page section-pad">
        {[...t.serviceItems, ...extra].map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}
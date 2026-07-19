import { caseStudies, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";

export function HrSystemsPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <PageIntro
        eyebrow="HR Systems / Case studies"
        title={locale === "th" ? "ระบบงาน HR ที่สร้างและใช้งานจริง" : "HR systems built and running for real teams"}
        body={locale === "th"
          ? "ทุกระบบในหน้านี้ใช้งานจริง ไม่ใช่ demo — เราไม่ระบุชื่อลูกค้าเพื่อความเป็นส่วนตัว"
          : "Every system on this page runs in real workplaces — client names are withheld for privacy."}
      />
      <section className="case-grid section-pad">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} locale={locale} index={index} />
        ))}
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}

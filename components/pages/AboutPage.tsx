import { type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

export function AboutPage({ locale }: { locale: Locale }) {
  const groups = locale === "th"
    ? [
        ["โรงงานและอุตสาหกรรม", "สื่อ Safety, GMP, HACCP, SOP และปฐมนิเทศที่สื่อสารกับพนักงานทุกระดับได้ชัดเจน"],
        ["องค์กรและธุรกิจ", "E-Learning, Company Profile และ Presentation ที่ช่วยให้เรื่องธุรกิจซับซ้อนเข้าใจง่ายขึ้น"],
        ["โรงเรียนและสถาบัน", "สื่อการสอนแบบการ์ตูนและ Infographic ที่เหมาะกับผู้เรียนหลายช่วงวัย"],
      ]
    : [
        ["Factories & industry", "Safety, GMP, HACCP, SOP, and orientation media for every level of the workforce."],
        ["Organizations & business", "E-Learning, company profiles, and presentations that clarify complex business ideas."],
        ["Schools & institutions", "Character-led teaching media and infographics designed for different age groups."],
      ];

  return (
    <main>
      <PageIntro
        eyebrow="About TechLearning"
        title={locale === "th" ? "ความรู้ที่ดีควรเข้าถึงคนได้จริง" : "Good knowledge should reach people"}
        body={locale === "th"
          ? "เราออกแบบสื่อที่ช่วยให้คนเข้าใจ จดจำ และนำความรู้ไปใช้ได้ โดยไม่ลดทอนความถูกต้องของเนื้อหา"
          : "We design media that helps people understand, remember, and use knowledge without losing accuracy."}
      />
      <section className="about-grid section-pad">
        <div className="about-values">
          Expert<br />Reliable<br />Modern<br /><em>Creative</em>
        </div>
        <div className="audiences">
          {groups.map(([title, body], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}
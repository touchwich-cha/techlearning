"use client";

import { type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

const audienceIcons = [
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
];

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
          <div className="about-values-sticky">
            Expert<br />
            Reliable<br />
            Modern<br />
            <em>Creative</em>
            <div className="about-accent-line" />
          </div>
        </div>
        <div className="audiences">
          {groups.map(([title, body], i) => (
            <article key={title} className="audience-card">
              <div className="audience-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={audienceIcons[i]} />
                </svg>
              </div>
              <span className="audience-tag">0{i + 1}</span>
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
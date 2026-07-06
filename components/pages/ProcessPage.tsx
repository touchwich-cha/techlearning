"use client";

import { useRef, useEffect } from "react";
import { type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

const processIcons = [
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  "M13 10V3L4 14h7v7l9-11h-7z",
];

export function ProcessPage({ locale }: { locale: Locale }) {
  const steps = locale === "th"
    ? [
        ["01", "Discovery", "ค้นหาโจทย์ร่วมกัน", "คุยเป้าหมาย กลุ่มผู้เรียน เนื้อหา และรูปแบบการใช้งานจริง"],
        ["02", "Narrative", "วางโครงเรื่อง", "เปลี่ยนข้อมูลเป็นโครงเรื่อง ลำดับภาพ และภาษาที่ผู้เรียนเข้าใจ"],
        ["03", "Creation", "ออกแบบและผลิต", "สร้างภาพ ตัวละคร Infographic และ Motion ตามทิศทางที่อนุมัติ"],
        ["04", "Quality", "ตรวจทานร่วมกัน", "ส่งรอบตรวจ แก้ไข และตรวจความถูกต้องของเนื้อหา"],
        ["05", "Deployment", "ส่งมอบพร้อมใช้", "ส่งไฟล์สำหรับ LMS ห้องอบรม การนำเสนอ หรือช่องทางที่ตกลง"],
      ]
    : [
        ["01", "Discovery", "Find the brief together", "Align goals, learners, content, and real-world use."],
        ["02", "Narrative", "Build the learning story", "Turn information into a visual sequence and learner-friendly language."],
        ["03", "Creation", "Design and produce", "Create visuals, characters, infographics, and motion in the approved direction."],
        ["04", "Quality", "Review together", "Share review rounds, refine, and check content accuracy."],
        ["05", "Deployment", "Deliver ready to use", "Prepare files for your LMS, workshop, presentation, or chosen channel."],
      ];

  return (
    <main>
      <PageIntro
        eyebrow="Our process"
        title={locale === "th" ? "เส้นทางโปร่งใสสู่ผลงานคุณภาพ" : "A clear path to quality work"}
        body={locale === "th"
          ? "ตั้งแต่การปรึกษาครั้งแรกจนถึงการส่งมอบไฟล์สุดท้าย"
          : "From the first conversation to final delivery."}
      />
      <section className="timeline section-pad">
        {steps.map(([number, en, title, body], i) => (
          <article key={number} className="process-step" style={{ "--step-delay": `${i * 0.12}s` } as React.CSSProperties}>
            <div className="step-number-wrap">
              <span className="step-number">{number}</span>
              <div className="step-line" />
            </div>
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={processIcons[i]} />
              </svg>
            </div>
            <div className="step-content">
              <span className="step-tag">{en.toUpperCase()}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}
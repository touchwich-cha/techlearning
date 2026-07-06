"use client";

import { type Locale } from "@/app/site-data";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <section className="contact-page section-pad">
        <div className="contact-content">
          <p className="eyebrow">Start a project</p>
          <h1>
            {locale === "th"
              ? "มีเนื้อหาอยู่แล้ว? มาทำให้คนอยากเปิดดู"
              : "Have the content? Let's make it worth opening."}
          </h1>
          <p className="lede">
            {locale === "th"
              ? "ส่งหัวข้อ เป้าหมาย กลุ่มผู้เรียน และกำหนดเวลาคร่าว ๆ มาได้เลย เราจะช่วยแนะนำรูปแบบสื่อที่เหมาะกับงาน"
              : "Send your topic, objective, audience, and rough timeline. We'll recommend the right learning format."}
          </p>
        </div>
        <div className="contact-methods">
          <a href="mailto:touchwich.cha@gmail.com" className="contact-link">
            <span className="contact-label">Email</span>
            <div className="contact-detail">
              <strong>touchwich.cha@gmail.com</strong>
              <small>{locale === "th" ? "ตอบกลับภายใน 24 ชั่วโมง" : "Replies within 24 hours"}</small>
            </div>
            <span className="contact-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </span>
          </a>
          <a href="tel:+66818121311" className="contact-link">
            <span className="contact-label">Phone</span>
            <div className="contact-detail">
              <strong>081-812-1311</strong>
              <small>{locale === "th" ? "จ-ศ 09:00–18:00 น." : "Mon–Fri 09:00–18:00"}</small>
            </div>
            <span className="contact-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
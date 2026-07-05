import type { Locale } from "@/app/site-data";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <section className="contact-page section-pad">
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
        <div className="contact-methods">
          <a href="mailto:touchwich.cha@gmail.com">
            <span>Email</span>
            <strong>touchwich.cha@gmail.com</strong>
            <b>↗</b>
          </a>
          <a href="tel:+66818121311">
            <span>Phone</span>
            <strong>081-812-1311</strong>
            <b>↗</b>
          </a>
        </div>
      </section>
    </main>
  );
}
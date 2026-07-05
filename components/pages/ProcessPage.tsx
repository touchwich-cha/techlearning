import { type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

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
        {steps.map(([number, en, title, body]) => (
          <article key={number}>
            <span>{number} / {en.toUpperCase()}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}
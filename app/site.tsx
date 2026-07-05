import Image from "next/image";
import Link from "next/link";
import { copy, nav, projectGroups, type Locale } from "./site-data";

function imagePath(slug: string, name: string) {
  return `/projects/${slug}/${name}`;
}

export function Shell({ locale, page, children }: { locale: Locale; page: string; children: React.ReactNode }) {
  const opposite = locale === "th" ? "en" : "th";
  const base = `/${locale}`;
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href={base} aria-label="TechLearning home">
          <span className="brand-mark">TL</span><span>TechLearning</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav[locale].map(([label, href]) => (
            <Link key={href || "home"} className={(page === href || (!page && !href)) ? "active" : ""} href={`${base}${href ? `/${href}` : ""}`}>{label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="language" href={`/${opposite}${page ? `/${page}` : ""}`}>{opposite.toUpperCase()}</Link>
          <Link className="button small" href={`${base}/contact`}>{copy[locale].quote}</Link>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div><span className="brand-mark">TL</span><strong>TechLearning</strong></div>
        <p>{locale === "th" ? "สื่อที่ช่วยให้คนเข้าใจ จดจำ และนำความรู้ไปใช้ได้จริง" : "Learning media people can understand, remember, and use."}</p>
        <div className="footer-links"><a href="mailto:touchwich.cha@gmail.com">touchwich.cha@gmail.com</a><a href="tel:+66818121311">081-812-1311</a></div>
      </footer>
    </div>
  );
}

export function ProjectCard({ project, locale, priority = false }: { project: (typeof projectGroups)[number]; locale: Locale; priority?: boolean }) {
  return (
    <article className={`project-card ${project.aspect}`}>
      <div className="project-image">
        <Image src={imagePath(project.slug, project.cover)} alt={project.title[locale]} fill sizes="(max-width: 720px) 100vw, 50vw" priority={priority} />
      </div>
      <div className="project-meta">
        <span>{project.type[locale]}</span><span>{String(project.images.length).padStart(2, "0")} {locale === "th" ? "ภาพ" : "visuals"}</span>
      </div>
      <h3>{project.title[locale]}</h3>
      <p>{project.description[locale]}</p>
    </article>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <main>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="lede">{t.intro}</p>
          <div className="hero-actions"><Link className="button" href={`/${locale}/portfolio`}>{t.viewWork}</Link><Link className="text-link" href={`/${locale}/services`}>{t.services} <span>↗</span></Link></div>
        </div>
        <div className="hero-visual">
          <Image src="/projects/gmp-pest-control/gmp-pest-control-01.png" alt={locale === "th" ? "ตัวอย่างสื่ออบรม GMP" : "GMP training media example"} fill sizes="(max-width: 900px) 100vw, 48vw" priority />
          <span className="visual-label">GMP / Visual learning / 2026</span>
        </div>
      </section>
      <div className="proof-strip">{t.proof.map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div>
      <section className="section-pad work-section">
        <div className="section-heading"><p className="eyebrow">Selected work / 2026</p><h2>{t.selected}</h2><p>{t.selectedSub}</p></div>
        <div className="project-grid featured">{projectGroups.slice(0, 4).map((project, i) => <ProjectCard key={project.slug} project={project} locale={locale} priority={i < 2} />)}</div>
        <Link className="button outline center-button" href={`/${locale}/portfolio`}>{locale === "th" ? "ดูผลงานทั้ง 5 ชุด" : "Explore all 5 series"}</Link>
      </section>
      <ServicesPreview locale={locale} />
      <CallToAction locale={locale} />
    </main>
  );
}

function ServicesPreview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="services-block section-pad"><div className="section-heading inverted"><p className="eyebrow">Capabilities</p><h2>{t.services}</h2></div><div className="service-list">{t.serviceItems.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>;
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  return <main><PageIntro eyebrow="Portfolio / 2026" title={locale === "th" ? "ผลงานที่เล่าเรื่องด้วยภาพ" : "Work that makes ideas visible"} body={locale === "th" ? "เปิดดูแต่ละชุดเพื่อสำรวจภาพทั้งหมด 37 ภาพ ตั้งแต่งานออกแบบระบบ ไปจนถึงสื่ออบรม GMP แบบเล่าเรื่อง" : "Open each series to explore all 37 visuals, from system design to story-led GMP training."} /><section className="portfolio-list section-pad">{projectGroups.map((project, index) => <details key={project.slug} className="project-detail" open={index === 0}><summary><span className="detail-index">0{index + 1}</span><div><p>{project.type[locale]}</p><h2>{project.title[locale]}</h2></div><span className="detail-count">{project.images.length} {locale === "th" ? "ภาพ" : "visuals"} <b>＋</b></span></summary><p className="detail-description">{project.description[locale]}</p><div className={`gallery-grid ${project.aspect}`}>{project.images.map((image, imageIndex) => <figure key={image}><Image src={imagePath(project.slug, image)} alt={`${project.title[locale]} — ${imageIndex + 1}`} width={project.aspect === "wide" ? 1536 : 1024} height={project.aspect === "wide" ? 864 : 1024} sizes="(max-width: 720px) 100vw, 50vw" /><figcaption>{String(imageIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}</figcaption></figure>)}</div></details>)}</section><CallToAction locale={locale} /></main>;
}

function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="page-intro section-pad"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{body}</p></section>;
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const extra = locale === "th" ? [["05", "Corporate", "Presentation และ Company Profile ที่ดูเป็นมืออาชีพและสะท้อนภาพลักษณ์องค์กร"], ["06", "Onboarding", "สื่อปฐมนิเทศที่สื่อสารวัฒนธรรม กฎ และสิ่งที่พนักงานต้องรู้"]] : [["05", "Corporate", "Strategic presentations and company profiles that reflect your organization."], ["06", "Onboarding", "Warm, clear orientation media for culture, rules, and essential knowledge."]];
  return <main><PageIntro eyebrow="Capabilities" title={locale === "th" ? "บริการออกแบบสื่อการเรียนรู้" : "Learning media services"} body={locale === "th" ? "เปลี่ยนข้อมูลที่ซับซ้อนให้เป็นประสบการณ์เรียนรู้ที่เข้าใจง่ายและน่าจดจำ" : "Turn complex information into clear, memorable learning experiences."} /><section className="service-page section-pad">{[...t.serviceItems, ...extra].map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}</section><CallToAction locale={locale} /></main>;
}

export function ProcessPage({ locale }: { locale: Locale }) {
  const steps = locale === "th" ? [["01", "Discovery", "ค้นหาโจทย์ร่วมกัน", "คุยเป้าหมาย กลุ่มผู้เรียน เนื้อหา และรูปแบบการใช้งานจริง"], ["02", "Narrative", "วางโครงเรื่อง", "เปลี่ยนข้อมูลเป็นโครงเรื่อง ลำดับภาพ และภาษาที่ผู้เรียนเข้าใจ"], ["03", "Creation", "ออกแบบและผลิต", "สร้างภาพ ตัวละคร Infographic และ Motion ตามทิศทางที่อนุมัติ"], ["04", "Quality", "ตรวจทานร่วมกัน", "ส่งรอบตรวจ แก้ไข และตรวจความถูกต้องของเนื้อหา"], ["05", "Deployment", "ส่งมอบพร้อมใช้", "ส่งไฟล์สำหรับ LMS ห้องอบรม การนำเสนอ หรือช่องทางที่ตกลง"]] : [["01", "Discovery", "Find the brief together", "Align goals, learners, content, and real-world use."], ["02", "Narrative", "Build the learning story", "Turn information into a visual sequence and learner-friendly language."], ["03", "Creation", "Design and produce", "Create visuals, characters, infographics, and motion in the approved direction."], ["04", "Quality", "Review together", "Share review rounds, refine, and check content accuracy."], ["05", "Deployment", "Deliver ready to use", "Prepare files for your LMS, workshop, presentation, or chosen channel."]];
  return <main><PageIntro eyebrow="Our process" title={locale === "th" ? "เส้นทางโปร่งใสสู่ผลงานคุณภาพ" : "A clear path to quality work"} body={locale === "th" ? "ตั้งแต่การปรึกษาครั้งแรกจนถึงการส่งมอบไฟล์สุดท้าย" : "From the first conversation to final delivery."} /><section className="timeline section-pad">{steps.map(([number, en, title, body]) => <article key={number}><span>{number} / {en.toUpperCase()}</span><h2>{title}</h2><p>{body}</p></article>)}</section><CallToAction locale={locale} /></main>;
}

export function AboutPage({ locale }: { locale: Locale }) {
  const groups = locale === "th" ? [["โรงงานและอุตสาหกรรม", "สื่อ Safety, GMP, HACCP, SOP และปฐมนิเทศที่สื่อสารกับพนักงานทุกระดับได้ชัดเจน"], ["องค์กรและธุรกิจ", "E-Learning, Company Profile และ Presentation ที่ช่วยให้เรื่องธุรกิจซับซ้อนเข้าใจง่ายขึ้น"], ["โรงเรียนและสถาบัน", "สื่อการสอนแบบการ์ตูนและ Infographic ที่เหมาะกับผู้เรียนหลายช่วงวัย"]] : [["Factories & industry", "Safety, GMP, HACCP, SOP, and orientation media for every level of the workforce."], ["Organizations & business", "E-Learning, company profiles, and presentations that clarify complex business ideas."], ["Schools & institutions", "Character-led teaching media and infographics designed for different age groups."]];
  return <main><PageIntro eyebrow="About TechLearning" title={locale === "th" ? "ความรู้ที่ดีควรเข้าถึงคนได้จริง" : "Good knowledge should reach people"} body={locale === "th" ? "เราออกแบบสื่อที่ช่วยให้คนเข้าใจ จดจำ และนำความรู้ไปใช้ได้ โดยไม่ลดทอนความถูกต้องของเนื้อหา" : "We design media that helps people understand, remember, and use knowledge without losing accuracy."} /><section className="about-grid section-pad"><div className="about-values">Expert<br />Reliable<br />Modern<br /><em>Creative</em></div><div className="audiences">{groups.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section><CallToAction locale={locale} /></main>;
}

export function ContactPage({ locale }: { locale: Locale }) {
  return <main><section className="contact-page section-pad"><p className="eyebrow">Start a project</p><h1>{locale === "th" ? "มีเนื้อหาอยู่แล้ว? มาทำให้คนอยากเปิดดู" : "Have the content? Let's make it worth opening."}</h1><p className="lede">{locale === "th" ? "ส่งหัวข้อ เป้าหมาย กลุ่มผู้เรียน และกำหนดเวลาคร่าว ๆ มาได้เลย เราจะช่วยแนะนำรูปแบบสื่อที่เหมาะกับงาน" : "Send your topic, objective, audience, and rough timeline. We'll recommend the right learning format."}</p><div className="contact-methods"><a href="mailto:touchwich.cha@gmail.com"><span>Email</span><strong>touchwich.cha@gmail.com</strong><b>↗</b></a><a href="tel:+66818121311"><span>Phone</span><strong>081-812-1311</strong><b>↗</b></a></div></section></main>;
}

function CallToAction({ locale }: { locale: Locale }) {
  return <section className="cta section-pad"><p className="eyebrow">Next project</p><h2>{locale === "th" ? "พร้อมเปลี่ยนเนื้อหาให้เป็นการเรียนรู้ที่คนจดจำ?" : "Ready to make your content memorable?"}</h2><Link className="button light" href={`/${locale}/contact`}>{copy[locale].quote} <span>↗</span></Link></section>;
}

import Image from "next/image";
import Link from "next/link";
import { copy, projectGroups, type Locale } from "@/app/site-data";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ServicesPreview } from "@/components/shared/ServicesPreview";
import { CallToAction } from "@/components/shared/CallToAction";
import { VideoCard } from "@/components/shared/VideoCard";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <main>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="lede">{t.intro}</p>
          <div className="hero-actions">
            <Link className="button" href={`/${locale}/portfolio`}>{t.viewWork}</Link>
            <Link className="text-link" href={`/${locale}/services`}>{t.services} <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image src="/projects/gmp-pest-control/gmp-pest-control-01.png" alt={locale === "th" ? "ตัวอย่างสื่ออบรม GMP" : "GMP training media example"} fill sizes="(max-width: 900px) 100vw, 48vw" priority />
          <span className="visual-label">GMP / Visual learning / 2026</span>
        </div>
      </section>
      <div className="proof-strip">
        {t.proof.map((item, i) => (
          <span key={item}><b>0{i + 1}</b>{item}</span>
        ))}
      </div>
      <section className="section-pad work-section">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2026</p>
          <h2>{t.selected}</h2>
          <p>{t.selectedSub}</p>
        </div>
        <div className="project-grid featured">
          {projectGroups.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.slug} project={project} locale={locale} priority={i < 2} />
          ))}
        </div>
        <Link className="button outline center-button" href={`/${locale}/portfolio`}>
          {locale === "th" ? "ดูผลงานทั้ง 5 ชุด" : "Explore all 5 series"}
        </Link>
      </section>
      <VideoCard locale={locale} />
      <ServicesPreview locale={locale} />
      <CallToAction locale={locale} />
    </main>
  );
}
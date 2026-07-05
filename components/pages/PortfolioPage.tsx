import Image from "next/image";
import { projectGroups, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

function imagePath(slug: string, name: string) {
  return `/projects/${slug}/${name}`;
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <PageIntro
        eyebrow="Portfolio / 2026"
        title={locale === "th" ? "ผลงานที่เล่าเรื่องด้วยภาพ" : "Work that makes ideas visible"}
        body={locale === "th"
          ? "เปิดดูแต่ละชุดเพื่อสำรวจภาพทั้งหมด 37 ภาพ ตั้งแต่งานออกแบบระบบ ไปจนถึงสื่ออบรม GMP แบบเล่าเรื่อง"
          : "Open each series to explore all 37 visuals, from system design to story-led GMP training."}
      />
      <section className="portfolio-list section-pad">
        {projectGroups.map((project, index) => (
          <details key={project.slug} className="project-detail" open={index === 0}>
            <summary>
              <span className="detail-index">0{index + 1}</span>
              <div>
                <p>{project.type[locale]}</p>
                <h2>{project.title[locale]}</h2>
              </div>
              <span className="detail-count">
                {project.images.length} {locale === "th" ? "ภาพ" : "visuals"} <b>＋</b>
              </span>
            </summary>
            <p className="detail-description">{project.description[locale]}</p>
            <div className={`gallery-grid ${project.aspect}`}>
              {project.images.map((image, imageIndex) => (
                <figure key={image}>
                  <Image
                    src={imagePath(project.slug, image)}
                    alt={`${project.title[locale]} — ${imageIndex + 1}`}
                    width={project.aspect === "wide" ? 1536 : 1024}
                    height={project.aspect === "wide" ? 864 : 1024}
                    sizes="(max-width: 720px) 100vw, 50vw"
                  />
                  <figcaption>
                    {String(imageIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </details>
        ))}
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}
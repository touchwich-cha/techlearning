"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projectGroups, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

function imagePath(slug: string, name: string) {
  return `/projects/${slug}/${name}`;
}

const totalImages = projectGroups.reduce((count, project) => count + project.images.length, 0);

export function PortfolioPage({ locale }: { locale: Locale }) {
  const [openIndex, setOpenIndex] = useState(0);
  const detailRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    const index = projectGroups.findIndex((project) => project.slug === hash);
    if (index < 0) return;
    const detail = detailRefs.current[index];
    if (!detail) return;
    detail.open = true; // fires onToggle, which syncs openIndex
    requestAnimationFrame(() => detail.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  return (
    <main>
      <PageIntro
        eyebrow="Learning media / 2026"
        title={locale === "th" ? "ผลงานสื่อที่เล่าเรื่องด้วยภาพ" : "Media work that makes ideas visible"}
        body={locale === "th"
          ? `เปิดดูแต่ละชุดเพื่อสำรวจทั้งหมด ${totalImages} ภาพ — จากซีรีส์ Food Safety แบบ 3D ชุดใหม่ ไปจนถึงงานออกแบบระบบการเรียนรู้`
          : `Open each series to explore all ${totalImages} visuals — from the new 3D food-safety series to learning-system design.`}
      />
      <section className="portfolio-list section-pad">
        {projectGroups.map((project, index) => (
          <details
            key={project.slug}
            id={project.slug}
            ref={(el) => { detailRefs.current[index] = el; }}
            className="project-detail"
            open={index === openIndex}
            onToggle={(e) => {
              if (e.currentTarget.open) setOpenIndex(index);
            }}
          >
            <summary>
              <span className="detail-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{project.type[locale]}</p>
                <h2>{project.title[locale]}</h2>
              </div>
              <span className="detail-count">
                {project.images.length} {locale === "th" ? "ภาพ" : "visuals"}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="detail-description">{project.description[locale]}</p>
            <div className={`gallery-grid ${project.aspect}`}>
              {project.images.map((image, imageIndex) => (
                <figure key={image}>
                  <div className="gallery-image-wrap">
                    <Image
                      src={imagePath(project.slug, image)}
                      alt={`${project.title[locale]} — ${imageIndex + 1}`}
                      width={project.aspect === "wide" ? 1536 : 1024}
                      height={project.aspect === "wide" ? 864 : 1024}
                      sizes="(max-width: 720px) 100vw, 50vw"
                    />
                  </div>
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

import Image from "next/image";
import Link from "next/link";
import { projectGroups, type Locale } from "@/app/site-data";

function imagePath(slug: string, name: string) {
  return `/projects/${slug}/${name}`;
}

export function ProjectCard({ project, locale, priority = false }: { project: (typeof projectGroups)[number]; locale: Locale; priority?: boolean }) {
  return (
    <article className={`project-card ${project.aspect}`}>
      <div className="project-image">
        <Image src={imagePath(project.slug, project.cover)} alt={project.title[locale]} fill sizes="(max-width: 720px) 100vw, 50vw" priority={priority} />
        <div className="project-image-overlay" />
        <div className="project-image-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          {String(project.images.length).padStart(2, "0")}
        </div>
      </div>
      <div className="project-meta">
        <span>{project.type[locale]}</span>
        <span>{String(project.images.length).padStart(2, "0")} {locale === "th" ? "ภาพ" : "visuals"}</span>
      </div>
      <h3>{project.title[locale]}</h3>
      <p>{project.description[locale]}</p>
      <div className="project-card-footer">
        <span className="project-explore">
          {locale === "th" ? "ดูรายละเอียด" : "Explore"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </article>
  );
}
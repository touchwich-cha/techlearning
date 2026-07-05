import Image from "next/image";
import { projectGroups, type Locale } from "@/app/site-data";

function imagePath(slug: string, name: string) {
  return `/projects/${slug}/${name}`;
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
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { copy, projectGroups, proofStats, type Locale } from "@/app/site-data";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ServicesPreview } from "@/components/shared/ServicesPreview";
import { CallToAction } from "@/components/shared/CallToAction";
import { VideoCard } from "@/components/shared/VideoCard";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = Math.ceil(value / 30);
          const timer = setInterval(() => {
            current += step;
            if (current >= value) {
              current = value;
              clearInterval(timer);
            }
            setDisplay(current);
          }, 40);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="lede">{t.intro}</p>
          <div className="hero-actions">
            <Link className="button" href={`/${locale}/portfolio`}>
              {t.viewWork}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link className="button outline" href={`/${locale}/hr-systems`}>
              {t.viewSystems}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/projects/factory-lighting/factory-lighting-01.webp"
            alt={locale === "th" ? "ตัวอย่างสื่ออบรม Food Safety แบบ 3D" : "3D food-safety training media example"}
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            priority
          />
          <span className="visual-label">Food Safety Thailand series / 2026</span>
          <div
            className="hero-visual-glow"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x - (typeof window !== "undefined" ? window.innerWidth * 0.55 : 0)}px ${mousePos.y - 100}px, rgba(56,178,248,0.08), transparent 50%)`,
            }}
          />
        </div>
      </section>

      {/* ─── PROOF STRIP ─── */}
      <div className="proof-strip">
        {proofStats.map((stat) => (
          <span key={stat.label.en}>
            <b><AnimatedNumber value={stat.value} suffix={stat.suffix} /></b>
            {stat.label[locale]}
          </span>
        ))}
      </div>

      {/* ─── SELECTED WORK ─── */}
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
        <div className="center-button">
          <Link className="button outline" href={`/${locale}/portfolio`}>
            {locale === "th" ? "ดูผลงานสื่อทั้งหมด" : "Explore all media work"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <VideoCard locale={locale} />
      <ServicesPreview locale={locale} />
      <CallToAction locale={locale} />
    </main>
  );
}

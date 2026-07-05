import Link from "next/link";
import type { Locale } from "@/app/site-data";

interface VideoCardProps {
  locale: Locale;
}

export function VideoCard({ locale }: VideoCardProps) {
  const youtubeVideoId = "k9RVdPM4RZM";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&color=white`;

  return (
    <section className="video-section section-pad" style={{ paddingBlock: "clamp(64px, 8vw, 120px)" }}>
      <div className="section-heading">
        <p className="eyebrow">
          {locale === "th" ? "วิดีโอแนะนำ" : "Featured Video"}
        </p>
        <h2>
          {locale === "th"
            ? "ดูตัวอย่างผลงานของเรา"
            : "See our work in action"}
        </h2>
        <p>
          {locale === "th"
            ? "ชมเบื้องหลังการออกแบบสื่อการเรียนรู้สำหรับองค์กร — จากแนวคิดสู่ผลงานที่ใช้งานได้จริง"
            : "Behind the scenes of TechLearning — from concept to real-world learning media."}
        </p>
      </div>
      <div className="video-wrapper" style={{ marginTop: "var(--spacing-lg)" }}>
        <iframe
          src={embedUrl}
          title={locale === "th" ? "วิดีโอแนะนำ TechLearning" : "TechLearning featured video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div style={{ marginTop: "var(--spacing-md)" }}>
        <Link
          className="button outline"
          href={`https://youtu.be/${youtubeVideoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {locale === "th" ? "เปิดใน YouTube" : "Watch on YouTube"} <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
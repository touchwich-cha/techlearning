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
        <div className="video-play-overlay">
          <div className="video-play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <iframe
          src={embedUrl}
          title={locale === "th" ? "วิดีโอแนะนำ TechLearning" : "TechLearning featured video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="video-actions" style={{ marginTop: "var(--spacing-md)", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Link
          className="button outline"
          href={`https://youtu.be/${youtubeVideoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {locale === "th" ? "เปิดใน YouTube" : "Watch on YouTube"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
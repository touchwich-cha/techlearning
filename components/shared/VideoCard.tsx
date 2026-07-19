import { videos, type Locale } from "@/app/site-data";

export function VideoCard({ locale }: { locale: Locale }) {
  return (
    <section className="video-section section-pad" style={{ paddingBlock: "clamp(64px, 8vw, 120px)" }}>
      <div className="section-heading">
        <p className="eyebrow">
          {locale === "th" ? "วิดีโอเผยแพร่จริง" : "Published videos"}
        </p>
        <h2>
          {locale === "th"
            ? "ตัวอย่างวิดีโอจริงจากซีรีส์ GMP420"
            : "Real published work — the GMP420 series"}
        </h2>
        <p>
          {locale === "th"
            ? "ผลงานวิดีโอที่เผยแพร่จริงบนช่อง Food Safety Thailand — ทั้งจอกว้าง 16:9 สำหรับห้องอบรม และแนวตั้ง 9:16 สำหรับมือถือ"
            : "Videos published on the Food Safety Thailand channel — widescreen 16:9 for the training room and vertical 9:16 for mobile."}
        </p>
      </div>
      <div className="video-duo">
        {videos.map((video) => (
          <figure key={video.id} className={`video-item ${video.aspect}`}>
            <div className={`video-wrapper ${video.aspect}`}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&color=white`}
                title={video.title[locale]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>{video.title[locale]}</span>
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer">
                YouTube ↗
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

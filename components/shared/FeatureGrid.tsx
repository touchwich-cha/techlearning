import { featureHighlights, type Locale } from "@/app/site-data";

const featureIcons: Record<(typeof featureHighlights)[number]["icon"], string> = {
  scene: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  video: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  inbox: "M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z",
  rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  chart: "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
};

export function FeatureGrid({ locale }: { locale: Locale }) {
  return (
    <section className="feature-grid-section section-pad">
      <div className="feature-grid-heading reveal">
        <p className="eyebrow">
          {locale === "th" ? "แพลตฟอร์มเดียว ครบทั้งสื่อและระบบ" : "One platform, media and systems"}
        </p>
        <h2>
          {locale === "th" ? (
            <>ทุกฟีเจอร์ที่ทำให้งาน HR <span className="gradient-text">เบาลงจริง</span></>
          ) : (
            <>Every feature that makes HR work <span className="gradient-text">actually lighter</span></>
          )}
        </h2>
      </div>
      <div className="feature-grid">
        {featureHighlights.map((feature, i) => (
          <article key={feature.title.en} className={`feature-card reveal`} style={{ "--reveal-delay": `${(i % 3) * 0.1}s` } as React.CSSProperties}>
            <div className={`feature-icon-badge tone-${feature.tone}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={featureIcons[feature.icon]} />
              </svg>
            </div>
            <h3>{feature.title[locale]}</h3>
            <p>{feature.description[locale]}</p>
            <div className="feature-tags">
              {feature.tags.map((tag) => (
                <span key={tag.en} className="feature-tag">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {tag[locale]}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

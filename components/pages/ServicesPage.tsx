import Link from "next/link";
import { servicePillars, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

const pillarIcons: Record<string, string[]> = {
  media: [
    "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  ],
  systems: [
    "M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z",
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0",
    "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  ],
};

export function ServicesPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <PageIntro
        eyebrow="Services"
        title={locale === "th" ? "บริการของเรา — สื่ออบรมและระบบงาน HR" : "Our services — training media & HR systems"}
        body={locale === "th"
          ? "สองเสาหลักที่ออกแบบมาเพื่อแก้ปัญหาที่ทีม HR เจอบ่อยที่สุด ทั้งฝั่งการสื่อสารและฝั่งงานระบบ"
          : "Two pillars built around the problems HR teams meet most — communication and operations."}
      />
      {servicePillars.map((pillar) => (
        <section key={pillar.id} className="pillar-section">
          <div className="section-heading section-pad" style={{ paddingBottom: 0 }}>
            <p className="eyebrow">{pillar.eyebrow[locale]}</p>
            <h2>{pillar.pain[locale]}</h2>
            <p>{pillar.intro[locale]}</p>
          </div>
          <div className="service-page section-pad">
            {pillar.items.map(([number, title, description], i) => (
              <article key={number} className="service-card" style={{ "--card-delay": `${i * 0.1}s` } as React.CSSProperties}>
                <div className="service-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={pillarIcons[pillar.id][i % pillarIcons[pillar.id].length]} />
                  </svg>
                </div>
                <span className="service-tag">{number}</span>
                <h2>{title[locale]}</h2>
                <p>{description[locale]}</p>
                <div className="service-card-glow" />
              </article>
            ))}
          </div>
          <div className="center-button" style={{ paddingBottom: 24 }}>
            <Link className="button outline" href={`/${locale}/${pillar.href}`}>
              {pillar.cta[locale]}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      ))}
      <CallToAction locale={locale} />
    </main>
  );
}

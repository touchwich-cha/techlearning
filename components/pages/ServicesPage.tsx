import Link from "next/link";
import { servicePillars, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";
import { pillarIcons } from "@/components/shared/pillarIcons";

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

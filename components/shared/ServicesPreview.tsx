import Link from "next/link";
import { copy, servicePillars, type Locale } from "@/app/site-data";

export function ServicesPreview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="services-block section-pad">
      <div className="section-heading inverted">
        <p className="eyebrow">{locale === "th" ? "สองเสาหลัก" : "Two pillars"}</p>
        <h2>{t.services}</h2>
      </div>
      <div className="pillar-grid">
        {servicePillars.map((pillar) => (
          <article key={pillar.id} className="pillar-card">
            <p className="pillar-eyebrow">{pillar.eyebrow[locale]}</p>
            <h3>{pillar.pain[locale]}</h3>
            <p className="pillar-intro">{pillar.intro[locale]}</p>
            <ul className="pillar-items">
              {pillar.items.map(([number, title]) => (
                <li key={number}><span>{number}</span>{title[locale]}</li>
              ))}
            </ul>
            <Link className="button light" href={`/${locale}/${pillar.href}`}>
              {pillar.cta[locale]}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

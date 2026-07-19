import type { CaseStudy, Locale } from "@/app/site-data";

const caseIcons: Record<CaseStudy["icon"], string> = {
  inbox:
    "M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z",
  rocket:
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  chart: "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  bell: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0",
  chat: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
};

const labels = {
  pain: { th: "โจทย์", en: "The problem" },
  solution: { th: "สิ่งที่ระบบทำ", en: "What the system does" },
  outcome: { th: "ผลลัพธ์", en: "Outcome" },
} as const;

export function CaseStudyCard({ study, locale, index }: { study: CaseStudy; locale: Locale; index: number }) {
  const live = study.status.en === "In production";
  return (
    <article className="case-card" style={{ "--card-delay": `${index * 0.08}s` } as React.CSSProperties}>
      <div className="case-card-top">
        <div className="service-icon-wrap">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={caseIcons[study.icon]} />
          </svg>
        </div>
        <div className="case-badges">
          <span className="sector-tag">{study.sector[locale]}</span>
          <span className={`status-badge ${live ? "live" : "done"}`}>{study.status[locale]}</span>
        </div>
      </div>
      <h2>{study.title[locale]}</h2>
      <p className="case-pain">
        <strong>{labels.pain[locale]}</strong>
        {study.pain[locale]}
      </p>
      <div className="case-solution">
        <strong>{labels.solution[locale]}</strong>
        <ul>
          {study.solution[locale].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="case-outcome">
        <strong>{labels.outcome[locale]}</strong>
        {study.outcome[locale]}
      </p>
      <div className="flow-strip" aria-label={locale === "th" ? "ขั้นตอนการทำงานของระบบ" : "System flow"}>
        {study.flow[locale].map((step) => (
          <span key={step} className="flow-chip">{step}</span>
        ))}
      </div>
      <div className="case-foot">
        {study.stack.map((tech) => (
          <span key={tech} className="stack-badge">{tech}</span>
        ))}
        {study.metric && <span className="metric-chip">{study.metric[locale]}</span>}
      </div>
    </article>
  );
}

import { copy, type Locale } from "@/app/site-data";

export function ServicesPreview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="services-block section-pad">
      <div className="section-heading inverted">
        <p className="eyebrow">Capabilities</p>
        <h2>{t.services}</h2>
      </div>
      <div className="service-list">
        {t.serviceItems.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
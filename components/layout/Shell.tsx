import Image from "next/image";
import Link from "next/link";
import { copy, nav, type Locale } from "@/app/site-data";

function imagePath(slug: string, name: string) {
  return `/projects/${slug}/${name}`;
}

export function Shell({ locale, page, children }: { locale: Locale; page: string; children: React.ReactNode }) {
  const opposite = locale === "th" ? "en" : "th";
  const base = `/${locale}`;
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href={base} aria-label="TechLearning home">
          <span className="brand-mark">TL</span><span>TechLearning</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav[locale].map(([label, href]) => (
            <Link key={href || "home"} className={(page === href || (!page && !href)) ? "active" : ""} href={`${base}${href ? `/${href}` : ""}`}>{label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="language" href={`/${opposite}${page ? `/${page}` : ""}`}>{opposite.toUpperCase()}</Link>
          <Link className="button small" href={`${base}/contact`}>{copy[locale].quote}</Link>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div><span className="brand-mark">TL</span><strong>TechLearning</strong></div>
        <p>{locale === "th" ? "สื่อที่ช่วยให้คนเข้าใจ จดจำ และนำความรู้ไปใช้ได้จริง" : "Learning media people can understand, remember, and use."}</p>
        <div className="footer-links"><a href="mailto:touchwich.cha@gmail.com">touchwich.cha@gmail.com</a><a href="tel:+66818121311">081-812-1311</a></div>
      </footer>
    </div>
  );
}
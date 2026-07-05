export function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="page-intro section-pad">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{body}</p>
    </section>
  );
}
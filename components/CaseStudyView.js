import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';
import { ui } from '../content/site';
import { withBase } from '../lib/paths';

const COLORS = ['yellow', 'pink', 'green', 'purple', 'blue', 'orange'];

export default function CaseStudyView({ cs, hasBlog = true }) {
  const t = ui.en;
  const meta = [
    [t.work.client, cs.client],
    [t.work.role, cs.role],
    [t.work.year, cs.year],
    [t.work.duration, cs.duration],
  ].filter(([, value]) => value);
  const start = COLORS.indexOf(cs.color);

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <Nav lang="en" page="work" hasWork hasBlog={hasBlog} />
      <main id="main" className="section section--blog">
        <article className="wrap wrap--narrow">
          <p>
            <a className="back" href={withBase('/#case-studies')}>← {t.work.back}</a>
          </p>

          <header className="post-head">
            <p className="kicker">
              {t.work.kickerDetail}
              {cs.draft && <span className="tag bg-orange cs-draft">{t.work.draft}</span>}
            </p>
            <h1 className="post-title">{cs.title}</h1>
          </header>

          {meta.length > 0 && (
            <dl className={`cs-meta bg-${cs.color}`}>
              {meta.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {cs.highlights.length > 0 && (
            <ul className="cs-stats">
              {cs.highlights.map((h, i) => (
                <li key={h.value + h.label} className={`bg-${COLORS[(start + i + 1) % COLORS.length]}`}>
                  <strong>{h.value}</strong>
                  <span>{h.label}</span>
                </li>
              ))}
            </ul>
          )}

          {cs.cover && <img className="cs-cover" src={withBase(cs.cover)} alt="" />}

          {/* The HTML comes from our own Markdown files in content/case-studies. */}
          <div className="prose prose--case card" dangerouslySetInnerHTML={{ __html: cs.html }} />

          <aside className="cs-cta">
            <div>
              <h2 className="cs-cta__title">{t.work.ctaTitle}</h2>
              <p>{t.work.ctaText}</p>
            </div>
            <a className="btn btn--yellow" href={withBase('/#contact')}>{t.work.ctaButton}</a>
          </aside>

          {cs.next && (
            <p className="cs-next">
              <span className="kicker">{t.work.next}</span>
              <Link href={`/case-studies/${cs.next.slug}/`}>{cs.next.title} →</Link>
            </p>
          )}
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}

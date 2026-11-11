import Link from 'next/link';
import { withBase } from '../lib/paths';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CaseStudyCards({ items, labels }) {
  return (
    <ul className="work-grid">
      {items.map((c) => (
        <li key={c.slug}>
          <article className="work-card">
            <div className={`work-card__band bg-${c.color}`}>
              <span className="work-card__client">{c.client}</span>
              <span className="work-card__year">{c.year}</span>
            </div>
            {c.cover && (
              <img className="work-card__cover" src={withBase(c.cover)} alt="" loading="lazy" />
            )}
            <div className="work-card__body">
              {c.draft && <span className="tag bg-orange work-card__draft">{labels.draft}</span>}
              <h3 className="work-card__title">
                {/* the link's ::after covers the whole card, so the card is one big target */}
                <Link className="work-card__link" href={`/case-studies/${c.slug}/`}>
                  {c.title}
                </Link>
              </h3>
              {c.summary && <p className="work-card__summary">{c.summary}</p>}
              {c.role && <p className="work-card__role">{c.role}</p>}
              {c.tags.length > 0 && (
                <p className="work-card__tags">
                  {c.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </p>
              )}
              <span className="work-card__more" aria-hidden="true">
                {labels.read} <ArrowIcon />
              </span>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

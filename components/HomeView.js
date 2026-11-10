import Nav from './Nav';
import Footer from './Footer';
import CvList from './CvList';
import ContactForm from './ContactForm';
import { site, ui, jobs, education, skills } from '../content/site';
import { withBase } from '../lib/paths';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

export default function HomeView({ lang = 'en' }) {
  const t = ui[lang];
  const localizedJobs = jobs.map((job) => ({
    id: job.id,
    company: job.company,
    color: job.color,
    role: job.role[lang],
    period: `${job.start[lang]} – ${job.end ? job.end[lang] : t.cv.present}`,
    location: job.location[lang],
    bullets: job.bullets[lang],
    skills: job.skills,
  }));
  const isPlaceholderEmail = site.email.endsWith('@example.com');

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <Nav lang={lang} page="home" />
      <main id="main">
        {/* ---------- Home / About ---------- */}
        <section id="about" className="hero">
          <div className="wrap hero__grid">
            <div className="hero__text">
              <p className="kicker">{t.hero.hello}</p>
              <h1 className="hero__title">
                {t.hero.title.map((line) => {
                  const mark = t.hero.titleMark;
                  const at = mark ? line.indexOf(mark) : -1;
                  return (
                    <span key={line} className="hero__line">
                      {at < 0 ? (
                        line
                      ) : (
                        <>
                          {line.slice(0, at)}
                          <span className="hero__mark">{mark}</span>
                          {line.slice(at + mark.length)}
                        </>
                      )}
                    </span>
                  );
                })}
              </h1>
              <p className="hero__intro">{t.hero.intro}</p>
              <div className="hero__actions">
                <a className="btn btn--yellow" href="#cv">{t.hero.ctaCv}</a>
                <a className="btn btn--ghost" href="#contact">{t.hero.ctaContact}</a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="portrait">
                {/* three cards behind the photo; each one floats on its own */}
                <span className="portrait__layer portrait__layer--3 bg-green" aria-hidden="true" />
                <span className="portrait__layer portrait__layer--2 bg-purple" aria-hidden="true" />
                <span className="portrait__layer portrait__layer--1 bg-yellow" aria-hidden="true" />
                <span className="portrait__badge portrait__badge--top bg-green">{t.hero.badgeRole}</span>
                <div className="portrait__frame">
                  <img
                    src={withBase('/images/bence.webp')}
                    alt={t.hero.photoAlt}
                    width="900"
                    height="1126"
                  />
                </div>
                <span className="portrait__badge portrait__badge--bottom bg-yellow">{t.hero.badgeSince}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CV ---------- */}
        <section id="cv" className="section section--cv">
          <div className="wrap">
            <header className="section__head">
              <div>
                <p className="kicker">{t.cv.kicker}</p>
                <h2 className="section__title">{t.cv.title}</h2>
                <p className="section__lead">{t.cv.lead}</p>
              </div>
              <a
                className="btn btn--purple"
                href={withBase(`/cv/bence-toth-cv-${lang}.pdf`)}
                download
              >
                <DownloadIcon /> {t.cv.download}
              </a>
            </header>

            <div className="cv-grid">
              <div>
                <h3 className="sub">{t.cv.experience}</h3>
                <CvList
                  jobs={localizedJobs}
                  labels={{ expand: t.cv.expand, collapse: t.cv.collapse }}
                />
              </div>
              <aside className="cv-side">
                <div className="card bg-blue">
                  <h3 className="sub">{t.cv.education}</h3>
                  <ul className="edu">
                    {education.map((e) => (
                      <li key={e.years}>
                        <strong>{e.school[lang]}</strong>
                        <span>{e.degree[lang]}</span>
                        {e.note && <span className="edu__note">{e.note[lang]}</span>}
                        <span className="edu__years">{e.years}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="sub">{t.cv.skills}</h3>
                  <p className="chips">
                    {skills.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section section--contact">
          <div className="wrap">
            <header className="section__head">
              <div>
                <p className="kicker">{t.contact.kicker}</p>
                <h2 className="section__title">{t.contact.title}</h2>
                <p className="section__lead">{t.contact.lead}</p>
              </div>
            </header>
            <div className="contact-grid">
              <ul className="links">
                <li>
                  <a className="link-card bg-blue" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="link-card__label">LinkedIn</span>
                    <span className="link-card__value">{site.linkedinLabel}</span>
                    <ArrowIcon />
                  </a>
                </li>
                <li>
                  <a className="link-card bg-green" href={site.github} target="_blank" rel="noopener noreferrer">
                    <span className="link-card__label">GitHub</span>
                    <span className="link-card__value">{site.githubLabel}</span>
                    <ArrowIcon />
                  </a>
                </li>
                {!isPlaceholderEmail && (
                  <li>
                    <a className="link-card bg-yellow" href={`mailto:${site.email}`}>
                      <span className="link-card__label">E-mail</span>
                      <span className="link-card__value">{site.email}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                )}
              </ul>
              <div className="card card--form">
                <ContactForm labels={t.contact} email={site.email} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}

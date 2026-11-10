'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { site, ui } from '../content/site';
import { withBase, homePath } from '../lib/paths';

const SECTIONS = ['about', 'cv', 'contact'];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
    </svg>
  );
}

// page: 'home' (one-pager with scroll spy) or 'blog'
export default function Nav({ lang = 'en', page = 'home' }) {
  const t = ui[lang];
  const [active, setActive] = useState(page === 'blog' ? 'blog' : 'about');
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'light');
  }, []);

  useEffect(() => {
    if (page !== 'home') return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActive(atBottom ? SECTIONS[SECTIONS.length - 1] : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [page]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* storage unavailable: the choice lasts for this page only */
    }
    setTheme(next);
  };

  const sectionHref = (id) =>
    page === 'home' ? `#${id}` : withBase(`${homePath(lang)}#${id}`);
  const close = () => setOpen(false);
  const current = (id) => (active === id ? (id === 'blog' ? 'page' : 'true') : undefined);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href={page === 'home' ? '#about' : withBase(homePath(lang))} onClick={close}>
          <span className="nav__logo-mark" aria-hidden="true">B</span>
          <span>{site.nameLocal[lang]}</span>
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{t.menu}</span>
          <span aria-hidden="true" className="nav__burger-lines" />
        </button>

        <nav id="nav-links" className={`nav__links${open ? ' is-open' : ''}`} aria-label={t.menu}>
          <a className="nav__link" href={sectionHref('about')} aria-current={current('about')} onClick={close}>
            {t.nav.about}
          </a>
          <a className="nav__link" href={sectionHref('cv')} aria-current={current('cv')} onClick={close}>
            {t.nav.cv}
          </a>
          <Link className="nav__link" href="/blog/" aria-current={current('blog')} onClick={close}>
            {t.nav.blog}
          </Link>
          <a
            className="nav__link nav__link--cta"
            href={sectionHref('contact')}
            aria-current={current('contact')}
            onClick={close}
          >
            {t.nav.contact}
          </a>
          <span className="nav__tools">
            {page === 'home' && (
              <a
                className="nav__tool"
                href={withBase(homePath(lang === 'hu' ? 'en' : 'hu'))}
                hrefLang={lang === 'hu' ? 'en' : 'hu'}
                lang={lang === 'hu' ? 'en' : 'hu'}
                title={t.langSwitch}
              >
                <span aria-hidden="true">{t.langSwitchShort}</span>
                <span className="sr-only">{t.langSwitch}</span>
              </a>
            )}
            <button
              type="button"
              className="nav__tool"
              onClick={toggleTheme}
              title={theme === 'dark' ? t.themeToLight : t.themeToDark}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              <span className="sr-only">{theme === 'dark' ? t.themeToLight : t.themeToDark}</span>
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
}

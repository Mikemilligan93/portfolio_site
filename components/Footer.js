import { site, ui } from '../content/site';

export default function Footer({ lang = 'en' }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>© {new Date().getFullYear()} {site.nameLocal[lang]}</span>
        <span>{ui[lang].footer}</span>
      </div>
    </footer>
  );
}

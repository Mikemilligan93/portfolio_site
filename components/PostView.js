import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';
import { ui } from '../content/site';

export default function PostView({ post }) {
  const t = ui.en;
  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <Nav lang="en" page="blog" />
      <main id="main" className="section section--blog">
        <article className="wrap wrap--narrow">
          <p>
            <Link className="back" href="/blog/">← {t.blog.back}</Link>
          </p>
          <header className="post-head">
            <p className="post-card__date">{post.dateLabel}</p>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-card__tags">
              {post.tags.map((name) => (
                <span key={name} className="tag">#{name}</span>
              ))}
            </p>
          </header>
          {/* The HTML comes from our own Markdown files in content/blog. */}
          <div className="prose card" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}

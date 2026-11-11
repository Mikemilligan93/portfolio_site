import Nav from './Nav';
import Footer from './Footer';
import BlogList from './BlogList';
import { ui } from '../content/site';

export default function BlogIndexView({ posts, hasWork = false }) {
  const t = ui.en;
  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <Nav lang="en" page="blog" hasWork={hasWork} />
      <main id="main" className="section section--blog">
        <div className="wrap wrap--narrow">
          <header className="section__head">
            <div>
              <h1 className="section__title">{t.blog.title}</h1>
              <p className="section__lead">{t.blog.lead}</p>
            </div>
          </header>
          <BlogList posts={posts} labels={t.blog} />
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}

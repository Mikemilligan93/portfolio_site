import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'case-studies');
const COLORS = ['yellow', 'pink', 'green', 'purple', 'blue', 'orange'];

// Drafts (`draft: true`) are visible in `npm run dev` with a badge,
// and left out of the production build.
const SHOW_DRAFTS = process.env.NODE_ENV !== 'production';

function text(value) {
  return value === undefined || value === null ? '' : String(value);
}

function read(file, index) {
  const slug = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const hu = data.hu && typeof data.hu === 'object' ? data.hu : {};
  return {
    slug,
    title: text(data.title) || slug,
    summary: text(data.summary),
    client: text(data.client),
    role: text(data.role),
    year: text(data.year),
    duration: text(data.duration),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    color: COLORS.includes(data.color) ? data.color : COLORS[index % COLORS.length],
    order: Number.isFinite(Number(data.order)) ? Number(data.order) : 999,
    cover: text(data.cover),
    highlights: Array.isArray(data.highlights)
      ? data.highlights
          .filter((h) => h && h.value)
          .map((h) => ({ value: text(h.value), label: text(h.label) }))
      : [],
    hu: { title: text(hu.title), summary: text(hu.summary) },
    draft: Boolean(data.draft),
    content,
  };
}

// Sorted by `order` (ascending), then by year (newest first).
export function getCaseStudies() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .sort()
    .map(read)
    .filter((c) => SHOW_DRAFTS || !c.draft)
    .sort((a, b) => a.order - b.order || b.year.localeCompare(a.year));
}

export function getCaseStudy(slug) {
  const all = getCaseStudies();
  const i = all.findIndex((c) => c.slug === slug);
  if (i < 0) return null;
  const next = all.length > 1 ? all[(i + 1) % all.length] : null;
  return {
    ...all[i],
    html: marked.parse(all[i].content),
    next: next ? { slug: next.slug, title: next.title } : null,
  };
}

// Card data for the homepage, in the page's language.
// Hungarian cards use the optional `hu:` title and summary when given.
export function getCaseStudyCards(lang = 'en') {
  return getCaseStudies().map(({ content, hu, ...c }) => ({
    ...c,
    title: (lang === 'hu' && hu.title) || c.title,
    summary: (lang === 'hu' && hu.summary) || c.summary,
  }));
}

export function hasCaseStudies() {
  return getCaseStudies().length > 0;
}

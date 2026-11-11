import { notFound } from 'next/navigation';
import CaseStudyView from '../../../../components/CaseStudyView';
import { getCaseStudies, getCaseStudy } from '../../../../lib/caseStudies';
import { getAllPosts } from '../../../../lib/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  const all = getCaseStudies();
  // a static export needs at least one path; this placeholder renders a 404
  return all.length ? all.map((c) => ({ slug: c.slug })) : [{ slug: '_none' }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  return <CaseStudyView cs={cs} hasBlog={getAllPosts().length > 0} />;
}

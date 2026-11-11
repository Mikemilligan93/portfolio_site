import { notFound } from 'next/navigation';
import PostView from '../../../../components/PostView';
import { getAllPosts, getPost, formatDate } from '../../../../lib/posts';
import { hasCaseStudies } from '../../../../lib/caseStudies';

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  // a static export needs at least one path; this placeholder renders a 404
  return posts.length ? posts.map((post) => ({ slug: post.slug })) : [{ slug: '_none' }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <PostView
      post={{ ...post, dateLabel: formatDate(post.date, 'en') }}
      hasWork={hasCaseStudies()}
    />
  );
}

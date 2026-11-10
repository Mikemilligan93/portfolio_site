import { notFound } from 'next/navigation';
import PostView from '../../../../components/PostView';
import { getAllPosts, getPost, formatDate } from '../../../../lib/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
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
  return <PostView post={{ ...post, dateLabel: formatDate(post.date, 'en') }} />;
}

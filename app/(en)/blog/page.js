import BlogIndexView from '../../../components/BlogIndexView';
import { getAllPosts, formatDate } from '../../../lib/posts';
import { hasCaseStudies } from '../../../lib/caseStudies';

export const metadata = { title: 'Blog' };

export default function Page() {
  const posts = getAllPosts().map(({ content, ...post }) => ({
    ...post,
    dateLabel: formatDate(post.date, 'en'),
  }));
  return <BlogIndexView posts={posts} hasWork={hasCaseStudies()} />;
}

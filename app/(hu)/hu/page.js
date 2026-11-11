import HomeView from '../../../components/HomeView';
import { getCaseStudyCards } from '../../../lib/caseStudies';
import { getAllPosts } from '../../../lib/posts';

export default function Page() {
  return (
    <HomeView
      lang="hu"
      caseStudies={getCaseStudyCards('hu')}
      hasBlog={getAllPosts().length > 0}
    />
  );
}

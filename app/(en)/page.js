import HomeView from '../../components/HomeView';
import { getCaseStudyCards } from '../../lib/caseStudies';
import { getAllPosts } from '../../lib/posts';

export default function Page() {
  return (
    <HomeView
      lang="en"
      caseStudies={getCaseStudyCards('en')}
      hasBlog={getAllPosts().length > 0}
    />
  );
}

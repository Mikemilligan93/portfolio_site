import RootShell from '../../components/RootShell';
import { ui } from '../../content/site';

export const metadata = {
  title: ui.hu.metaTitle,
  description: ui.hu.metaDescription,
};

export default function Layout({ children }) {
  return <RootShell lang="hu">{children}</RootShell>;
}

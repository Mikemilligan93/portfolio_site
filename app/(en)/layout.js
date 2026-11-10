import RootShell from '../../components/RootShell';
import { ui } from '../../content/site';

export const metadata = {
  title: { default: ui.en.metaTitle, template: '%s – Bence Tóth' },
  description: ui.en.metaDescription,
};

export default function Layout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}

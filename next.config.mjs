/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to ./out,
  // which can be hosted anywhere (GitHub Pages, Netlify, Vercel, any web server).
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // If the site is served from a sub-path (e.g. GitHub Pages project site
  // https://<user>.github.io/portfolio_site), set NEXT_PUBLIC_BASE_PATH=/portfolio_site
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;

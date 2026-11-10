# Portfolio site

Personal portfolio of Bence Tóth: a neo-brutalist one-pager (About, CV, Contact) in English and Hungarian, plus a Markdown blog.

Built with Next.js (App Router, static export). No database and no CMS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

Node 20 or newer is required.

## Where things live

| What | Where |
| --- | --- |
| All texts, CV entries, links (EN + HU) | `content/site.js` |
| Blog posts | `content/blog/*.md` |
| Colours, shadows, layout | `app/globals.css` |
| Photo | `public/images/bence.webp` |
| Downloadable CVs | `public/cv/` (regenerate with `npm run cv`) |
| Pages | `app/(en)/` → `/`, `/blog`; `app/(hu)/hu/` → `/hu` |

## Write a blog post

Add a file to `content/blog`, for example `my-post.md`. The file name becomes the URL (`/blog/my-post/`).

```md
---
title: "My post"
date: "2026-12-01"
tags: ["business-analysis"]
excerpt: "One sentence shown in the post list."
draft: false
---

The post itself, in Markdown.
```

Set `draft: true` to keep a post out of the site. Commit and push to publish.

## Contact form

The site is static, so the form needs somewhere to send messages:

- Create a form at a form service (Formspree, Web3Forms, Getform…) and put its URL in `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`).
- Without the variable, the form opens the visitor's e-mail app with the message filled in, addressed to `site.email` from `content/site.js`.

## Deploy

`npm run build` produces plain files in `out/`, which any static host can serve.

- **Vercel / Netlify:** import the repository; the defaults work.
- **GitHub Pages:** publish the `out` folder. For a project site (`<user>.github.io/portfolio_site`) build with `NEXT_PUBLIC_BASE_PATH=/portfolio_site`.

## Updating the CV PDFs

`npm run cv` rebuilds both PDFs from `content/site.js`. It needs Python 3 with `reportlab` (`pip install reportlab`).

# Portfolio site

Personal portfolio of Bence Tóth: a neo-brutalist one-pager (About, CV, Case studies, Contact) in English and Hungarian, plus a Markdown blog.

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
| Case studies | `content/case-studies/*.md`, images in `public/images/case-studies/` |
| Colours, shadows, layout | `app/globals.css` |
| Photo | `public/images/bence.webp` |
| Downloadable CVs | `public/cv/` (regenerate with `npm run cv`) |
| Pages | `app/(en)/` → `/`, `/blog`, `/case-studies/<name>`; `app/(hu)/hu/` → `/hu` |

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

Set `draft: true` to keep a post out of the site. Commit and push to publish. While there are no posts, the Blog menu item is hidden.

## Add a case study

Copy one of the example files in `content/case-studies` and rename it; the file name becomes the URL (`/case-studies/my-project/`).

```md
---
title: "What the project was, in one line"
summary: "One or two sentences for the card."
client: "Client or sector"          # describe by sector if under NDA
role: "Lead Business Analyst"
year: "2025"
duration: "6 months"                # optional
tags: ["Requirements", "BPMN"]
color: "pink"                       # yellow | pink | green | purple | blue | orange
order: 1                            # position on the homepage, lowest first
cover: "/images/case-studies/my-project.png"   # optional
highlights:                         # optional big numbers on the page
  - value: "40%"
    label: "fewer clarification tickets"
hu:                                 # optional Hungarian card text for /hu
  title: "..."
  summary: "..."
draft: false
---

## The situation
## What I did
## The outcome
```

- `draft: true` shows the case study in `npm run dev` with a Draft badge and leaves it out of the published site. The two example files are drafts.
- The section and its menu item appear only when at least one case study is published.
- Case study pages are in English; the Hungarian homepage uses the `hu:` card texts when given.
- Leave out anything confidential: client names under NDA, internal figures, screenshots of client systems.

## Contact form

The site is static, so the form needs somewhere to send messages:

- Create a form at a form service (Formspree, Web3Forms, Getform…) and put its URL in `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`).
- Without the variable, the form is hidden (unless `site.email` in `content/site.js` is filled in, in which case it opens the visitor's e-mail app instead).

## Deploy

`npm run build` produces plain files in `out/`, which any static host can serve.

- **Vercel / Netlify:** import the repository; the defaults work.
- **GitHub Pages:** publish the `out` folder. For a project site (`<user>.github.io/portfolio_site`) build with `NEXT_PUBLIC_BASE_PATH=/portfolio_site`.

## Updating the CV PDFs

`npm run cv` rebuilds both PDFs from `content/site.js`. It needs Python 3 with `reportlab` (`pip install reportlab`).

---
title: "How this site is built"
date: "2026-11-09"
tags: ["meta", "tooling"]
excerpt: "Next.js, Markdown files and a static export. No database, no CMS login."
---

The whole site is a statically exported Next.js app.

## The blog is just Markdown

Every post is a `.md` file in `content/blog`. The front matter at the top holds the title, date, tags and a short excerpt. Publishing a post means committing a file.

## Why no CMS

A content management system is one more thing to log into, update and secure. For a personal blog with one author, a text editor and Git do the same job.

## Two languages

The one-pager is available in English and Hungarian. The blog is English only.

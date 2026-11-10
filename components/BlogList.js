'use client';

import { useState } from 'react';
import Link from 'next/link';

const COLORS = ['yellow', 'pink', 'green', 'purple', 'blue', 'orange'];

export default function BlogList({ posts, labels }) {
  const [tag, setTag] = useState(null);
  const tags = [...new Set(posts.flatMap((p) => p.tags))].sort();
  const colorOf = (name) => COLORS[tags.indexOf(name) % COLORS.length];
  const visible = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;

  return (
    <>
      <div className="tagbar" role="group" aria-label="Tags">
        <button type="button" className="tagbtn" aria-pressed={tag === null} onClick={() => setTag(null)}>
          {labels.all}
        </button>
        {tags.map((name) => (
          <button
            key={name}
            type="button"
            className={`tagbtn bg-${colorOf(name)}`}
            aria-pressed={tag === name}
            onClick={() => setTag(tag === name ? null : name)}
          >
            #{name}
          </button>
        ))}
      </div>

      {visible.length === 0 && <p>{labels.empty}</p>}

      <ul className="posts">
        {visible.map((post) => (
          <li key={post.slug}>
            <article className="post-card">
              <p className="post-card__date">{post.dateLabel}</p>
              <h2 className="post-card__title">
                <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <p className="post-card__tags">
                {post.tags.map((name) => (
                  <span key={name} className={`tag bg-${colorOf(name)}`}>#{name}</span>
                ))}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

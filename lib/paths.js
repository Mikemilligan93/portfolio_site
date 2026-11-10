const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Prefix a root-relative URL with the configured base path.
// Needed for plain <a> / <img> tags; next/link adds it on its own.
export function withBase(path) {
  return `${base}${path}`;
}

export function homePath(lang) {
  return lang === 'hu' ? '/hu/' : '/';
}

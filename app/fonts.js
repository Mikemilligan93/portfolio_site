import { Archivo_Black, Space_Grotesk, Space_Mono } from 'next/font/google';

export const display = Archivo_Black({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
});

export const body = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

export const mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
});

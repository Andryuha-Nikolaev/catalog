import { Open_Sans } from 'next/font/google';

export const primaryFont = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--primary-font',
  weight: ['400', '500', '600', '700'],
});

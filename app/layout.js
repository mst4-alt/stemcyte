import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { Lato, Playfair_Display, Source_Serif_4 } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-numbers',
  display: 'swap',
});

export const metadata = {
  title: 'StemCyte - Cord Blood Banking & Stem Cell Therapy',
  description: 'StemCyte is a global regenerative therapeutics company offering cord blood banking, clinical stem cell therapy, and regenerative medicine since 1997.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable} ${sourceSerif.variable}`}>
      <body>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

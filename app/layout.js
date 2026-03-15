import './globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: 'StemCyte - Cord Blood Banking & Stem Cell Therapy',
  description: 'StemCyte is a global regenerative therapeutics company offering cord blood banking, clinical stem cell therapy, and regenerative medicine since 1997.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@400;500;600;700&family=Source+Serif+4:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

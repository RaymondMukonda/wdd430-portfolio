import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import "./globals.css";
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://wdd430-portfolio-six-roan.vercel.app'),
  title: {
    default: 'Raymond Mukonda | Project Portfolio',
    template: '%s | Raymond Mukonda',
  },
  description:
    'Explore Raymond Mukonda’s portfolio of web development, software, and open-source projects.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Raymond Mukonda | Project Portfolio',
    title: 'Raymond Mukonda | Project Portfolio',
    description:
      'Explore Raymond Mukonda’s portfolio of web development, software, and open-source projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Mukonda | Project Portfolio',
    description:
      'Explore Raymond Mukonda’s portfolio of web development, software, and open-source projects.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

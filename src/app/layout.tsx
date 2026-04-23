import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khushbu Patel | Portfolio',
  description: 'Full-Stack Developer & UI/UX Designer portfolio',

  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },

  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
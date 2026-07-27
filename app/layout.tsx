import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'houssem98 — Market Intelligence & Trading Systems',
  description: 'Founder @ AlphaGravity. Building AI-powered financial research and trading platforms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}

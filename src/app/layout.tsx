import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'سي اكاديمي - SyAcademy',
  description: 'تمكين التعليم للجميع.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="!scroll-smooth">
      <body className={`${tajawal.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

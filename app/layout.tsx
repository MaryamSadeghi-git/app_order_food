import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'پلتفرم هوشمند تبلیغات سفارش غذا',
  description: 'تبلیغات هدفمند، بهینه و پربازده در معتبرترین اپلیکیشن‌های سفارش غذا',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="bg-bg-main text-slate-200 font-sans antialiased selection:bg-brand selection:text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

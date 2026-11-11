// app/layout.tsx
import { Vazirmatn } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Navbar/>
          <main>
            {children}
          </main>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

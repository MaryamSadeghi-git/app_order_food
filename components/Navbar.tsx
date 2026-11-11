// components/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  // خواندن hash فعلی و به‌روزرسانی هنگام کلیک روی لینک
  useEffect(() => {
    const updateHash = () =>
      setHash(typeof window !== 'undefined' ? window.location.hash : '');
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname]);

  const navLinks = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'جایگاه‌ها', href: '/#features' },
    { name: 'وبلاگ', href: '/blog' },
  ];

  const isActive = (href: string) => {
    const [, targetHash] = href.split('#');
    // لینکِ بدون hash فقط وقتی فعال است که در همان مسیر باشیم و hash نداشته باشیم
    if (!targetHash) {
      return pathname === href && hash === '';
    }
    // لینکِ دارای hash فقط وقتی فعال است که همان hash را داشته باشیم
    return pathname === href.split('#')[0] && hash === `#${targetHash}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#FAF7F2]/85 dark:bg-[#0b0f0d]/80 border-b border-emerald-600/20 dark:border-emerald-900/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2" dir="rtl">
        {/* لوگو */}
        <Link href="/" className="text-base sm:text-2xl font-black text-stone-900 dark:text-white flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-600 dark:bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
          <span>فود</span>
        </Link>

        {/* تم‌تگل و لینک‌ها */}
        <div className="flex items-center gap-8 sm:gap-10 text-xs sm:text-sm font-medium">
          <ThemeToggle />
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setHash(link.href.split('#')[1] ? `#${link.href.split('#')[1]}` : '')}
                className={`transition-colors py-1 whitespace-nowrap ${
                  active
                    ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'text-stone-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* دکمه اکشن */}
        <div className="flex items-center shrink-0">
          <Link
            href="/#cta"
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] whitespace-nowrap"
          >
            دانلود اپلیکیشن
          </Link>
        </div>
      </div>
    </nav>
  );
}

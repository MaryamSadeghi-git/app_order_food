'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'جایگاه‌ها', href: '/#features' },
    { name: 'وبلاگ', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0b0f0d]/80 border-b border-emerald-900/40">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2" dir="rtl">
        {/* لوگو */}
        <Link href="/" className="text-base sm:text-2xl font-black text-white flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse"></span>
          <span>فود<span className="text-emerald-400"></span></span>
        </Link>

        {/* لینک‌ها - همیشه در یک خط و سر جای خود */}
        <div className="flex items-center gap-3 sm:gap-8 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 whitespace-nowrap ${
                  isActive
                    ? 'text-emerald-400 font-bold'
                    : 'text-slate-300 hover:text-emerald-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* دکمه اکشن - سر جای خود با ابعاد بهینه برای موبایل */}
        <div className="flex items-center shrink-0">
          <Link
            href="/#cta"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] whitespace-nowrap"
          >
            دانلود اپلیکیشن
          </Link>
        </div>
      </div>
    </nav>
  );
}

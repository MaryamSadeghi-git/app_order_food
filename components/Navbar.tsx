'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'جایگاه‌ها', href: '/#features' },
    { name: 'وبلاگ ', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0b0f0d]/80 border-b border-emerald-900/40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between" dir="rtl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-white flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse"></span>
          فود<span className="text-emerald-400"></span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
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

        {/* CTA */}
        <Link
          href="/#cta"
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
        >
          دانلود اپلیکیشن
        </Link>
      </div>
    </nav>
  );
}

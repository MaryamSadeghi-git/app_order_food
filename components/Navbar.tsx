// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // وضعیت منوی موبایل

  // خواندن hash فعلی و به‌روزرسانی هنگام تغییر هش یا مسیر
  useEffect(() => {
    const updateHash = () =>
      setHash(typeof window !== "undefined" ? window.location.hash : "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  // وقتی مسیر عوض شد، منوی موبایل بسته شود
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  const navLinks = [
    { name: "صفحه اصلی", href: "/" },
    { name: "جایگاه‌ها", href: "/#features" },
    { name: "وبلاگ", href: "/blog" },
  ];

  const isActive = (href: string) => {
    const [path, targetHash] = href.split("#");

    // لینک بدون هش
    if (!targetHash) {
      return pathname === path && hash === "";
    }

    // لینک هش‌دار
    return pathname === path && hash === `#${targetHash}`;
  };

  const handleNavClick = (href: string) => {
    const targetHash = href.split("#")[1];
    setHash(targetHash ? `#${targetHash}` : "");
    setMenuOpen(false); // بستن منوی موبایل بعد از کلیک
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#FAF7F2]/85 dark:bg-[#0b0f0d]/80 border-b border-emerald-600/20 dark:border-emerald-900/40 transition-colors duration-300 shadow-xl">
      <div
        className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2"
        dir="rtl"
      >
        {/* لوگو */}
        <Link
          href="/"
          className="text-base sm:text-2xl font-black text-stone-900 dark:text-white flex items-center gap-1.5 sm:gap-2.5 shrink-0"
        >
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-600 dark:bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse"></span>
          <span>فود</span>
        </Link>

        {/* لینک‌ها - دسکتاپ */}
        <div className="hidden md:flex items-center gap-4 sm:gap-10 text-xs sm:text-sm font-medium">
          <ThemeToggle />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`transition-colors py-1 whitespace-nowrap ${
                isActive(link.href)
                  ? "text-emerald-700 dark:text-emerald-400 font-bold"
                  : "text-stone-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* دکمه اکشن + همبرگر - در تمام سایزها بالای هدر */}
        <div className="flex items-center gap-2 shrink-0">
          {/* دکمه دانلود اپلیکیشن - همیشه در بالای هدر، موبایل و دسکتاپ */}
          <Link
            href="/#cta"
            onClick={() => handleNavClick("/#cta")}
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] whitespace-nowrap"
          >
            دانلود اپلیکیشن
          </Link>

          {/* دکمه همبرگری - فقط موبایل */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-stone-700 dark:text-slate-200 hover:bg-emerald-600/10 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="block md:hidden"
            >
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* منوی موبایل - فقط لینک‌های ناوبری و تم */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-1 border-t border-emerald-600/10 dark:border-emerald-900/40">
          <div className="pt-3 flex justify-start">
            <ThemeToggle />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`py-2.5 px-2 rounded-lg transition-colors ${
                isActive(link.href)
                  ? "text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-600/5"
                  : "text-stone-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-600/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="تغییر تم"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-600/20 bg-white text-stone-800 transition hover:border-emerald-600/50 dark:border-emerald-500/20 dark:bg-bg-card dark:text-emerald-50"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

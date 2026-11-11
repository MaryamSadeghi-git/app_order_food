// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-600/20 bg-bg-card py-8 text-center text-xs text-stone-600 dark:border-emerald-900/50 dark:text-slate-400 md:py-12 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* کپی‌رایت */}
        <div className="order-2 md:order-1">
          © ۲۰۲۶ پلتفرم تبلیغات سفارش غذا. کلیه حقوق محفوظ است.
        </div>

        {/* لینک‌ها */}
        <div className="order-1 flex flex-wrap justify-center gap-4 sm:gap-6 md:order-2">
          <Link href="#" className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 whitespace-nowrap">
            قوانین و ضوابط
          </Link>
          <Link href="#" className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 whitespace-nowrap">
            سیاست حریم خصوصی
          </Link>
          <Link href="#" className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 whitespace-nowrap">
            تماس با واحد فروش
          </Link>
        </div>
      </div>
    </footer>
  );
}

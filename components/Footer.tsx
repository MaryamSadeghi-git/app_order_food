import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/50 bg-bg-main py-8 md:py-12 text-center text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* کپی‌رایت */}
        <div className="order-2 md:order-1">
          © ۲۰۲۶ پلتفرم تبلیغات سفارش غذا. کلیه حقوق محفوظ است.
        </div>
        
        {/* لینک‌ها */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 order-1 md:order-2">
          <Link href="#" className="hover:text-brand-lighter transition-colors whitespace-nowrap">
            قوانین و ضوابط
          </Link>
          <Link href="#" className="hover:text-brand-lighter transition-colors whitespace-nowrap">
            سیاست حریم شخصی
          </Link>
          <Link href="#" className="hover:text-brand-lighter transition-colors whitespace-nowrap">
            تماس با واحد فروش
          </Link>
        </div>
      </div>
    </footer>
  );
}

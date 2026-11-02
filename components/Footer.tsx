import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/50 bg-bg-main py-12 text-center text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© ۲۰۲۶ پلتفرم تبلیغات سفارش غذا. کلیه حقوق محفوظ است.</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-brand-lighter transition-colors">قوانین و ضوابط</Link>
          <Link href="#" className="hover:text-brand-lighter transition-colors">سیاست حریم شخصی</Link>
          <Link href="#" className="hover:text-brand-lighter transition-colors">تماس با واحد فروش</Link>
        </div>
      </div>
    </footer>
  );
}

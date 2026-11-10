// app/page.tsx
import FoodScenarios from '@/components/FoodScenarios';
import InteractiveDemo from '@/components/InteractiveDemo';
import Navbar from '@/components/Navbar';
import PaymentMethods from '@/components/PaymentMethods';
import PlatformMetrics from '@/components/PlatformMetrics';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden transition-colors duration-300 bg-[#FAF7F2] text-stone-900 dark:bg-[#0b0f0d] dark:text-slate-100">
      {/* Emerald Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-[380px] bg-emerald-500/15 dark:bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-16 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-600/20 bg-white dark:bg-bg-card text-xs text-emerald-800 dark:text-brand-light font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          نسل جدید تبلیغات داده‌محور در صنعت غذا
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight md:leading-[1.25] text-stone-900 dark:text-white">
          رستوران شما در لحظه تصمیم‌گیری، <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-200">
            اولین گزینه مشتری گرسنه است.
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          حضور در برترین جایگاه‌های اپلیکیشن بر اساس الگوریتم هوشمند شعاع تحویل و علایق غذایی کاربران در لحظه سفارش.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#cta"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition duration-200 text-center dark:bg-brand dark:hover:bg-brand-light dark:text-slate-200"
          >
            مشاوره و راه‌اندازی کمپین
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-emerald-50 dark:bg-bg-card dark:hover:bg-bg-cardHover text-emerald-900 dark:text-slate-200 border border-emerald-600/20 hover:border-emerald-600/40 rounded-xl font-medium transition duration-200 text-center"
          >
            مطالعه تجربیات موفق
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-y border-emerald-600/20 dark:border-emerald-900/60 my-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white/80 dark:bg-bg-card/40 backdrop-blur-sm rounded-3xl shadow-sm dark:shadow-none">
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 dark:text-white">+۱.۸M</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">ایمپرشن ماهانه در اپلیکیشن</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-700 dark:text-brand-light">۳.۶x</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">افزایش نرخ تبدیل (CVR)</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 dark:text-white">+۵۲۰</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">رستوران و فست‌فود فعال</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-700 dark:text-brand-light">۴.۱٪</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">میانگین نرخ کلیک (CTR)</div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <InteractiveDemo /> 
          <FoodScenarios /> 
          <span id="features" /> 
          <PlatformMetrics /> 
          <PaymentMethods /> 
          <p className="text-stone-500 dark:text-slate-400 mt-3 text-sm">
            تبلیغاتی ارگانیک که حس خرید طبیعی را به مشتری القا می‌کند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-emerald-50/60 dark:bg-bg-card dark:border-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:bg-bg-cardHover transition duration-300 shadow-sm dark:shadow-none">
            <div className="text-emerald-700 dark:text-brand-light text-2xl font-black mb-4">۰۱</div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">بنر شاخص صفحه اول</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              نمایش برند شما در نخستین ثانیه‌های باز شدن اپلیکیشن برای تمام کاربران محله شما؛ مناسب کمپین‌های لانچ، تغییر منو و تخفیف روزانه.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-emerald-50/60 dark:bg-bg-card dark:border-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:bg-bg-cardHover transition duration-300 shadow-sm dark:shadow-none">
            <div className="text-emerald-700 dark:text-brand-light text-2xl font-black mb-4">۰۲</div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">صدر نتایج جستجو (Sponsored)</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              هنگامی که کاربر کلماتی مثل «کباب»، «پاستا» یا «سالاد» را سرچ می‌کند، منوی رستوران شما با تگ ویژه بالاتر از سایر رقبا دیده می‌شود.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-white border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-emerald-50/60 dark:bg-bg-card dark:border-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:bg-bg-cardHover transition duration-300 shadow-sm dark:shadow-none">
            <div className="text-emerald-700 dark:text-brand-light text-2xl font-black mb-4">۰۳</div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">پیشنهاد هوشمند پیش از پرداخت</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              افزایش مبلغ هر فاکتور با پیشنهاد مکمل‌ها، دسرها و نوشیدنی‌های سودده درست در آخرین گام تسویه‌حساب مشتری.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

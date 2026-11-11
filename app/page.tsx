// app/page.tsx
import FeaturesGrid from '@/components/FeaturesGrid';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="pt-8 pb-20 relative overflow-hidden transition-colors duration-300 bg-[#FAF7F2] text-stone-900 dark:bg-[#0b0f0d] dark:text-slate-100">
      {/* Emerald Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-175 max-w-full h-95 bg-emerald-500/15 dark:bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-16 pb-20">
        <div className="inline-flex items-center gap-2 px-8 py-2 rounded-full border border-emerald-600/20 bg-white dark:bg-bg-card text-xl text-emerald-800 dark:text-brand-light font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
            از رستوران تا میز ناهار
        </div>

        <h1 className="text-4xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight md:leading-tight text-stone-900 dark:text-white">
         منوی روزانه رو ببین، با چند کلیک سفارش بده <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-700 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-200">
            غذایی گرم و سر وقت تحویل بگیر
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
 فود طراحی شده تا ساعت استراحت شما، دقیقاً همان چیزی باشد که باید باشد
          <br/>
          <span  className="text-transparent bg-clip-text bg-linear-to-r from-emerald-700 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-emerald-200 dark:to-teal-200">
             یک استراحت واقعی! نه یک پروسه‌ی اداری.
          </span>        
        </p>

        <div className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#cta"
            className="flex-1 w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition duration-200 text-center dark:bg-brand dark:hover:bg-brand-dark dark:text-slate-200"
          >
            فود وب 
          </Link>
          <Link
            href="/blog"
            className="flex-1 w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-emerald-50 dark:bg-bg-card dark:hover:bg-bg-cardHover text-emerald-900 dark:text-slate-200 border border-emerald-600/20 hover:border-emerald-600/40 rounded-xl font-medium transition duration-200 text-center"
          >
            مطالعه تجربیات 
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 py-8 border-y border-emerald-600/20 dark:border-emerald-900/60 grid grid-cols-3 md:grid-cols-4 gap-8 text-center bg-white/80 dark:bg-bg-card/40 backdrop-blur-sm rounded-3xl shadow-sm dark:shadow-none">
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 dark:text-white">+۱.۸M</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">تعداد بازدید ماهانه</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-700 dark:text-brand-light">+1.8M</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">تعداد دانلود</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 dark:text-white">+۵۲۰</div>
          <div className="text-xs text-stone-500 dark:text-slate-400 mt-2 font-medium">تعداد رستوران فعال</div>
        </div>
      </section>
      {/* Features Grid */}
        <FeaturesGrid/>
        
    </div>
  );
}

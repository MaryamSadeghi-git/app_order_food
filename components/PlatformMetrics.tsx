//components/PlatformMetrics.tsx
'use client';

export default function PlatformMetrics() {
  return (
    <section 
      className="w-full py-12 md:py-20 bg-background text-foreground select-none transition-colors duration-300" 
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کادر اصلی بالایی (نمایش رقم بزرگ توکن‌ها / دانلودها) */}
        <div className="rounded-2xl sm:rounded-3xl bg-bg-card border border-emerald-600/20 dark:border-emerald-500/20 p-5 sm:p-8 md:p-12 text-center relative overflow-hidden shadow-sm dark:shadow-2xl mb-4 sm:mb-6 transition-all duration-300">
          {/* افکت درخشش ملایم پس‌زمینه */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 dark:from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

          {/* متن بالای عدد */}
          <p className="text-xs md:text-sm font-medium text-stone-500 dark:text-slate-400 mb-3 sm:mb-4">
            نمونهٔ نمایشی نیست. کاری که به انتشار می‌رسد.
          </p>

          {/* عدد بزرگ اصلی */}
          <div className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white mb-3 sm:mb-4 dir-ltr inline-block max-w-full">
            ۶۶۰,۹۵۹,۷۱۹
          </div>

          {/* توضیح زیر عدد */}
          <div className="mt-1">
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-600/30 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full inline-block leading-relaxed max-w-full dark:text-emerald-400 dark:bg-emerald-950/80 dark:border-emerald-500/30">
              میزان توکن‌های هوش مصنوعی مصرف شده توسط کاربران روال تا به امروز
            </p>
          </div>
        </div>

        {/* گرید کارت‌های پایین */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* کارت اول: متن توضیحی مفهومی */}
          <div className="rounded-2xl sm:rounded-3xl bg-bg-card border border-emerald-600/20 dark:border-emerald-500/20 p-5 sm:p-8 flex flex-col justify-between hover:border-emerald-600/40 dark:hover:border-emerald-500/40 hover:bg-bg-cardHover transition-all duration-300 shadow-sm dark:shadow-none">
            <p className="text-stone-700 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              روال جایی است که کار تکراری دیگر صبح کسی را نمی‌گیرد. منبع، مدل‌ها و مقصد را روی یک بوم بگذارید، یک بار گام‌به‌گام تماشا کنید، بعد تقویم را دستش بدهید.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse shrink-0"></span>
              سیستم فعال و یکپارچه
            </div>
          </div>

          {/* کارت دوم: نمودار رشد */}
          <div className="rounded-2xl sm:rounded-3xl bg-bg-card border border-emerald-600/20 dark:border-emerald-500/20 p-5 sm:p-8 flex flex-col justify-between hover:border-emerald-600/40 dark:hover:border-emerald-500/40 hover:bg-bg-cardHover transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center text-xs text-stone-500 dark:text-slate-400 mb-4 sm:mb-6">
              <span>تیر ۱۴۰۵</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">امروز</span>
            </div>
            
            {/* طراحی خط نمودار صعودی با SVG */}
            <div className="w-full h-20 sm:h-24 relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M 0 85 Q 75 75 150 60 T 300 15"
                  fill="none"
                  className="stroke-emerald-600 dark:stroke-emerald-400"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              {/* نقطه نهایی نمودار */}
              <div className="absolute top-2 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(5,150,105,0.6)] dark:shadow-[0_0_12px_#34d399]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

'use client';

export default function PlatformMetrics() {
  return (
    <section className="w-full py-20 bg-[#0b0f0d] text-white select-none" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کادر اصلی بالایی (نمایش رقم بزرگ توکن‌ها / دانلودها) */}
        <div className="rounded-3xl bg-[#121a16] border border-emerald-500/20 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl mb-6">
          {/* افکت درخشش ملایم پس‌زمینه */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

          {/* متن بالای عدد */}
          <p className="text-xs md:text-sm font-medium text-slate-400 mb-4">
            نمونهٔ نمایشی نیست. کاری که به انتشار می‌رسد.
          </p>

          {/* عدد بزرگ اصلی */}
          <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 dir-ltr inline-block">
            ۶۶۰,۹۵۹,۷۱۹
          </div>

          {/* توضیح زیر عدد */}
          <p className="text-xs md:text-sm font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-5 py-2 rounded-full inline-block">
            میزان توکن‌های هوش مصنوعی مصرف شده توسط کاربران روال تا به امروز
          </p>
        </div>

        {/* گرید کارت‌های پایین */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* کارت اول: متن توضیحی مفهومی */}
          <div className="rounded-3xl bg-[#121a16] border border-emerald-500/20 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              روال جایی است که کار تکراری دیگر صبح کسی را نمی‌گیرد. منبع، مدل‌ها و مقصد را روی یک بوم بگذارید، یک بار گام‌به‌گام تماشا کنید، بعد تقویم را دستش بدهید.
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              سیستم فعال و یکپارچه
            </div>
          </div>

          {/* کارت دوم: نمودار رشد (مشابه تصویر) */}
          <div className="rounded-3xl bg-[#121a16] border border-emerald-500/20 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all relative overflow-hidden">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-6">
              <span>تیر ۱۴۰۵</span>
              <span className="text-emerald-400 font-bold">امروز</span>
            </div>
            
            {/* طراحی خط نمودار صعودی با SVG */}
            <div className="w-full h-24 relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M 0 85 Q 75 75 150 60 T 300 15"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              {/* نقطه نهایی نمودار */}
              <div className="absolute top-2 right-0 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_12px_#34d399]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

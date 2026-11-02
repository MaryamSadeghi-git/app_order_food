'use client';

const itemsRow1 = [
  { id: 1, title: 'ثبت خودکار منوی هفتگی پرسنل', category: 'اتوماسیون', icon: '📊' },
  { id: 2, title: 'رصد و مقایسه قیمت رستوران‌ها', category: 'هزینه‌ها', icon: '💰' },
  { id: 3, title: 'پیش‌نویس گزارش هزینه‌های ماهانه', category: 'گزارش‌گیری', icon: '📑' },
  { id: 4, title: 'پاسخ هوشمند به نظرات پرسنل', category: 'هوش مصنوعی', icon: '🤖' },
  { id: 5, title: 'ارسال پیامک تایید سفارش روزانه', category: 'اطلاع‌رسانی', icon: '📲' },
];

const itemsRow2 = [
  { id: 6, title: 'تطبیق خودکار بودجه ناهار واحدها', category: 'امور مالی', icon: '⚡' },
  { id: 7, title: 'ساخت بنر منوی روزانه در پیام‌رسان', category: 'گرافیک', icon: '🎨' },
  { id: 8, title: 'توزیع خودکار فیش تحویل به کیترینگ', category: 'کیترینگ', icon: '📋' },
  { id: 9, title: 'سفارش گروهی تفکیک‌شده بر اساس شعبه', category: 'سازمانی', icon: '🏢' },
  { id: 10, title: 'اعمال سهمیه یارانه غذای پرسنل', category: 'منابع انسانی', icon: '👥' },
];

const itemsRow3 = [
  { id: 11, title: 'هشدار هوشمند اتمام موجودی اعتبار', category: 'مدیریت', icon: '🔔' },
  { id: 12, title: 'فرم نظرسنجی و امتیازدهی بعد از صرف غذا', category: 'کیفیت', icon: '⭐' },
  { id: 13, title: 'اتصال مستقیم به سامانه حضور و غیاب', category: 'یکپارچه‌سازی', icon: '🔗' },
  { id: 14, title: 'داشبورد لحظه‌ای آمار و ارقام مصرف', category: 'تحلیل داده', icon: '📈' },
  { id: 15, title: 'صدور فاکتور رسمی تجمیعی پایان ماه', category: 'حسابداری', icon: '🧾' },
];

export default function FoodScenarios() {
  return (
    <section className="w-full py-16 overflow-hidden select-none bg-[#0b0f0d]" dir="ltr">
      {/* استایل CSS مستقل: حرکت پیوسته یک‌طرفه با لوپ نامحدود بدون پرش یا جای خالی */}
      <style jsx>{`
        @keyframes scrollLeftContinuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRightContinuous {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .track-left {
          display: flex;
          width: max-content;
          animation: scrollLeftContinuous 60s linear infinite;
        }

        .track-right {
          display: flex;
          width: max-content;
          animation: scrollRightContinuous 60s linear infinite;
        }

        /* توقف نرم حرکت هنگام قرار گرفتن نشانگر ماوس */
        .track-container:hover .track-left,
        .track-container:hover .track-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* سرتیتر بخش */}
      <div className="text-center mb-10 px-4" dir="rtl">
        <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full">
          سناریوهای هوشمند سازمانی
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
          فرآیندهای خودکار سامانه سفارش غذا
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          جریان‌های کاری آماده برای مدیریت خودکار، سریع و دقیق غذای پرسنل
        </p>
      </div>

      <div className="space-y-4 relative">
        {/* لایه‌های گرادیان در چپ و راست تا ورود و خروج کارت‌ها کاملاً نامرئی و بی‌نهایت به نظر برسد */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-36 bg-gradient-to-r from-[#0b0f0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-36 bg-gradient-to-l from-[#0b0f0d] to-transparent z-10 pointer-events-none" />

        {/* خط ۱: فقط حرکت یک‌طرفه به چپ */}
        <div className="overflow-hidden track-container py-1">
          <div className="track-left gap-4">
            {[...itemsRow1, ...itemsRow1].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                dir="rtl"
                className="w-72 p-4 rounded-2xl bg-[#121a16] border border-emerald-500/20 hover:border-emerald-400/60 shadow-lg flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03] cursor-pointer shrink-0"
              >
                <span className="w-10 h-10 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-900">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خط ۲: فقط حرکت یک‌طرفه به راست (خلاف جهت خط ۱ و ۳) */}
        <div className="overflow-hidden track-container py-1">
          <div className="track-right gap-4">
            {[...itemsRow2, ...itemsRow2].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                dir="rtl"
                className="w-72 p-4 rounded-2xl bg-[#121a16] border border-emerald-500/20 hover:border-emerald-400/60 shadow-lg flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03] cursor-pointer shrink-0"
              >
                <span className="w-10 h-10 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-900">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خط ۳: فقط حرکت یک‌طرفه به چپ (هم‌جهت با خط ۱) */}
        <div className="overflow-hidden track-container py-1">
          <div className="track-left gap-4" style={{ animationDuration: '68s' }}>
            {[...itemsRow3, ...itemsRow3].map((item, idx) => (
              <div
                key={`r3-${idx}`}
                dir="rtl"
                className="w-72 p-4 rounded-2xl bg-[#121a16] border border-emerald-500/20 hover:border-emerald-400/60 shadow-lg flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03] cursor-pointer shrink-0"
              >
                <span className="w-10 h-10 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-900">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

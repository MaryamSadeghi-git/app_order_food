'use client';

const guideChapters = [
  {
    id: '01',
    title: 'ساخت حساب',
    subtitle: 'از صفحهٔ اول تا فضای کاری آماده. یک بار انجام می‌شود و حدود دو دقیقه طول می‌کشد.',
    time: '۰:۳۹',
    readTime: 'خواندن فصل',
  },
  {
    id: '02',
    title: 'فضای کاری',
    subtitle: 'هر چیزی که می‌سازید داخل یک فضای کاری است. این فصل می‌گوید چه چیزی کجاست و چرا آن‌جاست.',
    time: '۰:۲۶',
    readTime: 'خواندن فصل',
  },
  {
    id: '03',
    title: 'همکارها و دسترسی‌ها',
    subtitle: 'چطور کسی را دعوت کنید، چه چیزی را برایش باز می‌کنید، و آن یک چیزی که تقریباً همه اولین بار اشتباه می‌گیرند.',
    time: '۰:۲۱',
    readTime: 'خواندن فصل',
  },
  {
    id: '04',
    title: 'ساخت فرآیند',
    subtitle: 'از یک بوم خالی تا کاری که هر روز خودش انجام می‌شود. طولانی‌ترین فصل این راهنماست، چون بیشترین کار همین‌جاست.',
    time: '۰:۳۷',
    readTime: 'خواندن فصل',
  },
  {
    id: '05',
    title: 'کار با گفت‌وگو',
    subtitle: 'همان کار فصل قبل، بدون کشیدن حتی یک یال: بگویید چه می‌خواهید و همان‌جا ساخته می‌شود.',
    time: '۰:۲۲',
    readTime: 'خواندن فصل',
  },
  {
    id: '06',
    title: 'ساخت همکار',
    subtitle: 'یک بار تنظیمش می‌کنید و بعد فقط با آن حرف می‌زنید. فرق همکار با فرآیند همین است: فرآیند را می‌چینید، همکار را استخدام می‌کنید.',
    time: '۰:۲۴',
    readTime: 'خواندن فصل',
  },
];

export default function BlogGuideSection() {
  return (
    <section className="w-full py-20 bg-[#0b0f0d] text-white select-none" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* سرتیتر بخش راهنما / بلاگ */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full">
            راهنمای استفاده و مقالات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            از صفر تا اتوماسیون کامل پلتفرم
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            مفاهیم، فصل‌ها و آموزش‌های گام‌به‌گام برای تسلط کامل بر سیستم
          </p>
        </div>

        {/* لیست فصل‌ها / مقالات */}
        <div className="space-y-4">
          {guideChapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="group rounded-3xl bg-[#121a16] border border-emerald-500/20 hover:border-emerald-500/50 p-6 md:p-8 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] cursor-pointer"
            >
              {/* سمت راست: عنوان و توضیحات */}
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-xs md:text-sm font-mono font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-500/30 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shrink-0">
                  {chapter.id}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {chapter.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {chapter.time}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {chapter.subtitle}
                  </p>
                </div>
              </div>

              {/* سمت چپ: دکمه اقدام / خواندن فصل */}
              <div className="w-full md:w-auto flex justify-end md:justify-center shrink-0">
                <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 group-hover:text-white bg-emerald-950/60 group-hover:bg-emerald-600 border border-emerald-500/30 group-hover:border-emerald-500 px-5 py-2.5 rounded-xl transition-all duration-300">
                  <span>{chapter.readTime}</span>
                  <svg className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

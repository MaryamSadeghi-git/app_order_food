'use client';

import { useState, useEffect } from 'react';

// تب‌های تخصصی برای اپلیکیشن سفارش غذای شرکتی
const topTabs = [
  { id: 'menu', title: 'انتخاب منو و غذا', badge: 'منوی هفتگی و غذای شرکتی' },
  { id: 'cart', title: 'تکمیل سبد خرید', badge: 'تعیین تعداد و پرسنل' },
  { id: 'approval', title: 'تاییدیه مالی', badge: 'بودجه و اعتبار واحد' },
  { id: 'kitchen', title: 'ارسال به آشپزخانه', badge: 'آماده‌سازی سفارش' },
  { id: 'delivery', title: 'تحویل در محل کار', badge: 'پیگیری پیک و تحویل' },
  { id: 'reports', title: 'گزارش‌های ماهانه', badge: 'هزینه‌ها و نظرسنجی' },
];

// مراحل فلوچارت تعاملی آموزشی برای کار با اپلیکیشن
const workflowSteps = [
  { id: 1, title: 'ورود به پنل پرسنل', desc: 'دسترسی با شماره موبایل سازمانی' },
  { id: 2, title: 'انتخاب غذای روز', desc: 'مشاهده منوی رستوران‌های طرف قرارداد' },
  { id: 3, title: 'ثبت سفارش گروهی', desc: 'انتخاب غذا برای بخش یا کل شرکت' },
  { id: 4, title: 'تایید اتوماتیک مالی', desc: 'کسر از اعتبار پنل رفاهی شرکت' },
  { id: 5, title: 'پخت و بسته‌بندی', desc: 'آماده‌سازی بهداشتی و بسته‌بندی شرکتی' },
  { id: 6, title: 'تحویل به موقع', desc: 'ارسال با پیک اختصاصی در ساعت مقرر' },
];

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(topTabs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // شبیه‌سازی هوشمند مراحل آموزشی هنگام کلیک روی دکمه Play
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % workflowSteps.length);
      }, 1600); // هر ۱.۶ ثانیه مرحله بعدی هایلایت می‌شود
    } else {
      setActiveStep(0);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleTabChange = (tab: typeof topTabs[0]) => {
    setActiveTab(tab);
    setIsPlaying(false);
    setActiveStep(0);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 relative" dir="rtl">
      {/* قاب بیرونی بزرگ با تم تیره و حاشیه زمردی */}
      <div className="rounded-3xl border border-emerald-500/20 bg-[#121a16]/95 backdrop-blur-2xl p-3 md:p-6 shadow-[0_0_60px_rgba(16,185,129,0.08)] overflow-hidden">
        
        {/* نوار تب‌های بالای قاب (مخصوص بخش‌های سفارش غذا) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-5 border-b border-emerald-900/50 no-scrollbar">
          {topTabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-emerald-950/40'
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* کادر داخلی مانیتورینگ */}
        <div className="relative rounded-2xl overflow-hidden border border-emerald-900/60 bg-[#0b0f0d] min-h-[440px] md:min-h-[500px] flex flex-col justify-between p-6 md:p-8">
          
          {/* پس‌زمینه گرید نقطه‌ای مدرن */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* هدر داخلی کادر */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-zinc-600'}`} />
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                {activeTab.badge}
              </span>
            </div>

            <span className="text-xs text-slate-400 font-mono">
              {isPlaying ? `● در حال نمایش آموزش: ${workflowSteps[activeStep].title}` : '⏸ آماده بازپخش آموزش'}
            </span>
          </div>

          {/* بدنه فلوچارت آموزشی وسط کادر */}
          <div className="relative z-10 my-auto py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              {workflowSteps.map((node, index) => {
                const isCurrent = isPlaying && activeStep === index;

                return (
                  <div
                    key={node.id}
                    className={`relative p-4 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center ${
                      isCurrent
                        ? 'bg-emerald-950/85 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.35)] scale-105 -translate-y-1'
                        : 'bg-[#121a16]/60 border-emerald-900/40 opacity-70'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center border ${
                      isCurrent ? 'bg-emerald-500 text-slate-950 border-emerald-300 font-bold' : 'bg-emerald-950/60 text-emerald-400 border-emerald-900'
                    }`}>
                      0{node.id}
                    </div>

                    <h4 className="text-xs md:text-sm font-bold text-white mb-1">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {node.desc}
                    </p>

                    {/* نشانگر تعاملی مشابه کلیپ آموزشی */}
                    {isCurrent && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                        <div className="bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-md text-[10px] font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
                          <span>🖱️ مرحله جاری</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* فوتر داخلی کادر: دکمه Play و Stop */}
          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-emerald-900/40">
            
            {/* دکمه Play / Stop */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-7 py-3 rounded-xl font-bold text-xs md:text-sm flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-lg ${
                isPlaying
                  ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)]'
              }`}
            >
              {!isPlaying ? (
                <>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>شروع آموزش تعاملی (Play)</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 6h12v12H6z" />
                  </svg>
                  <span>توقف آموزش (Stop)</span>
                </>
              )}
            </button>

            <span className="text-xs text-slate-400 font-medium">
              {isPlaying ? 'در حال پخش آموزش نحوه کار با اپلیکیشن...' : 'برای شروع آموزش روی دکمه Play کلیک کنید'}
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}

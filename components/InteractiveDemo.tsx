//components/InteractiveDemo.tsx
'use client';

import { useState, useEffect } from 'react';
import { topTabs , workflowSteps } from './FoodMethodData';

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
    <section className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-10 sm:py-16 relative" dir="rtl">
      {/* قاب بیرونی بزرگ با هماهنگی تم لایت و دارک */}
      <div className="rounded-2xl sm:rounded-3xl border border-emerald-600/20 dark:border-emerald-500/20 bg-white/80 dark:bg-[#121a16]/95 backdrop-blur-2xl p-2.5 sm:p-4 md:p-6 shadow-xl dark:shadow-[0_0_60px_rgba(16,185,129,0.08)] overflow-hidden transition-all duration-300">
        
        {/* نوار تب‌های بالای قاب */}
        <div className="flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-emerald-600/10 dark:border-emerald-900/50 [scrollbar-none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {topTabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-md dark:shadow-[0_0_20px_rgba(16,185,129,0.4)] font-bold'
                    : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* کادر داخلی مانیتورینگ */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-600/15 dark:border-emerald-900/60 bg-[#FAF7F2]/90 dark:bg-[#0b0f0d] min-h-110 md:min-h-125 flex flex-col justify-between p-4 sm:p-6 md:p-8 transition-colors duration-300">
          
          {/* پس‌زمینه گرید نقطه‌ای مدرن با رنگ هماهنگ در دو تم */}
          <div className="absolute inset-0 opacity-20 dark:opacity-15 bg-[radial-gradient(#059669_1px,transparent_1px)] dark:bg-[radial-gradient(#10b981_1px,transparent_1px)] [bg-size:24px_24px] pointer-events-none" />


          {/* بدنه فلوچارت آموزشی وسط کادر */}
          <div className="relative z-10 my-auto py-6 sm:py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
              {workflowSteps.map((node, index) => {
                const isCurrent = isPlaying && activeStep === index;

                return (
                  <div
                    key={node.id}
                    className={`relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 flex flex-col items-center text-center ${
                      isCurrent
                        ? 'bg-emerald-50 dark:bg-emerald-950/85 border-emerald-500 dark:border-emerald-400 shadow-lg dark:shadow-[0_0_35px_rgba(16,185,129,0.35)] scale-[1.02] sm:scale-105 -translate-y-1'
                        : 'bg-white/70 dark:bg-[#121a16]/60 border-stone-200 dark:border-emerald-900/40 opacity-80 dark:opacity-70'
                    }`}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl mb-2 sm:mb-3 flex items-center justify-center text-xs sm:text-sm border shrink-0 transition-colors ${
                      isCurrent 
                        ? 'bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-300 font-bold' 
                        : 'bg-emerald-100/80 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-900'
                    }`}>
                      0{node.id}
                    </div>

                    <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-stone-900 dark:text-white mb-1">
                      {node.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-stone-600 dark:text-slate-400 leading-tight">
                      {node.desc}
                    </p>

                    {/* نشانگر تعاملی */}
                    {isCurrent && (
                      <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                        <div className="bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-2 sm:px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
                          <span>🖱️ مرحله جاری</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* فوتر داخلی کادر: دکمه Play و توضیحات */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-emerald-600/15 dark:border-emerald-900/40">
            
            {/* دکمه Play / Stop */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`h-12 w-12 min-w-12 shrink-0 flex-none rounded-full p-0 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg  ${
                isPlaying
                  ? 'bg-rose-100 dark:bg-rose-500/20 border border-rose-300 dark:border-rose-500/40 text-rose-700 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.15)] dark:shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-900 dark:text-slate-950 shadow-md dark:shadow-[0_0_25px_rgba(16,185,129,0.35)]'
              }`}
            >
              {!isPlaying ? (
                <>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 6h12v12H6z" />
                  </svg>
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

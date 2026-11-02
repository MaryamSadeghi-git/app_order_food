'use client';

import { useState } from 'react';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative">
      {/* بخش عنوان و توضیحات */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-brand-light bg-emerald-950/60 border border-emerald-500/20 px-3 py-1.5 rounded-full">
          🎥 تماشا کنید
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
          نحوه کار با پنل و ثبت کمپین در چند کلیک
        </h2>
        <p className="text-slate-400 mt-3 text-sm max-w-xl mx-auto">
          ببینید چطور رستوران‌ها در کمتر از ۵ دقیقه پیشنهاد خود را در صفحه اول اپلیکیشن فعال می‌کنند.
        </p>
      </div>

      {/* قاب ویدیوی مدرن مشابه تصویر */}
      <div className="relative rounded-3xl overflow-hidden bg-bg-card border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.08)] group">
        
        {/* گرادینت پس‌زمینه قاب */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-transparent to-transparent pointer-events-none" />

        <div className="aspect-video w-full flex items-center justify-center relative bg-[#0b0f0d]/80">
          {!isPlaying ? (
            <>
              {/* تصویر پیش‌فرض (Poster) یا کاور ویدیو - جایگزین با عکس واقعی محیط اپلیکیشن */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-bg-main/80 via-transparent to-transparent" />

              {/* دکمه پخش متحرک (پالس‌دار) */}
              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand hover:bg-brand-light text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform group-hover:scale-105 cursor-pointer"
                aria-label="پخش ویدیو"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <div className="absolute bottom-6 z-10 text-xs text-slate-300 font-medium tracking-wide">
                کلیک برای مشاهده ویدیو معرفی (مدت زمان: ۲ دقیقه)
              </div>
            </>
          ) : (
            /* تگ ویدیو - لینک فایل mp4 یا یوتیوب/آپارات خود را اینجا قرار دهید */
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src="/videos/food-ads-demo.mp4"
            >
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}

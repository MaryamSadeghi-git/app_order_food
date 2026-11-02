'use client';

// ردیف ۱: درگاه‌های مستقیم و الکترونیک
const paymentRow1 = [
  { id: 1, title: 'درگاه بانک ملت', icon: '💳' },
  { id: 2, title: 'کیف پول پرسنل', icon: '👛' },
  { id: 3, title: 'سامان‌کیش', icon: '🏦' },
  { id: 4, title: 'زرین‌پال', icon: '🛡️' },
  { id: 5, title: 'کارت‌خوان سیار', icon: '📲' },
  { id: 6, title: 'درگاه پاسارگاد', icon: '🏛️' },
  { id: 7, title: 'بانک آینده', icon: '💳' },
  { id: 8, title: 'سداد ملی', icon: '🏦' },
];

// ردیف ۲: روش‌های پرداخت شرکتی و اعتباری (B2B)
const paymentRow2 = [
  { id: 9, title: 'اعتبار ماهانه شرکت', icon: '📄' },
  { id: 10, title: 'کسر از حقوق', icon: '📊' },
  { id: 11, title: 'یارانه ناهار', icon: '⚖️' },
  { id: 12, title: 'بن کارت رفاهی', icon: '🎟️' },
  { id: 13, title: 'سقف مدیران ارشد', icon: '👑' },
  { id: 14, title: 'بودجه واحدها', icon: '🏢' },
  { id: 15, title: 'تنخواه‌گردان', icon: '💰' },
  { id: 16, title: 'کارت اعتباری سازمانی', icon: '💳' },
];

// ردیف ۳: فاکتور رسمی و تسویه‌حساب کیترینگ‌ها
const paymentRow3 = [
  { id: 17, title: 'فاکتور رسمی مالیات', icon: '🧾' },
  { id: 18, title: 'تسویه کیترینگ', icon: '🔄' },
  { id: 19, title: 'نرم‌افزار سپیدار', icon: '🔗' },
  { id: 20, title: 'استرداد آنی وجه', icon: '↩️' },
  { id: 21, title: 'مغایرت‌گیری بانکی', icon: '🔍' },
  { id: 22, title: 'گزارش حسابداری', icon: '📊' },
  { id: 23, title: 'اتصال به ERP', icon: '⚙️' },
  { id: 24, title: 'تسویه هفتگی', icon: '📅' },
];

export default function PaymentMethods() {
  return (
    <section className="w-full py-14 overflow-hidden select-none bg-[#0b0f0d]" dir="ltr">
      <style jsx>{`
        @keyframes move-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes move-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .pay-row-1,
        .pay-row-2,
        .pay-row-3 {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .pay-row-1 {
          animation: move-left 75s linear infinite;
        }

        .pay-row-2 {
          animation: move-right 75s linear infinite;
        }

        .pay-row-3 {
          animation: move-left 80s linear infinite;
        }

        .track-container:hover .pay-row-1,
        .track-container:hover .pay-row-2,
        .track-container:hover .pay-row-3 {
          animation-play-state: paused;
        }
      `}</style>

      {/* تیتر بخش */}
      <div className="text-center mb-10 px-4" dir="rtl">
        <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full">
          زیرساخت مالی و پرداخت
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
          درگاه‌ها و مدل‌های تسویه‌حساب سازمانی
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          پشتیبانی از انواع روش‌های پرداخت آنلاین، اعتباری، یارانه شرکتی و صدور فاکتور رسمی
        </p>
      </div>

      <div className="space-y-3 relative">
        {/* گرادیان محوکننده طرفین */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-36 bg-gradient-to-r from-[#0b0f0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-36 bg-gradient-to-l from-[#0b0f0d] to-transparent z-10 pointer-events-none" />

        {/* خط ۱: حرکت به چپ */}
        <div className="overflow-hidden track-container py-1">
          <div className="pay-row-1">
            {[0, 1].map((copy) => (
              <div
                key={`r1-${copy}`}
                className="flex shrink-0 gap-3 px-1.5"
                dir="rtl"
                aria-hidden={copy === 1}
              >
                {paymentRow1.map((item) => (
                  <div
                    key={`item-1-${copy}-${item.id}`}
                    className="shrink-0 whitespace-nowrap rounded-xl border border-emerald-500/20 bg-[#121a16] px-4 py-2.5 text-xs font-medium text-white shadow-md hover:border-emerald-400/60 hover:scale-[1.03] transition-transform duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* خط ۲: حرکت به راست */}
        <div className="overflow-hidden track-container py-1">
          <div className="pay-row-2">
            {[0, 1].map((copy) => (
              <div
                key={`r2-${copy}`}
                className="flex shrink-0 gap-3 px-1.5"
                dir="rtl"
                aria-hidden={copy === 1}
              >
                {paymentRow2.map((item) => (
                  <div
                    key={`item-2-${copy}-${item.id}`}
                    className="shrink-0 whitespace-nowrap rounded-xl border border-emerald-500/20 bg-[#121a16] px-4 py-2.5 text-xs font-medium text-white shadow-md hover:border-emerald-400/60 hover:scale-[1.03] transition-transform duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* خط ۳: حرکت به چپ */}
        <div className="overflow-hidden track-container py-1">
          <div className="pay-row-3">
            {[0, 1].map((copy) => (
              <div
                key={`r3-${copy}`}
                className="flex shrink-0 gap-3 px-1.5"
                dir="rtl"
                aria-hidden={copy === 1}
              >
                {paymentRow3.map((item) => (
                  <div
                    key={`item-3-${copy}-${item.id}`}
                    className="shrink-0 whitespace-nowrap rounded-xl border border-emerald-500/20 bg-[#121a16] px-4 py-2.5 text-xs font-medium text-white shadow-md hover:border-emerald-400/60 hover:scale-[1.03] transition-transform duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import {
  paymentRow1,
  paymentRow2,
  paymentRow3,
} from './FoodMethodData';

import MovingRow from './MovingRow';

function PaymentChip({ title }: { title: string }) {
  return (
    <div className="shrink-0 whitespace-nowrap rounded-lg sm:rounded-xl border border-emerald-600/20 bg-bg-card px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium text-stone-800 shadow-sm hover:border-emerald-600/60 hover:bg-bg-cardHover hover:scale-[1.03] transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 dark:border-emerald-500/20 dark:text-white dark:hover:border-emerald-400/60 dark:shadow-md">
      <span>{title}</span>
    </div>
  );
}

export default function PaymentMethods() {
  return (
    <section
      className="w-full py-2 md:py-14 overflow-hidden select-none bg-background text-foreground transition-colors duration-300"
      dir="ltr"
    >
      <div className="text-center mb-8 sm:mb-10 px-4" dir="rtl">
        <span className="text-[11px] sm:text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-600/30 dark:text-emerald-400 dark:bg-emerald-950/80 dark:border-emerald-500/30 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">
          درگاه‌های پرداخت و تسویه
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mt-3 sm:mt-4 mb-2 sm:mb-3">
          پشتیبانی از انواع روش‌های پرداخت آنلاین، اعتباری و صدور فاکتور رسمی
        </h2>
      </div>

      <div className="space-y-2.5 sm:space-y-3 relative">
        <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-20 md:w-36 bg-linear-to-r from-[#FAF7F2] dark:from-[#0b0f0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-20 md:w-36 bg-linear-to-l from-[#FAF7F2] dark:from-[#0b0f0d] to-transparent z-10 pointer-events-none" />

        <MovingRow
          items={paymentRow1}
          direction="left"
          renderItem={(item) => <PaymentChip title={item.title} />}
        />

        <MovingRow
          items={paymentRow2}
          direction="right"
          renderItem={(item) => <PaymentChip title={item.title} />}
        />

        <MovingRow
          items={paymentRow3}
          direction="left"
          renderItem={(item) => <PaymentChip title={item.title} />}
        />
      </div>
    </section>
  );
}

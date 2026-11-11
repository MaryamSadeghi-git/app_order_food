// components/FoodScenarios.tsx

'use client';

import {
  itemsRow1,
  itemsRow2,
  itemsRow3,
} from './FoodMethodData';

import MovingRow from './MovingRow';

function ScenarioCard({ title }: { title: string }) {
  return (
    <div
      dir="rtl"
      className="w-60 sm:w-72 p-3.5 sm:p-4 rounded-2xl bg-bg-card border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-bg-cardHover shadow-sm dark:shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] cursor-pointer shrink-0 dark:border-emerald-500/20 dark:hover:border-emerald-400/60"
    >
      <div className="min-w-0 mx-auto flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-600 dark:bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse ml-2" />
        <h4 className="text-[11px] sm:text-xs font-bold text-stone-900 dark:text-white truncate mt-1">
          {title}
        </h4>
      </div>
    </div>
  );
}

export default function FoodScenarios() {
  return (
    <section
      className="w-full py-2 overflow-hidden select-none bg-background text-foreground transition-colors duration-300"
      dir="ltr"
    >
      <div className="text-center mb-8 md:mb-10 px-4" dir="rtl">
        <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-600/30 dark:text-emerald-400 dark:bg-emerald-950/80 dark:border-emerald-500/30 px-3.5 sm:px-4 py-1.5 rounded-full inline-block">
          قابلیت‌هایی که فود را متمایز می‌کند
        </span>

        <p className="text-xs pt-8 sm:text-sm text-stone-600 dark:text-slate-400 max-w-xl mx-auto">
          مدیریت سریع و دقیق
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4 relative">
        <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-20 md:w-36 bg-linear-to-r from-[#FAF7F2] dark:from-[#0b0f0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-20 md:w-36 bg-linear-to-l from-[#FAF7F2] dark:from-[#0b0f0d] to-transparent z-10 pointer-events-none" />

        <MovingRow
          items={itemsRow1}
          direction="left"
          gapClassName="gap-2 sm:gap-3"
          renderItem={(item) => <ScenarioCard title={item.title} />}
        />

        <MovingRow
          items={itemsRow2}
          direction="right"
          gapClassName="gap-2 sm:gap-3"
          renderItem={(item) => <ScenarioCard title={item.title} />}
        />

        <MovingRow
          items={itemsRow3}
          direction="left"
          duration={68}
          gapClassName="gap-2 sm:gap-3"
          renderItem={(item) => <ScenarioCard title={item.title} />}
        />
      </div>
    </section>
  );
}

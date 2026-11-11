// components/FoodScenarioCard.tsx

type FoodScenario = {
  id: number;
  title: string;
};

export default function FoodScenarioCard({ item }: { item: FoodScenario }) {
  return (
    <div
      dir="rtl"
      className="w-60 sm:w-72 p-3.5 sm:p-4 rounded-2xl bg-bg-card border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-bg-cardHover shadow-sm dark:shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] cursor-pointer shrink-0 dark:border-emerald-500/20 dark:hover:border-emerald-400/60"
    >
      <div className="min-w-0 mx-auto flex items-center gap-2">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-600 dark:bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse ml-2" />
        <h4 className="text-[11px] sm:text-xs font-bold text-stone-900 dark:text-white truncate mt-1">
          {item.title}
        </h4>
      </div>
    </div>
  );
}

// components/MovingRow.tsx

import type { ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  direction: 'left' | 'right';
  duration?: number;
  gapClassName?: string;
  copyCount?: number;
};

export default function MovingRow<T>({
  items,
  renderItem,
  direction,
  duration,
  gapClassName = 'gap-2 sm:gap-3',
  copyCount = 2,
}: Props<T>) {
  const trackClassName =
    direction === 'left' ? 'track-left' : 'track-right';

  return (
    <div className="overflow-hidden track-container py-1">
      <div
        className={`${trackClassName} flex`}
        style={duration ? { animationDuration: `${duration}s` } : undefined}
      >
        {Array.from({ length: copyCount }, (_, copy) => (
          <div
            key={copy}
            className={`flex shrink-0 pr-2 sm:pr-3 ${gapClassName}`}
            dir="rtl"
            aria-hidden={copy > 0}
          >
            {items.map((item, index) => (
              <div key={index} className="shrink-0">
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

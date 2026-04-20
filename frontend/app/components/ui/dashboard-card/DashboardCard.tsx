import type DashboardCardProps from "./types";

export function DashboardCard({ title, children, rightAction, className = "" }: DashboardCardProps) {
  return (
    <section className={`bg-brand-bg rounded-xl overflow-hidden flex ${className}`}>
      {title && 
        <div className="flex items-center justify-between py-1">
          <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
            <span className="w-1 h-4 bg-white rounded-full" />
            {title}
          </h3>
          {rightAction && <div className="text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer">{rightAction}</div>}
        </div>
      }
      <div className="flex-1">
        {children}
      </div>
    </section>
  );
}
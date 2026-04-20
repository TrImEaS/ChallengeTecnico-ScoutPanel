import type { Route } from "../../../routes/+types/PlayerStats";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";

export default function StatisticsCard({ stats }: { stats: Route.ComponentProps["loaderData"]["player"] }) {
  type PlayerStats = Route.ComponentProps["loaderData"]["player"]["stats"][number];
  const statsData = stats.find((s: PlayerStats) => s.shotsOnTarget !== null);

  return (
    <DashboardCard title="Statistics" rightAction="See more" className="px-5 py-4 pb-6 h-fit flex-col">
      <div className="mt-2 mb-6">
        <h4 className="text-sm font-semibold text-zinc-200">2026</h4>
        <span className="text-xs text-zinc-500 block mt-0.5">{statsData?.competition || "—"}</span>
      </div>
      <div className="flex items-start justify-between pt-2 pb-2">
        <CirclePlot percentage={statsData?.shotsOnTarget || 0} label="Shots On Target" colorClass="text-secondary-purple" />
        <CirclePlot percentage={statsData?.goalConversion || 0} label="Goal Conversion" colorClass="text-secondary-purple" />
        <CirclePlot percentage={statsData?.offensiveDuelsWon || 0} label="Offensive Duels Won" colorClass="text-secondary-purple" />
        <CirclePlot percentage={statsData?.aerialDuelsWon || 0} label="Aerial Duels Won" colorClass="text-secondary-purple" />
      </div>
    </DashboardCard>
  );
}

export function CirclePlot ({ percentage, label, colorClass }: { percentage: number; label: string; colorClass: string }) {
  return (
    <div className="flex flex-col items-center justify-start gap-4 flex-1">
      <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="currentColor" strokeWidth="3" className="text-zinc-800/80" />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
            className={colorClass}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-sm sm:text-base font-bold text-brand-text">{percentage}%</span>
      </div>
      <span className="text-[10px] sm:text-[11px] text-zinc-400 text-center leading-tight px-1 font-medium max-w-[80px]">
        {label} 
      </span>
    </div>
  );
};
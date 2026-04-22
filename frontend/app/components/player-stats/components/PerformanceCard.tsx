import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";
import type { PlayerStats } from "~/types/index.ts";

export default function PerformanceCard({ stats }: { stats: PlayerStats[] }) {
  const seasonStats = stats.filter((s: PlayerStats) => !s.competition?.includes('Total Career'));
  const totalStats = {
    matchesPlayed: seasonStats.reduce((acc: number, stat: PlayerStats) => acc + stat.matchesPlayed, 0),
    minutesPlayed: seasonStats.reduce((acc: number, stat: PlayerStats) => acc + stat.minutesPlayed, 0),
    goals: seasonStats.reduce((acc: number, stat: PlayerStats) => acc + stat.goals, 0),
    assists: seasonStats.reduce((acc: number, stat: PlayerStats) => acc + stat.assists, 0),
  }

  return (
    <DashboardCard title="Performance" rightAction="See more" className="h-fit px-5 py-4 pb-5 flex-col justify-between">
      <div className="flex flex-col mt-4 flex-1">
        {/* Table Header */}
        <div className="flex items-center p-3 text-[11px] text-zinc-400 font-bold tracking-wider">
          <div className="flex-1 pl-8">Competition</div>
          <div className="w-16 text-center">M.P</div> 
          <div className="w-20 text-center">Min.</div>
          <div className="w-16 text-center">G</div>
          <div className="w-16 text-center">As</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col gap-4 py-4 border-t border-zinc-800/40">
          {seasonStats.length === 0 
          ? ( 
            <span className="text-zinc-500 text-sm italic">No data</span> 
          )
          : seasonStats.map((stat: PlayerStats, i: number) => (
            <div key={i} className="flex items-center text-sm bg-zinc-800 p-3 rounded-lg">
              <div className="flex-1 flex items-center gap-3 truncate pr-2">
                <div className="w-6 h-6 rounded-md bg-zinc-800 shrink-0 flex items-center justify-center relative overflow-hidden ring-1 ring-zinc-700">
                  <div className="w-full h-full bg-linear-to-br from-yellow-400/80 to-amber-600/80 opacity-60"></div>
                </div>
                <span className="text-brand-text truncate">{stat.competition}</span>
              </div>
              <div className="w-16 text-center text-brand-text font-medium border-r border-zinc-600">{stat.matchesPlayed}</div>
              <div className="w-20 text-center text-brand-text font-medium border-r border-zinc-600">{stat.minutesPlayed}'</div>
              <div className="w-16 text-center text-brand-text font-medium border-r border-zinc-600">{stat.goals}</div>
              <div className="w-16 text-center text-brand-text font-medium">{stat.assists}</div>
            </div>
          ))}
        </div>
        
        {/* Total Stats */}
        {seasonStats.length > 0 && (
          <>
            <div className="flex justify-end pt-1 pb-4">
              <span className="text-[11px] text-zinc-400 font-medium italic">+44 competitions</span>
            </div>

            <div className="h-[2px] mb-4 bg-zinc-800"></div>

            {/* Total Row */}
            <div className="flex items-center bg-zinc-800 rounded-lg p-3 text-sm mt-auto border border-zinc-800/60">
              <div className="flex-1 font-bold text-brand-text pl-2">Total</div>
              <div className="w-16 text-center font-bold text-brand-text border-r border-zinc-600">{totalStats.matchesPlayed}</div>
              <div className="w-20 text-center font-bold text-brand-text border-r border-zinc-600">{totalStats.minutesPlayed}'</div>
              <div className="w-16 text-center font-bold text-brand-text border-r border-zinc-600">{totalStats.goals}</div>
              <div className="w-16 text-center font-bold text-brand-text">{totalStats.assists}</div>
            </div>
          </>
        )}
      </div>
    </DashboardCard>
  );
}

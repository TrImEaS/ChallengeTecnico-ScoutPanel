import type { Player } from "~/types/index.ts";
import { ROW_METRICS } from "../constants";
import { getTargetSeasonStats } from "../utils/stats";

export function ComparisonRows({ players }: { players: (Player | null)[] }) {
  const activePlayers = players.filter((player): player is Player => player !== null);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="grid grid-cols-12 px-2 sm:px-4 mb-2">
        <span className="col-span-4 text-[8px] sm:text-[12px] uppercase text-brand-text font-bold opacity-60">Metric</span>
        <div className="col-span-8 flex">
          {activePlayers.map((player, playerIndex) => (
            <span key={playerIndex} className="flex-1 text-[8px] sm:text-xs uppercase text-brand-text font-bold px-1 sm:px-2">
              <span>{player.name}</span>
            </span>
          ))}
        </div>
      </div>

      {ROW_METRICS.map((metric) => (
        <div key={metric.key} className="grid grid-cols-12 bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors py-3 px-4 max-sm:px-2 rounded-lg items-center">
          <span className="col-span-4 text-[9px] sm:text-[12px] font-medium text-zinc-300">{metric.label}</span>
          <div className="col-span-8 flex">
            {activePlayers.map((player, playerIndex) => {
              const stats = getTargetSeasonStats(player, "2026", true);
              const value = (stats[metric.key as keyof typeof stats] as number) ?? 0;
              const perMatch = stats.matchesPlayed ? (value / stats.matchesPlayed).toFixed(2) : "0.00";
              const suffix = "suffix" in metric ? metric.suffix : "";
              
              return (
                <div key={playerIndex} className="flex-1 flex items-center gap-2 max-sm:gap-0.5 px-2 overflow-hidden">
                  <div className="flex items-center gap-1.5 min-w-[32px]">
                    <MetricIndicator value={value} metricKey={metric.key} />
                    <span className="text-sm max-sm:text-[9px] font-bold text-brand-text tabular-nums">
                      {value}{suffix}
                    </span>
                  </div>
                  <span className="text-[9px] text-zinc-500 tabular-nums">({perMatch})</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function MetricIndicator({ value, metricKey }: { value: number; metricKey: string }) {
  const displayRating = metricKey === 'goalConversion' || metricKey === 'aerialDuelsWon' 
    ? Math.min(value, 99) 
    : Math.min(Math.floor((value / 10) * 15), 99);

  if (displayRating > 100) return <span className="text-xs">🔥</span>;
  
  const isHigh = displayRating > 70;
  const isMed = displayRating >= 41;
  
  const bgColor = isHigh ? "bg-green-400" : isMed ? "bg-yellow-400" : "bg-red-400";
  const shadow = isHigh ? "rgba(34,197,94,0.3)" : isMed ? "rgba(234,179,8,0.3)" : "rgba(239,68,68,0.3)";

  return <div className={`w-2.5 h-2.5 rounded-full min-w-2.5 ${bgColor}`} style={{ boxShadow: `0 0 10px ${shadow}` }} />;
}
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import type { Player } from "~/types/index.ts";
import { COMPARE_COLORS, CHART_METRICS } from "../constants";
import { getTargetSeasonStats } from "../utils/stats";

export function ComparisonChart({ players }: { players: (Player | null)[] }) {
  const activePlayers = players.filter((player): player is Player => player !== null);

  const maxValues = CHART_METRICS.reduce((acc, { key }) => {
    let max = 0;
    activePlayers.forEach((player) => {
      const stats = getTargetSeasonStats(player);
      const val = (stats[key as keyof typeof stats] as number) || 0;
      if (val > max) max = val;
    });
    acc[key] = max > 0 ? max * 1.1 : 1; 
    return acc;
  }, {} as Record<string, number>);

  const data = CHART_METRICS.map(({ label, key }) => {
    const entry: Record<string, string | number> = { subject: label, fullMark: 100 };
    
    activePlayers.forEach((player, playerIndex) => {
      const stats = getTargetSeasonStats(player);
      const val = (stats[key as keyof typeof stats] as number) || 0;
      const normalizedValue = (val / maxValues[key]) * 100;
      entry[`p${playerIndex}`] = key === 'goalConversion' ? val : Math.min(normalizedValue, 100);
    });
    
    return entry;
  });

  return (
    <div className="w-full h-[350px] sm:h-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#27272a" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#a1a1aa", fontSize: 13 }} />
          <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} axisLine={false} />
          {activePlayers.map((_, playerIndex) => (
            <Radar key={playerIndex} dataKey={`p${playerIndex}`} stroke={COMPARE_COLORS[playerIndex]} fill={COMPARE_COLORS[playerIndex]} fillOpacity={0.3} dot={{ r: 3, fill: COMPARE_COLORS[playerIndex] }} />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
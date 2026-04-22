import type { Player, PlayerStats } from "~/types/index.ts";

export const getTargetSeasonStats = (
  player: Player,
  targetSeason = "2026",
  requireLiga = false
): Partial<PlayerStats> => {
  if (!player.stats?.length) return {};

  const stat = player.stats.find((s) => {
    const isTargetSeason = s.season?.name === targetSeason;
    const meetsLigaReq = !requireLiga || s.competition?.includes("2026");
    return isTargetSeason && meetsLigaReq;
  });

  return stat ?? player.stats[0] ?? {};
};
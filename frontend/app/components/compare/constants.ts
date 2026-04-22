export const MAX_COMPARE_PLAYERS = 3;
export const COMPARE_COLORS = ["#00E094", "#FFB800", "#8B5CF6"] as const;

export const CHART_METRICS = [
  { label: "Goals", key: "goals" },
  { label: "Assists", key: "assists" },
  { label: "Shots ON", key: "shotsOnTarget" },
  { label: "Goal Conv.", key: "goalConversion" },
  { label: "Offense Duels", key: "offensiveDuelsWon" },
  { label: "Aerial Duels", key: "aerialDuelsWon" },
] as const;

export const ROW_METRICS = [
  { label: "Matches Played", key: "matchesPlayed" },
  { label: "Minutes Played", key: "minutesPlayed" },
  { label: "Goals", key: "goals" },
  { label: "Assists", key: "assists" },
  { label: "Offensive Duels Won", key: "offensiveDuelsWon" },
  { label: "Aerial Duels Won", key: "aerialDuelsWon" },
  { label: "Goal Conversion", key: "goalConversion", suffix: "%" },
  { label: "Shots on Target", key: "shotsOnTarget" },
  { label: "Yellow Cards", key: "yellowCards" },
  { label: "Red Cards", key: "redCards" },
] as const;
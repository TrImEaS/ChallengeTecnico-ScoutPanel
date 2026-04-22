import type { Player } from "~/types/index.ts";
import { COMPARE_COLORS } from "../constants";

interface PlayerWithColor {
  player: Player;
  index: number;
  color: typeof COMPARE_COLORS[number];
}

export const getActivePlayers = (players: (Player | null)[]) => {
  return players
    .map((player, index) => ({
      player,
      index,
      color: COMPARE_COLORS[index]
    }))
    .filter((item): item is PlayerWithColor => item.player !== null);
};
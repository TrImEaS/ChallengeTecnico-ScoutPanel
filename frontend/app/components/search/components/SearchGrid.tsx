import { SearchPlayerCard } from "./SearchPlayerCard";
import type { Player } from "~/types/index.ts";

export function SearchGrid({ players }: { players: Player[] }) {
  if (!players || players.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-zinc-500">
        <span>No players found. Try adjusting your filters.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {players.map((player) => (
        <SearchPlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

import { SearchPlayerCard } from "./SearchPlayerCard";
import type { Player } from "~/types/index.ts";
import { SearchX } from "lucide-react";

export function SearchGrid({ players }: { players: Player[] }) {
  if (!players || players.length === 0) {
    return (
      <div className="w-full py-16 max-sm:py-10 flex flex-col items-center justify-center text-center px-4 rounded-2xl bg-brand-bg">
        <div className="w-14 h-14 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-500 mb-4 border border-zinc-700/50 shadow-inner">
          <SearchX size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-zinc-200 font-bold text-lg mb-1.5">No players found</h3>
        <p className="text-zinc-500 text-xs sm:text-sm max-w-[260px] leading-relaxed">
          We couldn't find any match for your current filters. Try adjusting your search criteria.
        </p>
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

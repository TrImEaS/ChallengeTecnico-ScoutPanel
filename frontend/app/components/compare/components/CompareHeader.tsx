import { X } from "lucide-react";
import type { Player } from "~/types/index.ts";
import { useCompareStore } from "~/store/useCompareStore";
import { COMPARE_COLORS } from "../constants";

export function CompareHeader({ players }: { players: (Player | null)[] }) {
  const { removePlayer } = useCompareStore();
  const activePlayers = players.filter((player): player is Player => player !== null);

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-10 py-4 bg-zinc-900/40 border-b border-zinc-800/60 rounded-t-2xl px-6 relative">
      {activePlayers.map((player, index) => (
        <div key={player.id} className="flex items-center gap-3 relative group">
          <div 
            className="w-10 h-10 rounded-full border-2 overflow-hidden bg-zinc-950 shrink-0 relative"
            style={{ borderColor: COMPARE_COLORS[index] }}
          >
            <img src={player.photoUrl as string} alt={player.name} className="w-full h-full object-cover" />
            <button 
              onClick={() => removePlayer(player.id)}
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-brand-text truncate max-w-[150px]">{player.name}</span>
            <span className="text-[10px] text-zinc-500 uppercase">{player.team?.name}</span>
          </div>
          {index < activePlayers.length - 1 && (
            <span className="text-zinc-600 font-bold ml-4 sm:ml-10">VS</span>
          )}
        </div>
      ))}
    </div>
  );
}
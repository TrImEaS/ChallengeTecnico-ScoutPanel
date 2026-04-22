import { X } from "lucide-react";
import type { Player } from "~/types/index.ts";
import { useCompareStore } from "~/store/useCompareStore";
import { COMPARE_COLORS } from "../constants";
import { Fragment } from "react";

export function CompareHeader({ players }: { players: (Player | null)[] }) {
  const { removePlayer } = useCompareStore();
  const activePlayers = players.filter((player): player is Player => player !== null);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-8 py-3 bg-zinc-900/40 border-b border-zinc-800/60 rounded-t-2xl px-2 sm:px-6 relative">
      {activePlayers.map((player, index) => (
        <Fragment key={player.id}>
          <section className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 relative group">
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 overflow-hidden bg-zinc-950 shrink-0 relative"
              style={{ borderColor: COMPARE_COLORS[index] }}
            >
              <img src={player.photoUrl as string} alt={player.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => removePlayer(player.id)}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white"
              >
                <X size={12} className="sm:w-4 sm:h-4" />
              </button>
            </div>
            
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-[9px] sm:text-sm font-bold text-brand-text max-sm:truncate max-w-[70px] sm:max-w-[250px]">
                {player.name}
              </span>
              <span className="text-[7px] sm:text-[10px] text-zinc-500 uppercase max-sm:truncate max-w-[70px] sm:max-w-none">
                {player.team?.name}
              </span>
            </div>
          </section>

          {index < activePlayers.length - 1 && (
            <span className="text-zinc-600 font-black text-[10px] sm:text-base px-1 self-center sm:self-auto">VS</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router";
import { DashboardCard } from "~/components/ui/dashboard-card/DashboardCard";
import type { Player } from "~/types/index.ts";
import { useCompareStore } from "~/store/useCompareStore";
import { getAge } from "~/utils/getAge";

export function SearchPlayerCard({ player }: { player: Player}) {
  const { selectedPlayers, togglePlayer } = useCompareStore();
  const isSelected = selectedPlayers.some((p) => p.id === player.id);
  const hasStats = player.stats && player.stats.length > 0;
  const [showNotice, setShowNotice] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasStats) {
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 2000);
      return;
    }
    togglePlayer({
      id: player.id,
      name: player.name,
      photoUrl: player.photoUrl || "",
      positionShort: player.positionShort
    });
  };

  return (
    <Link to={`/player-stats?playerId=${player.id}`} className="block h-full">
      <DashboardCard title="" className={`p-4 h-full transition-all border ${isSelected ? 'border-primary/50 bg-primary/5' : 'border-zinc-900/50 hover:border-zinc-700'}`}>
        <div className="flex flex-col sm:flex-row gap-4 h-full justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-sm" />
              <img 
                src={player.photoUrl || ""} 
                className="relative w-full h-full object-cover rounded-full border border-zinc-800 bg-zinc-950 p-0.5"
                alt={player.name} 
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{player.nationality}</span>
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 truncate group-hover:text-primary transition-colors">
                {player.name}
              </h3>
              <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 mt-1">
                <span className="text-primary font-bold">{player.positionShort}</span>
                <span>|</span>
                <span>{getAge(player.birthDate)}</span>
                {player.team && (
                  <>
                    <span>|</span>
                    <div className="flex items-center gap-1.5 truncate">
                      {player.team.logoUrl && <img src={player.team.logoUrl} className="w-4 h-4 object-contain" alt="" />}
                      <span className="truncate max-w-[150px]">{player.team.name}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end gap-3 sm:w-auto">
            <div className="flex sm:hidden w-full items-center gap-3 text-[10px] font-medium text-zinc-400 border-t border-zinc-800/50 pt-3">
              <span className="bg-zinc-800/50 px-2 py-0.5 rounded text-primary">{player.positionShort}</span>
              <span>{getAge(player.birthDate)}Y</span>
              {player.team && (
                <div className="flex items-center gap-1.5 ml-auto bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800/30">
                   {player.team.logoUrl && <img src={player.team.logoUrl} className="w-3 h-3 object-contain" alt="" />}
                   <span className="truncate max-w-[100px] text-zinc-300">{player.team.name}</span>
                </div>
              )}
            </div>

            <button 
              onClick={handleToggle}
              className={`w-full sm:w-auto px-5 py-2 rounded-lg font-bold text-xs transition-all active:scale-95 ${
                showNotice ? 'bg-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' :
                !hasStats ? 'bg-zinc-800 text-zinc-500 opacity-50' :
                isSelected ? 'border border-primary text-primary bg-primary/5' : 
                'bg-primary text-zinc-950 hover:brightness-110'
              }`}
            >
              {showNotice ? 'Insufficient Data' : !hasStats ? 'No Stats' : isSelected ? 'Selected' : 'Compare'}
            </button>
          </div>
        </div>
      </DashboardCard>
    </Link>
  );
}


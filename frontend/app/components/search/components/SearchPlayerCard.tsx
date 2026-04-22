import { useState } from "react";
import { Link } from "react-router";
import { DashboardCard } from "~/components/ui/dashboard-card/DashboardCard";
import type { Player } from "~/types/index.ts";
import { useCompareStore } from "~/store/useCompareStore";
import { getAge } from "~/utils/getAge";

export function SearchPlayerCard({ player }: { player: Player}) {
  const { selectedPlayers, togglePlayer } = useCompareStore();
  const isSelected = selectedPlayers.some((playerInStore) => playerInStore.id === player.id);
  const hasEnoughStats = player.stats && player.stats.length > 0;
  const [showNotice, setShowNotice] = useState(false);

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (!hasEnoughStats) {
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
    <Link to={`/player-stats?playerId=${player.id}`}>
      <DashboardCard title="" className={`flex flex-col justify-center p-4 sm:px-5 min-h-[120px] rounded-xl overflow-hidden h-full hover:border-primary/50 transition-colors cursor-pointer border ${isSelected ? 'border-primary/50 bg-primary/5' : 'border-zinc-900/50'}`}>
        <section className="flex w-full h-full justify-between items-center group">
          <article className="flex gap-5 flex-1 items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-zinc-800 p-1 rounded-full shrink-0 group-hover:scale-105 transition-transform bg-zinc-950">
              <img 
                src={player.photoUrl || ""} 
                className="object-cover w-full h-full rounded-full"
                alt={player.name} 
              />
            </div>
            <div className="flex flex-col flex-2">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-zinc-400">{player.nationality}</span>
              </div>
              <span className="text-base sm:text-2xl font-semibold group-hover:text-primary transition-colors">{player.name}</span>
              <div className="flex items-center gap-2 sm:pt-1 text-xs">
                <div className="relative flex items-center justify-center h-4 w-4">
                  <div className="absolute h-2.5 w-2.5 rounded-full bg-primary blur-[2.4px]"></div>
                </div>
                <span className="uppercase sm:text-sm text-zinc-300">{player.positionShort}</span>
                <span className="sm:text-sm text-zinc-500">|</span>
                <span className="sm:text-sm text-zinc-300">{getAge(player.birthDate)}</span>
                {player.team && (
                  <>
                    <span className="sm:text-sm text-zinc-500">|</span>
                    <div className="flex items-center gap-1.5">
                      {player.team.logoUrl && <img src={player.team.logoUrl} className="w-4 h-4 object-contain" alt="" />}
                      <span className="sm:text-sm text-zinc-300 truncate max-w-[120px]">{player.team.name}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleToggle}
                  className={`flex items-center z-10 gap-2 cursor-pointer duration-300 max-sm:text-xs py-2 w-fit px-4 rounded-md font-bold transition-all ${
                    showNotice 
                    ? 'bg-red-500/20 text-red-500 border border-red-500/50 scale-95 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                    : !hasEnoughStats
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50'
                    : isSelected 
                    ? 'bg-transparent border border-primary text-primary hover:bg-primary/10' 
                    : 'bg-primary text-zinc-800 hover:bg-primary/80'
                  }`}
                >
                  {showNotice ? 'Insufficient Data' : !hasEnoughStats ? 'No Stats' : isSelected ? 'Selected' : 'Compare'}
                </button>
              </div>
            </div>
          </article>
        </section>
      </DashboardCard>
    </Link>
  );
}

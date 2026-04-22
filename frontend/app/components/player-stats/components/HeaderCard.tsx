import { useState } from "react";
import { Bookmark, EllipsisVertical, Share2, ThumbsUp } from "lucide-react";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";
import type { Player } from "~/types/index.ts";
import { useCompareStore } from "../../../store/useCompareStore";
import { getAge } from '~/utils/getAge'

export default function HeaderCard({ player }: { player: Player }) {
  const { selectedPlayers, togglePlayer } = useCompareStore();
  const isSelected = selectedPlayers.some((playerInStore) => playerInStore.id === player.id);
  const hasStats = player.stats && player.stats.length > 0;
  const [showNotice, setShowNotice] = useState(false);

  const handleToggle = () => {
    if (!hasStats) {
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 2000);
      return;
    }
    
    togglePlayer({
      id: player.id,
      name: player.name,
      photoUrl: player.photoUrl || '',
      positionShort: player.position,
    });
  };

  return (
    <DashboardCard title="" className="flex flex-col justify-center p-4 sm:px-7 max-sm:min-h-[130px] min-h-[150px] rounded-xl overflow-hidden h-full">
      <section className="flex w-full h-full justify-between">
        <article className="flex gap-5 max-sm:gap-2 flex-1 items-center">
          <div className="w-12 h-12 sm:w-20 sm:h-20 border p-1 flex-0.5 rounded-full overflow-hidden bg-zinc-950">
            <img 
              src={player.photoUrl || ''} 
              className="object-cover w-full h-full text-[10px]"
              alt={`${player.name}'s photo`} 
            />
          </div>

          <div className="flex flex-col flex-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-sm text-zinc-400">{player.nationality}</span>
            </div>
            <span className="text-sm sm:text-2xl font-semibold text-brand-text">{player.name}</span>
            <div className="flex items-center gap-2 sm:pt-1 text-xs max-sm:text-[10px]">
              <div className="relative flex items-center justify-center h-4 w-4">
                <div className="absolute h-2.5 w-2.5 rounded-full bg-primary blur-[2.4px]"></div>
              </div>
              <span className="uppercase sm:text-sm text-zinc-300">{player.position.slice(0, 2)}</span>
              <span className="sm:text-sm text-zinc-500">|</span>
              <span className="sm:text-sm text-zinc-300">{getAge(player.birthDate)}</span>
              <span className="sm:text-sm text-zinc-500">|</span>
              <span className="sm:text-sm text-zinc-300 font-bold">Professional</span>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-1 sm:gap-8 justify-between flex-0">
          <div className="flex gap-2 sm:gap-3 justify-end text-zinc-400">
            <ThumbsUp className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10" />
            <Bookmark className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10" />
            <Share2 className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10" />
            <EllipsisVertical className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10" />
          </div>

          <div className="flex justify-end relative">
            <button 
              onClick={handleToggle}
              className={`flex max-sm:absolute max-sm:-bottom-2 max-sm:right-4 items-center z-10 gap-2 cursor-pointer duration-300 max-sm:text-[10px] text-xs py-2 max-sm:px-3 w-fit px-4 rounded-md font-bold transition-all ${
                showNotice 
                ? 'bg-red-500/20 text-red-500 border border-red-500/50 scale-95 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                : !hasStats
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50'
                : isSelected 
                ? 'bg-transparent border border-primary text-primary hover:bg-primary/10' 
                : 'bg-primary text-zinc-800 hover:bg-primary/80'
              }`}
            >
              {showNotice ? 'Insufficient Data' : !hasStats ? 'No Stats' : isSelected ? 'Selected' : 'Compare'}
            </button>
          </div>
        </article>
      </section>
    </DashboardCard>
  );
}
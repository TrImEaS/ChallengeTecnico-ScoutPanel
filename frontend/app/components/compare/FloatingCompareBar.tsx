import { useLocation, useNavigate } from "react-router";
import { X } from "lucide-react";
import { useCompareStore } from "../../store/useCompareStore";
import { MAX_COMPARE_PLAYERS } from "./constants";

export function FloatingCompareBar() {
  const { selectedPlayers, removePlayer } = useCompareStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (selectedPlayers.length === 0 || ['/compare', '/'].includes(pathname)) return null;

  const handleCompare = () => {
    const params = new URLSearchParams();
    selectedPlayers.forEach((player) => params.append("player", player.name));
    navigate(`/compare?${params.toString()}`);
  };

  const slots = Array.from({ length: MAX_COMPARE_PLAYERS }, (_, slotIndex) => selectedPlayers[slotIndex] ?? null);
  const canCompare = selectedPlayers.length >= 2;

  return (
    <div className="fixed bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-100">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-primary/20 p-3 lg:p-4 rounded-2xl flex items-center gap-4 sm:gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 sm:gap-3 relative">
          {slots.map((player, slotIndex) => (
            <div 
              key={player?.id ?? `empty-${slotIndex}`} 
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center relative transition-all ${player ? 'bg-zinc-950 ring-2 ring-primary' : 'border-2 border-dashed border-zinc-700 bg-zinc-900/50'}`}
            >
              {player ? (
                <>
                  <img src={player.photoUrl} alt={player.name} className="w-full h-full rounded-full object-cover" />
                  <button 
                    onClick={() => removePlayer(player.id)}
                    className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 z-10"
                  >
                    <X size={10} strokeWidth={3} />
                  </button>
                </>
              ) : (
                <span className="text-zinc-600 font-bold sm:text-lg">+</span>
              )}
            </div>
          ))}
        </div>
        
        <button 
          onClick={handleCompare}
          disabled={!canCompare}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold whitespace-nowrap text-xs sm:text-sm transition-all ${
            canCompare 
            ? 'bg-primary text-zinc-900 shadow-[0_0_15px_rgba(0,224,148,0.3)] hover:bg-primary/90 active:scale-95' 
            : 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-70'
          }`}
        >
          {canCompare ? 'Compare Now' : 'Select 1 more...'}
        </button>
      </div>
    </div>
  );
}
import type { Route } from "../../../routes/+types/PlayerStats";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";

export default function PositionsCard({ player }: { player: Route.ComponentProps["loaderData"]["player"] }) {
  return (
    <DashboardCard title="Positions" rightAction="See more" className="px-5 py-4 pb-0 h-full flex-col">
      <div className="mt-2 mb-4">
        <h4 className="text-sm font-semibold text-zinc-200">2026</h4>
        <span className="text-xs text-zinc-500 block mt-0.5">Liga Profesional de Fútbol</span>
      </div>

      <div className="flex gap-6 mt-4 pb-5">
        <div className="w-28 sm:w-[124px] h-44 border border-zinc-700/80 rounded-md relative overflow-hidden bg-zinc-900/40 flex items-center justify-center shrink-0">
          {/* Pitch lines */}
          <div className="absolute top-0 w-[45%] h-6 border border-t-0 border-zinc-600/50"></div>
          <div className="absolute top-0 w-[20%] h-3 border border-t-0 border-zinc-600/50"></div>
          <div className="absolute bottom-0 w-[45%] h-6 border border-b-0 border-zinc-600/50"></div>
          <div className="absolute bottom-0 w-[20%] h-3 border border-b-0 border-zinc-600/50"></div>
          <div className="w-full h-px bg-zinc-600/50 absolute top-1/2"></div>
          <div className="w-8 h-8 border border-zinc-600/50 rounded-full absolute top-1/2 -mt-4"></div>

          {/* Fake heatmap */}
          <div className="absolute inset-0 opacity-90 mix-blend-screen overflow-hidden">
             <div className="absolute top-2 left-10 w-16 h-10 bg-green-500/50 rounded-full blur-[10px]"></div>
             <div className="absolute top-8 left-16 w-16 h-16 bg-red-500/50 rounded-full blur-xl"></div>
             <div className="absolute top-12 left-4 w-12 h-14 bg-yellow-400/40 rounded-full blur-md"></div>
             <div className="absolute top-24 left-10 w-14 h-14 bg-green-600/30 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col pt-1">
           <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-zinc-200">Main role</span>
              <span className="w-4 h-4 rounded-full border border-zinc-600 text-zinc-500 flex items-center justify-center text-[10px] cursor-pointer hover:border-zinc-400 hover:text-zinc-400 transition-colors">?</span>
           </div>
           
           <div className="flex flex-col gap-1.5">
              <div className="bg-zinc-800/40 rounded-full flex w-fit border border-secondary-blue/40 overflow-hidden text-[11px] font-semibold text-zinc-200 mb-1">
                 <span className="px-3 py-1 bg-secondary-blue/10">{player.position}</span>
                 <span className="border-l border-zinc-700/50 px-3 py-1 text-secondary-blue bg-zinc-900/50">32</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/40">
                 <span className="text-xs text-zinc-400">Target Man</span>
                 <span className="text-xs font-semibold text-zinc-300">15</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/40">
                 <span className="text-xs text-zinc-400">Poacher</span>
                 <span className="text-xs font-semibold text-zinc-300">12</span>
              </div>
           </div>
        </div>
      </div>
    </DashboardCard>
  );
}

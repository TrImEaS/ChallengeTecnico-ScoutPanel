import type { Route } from "../../../routes/+types/PlayerStats";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";

export default function PhysicalStatsCard({ player }: { player: Route.ComponentProps["loaderData"]['player'] }) {
  const isRight = player.skillfulFoot?.toLowerCase() === "right" || player.skillfulFoot?.toLowerCase() === "both";
  const isLeft = player.skillfulFoot?.toLowerCase() === "left" || player.skillfulFoot?.toLowerCase() === "both";

  return (
    <DashboardCard title="" className="items-center justify-between py-6">
      <div className="flex">
        {/* Position */}
        <div className="flex flex-col items-center justify-center gap-1 flex-1 border-zinc-800/50 px-2">
          <div className="h-10 flex items-center justify-center relative">
            <div className="w-10 h-8 border border-zinc-700/60 rounded-[3px] relative flex justify-center overflow-hidden">
              <div className="absolute top-0 w-4 h-3 border border-t-0 border-zinc-600/60"></div>
              <div className="relative flex items-center justify-center h-4 w-4">
                <div className="absolute h-2.5 w-2.5 top-2 rounded-full bg-primary blur-[1.5px]"></div>
              </div>
            </div>
          </div>
          <span className="text-brand-text text-xs sm:text-sm font-semibold text-center leading-tight min-h-[36px] flex items-center">{player.position}</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider relative -top-1">Position</span>
        </div>

        {/* Skillful Foot */}
        <div className="flex flex-col items-center justify-center gap-1 flex-1 border-zinc-800/50 px-2">
          <div className="h-10 flex items-center justify-center gap-2">
            <Foot active={isLeft} isRightFoot={false} />
            <Foot active={isRight} isRightFoot={true} />
          </div>
          <span className="text-brand-text text-xs sm:text-sm font-semibold mt-1 h-[36px] flex items-center">{player.skillfulFoot}</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider relative -top-1">Skillful foot</span>
        </div>

        {/* Height */}
        <div className="flex flex-col items-center justify-center gap-1 flex-1 px-2">
          <div className="h-10 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-brand-text leading-none tracking-tight">{player.height?.toFixed(2)}</span>
          </div>
          <span className="text-brand-text text-xs sm:text-sm font-semibold h-[36px] flex items-center">mts</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider relative -top-1">Height</span>
        </div>
      </div>
    </DashboardCard>
  );
} 

export function Foot({ active, isRightFoot }: { active: boolean; isRightFoot?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 100"
      className={`
        w-3.5 h-9 md:w-4 md:h-10 transition-all duration-300 
        ${isRightFoot 
          ? "-scale-x-100" 
          : ""
        } 
        ${active
          ? "fill-primary drop-shadow-[0_0_10px_rgba(0,224,148,0.8)]"
          : "fill-zinc-800"
        }
      `}
    >
      <path d="M 20 96 C 12 96, 10 85, 10 70 C 10 50, 7 35, 12 15 C 15 2, 30 0, 34 12 C 37 25, 30 35, 23 48 C 18 58, 22 75, 26 85 C 30 95, 25 96, 20 96 Z" />
    </svg>
  );
}
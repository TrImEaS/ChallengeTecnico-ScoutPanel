import { useMemo } from "react";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";
import type { PlayerCareer } from "~/types/index.ts";

export default function CareerCard({ careers }: { careers?: PlayerCareer[] | null }) {
  const displayCareers = useMemo(() => {
    return [...(careers || [])]
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      .slice(-6);
  }, [careers]);

  return (
    <DashboardCard title="Career" rightAction="See more" className="px-5 py-4 h-fit flex-col"> 
       <div className="flex flex-col mt-2">
         <div className="relative flex items-center justify-between w-full mt-4 bg-transparent pb-4 flex-1">
            {/* Line for connecting the dots */}
            <div className="absolute left-[5%] right-[5%] max-sm:left-[10%] max-sm:right-[10%] h-[2px] bg-zinc-800 top-[50%] z-0"></div>

            {displayCareers.map((carrer, i) => {
               const startDate = new Date(carrer.startDate);
               const startYear = startDate.getFullYear().toString().slice(-2);
               
               return (
                 <div key={carrer.id || i} className='flex flex-col items-center gap-4 relative z-10 w-10 sm:w-12 shrink-0'>
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden p-[2px] shadow-sm shrink-0 ring-1 ring-zinc-700/50">
                      {carrer.team?.logoUrl ? (
                        <img src={carrer.team.logoUrl} alt={carrer.team.name} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-[10px] font-bold text-brand-text uppercase">{carrer.team?.name?.slice(0, 2)}</div>
                      )}
                    </div>

                    <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-brand-bg shrink-0 shadow-[0_0_8px_rgba(0,224,148,0.5)]"></div>
                    <span className="text-xs text-zinc-500 font-medium tracking-tight">'{startYear}</span>
                 </div>
               );
            })}
         </div>
         
         <div className="mt-auto pt-5">
            <span className="text-sm font-medium text-zinc-300">Last transfer</span>
         </div>
       </div>
    </DashboardCard>
  );
}

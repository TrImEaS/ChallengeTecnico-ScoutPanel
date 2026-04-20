import { useState } from "react";
import { DashboardCard } from "../ui/dashboard-card/DashboardCard";

type Player = any;

export default function CompareLayout({ data }: { data: Player[] }) {
  const [playerA, setPlayerA] = useState<Player | null>(null);
  const [playerB, setPlayerB] = useState<Player | null>(null);

  const getAge = (birthDate: string) => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
  }

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] w-full pb-8">
      <h1 className="text-2xl font-bold text-brand-text mt-2 mb-2">Compare Players</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Player A Selection */}
        <div className="flex flex-col gap-4">
          <select 
            className="w-full bg-zinc-900 border border-zinc-800 text-brand-text p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
            onChange={(e) => setPlayerA(data.find(player => player.id === Number(e.target.value)))}
            defaultValue=""
          >
            <option value="" disabled>Select Player A...</option>
            {data.map(player => (
              <option key={player.id} value={player.id}>{player.name}</option>
            ))}
          </select>

          {playerA ? (
            <DashboardCard title="" className="p-6 flex flex-col items-center justify-center min-h-[350px]">
               <div className="w-28 h-28 rounded-full overflow-hidden bg-brand-bg mb-4 ring-2 ring-primary">
                 <img src={playerA.photoUrl} alt="" className="w-full h-full object-cover" />
               </div>
               <h2 className="text-xl font-bold text-brand-text text-center">{playerA.name}</h2>
               <span className="text-zinc-500 font-medium mt-1">{playerA.position}</span>
               
               <div className="w-full mt-10 flex flex-col gap-4 px-2">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                     <span className="text-zinc-500 text-sm">Market Value</span>
                     <span className="text-brand-text font-bold">€ {playerA.marketValue}M</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                     <span className="text-zinc-500 text-sm">Height</span>
                     <span className="text-brand-text font-bold">{playerA.height}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                     <span className="text-zinc-500 text-sm">Age</span>
                     <span className="text-brand-text font-bold">{getAge(playerA.birthDate)}</span>
                  </div>
               </div>
            </DashboardCard>
          ) : (
             <DashboardCard title="" className="p-6 flex flex-col items-center justify-center min-h-[350px] border border-dashed border-zinc-700/60 bg-transparent">
                <span className="text-zinc-600 font-medium">Select a player to compare</span>
             </DashboardCard>
          )}
        </div>

        {/* Player B Selection */}
        <div className="flex flex-col gap-4">
          <select 
            className="w-full bg-zinc-900 border border-zinc-800 text-brand-text p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
            onChange={(e) => setPlayerB(data.find(player => player.id === Number(e.target.value)))}
            defaultValue=""
          >
            <option value="" disabled>Select Player B...</option>
            {data.map(player => (
              <option key={player.id} value={player.id}>{player.name}</option>
            ))}
          </select>

          {playerB ? (
            <DashboardCard title="" className="p-6 flex flex-col items-center justify-center min-h-[350px]">
               <div className="w-28 h-28 rounded-full overflow-hidden bg-brand-bg mb-4 ring-2 ring-primary">
                 <img src={playerB.photoUrl} alt="" className="w-full h-full object-cover" />
               </div>
               <h2 className="text-xl font-bold text-brand-text text-center">{playerB.name}</h2>
               <span className="text-zinc-500 font-medium mt-1">{playerB.position}</span>
               
               <div className="w-full mt-10 flex flex-col gap-4 px-2">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                     <span className="text-zinc-500 text-sm">Market Value</span>
                     <span className="text-brand-text font-bold">€ {playerB.marketValue}M</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                     <span className="text-zinc-500 text-sm">Height</span>
                     <span className="text-brand-text font-bold">{playerB.height}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                     <span className="text-zinc-500 text-sm">Age</span>
                     <span className="text-brand-text font-bold">{getAge(playerB.birthDate)}</span>
                  </div>
               </div>
            </DashboardCard>
          ) : (
             <DashboardCard title="" className="p-6 flex flex-col items-center justify-center min-h-[350px] border border-dashed border-zinc-700/60 bg-transparent">
                <span className="text-zinc-600 font-medium">Select a player to compare</span>
             </DashboardCard>
          )}
        </div>

      </div>
    </div>
  );
}

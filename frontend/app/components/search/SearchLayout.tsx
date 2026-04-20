import { Link } from "react-router";
import { DashboardCard } from "../ui/dashboard-card/DashboardCard";

type Player = any;

export default function SearchLayout({ data }: { data: Player[] }) {
  return (
    <div className="flex flex-col gap-6 max-w-[1400px] w-full pb-8">
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-2xl font-bold text-brand-text">Search Players</h1>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 w-72">
          <input 
            type="text" 
            placeholder="Type a name to search..." 
            className="bg-transparent border-none outline-none text-sm text-brand-text w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((player) => (
          <Link to={`/player-stats?playerId=${player.id}`} key={player.id} className="group">
            <DashboardCard title="" className="p-5 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer border border-transparent h-full">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-brand-bg shrink-0">
                <img src={player.photoUrl} alt={player.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-brand-text font-bold text-lg leading-tight group-hover:text-primary transition-colors">{player.name}</h3>
                <span className="text-zinc-400 text-sm mt-1">{player.position}</span>
                <div className="flex gap-2 mt-2">
                  {player.team?.logoUrl ? (
                    <img src={player.team.logoUrl} className="w-5 h-5 object-contain" alt="" />
                  ) : null}
                  <span className="text-zinc-500 text-xs">{player.team?.name || "No Team"}</span>
                </div>
              </div>
            </DashboardCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

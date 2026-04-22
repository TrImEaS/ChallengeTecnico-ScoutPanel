import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";
import { formatDate } from "../../../utils/date";
import type { Team } from "~/types/index.ts";

interface CurrentTeamCardProps {
  team: Team;
  contractFrom?: string | null;
  contractTo?: string | null;
  leagueName?: string;
}

export default function CurrentTeamCard({ team, contractFrom, contractTo, leagueName = "Liga Profesional de Fútbol" }: CurrentTeamCardProps) {

  return (
    <DashboardCard title="" className="flex flex-col p-5 h-fit">
      <section className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center p-2 shrink-0">
          <img src={team.logoUrl || ""} alt={team.name} className="max-w-full max-h-full object-contain" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-brand-text">{team.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm">{team.country.slice(0, 2).toUpperCase()}</span>
            <span className="text-sm text-zinc-400 font-medium">{leagueName}</span>
          </div>
        </div>
      </section>

      <section className="mt-auto pt-6 max-sm:pt-3 flex items-end justify-between">
        <span className="text-primary font-bold text-xs">Hired</span>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 mb-1 leading-none">From</span>
            <span className="text-sm text-brand-text/80 font-medium leading-none">{formatDate(contractFrom)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 mb-1 leading-none">To</span>
            <span className="text-sm text-brand-text/80 font-medium leading-none">{formatDate(contractTo)}</span>
          </div>
        </div>
      </section>
    </DashboardCard>
  );
}

import type { Route } from "../../../routes/+types/PlayerStats";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";

export default function CurrentTeamCard({ player }: { player: Route.ComponentProps["loaderData"]['player'] }) {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  return (
    <DashboardCard title="" className="flex flex-col p-5 h-fit">
      <section className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center p-2 shrink-0">
          <img src={player.team.logoUrl || ""} alt={player.team.name} className="max-w-full max-h-full object-contain" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-brand-text">{player.team.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm">{player.team.country.slice(0, 2).toUpperCase()}</span>
            <span className="text-sm text-zinc-400 font-medium">Liga Profesional de Fútbol</span>
          </div>
        </div>
      </section>

      <section className="mt-auto pt-6 max-sm:pt-3 flex items-end justify-between">
        <span className="text-primary font-bold text-xs">Hired</span>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 mb-1 leading-none">From</span>
            <span className="text-sm text-brand-text/80 font-medium leading-none">{formatDate(player.contractFrom as string)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 mb-1 leading-none">To</span>
            <span className="text-sm text-brand-text/80 font-medium leading-none">{formatDate(player.contractTo as string)}</span>
          </div>
        </div>
      </section>
    </DashboardCard>
  );
}

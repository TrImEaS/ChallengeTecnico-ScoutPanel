import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";
import type { Player } from '~/types/index.ts'

export default function PlayerInfoCard({ player }: { player: Player }) {
  return (
    <DashboardCard title="Player information" className="px-5 py-4 pb-0 flex-col">
      <div className="flex flex-col mt-2 [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-zinc-800/40">
        <Row 
          label="Weight" 
          value={`${player.weight} kg`} />
        <Row 
          label="Nationality" 
          value={player.nationality} 
          iconBase={player.nationality} />
        <Row
          label="2º Nationality"
          value={player.secondNationality || "—"}
          iconBase={player.secondNationality || ""} 
        />
        <Row 
          label="Community passport" 
          value={player.communityPassport ? "Yes" : "No"} 
        />
        <Row 
          label="Residence" 
          value={player.residence || "—"} 
          iconBase={player.residence || ""} 
        />
        <Row 
          label="Intermediary" 
          value={player.intermediary || "—"} 
          iconBase={''} 
        />
      </div>
    </DashboardCard>
  );
}

function Row ({ label, value, iconBase }: { label: string; value: React.ReactNode; iconBase?: string }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm text-zinc-300 font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-brand-text font-medium text-right">{value}</span>
        {iconBase && (
          <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-zinc-800/80 ring-1 ring-zinc-700">
            <span className="text-[9px] leading-none">{iconBase.slice(0,2).toUpperCase()}</span>
          </div>
        )}
      </div>
    </div>
  );
}
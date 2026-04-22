import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";
import { Info } from "lucide-react";

export default function MarketValueCard({ value }: { value?: number | null }) {
  return (
    <DashboardCard title="Market value" className="px-4 py-5 pb-6 flex-col">
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <span className="text-zinc-300 text-sm font-medium group-hover:text-brand-text transition-colors">LDP Analysis</span>
          <Info size={14} className="text-zinc-500 group-hover:text-zinc-400 transition-colors" />
        </div>
        <span className="text-xl font-bold tracking-tight text-brand-text">€ {value?.toFixed(1) || 0}M</span>
      </div>
    </DashboardCard>
  );
}

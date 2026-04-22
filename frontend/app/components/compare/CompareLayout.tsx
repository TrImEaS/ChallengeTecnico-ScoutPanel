import { Link } from "react-router";
import type { Player } from "~/types/index.ts";
import { CompareHeader } from "./components/CompareHeader";
import { ComparisonChart } from "./components/ComparisonChart";
import { ComparisonRows } from "./components/ComparisonRows";
import { useCompareStore } from "../../store/useCompareStore";
import { useSyncCompareUrl } from "./hooks/useSyncCompareUrl";
import { MAX_COMPARE_PLAYERS } from "./constants";

interface CompareLayoutData {
  preSelectedPlayers: Player[];
  isEmpty: boolean;
}

export default function CompareLayout({ data }: { data: CompareLayoutData }) {
  const { selectedPlayers } = useCompareStore();
  useSyncCompareUrl(selectedPlayers, data.isEmpty);

  const selections = Array.from({ length: MAX_COMPARE_PLAYERS }, (_, i) => 
    data.preSelectedPlayers?.[i] ?? null
  );

  const activeCount = selections.filter(Boolean).length;

  if (activeCount === 0) {
    return (
      <EmptyState 
        title="No players found" 
        subtitle="You can compare up to 3 players at a time. Use the search to find players and add them to the comparison." 
        actionText="Go to Search" 
      />
    );
  }

  if (activeCount === 1) {
    return <EmptyState title="One more needed!" subtitle={`You have selected ${selections[0]?.name}. Please select at least one more.`} actionText="Find another player" />;
  }

  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-brand-bg">
      <div className="flex-1 flex flex-col border-x border-t  border-zinc-800/40 backdrop-blur-sm overflow-hidden">
        <CompareHeader players={selections} />
        <div className="flex-1 flex flex-col lg:flex-row min-h-0">
          <div className="flex-1 p-6 lg:p-12 flex items-center justify-center">
            <ComparisonChart players={selections} />
          </div>
          <div className="flex-1 p-6 lg:p-12 overflow-y-auto bg-brand-bg">
            <ComparisonRows players={selections} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ title, subtitle, actionText }: { title: string; subtitle: string; actionText: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-4 w-full">
      <h2 className="text-3xl font-bold text-brand-text">{title}</h2>
      <p className="text-zinc-400 max-w-md text-center">{subtitle}</p>
      <Link to="/search" className="bg-primary hover:bg-primary/90 text-zinc-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all mt-4">
        {actionText}
      </Link>
    </div>
  );
}
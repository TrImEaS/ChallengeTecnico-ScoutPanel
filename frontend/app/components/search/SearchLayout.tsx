import Pagination from "../ui/Pagination/Pagination";
import { SearchFilters } from "./components/SearchFilters";
import { SearchGrid } from "./components/SearchGrid";
import { useSearchFilters } from "./hooks/useSearchFilters";
import type { Player } from "~/types/index.ts";

interface Props {
  loaderData: {
    data: Player[];
    meta: { total: number; page: number; totalPages: number };
    positions: { position: string; positionShort: string | null }[];
  };
}

export default function SearchLayout({ loaderData: { data, meta, positions } }: Props) {
  const { filters, updateLocalFilter, handleSearch } = useSearchFilters();
  
  return (
    <div className="flex flex-col sm:mx-auto gap-6 max-w-[1400px] w-full pb-8">
      <SearchFilters 
        filters={filters}
        updateFilter={updateLocalFilter}
        handleSearch={handleSearch}
        positions={positions}
      />
      
      <SearchGrid players={data} />

      {meta?.totalPages > 1 && (
        <Pagination currentPage={meta.page} totalPages={meta.totalPages} />
      )}
    </div>
  );
}

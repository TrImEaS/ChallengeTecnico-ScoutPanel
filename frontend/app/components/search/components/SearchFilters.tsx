import { Search } from "lucide-react";

interface SearchFiltersProps {
  filters: {
    name: string;
    position: string;
    nationality: string;
    minAge: string;
    maxAge: string;
  };
  updateFilter: (key: "name" | "position" | "nationality" | "minAge" | "maxAge", val: string) => void;
  handleSearch: () => void;
  positions: { position: string; positionShort: string | null }[];
}

export function SearchFilters({ filters, updateFilter, handleSearch, positions }: SearchFiltersProps) {
  const onKeyDown = (e: React.KeyboardEvent) => e.key === "Enter" && handleSearch();

  return (
    <div className="flex flex-col gap-4 mb-6">
      <h1 className="text-2xl font-bold text-brand-text">Search Players</h1>
      <div className="flex flex-wrap gap-3 items-end">
        {/* Name Input */}
        <FilterInput 
          label="Player Name" 
          value={filters.name} 
          onChangeValue={val => updateFilter("name", val)} 
          onKeyDown={onKeyDown} 
          placeholder="E.g. Messi" 
        />

        {/* Position Select */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-zinc-400">Position</span>
          <select 
            value={filters.position} 
            onChange={e => updateFilter("position", e.target.value)}
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none h-[38px] min-w-32 focus:border-primary/50"
          >
            <option value="">All Positions</option>
            {positions?.map((p) => (
              <option key={p.position} value={p.position}>
                {p.position} {p.positionShort ? `(${p.positionShort})` : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Nationality & Ages */}
        <FilterInput 
          label="Nationality" 
          value={filters.nationality} 
          onChangeValue={val => updateFilter("nationality", val)} 
          onKeyDown={onKeyDown} 
          placeholder="E.g. Argentina"
          className="w-32" 
        />

        <FilterInput 
          label="Min Age" 
          type="number" 
          value={filters.minAge} 
          onChangeValue={val => updateFilter("minAge", val)} 
          onKeyDown={onKeyDown} 
          className="w-20" 
          min="15"
          max="50"
        />

        <FilterInput 
          label="Max Age" 
          type="number" 
          value={filters.maxAge} 
          onChangeValue={val => updateFilter("maxAge", val)} 
          onKeyDown={onKeyDown} 
          className="w-20" 
          min="15"
          max="50"
        />

        <button onClick={handleSearch} className="bg-primary hover:bg-primary/80 text-zinc-900 font-semibold px-6 rounded-lg h-[38px] flex items-center gap-2 transition-all active:scale-95">
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </div>
  );
}

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChangeValue: (value: string) => void;
}

function FilterInput({ label, onChangeValue, className, ...props }: FilterInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-zinc-400">{label}</span>
      <input 
        {...props}
        onChange={(e) => onChangeValue(e.target.value)}
        className={`bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none h-[38px] focus:border-primary/50 ${className ?? ''}`}
      />
    </div>
  );
}
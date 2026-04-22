import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { formatAgeInput } from "../utils/ageUtils";

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
  const [showAdvanced, setShowAdvanced] = useState(false);
  const onKeyDown = (e: React.KeyboardEvent) => e.key === "Enter" && handleSearch();

  const advancedClass = showAdvanced ? "flex" : "hidden lg:flex";

  const handleAgeChange = (key: "minAge" | "maxAge", val: string) => {
    const formatted = formatAgeInput(val);
    if (formatted !== null) updateFilter(key, formatted);
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <h1 className="text-2xl font-bold text-brand-text">Search Players</h1>
      
      <div className="flex max-lg:flex-wrap gap-3 items-end">
        {/* Name Input */}
        <div className="flex-1 min-w-[200px] lg:max-w-[500px]">
          <FilterInput 
            label="Player Name" 
            value={filters.name} 
            onChangeValue={val => updateFilter("name", val)} 
            onKeyDown={onKeyDown} 
            placeholder="E.g. Messi" 
          />
        </div>

        {/* Toggle Button (mobile) */}
        <button 
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`lg:hidden flex items-center justify-center h-[38px] w-[38px] rounded-lg border transition-all ${
            showAdvanced ? 'border-primary bg-primary/10 text-primary' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        <div className="flex gap-3 max-lg:w-full">
          {/* Position Select */}
          <div className={`${advancedClass} flex flex-col gap-1 max-lg:w-full min-w-32`}>
            <span className="text-xs text-zinc-400">Position</span>
            <select 
              value={filters.position} 
              onChange={e => updateFilter("position", e.target.value)}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none h-[38px] focus:border-primary/50 transition-colors w-full"
            >
              <option value="">All Positions</option>
              {positions?.map((p) => (
                <option key={p.position} value={p.position}>
                  {p.position} {p.positionShort ? `(${p.positionShort})` : ""}
                </option>
              ))}
            </select>
          </div>
          
          {/* Ages Container */}
          <div className={`${advancedClass} gap-3 md:w-auto min-w-fit`}>
            <FilterInput 
              label="Min Age" 
              type="number" 
              value={filters.minAge} 
              onChangeValue={(val) => handleAgeChange("minAge", val)}
              onKeyDown={onKeyDown} 
              className="w-full md:w-20" 
              min={15}
              max={60}
            />
            <FilterInput 
              label="Max Age" 
              type="number" 
              value={filters.maxAge} 
              onChangeValue={(val) => handleAgeChange("maxAge", val)}
              onKeyDown={onKeyDown} 
              className="w-full md:w-20" 
              min={15}
              max={60}
            />
          </div>
        </div>

        {/* Nationality */}
        <FilterInput 
          label="Nationality" 
          value={filters.nationality} 
          onChangeValue={val => updateFilter("nationality", val)} 
          onKeyDown={onKeyDown} 
          placeholder="E.g. Argentina"
          containerClassName={`${advancedClass} w-full lg:w-32`}
        />

        {/* Search Button */}
        <button 
          onClick={handleSearch} 
          className="bg-primary hover:bg-primary/80 text-zinc-900 font-semibold px-6 rounded-lg h-[38px] flex items-center justify-center gap-2 transition-all active:scale-95 flex-1 lg:flex-none shadow-[0_0_15px_rgba(0,224,148,0.15)]"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChangeValue: (value: string) => void;
  containerClassName?: string;
}

function FilterInput({ label, onChangeValue, className, containerClassName, ...props }: FilterInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${containerClassName ?? ''}`}>
      <span className="text-xs text-zinc-400">{label}</span>
      <input 
        onChange={(e) => onChangeValue(e.target.value)}
        className={`bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none h-[38px] focus:border-primary/50 transition-all ${className ?? ''}`}
        {...props}
      />
    </div>
  );
}

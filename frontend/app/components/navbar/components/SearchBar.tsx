import { Search, ChevronDown, X } from "lucide-react";
import { useSearchLogic, FILTER_OPTIONS } from "./hooks/useSearchLogic";

export default function SearchBar() {
  const { state, actions } = useSearchLogic();

  return (
    <>
      {/* Mobile Button */}
      <button
        type="button"
        onClick={actions.openMobileSearch}
        aria-label="Open search"
        className="md:hidden flex items-center justify-center w-10 h-10 text-zinc-400 hover:text-zinc-200 hover:bg-brand-bg/60 rounded-xl transition-all"
      >
        <Search size={20} />
      </button>

      {/* Main Search Container */}
      <div
        className={`absolute inset-x-0 top-0 h-14 px-2 md:px-0 bg-brand-bg md:bg-transparent z-40 md:static flex items-center md:flex-1 md:max-w-xl transition-all duration-200 ${
          state.isMobileSearchOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <form
          onSubmit={actions.handleSearch}
          className="relative flex items-center w-full h-10 bg-zinc-800/60 border border-zinc-700/50 rounded-lg overflow-visible backdrop-blur-sm"
        >
          {/* Filter Selector */}
          <button
            type="button"
            onClick={actions.toggleDropdown}
            className="flex items-center justify-between min-w-[100px] max-w-[100px] gap-1.5 px-3 h-full text-sm text-zinc-300 border-r border-zinc-700/50 hover:bg-zinc-700/40 transition-colors shrink-0 rounded-l-lg"
          >
            <span className="hidden sm:inline">{state.filter}</span>
            <span className="sm:hidden text-xs">{state.filter}</span>
            <ChevronDown className="min-w-[14px]" size={14} />
          </button>

          {/* Dropdown Options */}
          {state.isOpen && (
            <div className="absolute top-full left-0 mt-1 w-32 sm:w-40 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50 overflow-hidden">
              {FILTER_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => actions.handleFilterSelect(option)}
                  className={`w-full px-3 py-2 text-sm text-left transition-colors ${
                    state.filter === option
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "hover:bg-zinc-700/50 text-zinc-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Search Input */}
          <input
            type="text"
            value={state.searchValue}
            onChange={(e) => actions.setSearchValue(e.target.value)}
            autoFocus={state.isMobileSearchOpen}
            placeholder="Search player"
            className="flex-1 min-w-0 bg-transparent px-3 h-full text-sm text-zinc-200 placeholder-zinc-500 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            aria-label="Submit search"
            className="hidden md:flex items-center justify-center px-3 h-full text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Search size={18} />
          </button>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={actions.closeMobileSearch}
            aria-label="Close search"
            className="md:hidden flex shrink-0 items-center justify-center px-3 h-full text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <X size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
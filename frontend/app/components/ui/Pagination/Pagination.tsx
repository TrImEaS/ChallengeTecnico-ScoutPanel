import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSearchParams } from "react-router";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
  };

const getPages = () => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1">
        {getPages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setPage(page)}
            disabled={page === "..."}
            className={`min-w-[40px] h-10 rounded-lg border transition-all font-medium text-sm
              ${page === currentPage 
                ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,224,148,0.2)]" 
                : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-600 hover:text-white"}
              ${page === "..." ? "border-transparent bg-transparent cursor-default" : ""}
            `}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

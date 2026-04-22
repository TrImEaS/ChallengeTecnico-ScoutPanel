import { useCallback, useState } from "react";
import { useSearchParams } from "react-router";

export function useSearchFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    name: searchParams.get("name") || "",
    position: searchParams.get("position") || "",
    nationality: searchParams.get("nationality") || "",
    minAge: searchParams.get("minAge") || "",
    maxAge: searchParams.get("maxAge") || "",
  });

  const updateLocalFilter = useCallback((key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });

    params.set("page", "1");
    setSearchParams(params);
  }, [filters, searchParams, setSearchParams]);

  return {
    filters,
    updateLocalFilter,
    handleSearch,
  };
}
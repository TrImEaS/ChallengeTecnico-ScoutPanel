import { useState, useCallback } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router";

export type FilterOption = "All" | "Players";
export const FILTER_OPTIONS: FilterOption[] = ["All", "Players"];

export const useSearchLogic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState<FilterOption>(FILTER_OPTIONS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterSelect = useCallback((option: FilterOption) => {
    setFilter(option);
    setIsOpen(false);
  }, []);

  const handleSearch = useCallback((e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    const sanitizedSearch = searchValue.trim();
    if (!sanitizedSearch) return;

    const currentSearchParam = searchParams.get("name");
    const isSameSearch = currentSearchParam === sanitizedSearch;
    const isSearchRoute = location.pathname === '/search';

    if (isSameSearch && isSearchRoute) {
      setIsMobileSearchOpen(false);
      return;
    }

    navigate(`/search?name=${encodeURIComponent(sanitizedSearch)}`);
    setIsMobileSearchOpen(false);
  }, [searchValue, searchParams, location.pathname, navigate]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeMobileSearch = () => setIsMobileSearchOpen(false);
  const openMobileSearch = () => setIsMobileSearchOpen(true);

  return {
    state: {
      filter,
      isOpen,
      isMobileSearchOpen,
      searchValue,
    },
    actions: {
      setSearchValue,
      handleFilterSelect,
      handleSearch,
      toggleDropdown,
      closeMobileSearch,
      openMobileSearch,
    },
  };
};
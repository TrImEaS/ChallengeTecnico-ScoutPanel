import {
  Home,
  Search,
  GitCompareArrows,
} from "lucide-react";
import type { NavItem } from "~/types/index.ts";

export const NAV_ITEMS: NavItem[] = [
  { icon: Home, to: "/", label: "Inicio" },
  { icon: Search, to: "/search", label: "Buscar" },
  { icon: GitCompareArrows, to: "/compare", label: "Comparar" },
];

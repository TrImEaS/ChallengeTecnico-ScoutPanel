import {
  Home,
  Search,
  Compass,
  ClipboardList,
  FileText,
  BarChart3,
  GitCompareArrows,
  RefreshCw,
  Users,
  Zap,
  CircleDot,
  Scissors,
  Settings,
  HelpCircle,
} from "lucide-react";
import type { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { icon: Home, to: "/", label: "Inicio" },
  { icon: Search, to: "/search", label: "Buscar" },
  // { icon: Compass, to: "/discover", label: "Descubrir" },
  // { icon: ClipboardList, to: "/shortlist", label: "Shortlist" },
  // { icon: FileText, to: "/reports", label: "Reportes" },
  // { icon: BarChart3, to: "/analytics", label: "Analíticas" },
  { icon: GitCompareArrows, to: "/compare", label: "Comparar" },
  // { icon: RefreshCw, to: "/transfers", label: "Transferencias" },
  // { icon: Users, to: "/agents", label: "Agentes" },
  // { icon: Zap, to: "/alerts", label: "Alertas" },
  // { icon: CircleDot, to: "/matches", label: "Partidos" },
  // { icon: Scissors, to: "/clips", label: "Clips" },
  // { icon: Settings, to: "/settings", label: "Configuración" },
  // { icon: HelpCircle, to: "/help", label: "Ayuda" },
];

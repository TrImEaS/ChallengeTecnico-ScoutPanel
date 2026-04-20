import type { LucideIcon } from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  to: string;
  label: string;
}

export interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export interface SidebarItemProps extends NavItem {
  isExpanded?: boolean;
}

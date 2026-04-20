import type { LucideIcon } from "lucide-react";

export interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export interface NavActionProps {
  icon: LucideIcon;
  label: string;
  badge?: boolean;
  className?: string;
}

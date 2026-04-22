import { NavLink } from "react-router";
import type { NavItem } from "~/types/index.ts";

export interface SidebarItemProps extends NavItem {
  isExpanded?: boolean;
  toggleSidebar?: () => void;
}

export default function SidebarItem({ icon: Icon, to, label, isExpanded, toggleSidebar }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      title={isExpanded ? undefined : label}
      onClick={()=> {toggleSidebar && isExpanded && toggleSidebar() }}
      className={({ isActive }) =>
        `flex items-center ${isExpanded ? "justify-start px-3 w-full" : "justify-center w-10"} shrink-0 h-10 rounded-xl transition-all duration-200 ${
          isActive
            ? "bg-emerald-500/20 text-primary"
            : "text-zinc-400 hover:text-primary hover:bg-zinc-800"
        }`
      }
    >
      <Icon size={20} strokeWidth={1.8} className="shrink-0" />
      {isExpanded && <span className="ml-3 text-sm font-medium tracking-wide truncate">{label}</span>}
    </NavLink>
  );
}

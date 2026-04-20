import { Globe, MessageSquare, Bell, Menu } from "lucide-react";
import SearchBar from "./components/SearchBar";
import NavAction from "./components/NavAction";
import type { NavbarProps } from "./types";

export default function Navbar({ toggleSidebar, isSidebarOpen }: NavbarProps) {
  return (
    <header className={`fixed top-0 right-0 z-30 flex items-center justify-between h-14 px-4 bg-[#222]/60 border-b border-zinc-800/50 backdrop-blur-md transition-all duration-300 ${isSidebarOpen ? "left-0 md:left-64" : "left-0 md:left-16"}`}>
      <div className="flex items-center gap-3 w-1/4">
        <button onClick={toggleSidebar} className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors">
          <Menu size={20} />
        </button>
        
        {/* Logo desktop navbar */}
        <div className="max-sm:hidden w-[60px] ml-9">
          <img src="/logo.avif" />
        </div>

        <span className="text-lg font-semibold text-brand-text tracking-tight hidden sm:block md:hidden">
          Scout<span className="text-primary">Panel</span>
        </span>
      </div>

      <div className="flex-1 flex justify-end md:justify-center px-1">
        <SearchBar />
      </div>

      <div className="flex items-center justify-end gap-1 w-1/4">
        <button className="relative flex items-center justify-center sm:justify-start w-10 sm:w-auto h-10 sm:gap-1.5 rounded-xl px-0 sm:px-3 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-all duration-200">
          <Globe size={20} strokeWidth={1.8} className="sm:hidden shrink-0" />
          <Globe size={18} strokeWidth={1.8} className="hidden sm:block shrink-0" />
          <span className="absolute top-1 right-1 text-[10px] font-bold sm:static sm:text-sm">ES</span>
        </button>
        <NavAction icon={MessageSquare} label="Mensajes" />
        <NavAction icon={Bell} label="Notificaciones" badge />
      </div>
    </header>
  );
}

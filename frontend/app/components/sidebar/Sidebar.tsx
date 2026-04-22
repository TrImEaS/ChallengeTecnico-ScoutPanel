import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { NAV_ITEMS } from "./navItems";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}


export default function Sidebar({ isOpen, toggle }: SidebarProps) {
  return (
    <>
      <div 
        className={`fixed inset-0 z-40 bg-brand-bg/30 backdrop-blur-[1px] transition-opacity md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
        onClick={toggle} 
      />
      <aside 
        className={`fixed top-0 left-0 z-50 flex flex-col h-screen bg-brand-bg border-r border-zinc-800/50 py-4 gap-1 transition-all duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0 w-64 px-4 items-stretch" : "-translate-x-full w-64 md:w-16 px-4 md:px-0 md:items-center"
        }`}
      >
        <div className={`flex items-center ${isOpen ? "justify-start px-2" : "justify-center"} h-10 mb-2 shrink-0 select-none`}>
          {/* Logo desktop sidebar */}
          <div className={`group relative w-[30px] max-sm:hidden ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}>
            <img 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:animate-glow" 
              src="/logo_without_letters.avif" 
              alt="Logo" 
            />
            
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Logo mobile */}
          {isOpen && 
            <div className="flex gap-3 justify-center items-center">
              <div className="w-[60px]">
                <img className="w-full h-full object-cover" src="/logo.avif" alt="" />
              </div>
              <span className="font-bold">|</span>
              <span className="font-semibold text-brand-text tracking-tight">ScoutPanel</span>
            </div>
          }
        </div>

        <div className={`w-3/4 h-0.5 mb-2 max-sm:hidden ${isOpen ? 'hidden' : 'flex'} bg-white/50 mx-auto`}></div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {NAV_ITEMS.map((item) => (
            <SidebarItem key={item.to} {...item} isExpanded={isOpen} toggleSidebar={toggle} />
          ))}
        </nav>

        <button
          onClick={toggle}
          title="Alternar Menú"
          className={`flex items-center mt-2 ${isOpen ? "justify-start px-3 w-full" : "justify-center w-10 hidden md:flex"} h-10 shrink-0 rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-all duration-200`}
        >
          {isOpen ? <PanelLeftClose size={20} strokeWidth={1.8} className="shrink-0" /> : <PanelLeftOpen size={20} strokeWidth={1.8} className="shrink-0" />}
          {isOpen && <span className="ml-3 text-sm font-medium">Contraer</span>}
        </button>
      </aside>
    </>
  );
}

import { Outlet, useNavigation } from "react-router";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex min-h-screen bg-zinc-950 text-brand-text">
      <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`flex-1 flex flex-col transition-all duration-300 w-full ${isSidebarOpen ? "md:pl-64" : "md:pl-16"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <main className="relative flex-1 mt-14 p-4 md:p-6 overflow-x-hidden overflow-y-auto">
          {isLoading && (
            <div className="absolute inset-4 md:inset-6 z-50 bg-black/40 backdrop-blur-md animate-pulse border border-white/5 rounded-2xl pointer-events-none flex items-center justify-center">
              <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Cargando...</span>
            </div>
          )}
          
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { Outlet, useNavigation } from "react-router";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { LoadingOverlay } from "../ui/LoadingOverlay";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex min-h-screen w-full bg-zinc-950 text-brand-text">
      <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`flex-1 flex flex-col transition-all duration-300 w-full ${isSidebarOpen ? "md:pl-64" : "md:pl-16"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <main className="relative flex-1 mt-14 md:p-6 max-sm:py-6 max-sm:px-1 overflow-x-hidden overflow-y-auto">
          {isLoading && <LoadingOverlay />}
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}

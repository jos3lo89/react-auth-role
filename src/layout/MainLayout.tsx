import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-80 h-full xl:fixed">
        <Sidebar />
      </div>

      <div className="w-full xl:ml-80 h-full">
        <NavBar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default MainLayout;

import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
export default MainLayout;

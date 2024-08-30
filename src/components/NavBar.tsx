import { ModeToggle } from "./toggleTheme";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "./SidebarRoutes/SidebarRoutes";
import { UserButton } from "./userButton";

const NavBar = () => {
  return (
    <div
      className="flex items-center px-2 gap-x-4 md:px-6
        justify-between w-full bg-background border-b h-20"
    >
      <div className="block xl:hidden">
        <Sheet  >
          <SheetTrigger className="flex items-center" aria-label="Open menu">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>{/* titulo auqi */}</SheetTitle>
            <SheetDescription>{/* descripcion aqui */}</SheetDescription>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative w-[300px]">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
      </div>

      <div className="flex gap-x-4 items-center mr-10">
        <UserButton />
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";
import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./SidebarRoutes.data";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
}) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center p-2 rounded-lg transition-colors ${
          isActive
            ? "bg-secondary text-secondary-foreground"
            : "hover:bg-secondary/80"
        }`
      }
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </NavLink>
  );
};

const SidebarRoutes: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarRoutes;

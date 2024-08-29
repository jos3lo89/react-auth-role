import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/only-admin"}>admins</NavLink>
        <NavLink to={"/only-employe"}>empleados</NavLink>
      </div>
      <ModeToggle />
    </div>
  );
};
export default NavBar;

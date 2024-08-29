import { Roles } from "@/enums/role.enum";
import AuthGuard from "@/guards/AuthGuard";
import RoleGuard from "@/guards/RoleGuard";
import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import LoginForm from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <AuthGuard>
            <RoleGuard allowedRoles={[Roles.ADMIN, Roles.EMPLOYE]}>
              <Dashboard />
            </RoleGuard>
          </AuthGuard>
        ),
      },
      {
        path: "/only-admin",
        element: (
          <AuthGuard>
            <RoleGuard allowedRoles={[Roles.ADMIN]}>
              <h1>Solo amdins</h1>
            </RoleGuard>
          </AuthGuard>
        ),
      },
      {
        path: "/only-employe",
        element: (
          <AuthGuard>
            <RoleGuard allowedRoles={[Roles.EMPLOYE]}>
              <h1>Solo empleados</h1>
            </RoleGuard>
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export default routes;

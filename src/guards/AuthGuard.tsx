import { useAuthStore } from "@/stores/auth.store";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

type Props = PropsWithChildren;

const AuthGuard = ({ children }: Props) => {
  const { isAuth, token } = useAuthStore();

  if (!isAuth && !token) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
};
export default AuthGuard;

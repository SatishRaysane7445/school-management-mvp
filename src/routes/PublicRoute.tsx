import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import { isAuthenticated } from "../constants/authStorage";

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
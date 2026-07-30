import { Navigate } from "react-router-dom";
import type{ ReactNode } from "react";

import { isAuthenticated } from "../constants/authStorage";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {

  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
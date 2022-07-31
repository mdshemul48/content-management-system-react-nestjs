import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";

function RequireAuth({ children }) {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;

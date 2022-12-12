import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, currentUser }) => {
  if (!currentUser) return <Navigate to="/about" />;

  return children;
};
export default PrivateRoute;

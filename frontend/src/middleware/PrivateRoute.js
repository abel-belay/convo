// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../store/userContext";

const PrivateRoute = (props) => {
  const userContext = useContext(UserContext);
  return userContext.user ? props.element : <Navigate to="/login" />;
};

export default PrivateRoute;

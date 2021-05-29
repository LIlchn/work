import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "context/AuthContext";


export const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} component={Component} />;
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  } else {
    return <Route {...rest} component={Component} />;
  }
};

export const AnonymousRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Redirect to='/profile'/>;
  } else {
    return <Route {...rest} component={Component} />;
  }
};

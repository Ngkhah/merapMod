import React from "react";
//import { isAuthenticated } from './permissionCusChecker';
import { Route } from "react-router-dom";

function AuthCustomerRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        <Component {...props} />
      }
    />
  )
}

export default AuthCustomerRoute;
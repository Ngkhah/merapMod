import React from "react";
import { isAuthenticated } from './permissionCusChecker';
import { Redirect, Route } from "react-router-dom";

function HomeRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        ) : (
            <Component {...props} />
          )
      }
    />
  )
}

//kiểm tra local chưa có isAuthenticated thi login có r thì trả lại components

export default HomeRoute;
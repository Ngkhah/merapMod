import React from 'react';
import {Switch} from 'react-router-dom';
import routes from '../../routes';
import HomeRoute from './HomeRoute';
import AuthCustomerRoute from './AuthCustomerRoute';
import CustomLoadable from '../CustomLoadable';


function RoutesComponent() {
  

  return (
        <Switch>
        {routes.authCustomerRoutes.map(route => (
          <AuthCustomerRoute
              key={route.path}
              path={route.path}
              component={CustomLoadable(route.component)}
              exact={route.exact}
            />
        ))};

        {routes.homeRoutes.map(route => (
          <HomeRoute
              key={route.path}
              path={route.path}
              component={CustomLoadable(route.component)}
              exact={route.exact}
            />
        ))};

      </Switch>
  )
}

export default RoutesComponent;

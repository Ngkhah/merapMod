import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './pages/configureStore';
import RoutesComponent from './pages/shared/routes/RoutesComponent';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   {/* <Link to='/'>home page</Link> */}

    //   {/* <Route path='/*'><NotFound /></Route> */}
    //   <Switch>
    //     <Route exact path='/' component={HomePage} />
    //     <Route path='/login' component={Login} />
    //     <Route path='/profile' component={ProfilePage} />
    //     <Route path='/sitemap' component={SiteMap} />
    //     <Route path='/folder' component={Folder} />
    //     <Route path='/notfound' component={NotFound} />
    //     <Route path='/:somestring' component={NotFound} />
    //   </Switch>
    // </BrowserRouter>
    <Provider store={configureStore()}>
      <ConnectedRouter history={history} >
        <RoutesComponent />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

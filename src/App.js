import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { configureStore, history } from './pages/configureStore';
import RoutesComponent from './pages/shared/routes/RoutesComponent';
// import themeAll from './Theme';


function App() {
  return (
    <Provider store={configureStore()}>
      {/* <ThemeProvider theme={themeAll}>      </ThemeProvider> */}
        <ConnectedRouter history={history} >
          <RoutesComponent />
        </ConnectedRouter>
    </Provider>
  );
}

export default App;

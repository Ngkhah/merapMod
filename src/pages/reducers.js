import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './AuthCustomerPage/reducer';



const rootReducer = (history) => combineReducers({ // gộp nhiều reducer thành 1
  router: connectRouter(history),
  auth,
});




export default rootReducer;
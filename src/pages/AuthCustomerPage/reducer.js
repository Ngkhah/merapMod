import produce, {setAutoFreeze} from 'immer';
import * as constants from './constants';
setAutoFreeze(false);

const initialState = {
  isLoading: false,
  user: {},
  customer: {},
  isUpdateCustomer: false,
  isUpdateUser: false,
  isUpdatePass: false,
}

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case constants.USER_LOGIN_START:
        draft.isLoading = true;
        draft.user = {};
        draft.customer = {};
      break;

      case constants.USER_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.user = payload.user;
        draft.customer = payload.customer;
      break;

      case constants.USER_LOGIN_ERROR:
        draft.isLoading = false;
        draft.user = {};
        draft.customer = {};
      break;


      case constants.USER_GET_START:
        draft.user = {};
        draft.customer = {};
      break;

      case constants.USER_GET_SUCCESS:
        draft.user = payload.user;
        draft.customer = payload.customer;
      break;

      case constants.USER_GET_ERROR:
        draft.user = {};
        draft.customer = {};
      break;

      case constants.USER_LOGIN_KEY_START:
        draft.isLoading = true;
      break;

      case constants.USER_LOGIN_KEY_SUCCESS:
        draft.isLoading = false;
      break;

      case constants.USER_LOGIN_KEY_ERROR:
        draft.isLoading = false;
      break;


      case constants.USER_RESET_START:
        draft.isLoading = true;
      break;

      case constants.USER_RESET_SUCCESS:
        draft.isLoading = false;
      break;

      case constants.USER_RESET_ERROR:
        draft.isLoading = false;
      break;


      case constants.USER_UPDATE_CUSTOMER_START:
        draft.isUpdateCustomer = true;
      break;


      case constants.USER_UPDATE_CUSTOMER_SUCCESS:
        draft.isUpdateCustomer = false;
        draft.customer = payload.customer;
      break;


      case constants.USER_UPDATE_CUSTOMER_ERROR:
        draft.isUpdateCustomer = false;

      break;


      case constants.USER_UPDATE_START:
        draft.isUpdateUser = true;
      break;


      case constants.USER_UPDATE_SUCCESS:
        draft.isUpdateUser = false;
        draft.user = payload.user;
      break;


      case constants.USER_UPDATE_ERROR:
        draft.isUpdateUser = false;

      break;


      case constants.USER_CHANGE_PASS_START:
        draft.isUpdatePass = true;
      break;


      case constants.USER_CHANGE_PASS_SUCCESS:
        draft.isUpdatePass = false;
      break;


      case constants.USER_CHANGE_PASS_ERROR:
        draft.isUpdatePass = false;

      break;

      default:
      break;
    }
  });

export default reducer;
import * as constants from './constants';
import * as services from './service';
// import Errors from "./../shared/error/errors";
import {getHistory} from '../configureStore';
// import { successSwal } from '../../utils/swalUtils';


const actions = {
  doLogin: (data) => async (dispatch) => { // đăng nhập
    try {
      dispatch({ type: constants.USER_LOGIN_START});
      const response = await services.login(data);

      const { token, user,customer } = response.data;

      window.localStorage.setItem(
        "authcus",
        JSON.stringify({token,user})
      );

      getHistory().push('/');

      dispatch({ 
        type: constants.USER_LOGIN_SUCCESS,
        payload: {
          user,
          customer
        }
      });
      
    } catch (error) {
      // dispatch({ 
      //   type: constants.USER_LOGIN_ERROR
      // });
      // Errors.handle(error);
      console.log(error);
    }
  },

  // doGetUserInfo: () => async (dispatch) => { // laays thoong tin user
  //   try {
  //   dispatch({ type: constants.USER_GET_START});
  //     const response = await services.getUser();

  //     const { user,customer } = response.data;

  //     dispatch({ 
  //       type: constants.USER_GET_SUCCESS,
  //       payload: {
  //         user,
  //         customer
  //       }
  //     });
      
  //   } catch (error) {
  //     dispatch({ 
  //       type: constants.USER_GET_ERROR
  //     });
  //     Errors.handle(error);
  //   }
  // },

  // doLoginKey: (data) => async (dispatch) => { // đăng nhập key
  //   try {
  //     dispatch({ type: constants.USER_LOGIN_KEY_START});
  //     const response = await services.loginZalo(data);
  //     const { token, user } = response.data;
  //     const authcus = {token, user};
  //       window.localStorage.setItem(
  //         "authcus",
  //         JSON.stringify(authcus)
  //     );

  //     getHistory().push('/');

  //     dispatch({ type: constants.USER_LOGIN_KEY_SUCCESS});
      
  //   } catch (error) {
  //     dispatch({ 
  //       type: constants.USER_LOGIN_KEY_ERROR
  //     });
  //     getHistory().push('/login');
  //   }
  // },

  // doReset: (data) => async (dispatch) => { // gửi mật khẩu về zalo
  //   try {
  //     dispatch({ type: constants.USER_RESET_START});
  //     await services.resetPass(data);
  //     dispatch({ type: constants.USER_RESET_SUCCESS});
  //     successSwal(
  //       'Thông báo', 
  //       'Thông tin mật khẩu đã được gửi về zalo của bạn vui lòng kiểm tra', 
  //     () => {
  //       getHistory().push('/login');
  //     });
  //   } catch (error) {
  //     dispatch({ type: constants.USER_RESET_ERROR});
  //     Errors.handle(error);
  //   }
  // },

  // doUpdateCustomer: (data) => async (dispatch) => { // cập nhật thông tin khách hàng
  //   try {
  //     dispatch({ type: constants.USER_UPDATE_CUSTOMER_START});
  //     await services.updateCustomer(data);
  //     successSwal(
  //       'Thông báo', 
  //       'Cập nhật thông tin thành công', 
  //     () => {
        
  //     });

  //     dispatch({ 
  //       type: constants.USER_UPDATE_CUSTOMER_SUCCESS,
  //       payload: {
  //         customer: data
  //       }
  //     });
  //   } catch (error) {
  //     dispatch({ type: constants.USER_UPDATE_CUSTOMER_ERROR});
  //     Errors.handle(error);
  //   }
  // },

  // doUpdateUser: (data) => async (dispatch) => { // cập nhật thông tin user
  //   try {
  //     dispatch({ type: constants.USER_UPDATE_START});
  //     await services.updateUser(data);
  //     successSwal(
  //       'Thông báo', 
  //       'Cập nhật thông tin thành công', 
  //     () => {
        
  //     });

  //     dispatch({ 
  //       type: constants.USER_UPDATE_SUCCESS,
  //       payload: {
  //         user: data
  //       }
  //     });
  //   } catch (error) {
  //     dispatch({ type: constants.USER_UPDATE_ERROR});
  //     Errors.handle(error);
  //   }
  // },
  // doUpdatePassword: (data) => async (dispatch) => { // đổi mật khẩu
  //   try {
  //     dispatch({ type: constants.USER_CHANGE_PASS_START});
  //     await services.changePassword(data);
  //     dispatch({ type: constants.USER_CHANGE_PASS_SUCCESS});
  //     window.localStorage.removeItem('authcus');
  //     successSwal(
  //       'Thông báo', 
  //       'Thay đổi mật khẩu thành công, vui lòng đăng nhập lại', 
  //     () => {
  //       getHistory().push('/login');
  //     });

      

  //   } catch (error) {
  //     dispatch({ type: constants.USER_CHANGE_PASS_ERROR});
  //     Errors.handle(error);
  //   }
  // }
};

export default actions;
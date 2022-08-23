import {getHistory} from '../../configureStore';
import { errorMessSwal } from '../../../utils/swalUtils';
import parse from 'react-render-html';
const DEFAULT_ERROR_MESSAGE = "Something went wrong!";

function selectErrorMessage(error) {
  if (error.response && error.response.data && error.response.data.errors) {
    let errorMsg = "";

    for (const [key, value] of Object.entries(error.response.data.errors)) {
      errorMsg += `${key}: ${value}` + "\n";
    }

    return errorMsg;
}
if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return parse(JSON.stringify(error.response.data.message));
    // console.log(error.response.status);
}
// Something happened in setting up the request that triggered an Error
return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorCode(error) {
  if (error.response) {
    return error.response.status;
  }
  return 500;
}

export default class Errors {
  static handle(error) {

    if (selectErrorCode(error) === 401) {

      // gửi yêu cầu token mới với refresh token và email 
      window.localStorage.removeItem("authcus");
      getHistory().push("/login");
      // errorMessSwal("THÔNG BÁO", "Unauthorized", () => {
        
      // });
      return;

    }
    if (selectErrorCode(error) === 403) {
      errorMessSwal("THÔNG BÁO", "You don't have permission to access this resource", () => {});
      return;
    }

    if (
      selectErrorCode(error) === 400 ||
      selectErrorCode(error) === 409 ||
      selectErrorCode(error) === 404
    ) {
      errorMessSwal("THÔNG BÁO", selectErrorMessage(error), () => {});
      return;
    }

    // getHistory().push("/500");
    errorMessSwal("THÔNG BÁO", selectErrorMessage(error), () => {});
  }

  static errorCode(error) {
    return selectErrorCode(error);
  }

  static selectMessage(error) {
    return selectErrorMessage(error);
  }

  static showMessage(error) {
    errorMessSwal("THÔNG BÁO", selectErrorMessage(error), () => {});
  }
}


import ascusapi from '../../apis/ascusapi';

export const login = async ({username, password}) => { // đăng nhập
  const respone = await ascusapi.post('auth/login', {username, password});
  return respone;
}

export const ressetPassword = async ({email}) => {
  const respone = await ascusapi.post('auth/reset-password', {email});
  return respone;
}

export const changePassword = async (data) => {
  const respone = await ascusapi.post('auth/change-password', data);
  return respone;
}

export const checkToken = async ({token}) => {
  const respone = await ascusapi.post('auth/check-token', {token});
  return respone;
}

export const logout = async (data) => { // logout 
  const respone = await ascusapi.post('auth/logout', data);
  return respone;
}

export const userInfo = async () => { // thoong
  const respone = await ascusapi.post('acc/employees/info');
  return respone;
}

export const getUser = async () => { // thoong
  const respone = await ascusapi.post('acc/employees/info');
  return respone;
}
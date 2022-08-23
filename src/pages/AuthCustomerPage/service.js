import ascusapi from '../../apis/ascusapi';

export const login = async ({phone, password}) => { // đăng nhập
  const respone = await ascusapi.post('ecommerce/auth/login', {phone, password});
  return respone;
}

export const resetPass = async (data) => { // reset pass
  const respone = await ascusapi.post('ecommerce/auth/reset-password', data);
  return respone;
}

export const loginZalo = async ({id_zalo}) => { // đăng nhập
  const respone = await ascusapi.post('ecommerce/auth/login-zalo', {id_zalo});
  return respone;
}

export const getUser = async () => { // lấy thông tin
  const respone = await ascusapi.get('ecommerce/auth/user-info');
  return respone;
}

export const updateCustomer = async (data) => { // cập nhật thông tin khách hàng
  const respone = await ascusapi.post('ecommerce/auth/update-customer', data);
  return respone;
}


export const updateUser = async (data) => { // cập nhật thông tin user
  const respone = await ascusapi.post('ecommerce/auth/update-user', data);
  return respone;
}


export const changePassword = async (data) => { // đổi mật khẩu
  const respone = await ascusapi.post('ecommerce/auth/update-password', data);
  return respone;
}

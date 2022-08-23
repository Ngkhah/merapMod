export const isAuthenticated = () => {
  if (typeof window === "undefined") return true;
  let data = window.localStorage.getItem("authcus");
  if (data) {
    let token = JSON.parse(data).token;
    if (token) return token;
  }
  return false;
};

//hàm ktr dữ liệu local login
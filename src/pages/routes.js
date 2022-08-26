
const authCustomerRoutes = [
  {
    path: '/login',
    name: 'Đăng nhập',
    exact: true,
    component: import('./AuthCustomerPage')
  }
];

const homeRoutes = [
  {
    path: '/',
    name: 'Trang Chủ',
    exact: true,
    component: import('./public/HomePage')
  },
  {
    path: '/notfound',
    name: 'NotFound',
    exact: true,
    component: import('./Layout/HomeLayout/NotFound')
  },
  {
    path: '/darkmode',
    name: 'DarkMode',
    exact: true,
    component: import('./Layout/HomeLayout/DarkMode/DarkMode')
  },
  {
    path: '/banner',
    name: 'Banner',
    exact: true,
    component: import('./public/Ecommerce')
  },
  {
    path: '/profile',
    name: 'Profile',
    exact: true,
    component: import('./public/ProfilePage')
  }, 
  {
    path: '/sitemap',
    name: 'Site Map',
    exact: true,
    component: import('./Layout/HomeLayout/SiteMap')
  },
  {
    path: '/:somestring',
    name: 'NotFound',
    exact: true,
    component: import('./Layout/HomeLayout/NotFound')
  }, 
];

const allRoutes = {
  homeRoutes,
  authCustomerRoutes
};
export default allRoutes



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
    path: '/not-found',
    name: 'NotFound',
    exact: true,
    component: import('./Layout/HomeLayout/NotFound')
  },
  {
    path: '/banner',
    name: 'Banner',
    exact: true,
    component: import('./public/Ecommerce/Banner')
  },
  {
    path: '/banner-item/:id',
    name: 'BannerItem',
    exact: true,
    component: import('./public/Ecommerce/Banner/component/Banner')
  },
  {
    path: '/add-banner',
    name: 'Add Banner',
    exact: true,
    component: import('./public/Ecommerce/Banner/component/AddBanner')
  },
  {
    path: '/add-type-banner',
    name: 'Add Type Banner',
    exact: true,
    component: import('./public/Ecommerce/Banner/component/AddTypeBanner')
  },
  {
    path: '/category',
    name: 'Category',
    exact: true,
    component: import('./public/Ecommerce/Category')
  },
  {
    path: '/add-category',
    name: 'Add Category',
    exact: true,
    component: import('./public/Ecommerce/Category/component/AddCategory')
  },
  {
    path: '/profile',
    name: 'Profile',
    exact: true,
    component: import('./public/ProfilePage')
  },
  {
    path: '/site-map',
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


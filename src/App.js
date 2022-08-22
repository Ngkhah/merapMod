import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/AuthCustomerPage';
import Header from './pages/Layout/HomeLayout/Header';
import NotFound from './pages/Layout/HomeLayout/NotFound';
import HomePage from './pages/public/HomePage';
import ProfilePage from './pages/public/ProfilePage';
import Folder from './pages/public/ProfilePage/Data/Folder';
import explorer from './pages/public/ProfilePage/Data/folderData';
import SiteMap from './pages/public/SiteMap';



function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Link to='/'>home page</Link> */}
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/sitemap' element={<SiteMap explorer={explorer}/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/notfound' element={<NotFound />} />
        
        <Route path='/folder' element={<Folder explorer={explorer}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

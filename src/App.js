import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import HomePage from './features/Merap/Component/HomePage';
import ProfilePage from './features/Merap/Component/ProfilePage';
import Login from './features/Merap/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Link to='/'>home page</Link> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
const Header = () => {
  return (
    <div className='menu-home'>
      <div className='menu-home_group'>
          <div className='menu-home_logo'>
             <Link to='/'><img id='home-logo' src="./img/logo.png" alt="" /></Link> 
          </div>
          <div className='menu-home_icons'>
              <Link to='/login' className='logo-bell'><img  src="./img/bell.png" alt="./img/bell.png"/></Link>
              <Link to='/notfound' className='logo-search'><img src="./img/search.png" alt="./img/search.png" /></Link>
              <Link to='/profile' className='logo-avatar'> <img src="./img/avatar.png" alt="./img/avatar.pn" /></Link>
              <Link to='/home' className='logo-bot'><img src="./img/bot.png" alt="./img/bot.png" /></Link>
          </div>
      </div>
      
    </div>
  )
}

export default Header
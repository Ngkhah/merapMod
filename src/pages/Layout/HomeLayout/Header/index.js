import { Box, IconButton } from '@mui/material';
import React, { useContext } from 'react'
import { MdBrightness4, MdBrightness5 } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '../DarkMode/store';
import "./Home.css"



const Header = () => {

  // if (localStorage.getItem('authcus') !== null){
  //   console.log('co auth ton tai', localStorage.getItem('authcus'));
  // } else {
  //   console.log('khong co auth ton tai');
  // } 
  const { mode, toggleMode } = useContext(ColorModeContext)


  return (
    <Box sx={{ bgcolor: 'background.paper' }} className='menu-home'>
      <Box className='menu-home_group'>
        <Box className='menu-home_logo'>
        {mode === "dark" ? (
              <Link to='/'><img id='home-logo' src="./img/logo2.png" alt="" /></Link>
            ) : (
              <Link to='/'><img id='home-logo' src="./img/logo.png" alt="" /></Link>
            )}
          
        </Box>
        <Box className='menu-home_icons'>
          <Link to='/' className='logo-bell'><img src="./img/bell.png" alt="./img/bell.png" /></Link>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleMode}
          >
            {mode === "dark" ? (
              <MdBrightness4 />
            ) : (
              <MdBrightness5 />
            )}
          </IconButton>
          <Link to='/notfound' className='logo-search'><img src="./img/search.png" alt="./img/search.png" /></Link>
          <Link to='/profile' className='logo-avatar'> <img src="./img/avatar.png" alt="./img/avatar.pn" /></Link>
          <Link to='/home' className='logo-bot'><img src="./img/bot.png" alt="./img/bot.png" /></Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
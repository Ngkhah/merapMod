import { Box, IconButton } from '@mui/material';
import React, { useContext } from 'react'
import { MdBrightness4, MdBrightness5 } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Images from '../../../../constans/Img';
import { ColorModeContext } from '../../../../Theme/store';
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
            <Link to='/'><img id='home-logo' src={Images.BG1} alt="" /></Link>
            ) : (
              <Link to='/'><img id='home-logo' src={Images.BG2}  alt="" /></Link>
            )}
          
        </Box>
        <Box className='menu-home_icons'>
          <Link to='/' className='logo-bell'><img src={Images.BG3}  alt="./img/bell.png" /></Link>
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
          <Link to='/not-found' className='logo-search'><img src={Images.BG4}  alt="./img/search.png" /></Link>
          <Link to='/profile' className='logo-avatar'> <img src={Images.BG5}  alt="./img/avatar.pn" /></Link>
          <Link to='/home' className='logo-bot'><img src={Images.BG6}  alt="./img/bot.png" /></Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
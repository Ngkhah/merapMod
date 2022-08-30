import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Header from '.';
import { ButtonWhite1, ButtonWhite2 } from '../../../../Theme/store';
import {RiHome2Line} from 'react-icons/ri'
import {TiShoppingCart} from 'react-icons/ti'
import {FiMinus,FiChevronDown} from 'react-icons/fi'


const style = {
  position: "fixed",
  top: "64px",
  left: "0",
  width: '100%',
  bgcolor: "background.paper",
  borderTop:"1px solid #E5ECF0",
  height:"60px",
  zIndex: 999
};
const styleContainer = {
  minWidth:"1440px",
  display:"flex",
  height:"60px",
  alignItems:"center"
};
const icons ={
  pr:"10px",
  fontSize:'20px',
  lineHeight:'20px'
}
const icons2 ={
  pl:"10px",
  fontSize:'20px',
  lineHeight:'20px'
}

const Menu = () => {
  return (
    <Box sx={{pt:"124px"}}>
        <Header/>
        <Box sx={style}>
          <Container sx={styleContainer} style={{}}>
              <ButtonWhite2 sx={{width:"200px", height:"40px", mr:1}}><Typography sx={icons}><RiHome2Line/></Typography>Dashboard <Typography sx={icons2}><FiChevronDown/></Typography></ButtonWhite2>
              <ButtonWhite1 sx={{width:"150px", height:"40px", mr:1}}><Typography sx={icons}><TiShoppingCart/></Typography>Ecommerce</ButtonWhite1>
              <ButtonWhite1 sx={{width:"100px", height:"40px", mr:1}}><Typography sx={icons}><FiMinus/></Typography>Khác</ButtonWhite1>
          </Container>
        </Box>
    </Box>
  )
}

export default Menu
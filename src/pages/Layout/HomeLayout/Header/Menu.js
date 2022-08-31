import { Container, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaEllipsisH, FaUsers } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiQrcode } from "react-icons/hi";
import { RiHome2Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlinePicCenter } from "react-icons/ai";

import Header from ".";
import {
  ButtonWhite1,
  ButtonWhite2,
  ButtonWhiteList,
  LightTooltip,
  ListMenu,
} from "../../../../Theme/store";
import { Link } from "react-router-dom";

const style = {
  position: "fixed",
  top: "64px",
  left: "0",
  width: "100%",
  bgcolor: "background.paper",
  borderTop: "1px solid #E5ECF0",
  height: "60px",
  zIndex: 999,
};

const styleList = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  fontSize: "10px",
};

const styleContainer = {
  minWidth: "1440px",
  display: "flex",
  height: "60px",
  alignItems: "center",
};
const icons = {
  pr: "10px",
  fontSize: "20px",
  lineHeight: "20px",
};
const icons2 = {
  pl: "10px",
  fontSize: "20px",
  lineHeight: "20px",
};

const DashboardMenu = (
  <ListMenu sx={styleList} component="nav" aria-label="mailbox folders">
    <ListItem>
      <ButtonWhiteList sx={{ width: "100%", height: "40px" }}>
        <Typography sx={icons}>
          <FaUsers />
        </Typography>
        HRM
      </ButtonWhiteList>
    </ListItem>
    <ListItem>
      <ButtonWhiteList sx={{ width: "100%" }}>
        <Typography sx={icons}>
          <VscServerProcess />
        </Typography>
        CRM
      </ButtonWhiteList>
    </ListItem>
    <ListItem>
      <ButtonWhiteList sx={{ width: "100%" }}>
        <Typography sx={icons}>
          <BsFillDiagram3Fill />
        </Typography>
        DMS
      </ButtonWhiteList>
    </ListItem>
    <ListItem>
      <ButtonWhiteList sx={{ width: "100%" }}>
        <Typography sx={icons}>
          <TiShoppingCart />
        </Typography>
        ECOMMERCE
      </ButtonWhiteList>
    </ListItem>
    <ListItem>
      <ButtonWhiteList sx={{ width: "100%" }}>
        <Typography sx={icons}>
          <HiQrcode />
        </Typography>
        QR Code
      </ButtonWhiteList>
    </ListItem>
  </ListMenu>
);

const EcommerceMenu = (
  <ListMenu sx={styleList} component="nav" aria-label="mailbox folders">
    <Link to="/banner">
      <ListItem>
        <ButtonWhiteList sx={{ width: "100%", height: "40px" }}>
          <Typography sx={icons}>
            <AiOutlinePicCenter />
          </Typography>
          Banner
        </ButtonWhiteList>
      </ListItem>
    </Link>
  </ListMenu>
);

const Menu = () => {
  return (
    <Box sx={{ pt: "124px" }}>
      <Header />
      <Box sx={style}>
        <Container sx={styleContainer} style={{}}>
          <LightTooltip title={DashboardMenu} placement="bottom-start">
            <Link to="/">
              <ButtonWhite2 sx={{ width: "200px", height: "40px", mr: 1 }}>
                <Typography sx={icons}>
                  <RiHome2Line />
                </Typography>
                Dashboard
                <Typography sx={icons2}>
                  <FiChevronDown />
                </Typography>
              </ButtonWhite2>
            </Link>
          </LightTooltip>
          <LightTooltip title={EcommerceMenu} placement="bottom-start">
            <Link to="/sitemap">
              <ButtonWhite1 sx={{ width: "150px", height: "40px", mr: 1 }}>
                <Typography sx={icons}>
                  <TiShoppingCart />
                </Typography>
                Ecommerce
              </ButtonWhite1>
            </Link>
          </LightTooltip>
          <Link to="/">
            <ButtonWhite1 sx={{ width: "100px", height: "40px", mr: 1 }}>
              <Typography sx={icons}>
                <FaEllipsisH />
              </Typography>
              Khác
            </ButtonWhite1>
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default Menu;

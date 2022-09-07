import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import {
  AiOutlinePicCenter,
  AiOutlinePicRight,
  AiOutlinePicture,
} from "react-icons/ai";
import { HiQrcode } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import Images from "../../../../constans/Img";

const ListDrawer = () => {
  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    margin: "1rem",
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{ textAlign: "center" }}
          component="div"
          id="nested-list-subheader"
        >
          <Box sx={flex}>
            <img style={{ width: "150px" }} src={Images.BG2} alt="" />
          </Box>
        </ListSubheader>
      }
    >
      <Divider />

      <ListItemButton>
        <ListItemIcon>
          <TiShoppingCart style={{ fontSize: "20px" }} />
        </ListItemIcon>
        <ListItemText primary="ECOMMERCE SYSTEM" />
      </ListItemButton>
      <List component="div" disablePadding>
        <Link to="/banner" style={{ textDecoration: "none" }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AiOutlinePicCenter style={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText color="palette.text.primary" primary="Banner" />
          </ListItemButton>
        </Link>
        <List component="div" disablePadding>
          <Link to="/add-type-banner">
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <AiOutlinePicRight style={{ fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText primary="Add Type Banner" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/add-banner">
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <AiOutlinePicture style={{ fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText primary="Add Banner" />
            </ListItemButton>
          </Link>
        </List>
      </List>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <HiQrcode style={{ fontSize: "20px" }} />
          </ListItemIcon>
          <ListItemText primary="QR Code" />
        </ListItemButton>
      </List>
    </List>
  );
};

export default ListDrawer;

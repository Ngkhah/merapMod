import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonNotfonud } from "../../../../Theme/Button";
import Menu from "../Header/Menu";
import GifNotFound from "./GifNotFound";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Box>
      <Menu />

      <Box sx={{ mt: "3rem" }} className="notfound-page">
        <Box sx={{ bgcolor: "background.btn" }} className="notfound-page-404">
          <Box style={{ alignItems: "center", width: "215px" }}>
            <GifNotFound />
            <Box className="notFound">
              <Typography sx={{ fontWeight: 700 }} variant="h3" color="palette.text.title">404</Typography>
              <Typography sx={{ fontWeight: 400, my: 1 }} variant="h6" color="palette.text.title">Không tìm thấy trang</Typography>
              <Link to="/"><ButtonNotfonud sx={{ textTransform: 'none', bgcolor: "background.btnNotfound", color: "palette.text.textNotfound" }}>
                Trở về DashBoard
              </ButtonNotfonud></Link>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default NotFound;

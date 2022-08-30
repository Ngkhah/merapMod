import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Header/Menu";
import GifNotFound from "./GifNotFound";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Box>
      <Menu />
      
        <Box sx={{mt:"3rem"}} className="notfound-page">
          <Box sx={{bgcolor:"background.btn"}} className="notfound-page-404">
            <Box style={{ alignItems: "center", width: "215px" }}>
              <GifNotFound />
              <Box className="notFound">
                <h2>404</h2>
                <h4>Không tìm thấy trang</h4>
                <Link to="/"><button className="btn-notfound btn btn-stripe">
                  Trở về DashBoard
                </button></Link>
              </Box>
            </Box>
          </Box>
        </Box>
      
    </Box>
  );
};

export default NotFound;

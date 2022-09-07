import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/HomeLayout/Header";
import "./HomePage.css";

const HomePage = () => {
  const iconApp = {
    bgcolor: "background.btn", 
    width:"95%",
    height: '430px',
 
  }
  return (
    <Box>
      <Header />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Box className="homepage-responsive" style={{ marginTop: "7rem" }}>
          <Grid container style={{ margin: "1rem 0" }}  >
            <Grid item xs={3} >
              <Link to="/not-found" style={{ textDecoration: "none" }}>
                <Box sx={ iconApp } className="dashboard-item">
                  <Box className="title-app">
                    <img src="./img/icon 1.png" alt="" />
                    <Typography sx={{textAlign: "center", mt:3}} color="palette.text.primary" variant="h6">
                      HRM
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/banner" style={{ textDecoration: "none" }}>
                <Box sx={iconApp} className="dashboard-item">
                  <Box className="title-app">
                    <img src="./img/icon 4.png" alt="" />
                    <Typography sx={{textAlign: "center", mt:3}} color="palette.text.primary" variant="h6">
                      DMS
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/not-found" style={{ textDecoration: "none" }}>
                <Box sx={iconApp} className="dashboard-item">
                  <Box className="title-app">
                    <img src="./img/icon 3.png" alt="" />
                    <Typography sx={{textAlign: "center", mt:3}} color="palette.text.primary" variant="h6">
                      CRM
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/site-map" style={{ textDecoration: "none" }}>
                <Box sx={iconApp} className="dashboard-item">
                  <Box className="title-app">
                    <img src="./img/icon 2.png" alt="" />
                    <Typography sx={{textAlign: "center", mt:3}} color="palette.text.primary" variant="h6">
                      ECOMMERCE
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

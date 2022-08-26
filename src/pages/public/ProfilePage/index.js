import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TiCamera } from "react-icons/ti";
import Header from "../../Layout/HomeLayout/Header";
import "./Profile.css";

const ProfilePage = () => {
  return (
    <Box>
      <Header />
      <Box sx={{mt:8}} className="profile-page">
        <Box className="profile">
          <Box className="profile-cover">
            <img src="./img/cover2.jpg" alt="" />
          </Box>
        </Box>
        <Box className="profile-form" sx={{bgcolor:"background.paper"}}>
          <Grid container>
            <Grid item xs={3}>
              <Box className="profile-form_avatar">
                <img className="avatar" src="./img/ava2.png" alt="" />
                <Box className="profile-form_update_avatar">
                  <TiCamera />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="title">
              <Typography sx={{ fontWeight: 700}} variant="h3" color="palette.text.primary">Khanh Nguyen</Typography>
              <Typography sx={{ fontWeight: 400}} variant="h5" color="palette.text.primary">Front-end Developer</Typography>
              <Typography sx={{ fontWeight: 300}} variant="h6" color="palette.text.primary">Fresher</Typography>
              
              </Box>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;

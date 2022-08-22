import { Grid } from "@mui/material";
import React from "react";
import { TiCamera } from "react-icons/ti";
import "./Profile.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile">
        <div className="profile-cover">
          <img src="./img/cover2.jpg" alt="" />
        </div>
      </div>
      <div className="profile-form">
        <Grid container>
          <Grid item xs={3}>
            <div className="profile-form_avatar">
              <img className="avatar" src="./img/ava2.png" alt="" />
              <div className="profile-form_update_avatar">
                <TiCamera />
              </div>
            </div>
          </Grid >
          <Grid item xs={6}>
            <div className="title">
              <h1>Khanh Nguyen</h1>
              <h4>Front-end Developer</h4>
              <h5>Fresher</h5>
              
            </div>
          </Grid >
          <Grid item xs={3}></Grid>
        </Grid >
      </div>
    </div>
  );
};

export default ProfilePage;

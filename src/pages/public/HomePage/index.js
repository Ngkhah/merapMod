import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="homepage-responsive">
        <Grid container style={{ margin: "1rem 0" }}>
          <Grid item xs={3}>
            <Link to="/notfound" style={{textDecoration: "none"}}>
              <div className="dashboard-item">
                <div className="title-app">
                  <img src="./img/icon 1.png" alt="" />
                  <h3 style={{ textAlign: "center" }}>HRM</h3>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to="/notfound" style={{textDecoration: "none"}}>
              <div className="dashboard-item">
                <div className="title-app">
                  <img src="./img/icon 4.png" alt="" />
                  <h3 style={{ textAlign: "center" }}>DMS</h3>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to="/notfound" style={{textDecoration: "none"}}>
              <div className="dashboard-item">
                <div className="title-app">
                  <img src="./img/icon 3.png" alt="" />

                  <h3 style={{ textAlign: "center" }}>CRM</h3>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to="/notfound" style={{textDecoration: "none"}}>
              <div className="dashboard-item">
                <div className="title-app">
                  <img src="./img/icon 2.png" alt="" />
                  <h3 style={{ textAlign: "center" }}>ECOMMERCE</h3>
                </div>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;

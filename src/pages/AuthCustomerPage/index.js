import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={7} className="landing-page">
          <div className="bg-login">
            <div className="login-page"></div>
          </div>
          <div className="login-motion">
            <div className="motion">
              <img className="login-motion_item" src="./img/motion/1.png" alt="" />
              <img className="login-motion_item" src="./img/motion/2.png" alt="" />
              <img className="login-motion_item" src="./img/motion/3.png" alt="" />
              <img className="login-motion_item" src="./img/motion/4.png" alt="" />
            </div>
          </div>
        </Grid>
        <Grid item xs={5} >
          <div
            className="form-login"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "70%", margin: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./img/logo.png"
                  alt=""
                  style={{ width: "150px", marginBottom: "3rem" }}
                />
              </div>
              <h1
                style={{
                  marginLeft: "8px",
                  fontWeight: "700",
                  color: "#374957",
                }}
              >
                Đăng nhập
              </h1>
              <FormGroup>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Email / Mã nhân viên"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Mật khẩu"
                    variant="outlined"
                  />
                  <Grid container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Nhớ mật khẩu"
                      />
                    </Grid>
                    <Grid item xs={6}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Link to="/">
                        <FormLabel id="demo-radio-buttons-group-label">
                          Quên mật khẩu?
                        </FormLabel>
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    style={{
                      background: "#00A79D",
                      borderRadius: "15px",
                      height: "40px",
                    }}
                  >
                    Đăng nhập
                  </Button>
                </Box>
              </FormGroup>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

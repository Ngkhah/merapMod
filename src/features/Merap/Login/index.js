import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Row>
        <Col span={14} className="landingPage">
          <div className="bgLogin">
            <div className="loginPage"></div>
          </div>
          <div className="motionGif">
            <div className="motion">
              <img className="motionLogin" src="./img/motion/1.png" alt="" />
              <img className="motionLogin" src="./img/motion/2.png" alt="" />
              <img className="motionLogin" src="./img/motion/3.png" alt="" />
              <img className="motionLogin" src="./img/motion/4.png" alt="" />
            </div>
          </div>
        </Col>
        <Col span={10}>
          <div
            className="formLogin"
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
                    <Grid
                      item
                      xs={6}
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
        </Col>
      </Row>
    </div>
  );
};

export default Login;

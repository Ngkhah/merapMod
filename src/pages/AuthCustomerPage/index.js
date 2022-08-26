import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import actions from "./actions";
import "./Login.css";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Email không được để trống")
    .min(9, "Ít nhất 3 ký tự")
    .max(12, "Tối đa 255 ký tự"),
  password: Yup.string()
    .required("Mật khẩu không được để thống")
    .min(6, "Mật khẩu ít nhất 6 ký tự")
    .max(16, "Mật khẩu tối đa 16 ký tự"),
});

const Login = () => {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector(state => state.auth);

  //dùng cho trang reset pass
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(actions.doLogin(data));
  };




  return (
    <div>
      {/* {isLoading && <Spiner />}y */}
      <Grid container>
        <Grid item xs={7} className="landing-page">
          <div className="bg-login">
            <div className="login-page"></div>
          </div>
          <div className="login-motion">
            <div className="motion">
              <img
                className="login-motion_item"
                src="./img/motion/1.png"
                alt=""
              />
              <img
                className="login-motion_item"
                src="./img/motion/2.png"
                alt=""
              />
              <img
                className="login-motion_item"
                src="./img/motion/3.png"
                alt=""
              />
              <img
                className="login-motion_item"
                src="./img/motion/4.png"
                alt=""
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      {...register("phone")}
                      error={errors.phone ? true : false}
                      helperText={errors.phone && errors.phone.message}
                      id="outlined-basic"
                      label="Email / Mã nhân viên"
                      variant="outlined"
                    />
                    <TextField
                      {...register("password")}
                      error={errors.password ? true : false}
                      helperText={errors.password && errors.password.message}
                      id="outlined-basic"
                      label="Mật khẩu"
                      variant="outlined"
                      type='password'
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
                        <Link
                          style={{
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          onClick={() => history.push("/")}
                        >
                          <FormLabel id="demo-radio-buttons-group-label">
                            Quên mật khẩu?
                          </FormLabel>
                        </Link>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
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
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

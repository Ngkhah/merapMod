import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { TextFieldLogin } from "../../Theme/TextField";
import actions from "./actions";
import { USER } from "./constants";
import "./Login.css";


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Email không được để trống")
    .min(3, "Ít nhất 3 ký tự")
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

  if (localStorage.getItem(USER)) {
    return <Redirect to="/" />
  }  
  return (
    <Box>
      {/* {isLoading && <Spiner />}y */}
      <Grid container>
        <Grid item xs={7} className="landing-page">
          <Box className="bg-login">
            <Box className="login-page"></Box>
          </Box>
          <Box className="login-motion">
            <Box className="motion">
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            className="form-login"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box style={{ width: "70%", margin: "auto" }}>
              <Box
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
              </Box>
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
                    <TextFieldLogin
                      {...register("username")}
                      error={errors.username ? true : false}
                      helperText={errors.username && errors.username.message}
                      label="Email / Mã nhân viên"
                      variant="outlined"
                    />
                    <TextFieldLogin
                      {...register("password")}
                      error={errors.password ? true : false}
                      helperText={errors.password && errors.password.message}
                      label="Mật khẩu"
                      variant="outlined"
                      autoComplete="true"
                      name='password'
                      required={true}
                      type='password'
                    />
                    <Grid container>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked color="default" />}
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
                        <Link to='/reset-password'
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

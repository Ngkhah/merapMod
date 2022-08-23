// import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
// import React from 'react';
// import PhoneIcon from '@material-ui/icons/Phone';
// import logo from '../../assets/logo.png';
// import './styles.css';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { Link, useHistory } from 'react-router-dom';
// import Spiner from '../shared/Spiner';

// import { useSelector, useDispatch } from 'react-redux';
// import actions from './actions';
// const validationSchema = Yup.object().shape({
//   phone: Yup.string()
//     .required('Điện không được để trống')
//     .min(9,'Ít nhất 9 ký tự')
//     .max(10,'Tối đa 10 ký tự')
// });

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { isLoading } = useSelector(state => state.auth);
//   const { register,handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema)
//   });

//   const onSubmit = async data => {
//     dispatch(actions.doReset(data));
//   }

  




//   return (
//     <section>
//         {isLoading && <Spiner />}
//         <div className="img-bg">
//             <img src="https://dms.phanam.com.vn/IMG/OM20820/20210422834141329.jpg" alt="Hình Ảnh Minh Họa" />
//         </div>
        
//         <div className="noi-dung">
//             <div className="form">
//                 <div>
//                   <img 
//                     width={200}
//                     src={logo} 
//                     alt="logo" 
//                   />
//                 </div><br />
//                 <h2>Quên mật khẩu</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} >
//                   <Grid container spacing={4}>
//                     <Grid item md={12} xs={12}>
//                       <TextField 
//                         {...register('phone')}
//                         error={errors.phone ? true : false}
//                         helperText={errors.phone && errors.phone.message}
//                         fullWidth 
//                         id="outlined-basic" 
//                         label="Số điện thoại" 
//                         variant="outlined" 
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <PhoneIcon />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </Grid>
//                     <Grid item md={12} xs={12}>
//                       <Button type="submit" fullWidth variant="contained" color="primary">GỬI YÊU CẦU CẤP LẠI MẬT KHẨU</Button>
//                     </Grid>
//                   </Grid>
//                   <br />
//                   <Grid item md={12} xs={12}>
//                     <Typography >
//                       <Link style={{
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         color: '#0b6aaf'
//                         }} onClick={() => history.push('/login')}>Trang đăng nhập</Link>
//                     </Typography>
//                   </Grid>
//                 </form>
//             </div>
            
//         </div>
//     </section>
//   )
// }

// export default LoginPage;

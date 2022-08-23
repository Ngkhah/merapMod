import React from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@mui/material';
//import './styles/style.css';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.appBar + 9999
  },
}));

export default function Spiner() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress />
    </Backdrop>
  );
}
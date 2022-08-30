import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";

import {
  ButtonLine,
  ColorButton,
  CssTextField,
} from "../../../../../Theme/store";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: "1rem" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[900],
          }}
        >
          <VscClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const FiltersBanner = (data) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <ButtonLine
        sx={{ height: "40px", width: "130px" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <Typography sx={{ mr: 1 }}>
          <FiFilter />
        </Typography>
        Bộ lọc
      </ButtonLine>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        fullWidth="lg"
        
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Bộ lọc
        </BootstrapDialogTitle>
        <DialogContent sx={{ p: 0, borderRadius: 0 }}>
          <Box sx={{ flexGrow: 1, p: 0 }}>
            <Grid container spacing={2} sx={{ my: "1rem", px:'5rem' }} >
              <Grid item xs={6}>
                <CssTextField
                  label="Mã"
                  variant="outlined"
                  placeholder="Mã"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  label="Tên loại"
                  variant="outlined"
                  placeholder="Tên loại"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  label="Mô tả"
                  variant="outlined"
                  placeholder="Mô tả"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  label="Tình trạng"
                  variant="outlined"
                  placeholder="Tình trạng"
                  sx={{ width: "100%"}}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <ColorButton
            sx={{ height: "40px", width: "300px" , mb:'1rem'}}
            onClick={handleClose}
          >
            Áp dụng
          </ColorButton>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};

export default FiltersBanner;

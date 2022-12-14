import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ButtonWhite, ButtonWhite1, ButtonWhite2, ColorButton } from "../../../../../Theme/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Delete = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonWhite2
        onClick={handleOpen}
        sx={{ height: "40px", width: "30px", fontSize: "18px", ml: 2 }}
      >
        <RiDeleteBin6Line />
      </ButtonWhite2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Banner
          </Typography>
          {data.length <= 0 || data.length > 1 ? (
            <Box>
              {data.length > 1 ? (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Bạn chỉ chọn 1 loại Banner cần xóa.
                </Typography>
              ) : (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Bạn cần chọn loại Banner cần xóa.
                </Typography>
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonWhite1
                  onClick={handleClose}
                  sx={{ width: "100px", mt: 2 }}
                >
                  Bỏ qua
                </ButtonWhite1>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Loại banner mã {data} bạn đang chọn sẽ bị xoá và không thể hoàn
                tác.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonWhite1
                  onClick={handleClose}
                  sx={{ width: "100px", mt: 2 }}
                >
                  Bỏ qua
                </ButtonWhite1>
                <ColorButton
                  onClick={handleClose}
                  sx={{ width: "100px", height: "40px", ml: 2, mt: 2 }}
                >
                  Áp dụng
                </ColorButton>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Delete;

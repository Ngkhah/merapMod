import { Grid, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { ButtonWhite, ColorButton } from '../../../../../Theme/Button'
import { CssTextField } from '../../../../../Theme/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Edit = ({ data }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonWhite onClick={handleOpen} sx={{ height: "40px", width: "30px", fontSize: '18px', ml: 2 }}><FiEdit /></ButtonWhite>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Banner
          </Typography>
          {data.length <= 0 || data.length > 1 ? (
            <Box>
              {data.length > 1 ? (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Bạn chỉ chọn 1 loại Banner cần edit.
                </Typography>
              ) : (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Bạn cần chọn loại Banner cần edit.
                </Typography>
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonWhite
                  onClick={handleClose}
                  sx={{ width: "100px", mt: 2 }}
                >
                  Bỏ qua
                </ButtonWhite>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Loại banner mã {data} bạn đang chọn sẽ bị thay thế và không thể hoàn
                tác.

                <Box sx={{ flexGrow: 1, p: 0 }}>
                  <Grid container spacing={1} sx={{ my: "1rem" }}>
                    <Grid item xs={12}>
                      <CssTextField
                        label="Tên loại"
                        variant="outlined"
                        defaultValue={data}
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CssTextField
                        label="Mô tả"
                        variant="outlined"
                        defaultValue="Giải phóng hàng tồn"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Chiều dài đề xuất"
                        variant="outlined"
                        defaultValue="Chiều dài đề xuất"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Chiều cao đề xuất"
                        variant="outlined"
                        defaultValue="Chiều cao đề xuất"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonWhite
                  onClick={handleClose}
                  sx={{ width: "100px", mt: 2 }}
                >
                  Bỏ qua
                </ButtonWhite>
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

  )
}

export default Edit
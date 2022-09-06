import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { ColorButton } from "../../../../../Theme/Button";
import { CssTextField, TextArea } from "../../../../../Theme/TextField";
import { SwitchTable } from "../../../../../Theme/Switch";
import Menu from "../../../../Layout/HomeLayout/Header/Menu";
import CkeditorBanner from "./CkeditorBanner";


const AddBanner = () => {
  const BoxImg = {
    width: "100%",
    height: "100%",
    border: "2px dashed #E5ECF0",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const BoxflexCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box>
      <Menu />
      <form>
        <Box sx={{ m: '3rem 0' }}>
          <Box sx={{ maxWidth: "95%", margin: "0 auto" }}>
            <Box sx={{ margin: "1rem" }}>
              <Typography
                sx={{ fontWeight: 700, mt: "2rem", mb: "2rem" }}
                variant="h5"
                color="palette.text.primary"
              >
                Thêm mới Banner
              </Typography>
              <Box sx={{ bgcolor: "background.paper", p: 4 }}>
                <Box sx={{ flexGrow: 1, p: 0 }}>
                  <Typography
                    sx={{ fontWeight: 700, mb: "1rem" }}
                    variant="h6"
                    color="palette.text.primary"
                  >
                    Nội Dung Banner
                  </Typography>

                  <Grid container spacing={1} sx={{ my: "1rem" }}>
                    <Grid item xs={12}>
                      <CssTextField
                        label="Tiêu đề"
                        variant="outlined"
                        placeholder="Tiêu đề"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Slug URL (Tên không dấu)"
                        variant="outlined"
                        placeholder="Slug URL"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Loại Banner"
                        variant="outlined"
                        placeholder="Loại Banner"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>

                    <Grid item xs={6} sx={{ height: "160px", mb: "1rem" }}>
                      <Typography
                        sx={{ fontWeight: 700, fontSize: "17px" }}
                        color="palette.text.primary"
                      >
                        Banner
                      </Typography>
                      <Box sx={BoxImg}>
                        <Box sx={{ textAlign: "center", m: "auto" }}>
                          <img src="./img/addImg.png" alt="" />
                          <Typography sx={{ fontWeight: 500 }}>
                            Kéo thả hình ảnh vào đây hoặc <Link to='/banner'>tải lên</Link>
                          </Typography>
                          <Typography
                            sx={{ fontWeight: 500, color: "#8C9CB6" }}
                          >
                            Hỗ trợ: .JPG, .PNG
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sx={BoxflexCenter}>
                      <Box sx={{ width: "100%" }}>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "17px" }}
                          color="palette.text.primary"
                        >
                          Tình trạng <SwitchTable />
                        </Typography>
                        <CssTextField
                          InputLabelProps={{
                            shrink: true,
                          }}
                          label="Thứ tự"
                          variant="outlined"
                          placeholder="Thứ tự"
                          sx={{ width: "100%", mt: 2 }}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <CssTextField
                        label="Từ ngày"
                        variant="outlined"
                        placeholder="dd/mm/yyyy"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Đến ngày"
                        variant="outlined"
                        placeholder="dd/mm/yyyy"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextArea
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Mô Tả"
                        variant="outlined"
                        placeholder="Viết mô tả"
                        multiline
                        rows={4}
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{ fontWeight: 700, mt: 2 }}
                        variant="h6"
                        color="palette.text.primary"
                      >
                        Chương trình khuyến mãi
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CssTextField
                        label="Chương trình khuyến mãi"
                        variant="outlined"
                        placeholder="Nhập chương trình khuyến mãi"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Liên Kết (Link)"
                        variant="outlined"
                        placeholder="Link"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Target"
                        variant="outlined"
                        placeholder="Target"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: "1rem" }}>
                      <CkeditorBanner />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <ColorButton sx={{ width: "200px", height: "40px" }}>
                      Lưu
                    </ColorButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AddBanner;

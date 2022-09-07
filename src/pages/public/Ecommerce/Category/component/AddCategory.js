import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { ColorButton } from "../../../../../Theme/Button";
import { CustomSelect } from "../../../../../Theme/Select";
import { SwitchTable } from "../../../../../Theme/Switch";
import { CssTextField } from "../../../../../Theme/TextField";
import Menu from "../../../../Layout/HomeLayout/Header/Menu";

const AddCategory = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <Menu />
      <Box sx={{ m: "3rem 0" }}>
        <Box sx={{ maxWidth: "95%", margin: "0 auto" }}>
          <Box sx={{ margin: "1rem" }}>
            <Typography
              sx={{ fontWeight: 700, mt: "2rem", mb: "2rem" }}
              variant="h5"
              color="palette.text.primary"
            >
              Thêm mới danh mục
            </Typography>
            <form>
              <Box sx={{ bgcolor: "background.paper", p: 4, my: "1rem" }}>
                <Box sx={{ flexGrow: 1, p: 0 }}>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "17px" }}
                    color="palette.text.primary"
                  >
                    Tình trạng <SwitchTable />
                  </Typography>
                  <Grid container spacing={1} sx={{}}>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Tên danh mục"
                        variant="outlined"
                        placeholder="Tên danh mục"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Slug URL(Viết thường không dấu)"
                        variant="outlined"
                        placeholder="Slug URL"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ width: "100%", mt: 2 }}>
                        {/* /sdfsdflkdhflkdhfkjdhff */}
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        label="Biểu tượng"
                        variant="outlined"
                        placeholder="Biểu tượng"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <ColorButton
                      sx={{ width: "200px", height: "40px", mt: "1rem" }}
                    >
                      Lưu
                    </ColorButton>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCategory;

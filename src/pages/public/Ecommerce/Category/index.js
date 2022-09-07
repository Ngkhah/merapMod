import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ColorButton } from "../../../../Theme/Button";
import { StyledDataGrid } from "../../../../Theme/DataGrid";
import { SwitchTable } from "../../../../Theme/Switch";
import Menu from "../../../Layout/HomeLayout/Header/Menu";
import Delete from "../Banner/component/Delete";
import Edit from "../Banner/component/Edit";
import FiltersBanner from "../Banner/component/FiltersBanner";

const Category = () => {
  const rowss = [
    {
      icon: "health_and_safety",
      id: "PC001",
      danhMuc: "Sức khỏe",
      moTa: "Sức khỏe",
      slug: "suc-khoe",
      tinhTrang: true,
    },
    {
      icon: "favorite_border",
      id: "PC002",
      danhMuc: "Tim mạch",
      moTa: "Tim mạch",
      slug: "tim-mach",
      tinhTrang: false,
    },
    {
      icon: "timeline",
      id: "PC003",
      danhMuc: "Chuyên ngành",
      moTa: "Chuyên ngành",
      slug: "chuyen-nganh",
      tinhTrang: true,
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Mã",
      flex: 0.5,
      renderCell: (params) => (
        <Link to={{ pathname: `/banner-item/${params.row.id}` }}>
          {params.row.id}
        </Link>
      ),
    },
    {
      field: "icon",
      headerName: "Icons",
      flex: 1,
      renderCell: (params) => (
        <span
          style={{ fontSize: "30px", color: "#6F7C91" }}
          className="material-icons"
        >
          {params.row.icon}
        </span>
      ),
    },
    { field: "danhMuc", headerName: "Tên danh mục", flex: 2 },
    {
      field: "moTa",
      headerName: "Mô Tả",
      flex: 2,
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
    },
    {
      field: "tinhTrang",
      headerName: "Tình Trạng",
      flex: 0.5,
      renderCell: (params) => <SwitchTable checked={params.row.tinhTrang} />,
    },
  ];
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <Box>
      <Menu />
      <Box sx={{ m: "3rem 0" }}>
        <Box sx={{ width: "95%", margin: "0 auto" }}>
          <Box>
            <Typography
              sx={{ fontWeight: 700, my: 2 }}
              variant="h5"
              color="palette.text.primary"
            >
              Loại Danh Mục
            </Typography>
            <Box>
              <Grid container>
                <Grid item xs={6} sm={6}>
                  <Box sx={{ display: "flex", mb: 2 }}>
                    <FiltersBanner />
                    <Edit data={selectedRows.map((item) => item.id)} />
                    <Delete data={selectedRows.map((item) => item.id)} />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    height: "40px",
                  }}
                >
                  <Link to="/add-category">
                    <ColorButton sx={{ width: "200px", fontWeight: "200" }}>
                      Thêm loại danh mục
                    </ColorButton>
                  </Link>
                </Grid>
              </Grid>
            </Box>

            <Box className="focus" sx={{ height: 600 }}>
              <StyledDataGrid
                color="default"
                rows={rowss}
                columns={columns}
                checkboxSelection
                pageSize={9}
                rowsPerPageOptions={[9]}
                sx={{ bgcolor: "background.paper", pt: "1rem", px: "2rem" }}
                localeText={{
                  MuiTablePagination: {
                    labelDisplayedRows: ({ from, to, count }) =>
                      `Đang xem : ${from}-${to} của ${
                        count !== -1 ? count : `${to}`
                      }`,
                  },
                }}
                onSelectionModelChange={(id) => {
                  const selectedIDs = new Set(id);
                  const selectedRows = rowss.filter((row) =>
                    selectedIDs.has(row.id)
                  );
                  setSelectedRows(selectedRows);
                }}
                {...rowss}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Category;

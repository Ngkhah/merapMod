import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ColorButton, StyledDataGrid, SwitchTable } from "../../../../Theme/store";
import Menu from "../../../Layout/HomeLayout/Header/Menu";
import './Banner.css';
import Delete from "./component/Delete";
import Edit from "./component/Edit";
import FiltersBanner from "./component/FiltersBanner";
const Banner = () => {
  const rowss = [
    {sTT: 1, id: 'P001', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true},
    { sTT: 2, id: 'P002', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 3, id: 'P003', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 4, id: 'P004', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 5, id: 'P005', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 6, id: 'P006', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 7, id: 'P007', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 8, id: 'P008', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 9, id: 'P009', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  ];

  const columns = [
    { field: 'sTT', headerName: 'Thứ tự', width: 200 },
    {
      field: 'id', headerName: 'Mã', width: 250,
      renderCell: (params) => <Link to='/banneritem'>{params.row.id}</Link>
    },

    { field: 'tenLoai', headerName: 'Tên Loại', width: 300 },
    {
      field: 'moTa',
      headerName: 'Mô Tả',
      width: 300,
    },
    {
      field: 'tinhTrang',
      headerName: 'Tình Trạng',
      width: 244,
      renderCell: (params) => <SwitchTable checked={params.row.tinhTrang} />

    },
  ];
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(selectedRows);
  //  data={selectedRows.map(item => item.itemBanner)}
  return (
    <Box>
      <Menu />

      <Box sx={{ mt: '2rem' }}>
        <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
          <Box sx={{ margin: "1rem" }}>
            <Typography sx={{ fontWeight: 700, my: 2 }} variant="h5" color="palette.text.primary">Loại Banner</Typography>
            <Box>
              <Grid container>
                <Grid xs={6}>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <FiltersBanner />
                    <Edit data={selectedRows.map(item => item.id)} />
                    <Delete data={selectedRows.map(item => item.id)} />
                    {/* <BannerItem /> */}
                  </Box>
                </Grid>
                <Grid xs={6} sx={{ display: "flex", justifyContent: "flex-end", height: '40px' }}>
                  {/* <Fab color="background.default" aria-label="add">
                    <AddIcon />
                  </Fab> */}
                  <Link to='/addtypebanner'><ColorButton sx={{ width: '200px', fontWeight: "200" }}>Thêm Loại Banner</ColorButton></Link>
                </Grid>
              </Grid>
            </Box>

            <Box className="focus" sx={{ height: 500 }}>
              <StyledDataGrid
                color="default"
                rows={rowss}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{ width: '100%', bgcolor: 'background.paper', border: 0, pt: '1rem', px: '2rem' }}
                onSelectionModelChange={(id) => {
                  const selectedIDs = new Set(id);
                  const selectedRows = rowss.filter((row) =>
                    selectedIDs.has(row.id),
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



export default Banner;

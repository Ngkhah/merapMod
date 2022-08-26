import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../../Layout/HomeLayout/Header";
import { DataGrid } from '@mui/x-data-grid';
import './Banner.css'


const columns = [
  { field: 'sTT', headerName: 'Thứ tự', width: 200 },
  { field: 'id', headerName: 'Mã', width: 250 },
  { field: 'tenLoai', headerName: 'Tên Loại', width: 300 },
  {
    field: 'moTa',
    headerName: 'Mô Tả',
    width: 300,
  },
  {
    field: 'tinhTrang',
    headerName: 'Tình Trạng',
    width: 200,
    
  },
];

const rowss = [
  { sTT: 1,id: 'P001', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 2,id: 'P002', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 3,id: 'P003', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 4,id: 'P004', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 5,id: 'P005', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 6,id: 'P006', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 7,id: 'P007', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 8,id: 'P008', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  { sTT: 9,id: 'P009', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
];

const Banner = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ mt: 8 }}>
        <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
          <Box sx={{ margin: "1rem" }}>
            <Typography sx={{ fontWeight: 700, mt: '7rem', mb: '2rem'}} variant="h5" color="palette.text.primary">Loại Banner</Typography>
            <Box className="focus" sx={{ height: 500 }}>
              <DataGrid
                rows={rowss}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{ width: '100%', bgcolor: 'background.paper', border: 0, pt: '1rem', px: '2rem'}}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

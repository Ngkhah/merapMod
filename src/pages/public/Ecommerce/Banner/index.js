import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ColorButton } from "../../../../Theme/Button";
import { StyledDataGrid } from "../../../../Theme/DataGrid";
import { SwitchTable } from "../../../../Theme/Switch";
import Menu from "../../../Layout/HomeLayout/Header/Menu";
import Delete from "./component/Delete";
import Edit from "./component/Edit";
import FiltersBanner from "./component/FiltersBanner";
const Banner = () => {
  const rowss = [
    { sTT: 1, id: 'P001', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 2, id: 'P002', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 3, id: 'P003', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 4, id: 'P004', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 5, id: 'P005', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 6, id: 'P006', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 7, id: 'P007', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 8, id: 'P008', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 9, id: 'P009', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 10, id: 'P010', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 11, id: 'P011', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 12, id: 'P012', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 13, id: 'P013', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 14, id: 'P014', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 15, id: 'P015', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 16, id: 'P016', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 17, id: 'P017', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 18, id: 'P018', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 19, id: 'P019', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 20, id: 'P020', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 21, id: 'P021', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 22, id: 'P022', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 23, id: 'P023', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 24, id: 'P024', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 25, id: 'P025', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 26, id: 'P026', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 27, id: 'P027', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 28, id: 'P028', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: false },
    { sTT: 29, id: 'P029', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
    { sTT: 30, id: 'P030', tenLoai: 'Nhãn hàng nổi bật', moTa: 'Nhãn hàng nổi bật', tinhTrang: true },
  ];

  const columns = [
    { field: 'sTT', headerName: 'Thứ tự', flex: 0.5 },
    {
      field: 'id', headerName: 'Mã', flex: 0.5,
      renderCell: (params) => <Link to={{ pathname: `/banner-item/${params.row.id}` }}>{params.row.id}</Link>
    },

    { field: 'tenLoai', headerName: 'Tên Loại', flex: 1.5 },
    {
      field: 'moTa',
      headerName: 'Mô Tả',
      flex: 1.5,
    },
    {
      field: 'tinhTrang',
      headerName: 'Tình Trạng',
      flex: 0.5,
      renderCell: (params) => <SwitchTable checked={params.row.tinhTrang} />
    }
  ];
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <Box>
      <Menu />
      <Box sx={{ m: '3rem 0' }}>
        <Box sx={{ width: "95%", margin: "0 auto" }}>
          <Box>
            <Typography sx={{ fontWeight: 700, my: 2 }} variant="h5" color="palette.text.primary">Loại Banner</Typography>
            <Box>
              <Grid container>
                <Grid item xs={6} sm={6}>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <FiltersBanner />
                    <Edit data={selectedRows.map(item => item.id)} />
                    <Delete data={selectedRows.map(item => item.id)} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} sx={{ display: "flex", justifyContent: "flex-end", height: '40px' }}>
                  <Link to='/add-type-banner'><ColorButton sx={{ width: '200px', fontWeight: "200" }}>Thêm Loại Banner</ColorButton></Link>
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
                sx={{ bgcolor: 'background.paper', pt: '1rem', px: '2rem' }}
                localeText={{
                  MuiTablePagination: {
                    labelDisplayedRows: ({ from, to, count }) =>
                      `Đang xem : ${from}-${to} của ${count !== -1 ? count : `${to}`}`,
                  },
                }}
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

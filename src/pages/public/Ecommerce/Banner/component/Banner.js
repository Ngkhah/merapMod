import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ColorButton } from '../../../../../Theme/Button';
import { StyledDataGrid } from '../../../../../Theme/DataGrid';
import { SwitchTable } from '../../../../../Theme/Switch';
import { ZoomImgTooltip } from '../../../../../Theme/Tooltip';
import Menu from '../../../../Layout/HomeLayout/Header/Menu';
import Delete from './Delete';
import Edit from './Edit';
import FiltersBanner from './FiltersBanner';


const BannerItem = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const rowss = [
        { sTT: 1, id: 'P001', img: 'https://picsum.photos/id/11/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: true },
        { sTT: 2, id: 'P002', img: 'https://picsum.photos/id/12/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: false },
        { sTT: 3, id: 'P003', img: 'https://picsum.photos/id/13/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: true },
        { sTT: 4, id: 'P004', img: 'https://picsum.photos/id/14/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: true },
        { sTT: 5, id: 'P005', img: 'https://picsum.photos/id/15/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: false },
        { sTT: 6, id: 'P006', img: 'https://picsum.photos/id/16/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: true },
        { sTT: 7, id: 'P007', img: 'https://picsum.photos/id/30/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: true },
        { sTT: 8, id: 'P008', img: 'https://picsum.photos/id/18/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: false },
        { sTT: 9, id: 'P009', img: 'https://picsum.photos/id/19/480/160', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS', batDau: "30/08/2022", ketThuc: "05/09/2022", tinhTrang: true },
    ];
    const columns = [
        { field: 'sTT', headerName: 'Thứ tự', width: 150 },
        {
            field: 'img', headerName: 'Banner', width: 300,
            renderCell: (params) => <ZoomImgTooltip title={<img style={{ width: "100%", height: "100%" }} src={params.row.img} alt={params.row.img} />}>
                <img style={{ width: "120px", height: "40px" }} src={params.row.img} alt={params.row.img} />
            </ZoomImgTooltip>
        },
        { field: 'tenLoai', headerName: 'Loại Banner', width: 300 },
        {
            field: 'moTa',
            headerName: 'Tiêu Đề',
            width: 300,
        },
        { field: 'batDau', headerName: 'Từ Ngày', width: 200 },
        { field: 'ketThuc', headerName: 'Đến Ngày', width: 200 },

        {
            field: 'tinhTrang',
            headerName: 'Tình Trạng',
            width: 244,
            renderCell: (params) => <SwitchTable checked={params.row.tinhTrang} />

        },
    ];

    let { id } = useParams();

    return (
        <Box>
            <Menu />
            <Box sx={{ m: '3rem 0' }}>
                <Box sx={{ maxWidth: "95%", margin: "0 auto" }}>
                    <Box>
                        <Typography sx={{ fontWeight: 700, my: 2 }} variant="h5" color="palette.text.primary">Loai Banner {id}</Typography>
                        <Box>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex', mb: 2 }}>
                                        <FiltersBanner />
                                        <Edit data={selectedRows.map(item => item.id)} />
                                        <Delete data={selectedRows.map(item => item.id)} />
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", height: '40px' }}>
                                    <Link to='/add-banner'><ColorButton sx={{ width: '150px', fontWeight: "200" }}>Thêm Banner</ColorButton></Link>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box className="focus" sx={{ height: 500 }}>
                            <StyledDataGrid
                                color="default"
                                rows={rowss}
                                columns={columns}
                                pageSize={7}
                                rowsPerPageOptions={[7]}
                                checkboxSelection
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "Rows per page"
                                    },
                                    native: true
                                }}
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
    )
}

export default BannerItem
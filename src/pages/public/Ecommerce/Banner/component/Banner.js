import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ColorButton, StyledDataGrid, SwitchTable } from '../../../../../Theme/store';
import Menu from '../../../../Layout/HomeLayout/Header/Menu';
import Delete from './Delete';
import Edit from './Edit';
import FiltersBanner from './FiltersBanner';

const BannerItem = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const rowss = [
        { sTT: 1, id: 'P001',img:'https://picsum.photos/id/11/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: true },
        { sTT: 2, id: 'P002',img:'https://picsum.photos/id/12/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: false },
        { sTT: 3, id: 'P003',img:'https://picsum.photos/id/13/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: true },
        { sTT: 4, id: 'P004',img:'https://picsum.photos/id/14/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: true },
        { sTT: 5, id: 'P005',img:'https://picsum.photos/id/15/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: false },
        { sTT: 6, id: 'P006',img:'https://picsum.photos/id/16/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: true },
        { sTT: 7, id: 'P007',img:'https://picsum.photos/id/17/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: true },
        { sTT: 8, id: 'P008',img:'https://picsum.photos/id/18/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: false },
        { sTT: 9, id: 'P009',img:'https://picsum.photos/id/19/120/40', tenLoai: 'Banner ảnh trang chủ giữa', moTa: 'Khuyến mãi - Giỏ hàng XOS',batDau:"30/8/2022",ketThuc:"05/09/2022", tinhTrang: true },
    ];
    const columns = [
        { field: 'sTT', headerName: 'Thứ tự', width: 100 },
        { field: 'img', headerName: 'Banner', width: 200,
        renderCell: (params) => <img src={params.row.img} alt={params.row.img} />
    },
        { field: 'tenLoai', headerName: 'Loại Banner', width: 300 },
        {
            field: 'moTa',
            headerName: 'Tiêu Đề',
            width: 300,
        },
        { field: 'batDau', headerName: 'Từ Ngày', width: 100 },
        { field: 'ketThuc', headerName: 'Đến Ngày', width: 150 },

        {
            field: 'tinhTrang',
            headerName: 'Tình Trạng',
            width: 144,
            renderCell: (params) => <SwitchTable checked={params.row.tinhTrang} />

        },
    ];


    return (
        <Box>
            
            <Menu />
            <Box sx={{ mt: '2rem' }}>
                <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
                    <Box sx={{ margin: "1rem" }}>
                        <Typography sx={{ fontWeight: 700, my: 2 }} variant="h5" color="palette.text.primary">Banner</Typography>
                        <Box>
                            <Grid container>
                                <Grid xs={6}>
                                    <Box sx={{ display: 'flex', mb: 2 }}>
                                        <FiltersBanner />
                                        <Edit data={selectedRows.map(item => item.id)} />
                                        <Delete data={selectedRows.map(item => item.id)} />
                                    </Box>
                                </Grid>
                                <Grid xs={6} sx={{ display: "flex", justifyContent: "flex-end", height: '40px' }}>
                                    <Link to='/addbanner'><ColorButton sx={{ width: '150px', fontWeight: "200" }}>Thêm Banner</ColorButton></Link>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box className="focus" sx={{ height: 500 }}>
                            <StyledDataGrid
                                color="default"
                                rows={rowss}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[6]}
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
    )
}

export default BannerItem
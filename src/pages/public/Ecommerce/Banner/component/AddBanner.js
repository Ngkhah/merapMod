import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ColorButton, CssTextField } from '../../../../../Theme/store'
import Header from '../../../../Layout/HomeLayout/Header'

const AddBanner = () => {
    return (
        <Box>
            <Header />
            <Box sx={{ mt: 8 }}>
                <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
                    <Box sx={{ margin: "1rem" }}>
                        <Typography sx={{ fontWeight: 700, mt: '7rem', mb: '2rem' }} variant="h5" color="palette.text.primary">Thêm mới loại Banner</Typography>

                        <Box sx={{ bgcolor: "background.paper", p: 4 }}>
                            <Box sx={{ flexGrow: 1, p: 0 }}>
                                <Grid container spacing={1} sx={{ my: "1rem" }}>
                                    <Grid item xs={12}>
                                        <CssTextField
                                            label="Tên loại"
                                            variant="outlined"
                                            defaultValue="Tên loại"
                                            sx={{ width: "100%", mt:2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CssTextField
                                            label="Mô tả"
                                            variant="outlined"
                                            defaultValue="Giải phóng hàng tồn"
                                            sx={{ width: "100%", mt:2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CssTextField
                                            label="Chiều dài đề xuất"
                                            variant="outlined"
                                            defaultValue="Chiều dài đề xuất"
                                            sx={{ width: "100%", mt:2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CssTextField
                                            label="Chiều cao đề xuất"
                                            variant="outlined"
                                            defaultValue="Chiều cao đề xuất"
                                            sx={{ width: "100%", mt:2 }}
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <ColorButton sx={{width:'200px', height:'40px'}}>Lưu</ColorButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AddBanner
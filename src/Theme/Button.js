import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    borderRadius: "10px",
    backgroundColor: '#00A79D',
    '&:hover': {
        backgroundColor: '#374957',
    }
}));

export const ButtonLine = styled(Button)(({ theme }) => ({
    color: '#374957',
    borderRadius: "10px",
    backgroundColor: '#EFF3F6',
    border: ' 1px solid #D2DCE1',
    '&:hover': {
        backgroundColor: '#ffffff',
        border: ' 1px solid #EFF3F6',
    }, '&:focus': {
        backgroundColor: '#ffffff',
    },
}));

export const ButtonWhite = styled(Button)(({ theme }) => ({
    color: '#374957',
    borderRadius: "10px",
    backgroundColor: '#ffffff',
    textTransform: 'none',
    border: ' 1px solid #D2DCE1',
    '&:hover': {
        backgroundColor: '#EFF3F6',
        border: ' 1px solid #EFF3F6',
    }, '&:focus': {
        backgroundColor: '#ffffff',
    },
}));

export const ButtonWhite1 = styled(Button)(({ theme }) => ({
    color: '#374957',
    textAlign: "left",
    borderRadius: "10px",
    backgroundColor: '#ffffff',
    border: ' 1px solid #ffffff',
    '&:hover': {
        backgroundColor: '#EFF3F6',
        border: ' 1px solid #EFF3F6',
    }, '&:focus': {
        backgroundColor: '#ffffff',
    },
}));

export const ButtonWhite2 = styled(Button)(({ theme }) => ({
    color: '#374957',
    borderRadius: "10px",
    backgroundColor: '#EFF3F6',
    border: ' 1px solid #EFF3F6',
    textTransform: 'none',
    '&:hover': {
        border: ' 1px solid #E5ECF0',
    }, '&:focus': {
        backgroundColor: '#EFF3F6',
        border: ' 1px solid #E5ECF0',
    },
}));

export const ButtonNotfonud = styled(Button)(({ theme }) => ({
    textAlign: 'center',
    border: '1px solid #00CFD0',
    borderRadius: '5px',
    backgroundColor: 'none',
    width: '180px',
    height: '40px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#00CFD0',
        border: ' 1px solid #00CFD0',
        color: '#ffffff'
    }, '&:focus': {
        backgroundColor: '#ffffff',
        color: '#00CFD0',
    },

}));
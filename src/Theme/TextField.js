import { styled, TextField } from "@mui/material";

export const TextFieldLogin = styled(TextField)({
    "& label.Mui-focused": {
        color: "#52627C"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#00A79D"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#D9D9D9"
        },
        "&:hover fieldset": {
            borderColor: "#D9D9D9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#52627C"
        }
    }
});

export const TextArea = styled(TextField)({
    overrides: {
        MuiOutlinedInput: {
            multiline: {
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'purple',
                width: '50vw'
            }
        }
    },
    "& label.Mui-focused": {
        color: "#52627C"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#00A79D"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#D9D9D9"
        },
        "&:hover fieldset": {
            borderColor: "#D9D9D9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#52627C"
        }
    }
});

//dang ko lay dc data
export const CssTextField = styled((props) => (
    <TextField InputLabelProps={{ shrink: true }} {...props} />
))(({ theme }) => ({
    "& label.Mui-focused": {
        color: "#52627C"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#00A79D"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#D9D9D9"
        },
        "&:hover fieldset": {
            borderColor: "#D9D9D9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#52627C"
        }
    }
}));
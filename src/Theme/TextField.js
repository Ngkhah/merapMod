import { styled, TextField } from "@mui/material";

export const TextFieldLogin = styled(TextField)({

    "& label.Mui-focused": {
        color: "#52627C"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#00A79D"
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",

        "& fieldset": {
            borderColor: "#D9D9D9"
            , color: "#52627C",
        },
        "&:hover fieldset": {
            borderColor: "#D9D9D9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#D9D9D9"
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
        borderRadius: "10px",

        "& fieldset": {
            borderColor: "#D9D9D9", color: "#52627C",
        },
        "&:hover fieldset": {
            borderColor: "#D9D9D9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#D9D9D9"
        }
    }
});

//dang ko lay dc data
export const CssTextField = styled((props) => (
    <TextField InputLabelProps={{ shrink: true }} {...props} />
))(({ theme }) => ({
    "& label": {
        color: "#52627C"
    },
    "& label.Mui-focused": {
        color: "#52627C"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#00A79D"
    },

    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        "& fieldset": {
            borderColor: "#D9D9D9"
        },
        "&:hover fieldset": {
            borderColor: "#D9D9D9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#D9D9D9"
        },

    }
}));
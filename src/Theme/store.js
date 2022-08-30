import styled from "@emotion/styled";
import { Button, createTheme, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
export const ColorModeContext = createContext({
  toggleMode: () => { },
  mode: "light",
});

export const CssTextField = styled(TextField)({
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

export const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  // lineHeight:"40px",
  borderRadius: "10px",
  // margin: '1rem',
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
  borderRadius: "10px",
  backgroundColor: '#ffffff',
  textTransform: 'none',
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

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );

  const themeObj = {
    light: {
      background: {
        default: "#F7FAFB",
        paper: "#ffffff",
      },
      palette: {
        text: {
          primary: "#374957"
        }
      }
    },
    dark: {
      background: {
        default: "#374957",
        paper: "#627484",
        btn: "#90a3b4",
      },
      palette: {
        text: {
          primary: "#FFFFFF"
        }
      }
    },
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...themeObj[mode]
        },
        typography: {
          fontFamily: [
            'Manrope', 'sans-serif'
          ].join(','),
          
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

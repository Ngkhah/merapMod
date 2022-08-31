import styled from "@emotion/styled";
import { Button, createTheme, CssBaseline, List, ListItem, TextField, ThemeProvider, Tooltip, tooltipClasses } from "@mui/material";
import { createContext, useMemo, useState } from "react";
export const ColorModeContext = createContext({
  toggleMode: () => { },
  mode: "light",
});

//ListItem
export const ListMenu = styled(List)({
  "& hr .MuiDivider-root": {
    "& .MuiDivider-fullWidth ": {
      "& .css-9mgopn-MuiDivider-root": {
        display: "none"
      }
    }
  },
  fontSize: '50px'
});
export const ListItemMenu = styled(ListItem)({
  "& hr .MuiDivider-root": {
    "& .MuiDivider-fullWidth ": {
      "& .css-9mgopn-MuiDivider-root": {
        display: "none"
      }
    }
  },
  fontSize: '50px'
});


// Toptip 
export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    borderRadius: '10px',
    width: '200px'
  },
}));

//TextField
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

//Button
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

// export const ButtonWhiteList = styled(Button)(({ theme }) => ({
//   color: '#374957',
//   textAlign: "left",
//   borderRadius: "10px",
//   backgroundColor: '#ffffff',
//   justifyContent: 'flex-start',
//   display: 'flex',
//   alignItems: "center",

//   border: ' 1px solid #ffffff',
//   '&:hover': {
//     backgroundColor: '#EFF3F6',
//     border: ' 1px solid #EFF3F6',
//   }, '&:focus': {
//     backgroundColor: '#ffffff',
//   },
// }));

export const ButtonNotfonud = styled(Button)(({ theme }) => ({
  
    // color: '#00CFD0',
    textAlign: 'center',
    border: '1px solid #00CFD0',
    borderRadius: '5px',
    backgroundColor: 'none',
    width: '180px',
    height: '40px',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#00CFD0',
      border: ' 1px solid #00CFD0',
      color: '#ffffff'
    }, '&:focus': {
      backgroundColor: '#ffffff',
      color: '#00CFD0',
    },
  
}));


//Darkmode
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
        // btnNotfound:"#00CFD0"
      },
      palette: {
        text: {
          primary: "#374957",
          title: '#52627C',
          textNotfound:"#00CFD0"
        }
      }, 
      textTransform:"none"
    },
    dark: {
      background: {
        default: "#374957",
        paper: "#627484",
        btn: "#90a3b4",
        btnNotfound:"#00CFD0"
      },
      palette: {
        text: {
          primary: "#FFFFFF",
          title: "#ffffff",
          textNotfound:"#ffffff"
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

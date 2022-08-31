import styled from "@emotion/styled";
import { Button, createTheme, CssBaseline, List, ListItem, Switch, TextField, ThemeProvider, Tooltip, tooltipClasses } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { createContext, useMemo, useState } from "react";
export const ColorModeContext = createContext({
  toggleMode: () => { },
  mode: "light",
});

//checkedBox DataGrid
export const customCheckbox = (theme) => {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',

      border: `1px solid ${theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
        }`,
      borderRadius: 2,
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#00A79D',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      borderColor: '#00A79D',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#00A79D',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  fontFamily: [
    'Manrope', 'sans-serif'
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d"
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none"
  },
  "& .MuiDataGrid-columnHeader": {
    borderBottom: `2px solid ${theme.palette.mode === "light" ? "#00A79D" : "#303030"
      }`
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
      }`,
  },
  "& .MuiDataGrid-cell:focus-within":{
    outline: '0px',
    outlineWidth: '0px',
    outlineOffset: '0px',
  },
  "& .MuiDataGrid-cell": {
    // backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#1d1d1d",
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
    borderBottom: `1px solid ${theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
      }`,
  },
  "& .MuiDataGrid-root, .Mui-selected": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d"
  },
  "& .MuiDataGrid-columnsContainer, .MuiPaginationItem-root": {
    borderRadius: 0
  },
  ...customCheckbox(theme)
}));

//Switch
export const SwitchTable = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#00A79D',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#DAF5F8' : '#DAF5F8',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[600]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

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
    borderRadius: '10px',
    width: '200px',
    border: '1px solid #E5ECF0'
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

export const ButtonNotfonud = styled(Button)(({ theme }) => ({

  // color: '#00CFD0',
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
          textNotfound: "#00CFD0"
        }
      },
      textTransform: "none"
    },
    dark: {
      background: {
        default: "#374957",
        paper: "#627484",
        btn: "#90a3b4",
        btnNotfound: "#00CFD0"
      },
      palette: {
        text: {
          primary: "#FFFFFF",
          title: "#ffffff",
          textNotfound: "#ffffff"
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

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";


export const ColorModeContext = createContext({
  toggleMode: () => { },
  mode: "light",
});
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

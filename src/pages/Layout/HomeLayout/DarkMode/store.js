import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

const themeObj = {
  light: {
    background: {
      default: "#F7FAFB",
      paper: "#ffffff",
    },
    palette: {
      text:{
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
      text:{
        primary: "#FFFFFF"
      }
    }
  },
};

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

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...themeObj[mode],
        },
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

import { Box, IconButton} from "@mui/material";
import React, { useContext } from "react";
import Header from "../Header";
import { ColorModeContext } from "./store";
import { MdBrightness4, MdBrightness5 } from 'react-icons/md';






const DarkMode = () => {
  const { mode, toggleMode } = useContext(ColorModeContext)

  return (

    <div>
      <Header />
      <div style={{ marginTop: "7rem" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          {mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleMode}
            color="inherit"
          >
            {mode === "dark" ? (
              <MdBrightness4 />
            ) : (
              <MdBrightness5 />
            )}
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default DarkMode;

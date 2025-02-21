// Default JSON object creator for light and dark themes
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          transition: "background-color 0.2s ease, color 0.2s ease",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          transition: "background-color 0.2s ease, color 0.2s ease",
        },
      },
    },
  },
});

// console.log(darkTheme);

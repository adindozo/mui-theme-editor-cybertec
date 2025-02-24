// Default JSON object creator for light and dark themes

export const lightTheme = {
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
};

export const darkTheme = {
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
};

// console.log(darkTheme);

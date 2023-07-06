import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#854CE6",
    },
    secondary: {
      main: "#f50057",
    },
    textPrimary: {
      main: "#ffffff",
    },
    textSecondary: {
      main: "#87868c",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "58px",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontSize: "30px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          // Style the contained button style
          backgroundColor: "854CE6",
          color: "#fff",
          borderRadius: "48px",
        },
        outlined: {
          // Style the outlined button style
          borderColor: "#854CE6",
          color: "#854CE6",
          borderRadius: "48px",
        },
      },
    },
  },
});
export default theme;

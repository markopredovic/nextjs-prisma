import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#123c69",
    },
    secondary: {
      main: "#ac3b61",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          fontWeight: 600,
          textDecoration: "auto",
        },
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});

export default theme;

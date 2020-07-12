import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
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
});

export default theme;

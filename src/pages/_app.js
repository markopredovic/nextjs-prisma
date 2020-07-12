import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SWRConfig } from "swr";

import theme from "../theme";
import AppContext from "../context/appContext";
import { useApp } from "../hooks/useApp";

export default function App({ Component, pageProps }) {
  const { addPost, deletePost, updatePost } = useApp();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <AppContext.Provider value={{ addPost, deletePost, updatePost }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext.Provider>
    </SWRConfig>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};

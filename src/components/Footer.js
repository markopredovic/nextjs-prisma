import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import Copyright from "./Shared/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > div": {
      color: "white",
      backgroundColor: "#000",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box
        width="1"
        position="fixed"
        bottom="0"
        left="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={1}
      >
        <Copyright />
      </Box>
    </footer>
  );
}

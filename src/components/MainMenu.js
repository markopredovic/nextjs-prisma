import React from "react";
import NextLink from "next/link";
import { Link, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainMenu: {
    "& a": {
      marginRight: "10px",
      color: "#fff",

      "&:last-child": {
        marginRight: "0",
      },
    },
  },
}));

const MainMenu = () => {
  const classes = useStyles();

  return (
    <Box component="nav" className={classes.mainMenu}>
      <Link href="/" component={NextLink}>
        <a>Home</a>
      </Link>
      <Link href="/posts/new" component={NextLink}>
        <a>Add Post</a>
      </Link>
      <Link href="/about" component={NextLink}>
        <a>About</a>
      </Link>
    </Box>
  );
};

export default MainMenu;

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Link,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { Home, Info, AddComment, Close } from "@material-ui/icons";

import NextLink from "next/link";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px 10px",
    "& h4": { marginBottom: "20px" },
  },
}));

const MobileMenu = ({ closeDrawer }) => {
  const classes = useStyles();

  const handleListItemClicked = () => {
    closeDrawer();
  };

  return (
    <Box position="relative" className={classes.root}>
      <Box position="absolute" top="0" right="0">
        <IconButton color="inherit" aria-label="menu" onClick={closeDrawer}>
          <Close fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="h4" align="center">
        Menu
      </Typography>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleListItemClicked}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText>
            <Link href="/" component={NextLink}>
              <a>Home</a>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={handleListItemClicked}>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText>
            <Link href="/about" component={NextLink}>
              <a>About</a>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={handleListItemClicked}>
          <ListItemIcon>
            <AddComment />
          </ListItemIcon>
          <ListItemText>
            <Link href="/posts/new" component={NextLink}>
              <a>Add Post</a>
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  closeDrawer: PropTypes.func,
};

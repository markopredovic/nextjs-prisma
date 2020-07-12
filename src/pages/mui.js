import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const handleClick = () => {
  console.log("handle click");
};

export default function PlaygroundPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h3" className="mb-4" mb={2}>
          Button
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClick}
          mb={4}
        >
          hello
        </Button>
        <Box mb={4} pb={2} color="text.secondary" clone>
          <Button variant="outlined">button</Button>
        </Box>
        <Typography variant="h3" className="mb-4" mb={2}>
          Button
        </Typography>
      </Container>
    </div>
  );
}

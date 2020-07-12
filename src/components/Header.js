import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Hidden,
  Container,
  Box,
  Drawer,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "64px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    "& .MuiPaper-root": {
      width: "80%",
      maxWidth: "350px",
    },
  },
}));

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleToggleMenu = () => {
    setDrawerOpened(true);
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar>
        <Container>
          <Toolbar disableGutters={true}>
            <Hidden smUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleToggleMenu}
              >
                <Menu fontSize="large" />
              </IconButton>
            </Hidden>
            <Typography variant="h6" className={classes.title}>
              Nextjs / Prisma / Material UI
            </Typography>
            <Hidden xsDown>
              <MainMenu />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        className={classes.drawer}
      >
        <MobileMenu closeDrawer={() => setDrawerOpened(false)} />
      </Drawer>
    </Box>
  );
}

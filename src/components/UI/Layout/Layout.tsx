import React, { Fragment, FC } from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@material-ui/core";

import Header from "../../Header";
import Footer from "../../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  children;
  return (
    <Fragment>
      <Header />
      <Container>
        <Box pt={5} pb={10}>
          {children}
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

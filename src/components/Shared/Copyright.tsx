import React from "react";
import { Box } from "@material-ui/core";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <Box mr={1} component="span">
        Copyright &copy; {currentYear} by
      </Box>
      <a href="https://markoni.codes">
        <Box color="beige" component="span">
          markoni.codes
        </Box>
      </a>
    </Box>
  );
};

export default Copyright;

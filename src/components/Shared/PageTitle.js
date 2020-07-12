import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
}));

const PageTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <Box mb={2} pt={2}>
      <Typography variant="h4" component="h3" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string,
};

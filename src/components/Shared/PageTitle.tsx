import React, { FunctionComponent } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    textTransform: "uppercase",
    "font-weight": "600",
  },
});

interface PageTitleProps {
  title: string;
}

const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Box mb={3}>
      <Typography variant="h4" component="h3" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;

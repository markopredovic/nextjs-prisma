import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, CardMedia, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h4": { marginBottom: "20px" },
  },
  media: {
    marginBottom: "30px",
    height: "300px",
    [theme.breakpoints.up("sm")]: {
      height: "350px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
  },
}));

const PostDetails = ({ post: { title, imageUrl, content } }) => {
  const classes = useStyles();

  const handleBack = () => {
    Router.back();
  };

  return (
    <Box className={classes.root}>
      <CardMedia
        image={
          imageUrl ? imageUrl : "https://picsum.photos/200?grayscale&blur=6"
        }
        component="div"
        className={classes.media}
      />
      <Typography variant="h4">{title}</Typography>
      <Typography paragraph variant="body1">
        {content}
      </Typography>
      <Button
        variant="default"
        onClick={handleBack}
        className={classes.button}
        startIcon={<ArrowBack />}
      >
        back
      </Button>
    </Box>
  );
};

export default PostDetails;

PostDetails.propTypes = {
  post: PropTypes.object,
};

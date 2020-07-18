import React, { FC } from "react";
import { Box, Typography, CardMedia, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
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

interface PostProps {
  title: string;
  imageUrl: string;
  content: string;
}

interface PostDetailsProps {
  post: PostProps;
}

const PostDetails: FC<PostDetailsProps> = ({
  post: { title, imageUrl, content },
}) => {
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
      <Button variant="text" onClick={handleBack} startIcon={<ArrowBack />}>
        back
      </Button>
    </Box>
  );
};

export default PostDetails;

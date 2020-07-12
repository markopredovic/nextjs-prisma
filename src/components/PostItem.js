import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: "1",
  },
  media: {
    height: "300px",
  },
});

const PostItem = ({ id, title, content, imageUrl, deletePost }) => {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const excerpt = content.substring(0, 100) + "...";
  const classes = useStyles();

  const handleRead = () => {
    router.push(`/posts/${id}`);
  };

  const handleEdit = () => {
    router.push(`/posts/edit/${id}`);
  };

  const handleDelete = async () => {
    setDeleting(true);
    await deletePost();
  };

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              imageUrl ? imageUrl : "https://picsum.photos/200?grayscale&blur=6"
            }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleRead} size="small" color="primary">
            Read more
          </Button>
          <Button onClick={handleEdit} size="small" color="primary">
            Edit
          </Button>
          <Button
            onClick={handleDelete}
            size="small"
            color="secondary"
            variant="contained"
            disabled={deleting}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostItem;

PostItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  deletePost: PropTypes.func,
};

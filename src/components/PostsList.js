import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import PostItem from "./PostItem";
import AppContext from "../context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
  },
  postItem: {
    marginBottom: "50px",
  },
}));

const PostsList = ({ posts, filter, mutate }) => {
  const classes = useStyles();
  const context = useContext(AppContext);

  const handleDelete = async (id) => {
    try {
      await context.deletePost(id);
    } catch (e) {
      console.log("e", e);
    } finally {
      mutate();
    }
  };

  const postsList = posts
    .filter((post) => {
      if (filter === "all") {
        return post;
      } else if (filter === "archived") {
        return post.archived === true;
      } else if (filter === "featured") {
        return post.featured === true;
      } else return post;
    })
    .map((post) => (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={post.id}>
        <PostItem {...post} deletePost={() => handleDelete(post.id)} />
      </Grid>
    ));

  return (
    <div className={classes.root}>
      {posts && posts.length > 0 ? (
        <Grid container spacing={3}>
          {postsList}
        </Grid>
      ) : (
        <Alert severity="info">No posts for selected criteria</Alert>
      )}
    </div>
  );
};

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.array,
  filter: PropTypes.string,
  mutate: PropTypes.func,
};

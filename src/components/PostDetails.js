import React from "react";
import PropTypes from "prop-types";

const PostDetails = ({ post }) => {
  console.log("PostDetails", post);
  if (!post) {
    return null;
  }
  return (
    <div>
      <h3 className="mb-4">{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;

PostDetails.propTypes = {
  post: PropTypes.object,
};

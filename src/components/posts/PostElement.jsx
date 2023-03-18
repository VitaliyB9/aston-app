import React from "react";
import ButtonPost from "../buttons/ButtonPost";
import PropTypes from "prop-types";

const PostElement = ({ post, remove, number }) => {
  return (
    <div className='post'>
      <div className='postContent'>
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div>
        <ButtonPost onClick={() => remove(post)}>Delete Post</ButtonPost>
      </div>
    </div>
  );
};

PostElement.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostElement;

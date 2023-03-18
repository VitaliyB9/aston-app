import React from "react";
import PostElement from "./PostElement";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h3>No one post</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {posts.map((post, index) => (
        <PostElement
          post={post}
          key={post.id}
          remove={remove}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default PostList;

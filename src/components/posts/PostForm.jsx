import React, { useState } from "react";
import InputPost from "../inputs/InputPost";

const PostForm = ({ create }) => {
  const [posts, setPosts] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...posts,
      id: Date.now(),
    };
    create(newPost);
    setPosts({ title: "", body: "" });
  };

  return (
    <form>
      <InputPost
        value={posts.title}
        onChange={(e) => setPosts({ ...posts, title: e.target.value })}
        type='text'
        placeholder='Write name post'
      />
      <InputPost
        value={posts.body}
        onChange={(e) => setPosts({ ...posts, body: e.target.value })}
        type='text'
        placeholder='Write description post'
      />
      <button onClick={addNewPost}>Add New Post</button>
    </form>
  );
};

export default PostForm;

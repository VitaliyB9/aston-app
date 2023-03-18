import React from "react";
import classes from "./InputPost.module.css";

const InputPost = (props) => {
  return (
    <input
      className={classes.inpPost}
      {...props}
    />
  );
};

export default InputPost;

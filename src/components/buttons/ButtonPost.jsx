import React from "react";
import classes from "./ButtonPost.module.css";

const ButtonPost = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={classes.btnPost}
    >
      {children}
    </button>
  );
};

export default ButtonPost;

import React from "react";
import ButtonPost from "../buttons/ButtonPost";
import classes from "./CommentElement.module.css";

const CommentElement = ({ comment, remove, update }) => {
  const handleRemoveComment = (event) => {
    event.stopPropagation();
    remove(comment);
  };

  const handleUpdateComment = () => {
    const name = prompt() || "";
    update({ ...comment, name });
  };
  return (
    <div
      className={classes.postItem}
      onClick={handleUpdateComment}
    >
      <div>
        <strong>
          {comment.id}. {comment.name}
        </strong>
        <div>{comment.body}</div>
      </div>
      <ButtonPost onClick={handleRemoveComment}>Delete Comment</ButtonPost>
    </div>
  );
};

export default CommentElement;

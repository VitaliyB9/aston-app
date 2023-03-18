import React, { useState } from "react";
import { commentsAPI } from "../../API/CommentsService";
import CommentItem from "./CommentElement";
import ButtonPost from "../buttons/ButtonPost";

const CommentsList = ({ title }) => {
  const [limit, setLimit] = useState(10);
  const { data: comments, error, isLoading } = commentsAPI.useFetchAllCommentsQuery(limit);
  const [createComment, {}] = commentsAPI.useCreateCommentMutation();
  const [deleteComment, {}] = commentsAPI.useDeleteCommentMutation();
  const [updateComment, {}] = commentsAPI.useUpdateCommentMutation();

  const handleCreateComment = async () => {
    const name = prompt();
    await createComment({ name, body: name });
  };
  const handleRemoveComment = (comment) => {
    deleteComment(comment);
  };

  const handleUpdateComment = (comment) => {
    updateComment(comment);
  };

  return (
    <div className='commentList'>
      <ButtonPost onClick={handleCreateComment}>Add New Comment</ButtonPost>
      <h3>{title}</h3>
      {error && <h3>Some Problems</h3>}
      {isLoading && <h3>Loading...</h3>}
      {comments &&
        comments.map((comment) => (
          <CommentItem
            remove={handleRemoveComment}
            update={handleUpdateComment}
            key={comment.id}
            comment={comment}
          />
        ))}
    </div>
  );
};

export default CommentsList;

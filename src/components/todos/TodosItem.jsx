import React from "react";
import classes from "./TodosItem.module.css";

const TodosItem = ({ todo }) => {
  return (
    <div className={classes.todo}>
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodosItem;

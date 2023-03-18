import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../features/todos/todosSlice";
import ButtonPost from "../buttons/ButtonPost";
import TodosItem from "./TodosItem";

const TodosList = ({ title }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    return state.todo.todos;
  });

  return (
    <div>
      <ButtonPost
        type='submit'
        onClick={() => dispatch(getTodos())}
      >
        Get Todos
      </ButtonPost>
      <h3>{title}</h3>
      {todos.map((todo) => (
        <TodosItem
          key={todo.title}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodosList;

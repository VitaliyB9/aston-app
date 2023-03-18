import React from "react";
import { Route, Routes } from "react-router-dom";
import TodosPage from "../../pages/TodosPage";
import Posts from "../../pages/Posts";
import Users from "../../pages/Users";
import CommentsPage from "../../pages/CommentsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/todos'
        element={<TodosPage />}
      />
      <Route
        path='/users'
        element={<Users />}
      />
      <Route
        path='/posts'
        element={<Posts />}
      />
      <Route
        path='/comments'
        element={<CommentsPage />}
      />
    </Routes>
  );
};

export default AppRouter;

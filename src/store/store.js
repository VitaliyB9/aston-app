import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice";
import { commentsAPI } from "../API/CommentsService";

export const store = configureStore({
  reducer: {
    todo: todosSlice,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), commentsAPI.middleware],
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

export const getTodos = createAsyncThunk("todos/getTodos", async (_, { rejectWithValue }) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosReducer: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { todosReducer } = todosSlice.actions;
export default todosSlice.reducer;

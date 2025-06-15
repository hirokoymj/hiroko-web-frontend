import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload,
        status: false,
      });
    },
    updateTodo: (state, action) => {
      const todo = state.todo.find((d) => d.id === action.payload);
      todo.status = true;
    },
    deleteTodo: (state, action) => {
      const removeIndex = state.todo.findIndex((d) => d.id === action.payload);
      state.splice(removeIndex, 1);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const techTabSlice = createSlice({
  name: "tab",
  initialState: {
    value: 0,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.value = action.payload;
    },
    resetActiveTab: (state) => {
      state.value = 1;
    },
  },
});

export const { setActiveTab, resetActiveTab } = techTabSlice.actions;
export default techTabSlice.reducer;

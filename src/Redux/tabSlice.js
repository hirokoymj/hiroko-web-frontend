import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "tab",
  initialState: {
    value: 1,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.value = action.payload;
    },
    resetActiveTab: (state) => {
      state.value = 0;
    },
  },
});

export const { setActiveTab, resetActiveTab } = tabSlice.actions;

export default tabSlice.reducer;

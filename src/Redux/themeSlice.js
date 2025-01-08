import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { currentTheme: "common" },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
    resetTheme: (state) => {
      state.currentTheme = "";
    },
  },
});

export const { setTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;

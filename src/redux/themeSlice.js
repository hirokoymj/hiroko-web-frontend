import { createSlice } from "@reduxjs/toolkit";
import { config } from "config/config";

const { Theme } = config;

export const themeSlice = createSlice({
  name: "theme",
  initialState: { name: Theme.default },
  reducers: {
    setThemeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setThemeName } = themeSlice.actions;

export default themeSlice.reducer;

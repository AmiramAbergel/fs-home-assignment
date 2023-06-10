import { createSlice } from "@reduxjs/toolkit";

/*
  This slice is used to store the selected category from the category list.
*/
const uiSlice = createSlice({
  name: "ui",
  initialState: { categoryIsVisible: false },
  reducers: {
    toggle(state) {
      state.categoryIsVisible = !state.categoryIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

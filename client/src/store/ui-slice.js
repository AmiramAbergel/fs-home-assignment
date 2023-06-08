import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { elementIsVisible: false },
  reducers: {
    toggle(state) {
      state.elementIsVisible = !state.elementIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

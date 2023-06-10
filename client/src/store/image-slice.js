import { createSlice } from "@reduxjs/toolkit";

/*
  This slice is used to store the selected image from the gallery.
*/
const imageSlice = createSlice({
  name: "image",
  initialState: { selectedImage: null },
  reducers: {
    selectImage(state, action) {
      state.selectedImage = action.payload;
    },
    deselectImage(state) {
      state.selectedImage = null;
    },
  },
});

export const imageActions = imageSlice.actions;

export default imageSlice;

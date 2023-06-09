import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import imageSlice from './image-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, image: imageSlice.reducer }
});

export default store;

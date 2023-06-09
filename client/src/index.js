import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/index';
import './index.css';
import App from './App';
import { ImageProvider } from './hooks/ImageContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <ImageProvider>
      <App />
    </ImageProvider>
  </Provider>
  //</React.StrictMode>
);

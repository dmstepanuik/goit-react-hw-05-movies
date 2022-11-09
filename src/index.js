import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BASE_PATH } from 'variables/variables';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename={BASE_PATH}>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

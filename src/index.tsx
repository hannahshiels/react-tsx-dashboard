import React from 'react';
import ReactDOM from 'react-dom/client';
import 'Styles/css/index.css';
import App from './App';
import { Affix, Button } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


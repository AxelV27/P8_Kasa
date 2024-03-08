import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Main_style/main.css'
import IndexRoutes from './components/Routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexRoutes />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './source/01-父传子-PropTypes参数验证';
// import App from './source/02-子传父-函数传递'
import App from './source/03-组件通信的案例';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

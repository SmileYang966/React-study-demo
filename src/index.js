import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './source/01-父传子-PropTypes参数验证';
// import App from './source/02-子传父-函数传递'
// import App from './source/03-组件通信的案例';
// import App from './source/04-React实现slot/04-React实现slot'
// import App from './source/05-React实现跨组件通信/App';
// import App from './source/06-React性能优化/列表中key的作用';
// import App from './source/06-React性能优化/02-组件嵌套的render调用-PureComponent';
// import App from './source/08-受控和非受控组件/01-ref的使用';
// import App from './source/09-高阶组件/01-高阶组件的定义方式';
import App from './source/09-高阶组件/02-高阶组件的应用-增强props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

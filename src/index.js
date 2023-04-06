import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 引用一下css 
import './source/css/index.css'
// import App from './source/01-父传子-PropTypes参数验证';
// import App from './source/02-子传父-函数传递'
// import App from './source/03-组件通信的案例';
// import App from './source/04-React实现slot/04-React实现slot'
// import App from './source/05-React实现跨组件通信/App';
// import App from './source/06-React性能优化/列表中key的作用';
// import App from './source/06-React性能优化/02-组件嵌套的render调用-PureComponent';
// import App from './source/08-受控和非受控组件/01-ref的使用';
// import App from './source/09-高阶组件/01-高阶组件的定义方式';
// import App from './source/09-高阶组件/04-高阶组件的应用-增强props-改进';
// import App from './source/09-高阶组件/06-高阶组件-生命周期劫持'
// import App from './source/10-组件内容补充/01-ref的转发'
// import App from './source/10-组件内容补充/03-fragments的使用'
import App from './source/10-组件内容补充/04-StrickMode'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strickMode会检查哪些内容？
  //
  //
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

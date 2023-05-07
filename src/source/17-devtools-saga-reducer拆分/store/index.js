// 导入applyMiddleware
import { createStore,applyMiddleware,compose } from 'redux';
// 引入thunkMiddleware
import thunkMiddleware from 'redux-thunk'
// 创建一个createSagaMiddleware中间件，它是一个函数
// 总结：步骤1-引入createSagaMiddleware这个函数
import createSagaMiddleware from 'redux-saga'

import mySaga from './saga.js';

import reducer from './reducer.js'

//如果当前浏览器有安装redux-devtools，就会取值window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,否则会取值compose 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
composeEnhancer.trace = true;

// 创建其它的中间件
// 总结：步骤2-创建createSagaMiddleware这个函数
const sagaMiddleware = createSagaMiddleware();

// 应用一些中间件，这个中间件可以让用户在actionCreators阶段，处理一些额外的情况，例如，请求网络，cookie解析，日志记录，文件压缩等操作
// 这个中间件的目的，是在dispatch的action和我们最终到达的reducer之间，扩展自己的一些代码

// 添加saga中间件
// 总结：步骤3-为applyMiddleware添加多个中间件，这里就有2个中间件，thunkMiddleware和sagaMiddleware
 const storeEnhancer = applyMiddleware(thunkMiddleware,sagaMiddleware)

//  总结：步骤4-storeEnhancer
const store = createStore(reducer,composeEnhancer(storeEnhancer));

 //导入saga文件里的生成器函数,mysaga函数里定义了具体对哪些function进行拦截
 sagaMiddleware.run(mySaga);


export default store;

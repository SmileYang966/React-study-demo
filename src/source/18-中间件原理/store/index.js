// 导入applyMiddleware
import { createStore,applyMiddleware } from 'redux';
// 引入thunkMiddleware
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer.js'

// 应用一些中间件，这个中间件可以让用户在actionCreators阶段，处理一些额外的情况，例如，请求网络，cookie解析，日志记录，文件压缩等操作
// 这个中间件的目的，是在dispatch的action和我们最终到达的reducer之间，扩展自己的一些代码 
 const storeEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(reducer,storeEnhancer);

export default store;

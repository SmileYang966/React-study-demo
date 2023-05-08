import { reducer as homeReducer } from './home'
import { reducer as counterReducer } from './counter'

import { combineReducers } from 'redux'

// reducer主要是定义了各个action的实现
// const reducer = (state = {},action) => {
//   return {
//     counterInfo : counterReducer(state.counterInfo,action),
//     homeInfo : homeReducer(state.homeInfo,action)
//   }
// }

// 使用redux提供的combineReducers，对counterReducer和homeReducer进行合并
const reducer = combineReducers({
  counterInfo : counterReducer,
  homeInfo : homeReducer
})


export default reducer;
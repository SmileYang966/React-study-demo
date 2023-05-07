import { reducer as homeReducer } from './home'
import { reducer as counterReducer } from './counter'

// reducer主要是定义了各个action的实现
const reducer = (state = {},action) => {
  return {
    counterInfo : counterReducer(state.counterInfo,action),
    homeInfo : homeReducer(state.homeInfo,action)
  }
}

export default reducer;
import { ADD_NUMBER, SUB_NUMBER,INCREASEMENT,DECREASEMENT} from './constants.js'

const initData = {
  counter : 0
}

// reducer主要是定义了各个action的实现
const reducer = (state = initData,action) => {
  switch(action.type){
    case INCREASEMENT:
      return { ...state, counter : state.counter + 1 }
    case DECREASEMENT:
      return { ...state, counter : state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter : state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter : state.counter - action.num }     
    default:
      return state; 
  }
}

export default reducer;
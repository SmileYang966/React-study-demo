import { ADD_NUMBER, SUB_NUMBER,INCREASEMENT,DECREASEMENT,CHANGE_BANNERS,CHANGE_RECOMMENDS } from './constants.js'

const initData = {
  counter : 0,
  banners : [],
  recommends : []
}

// reducer主要是定义了各个action的实现
const reducer = (state = initData,action) => {
  console.log("state is ",state,action)
  switch(action.type){
    case INCREASEMENT:
      return { ...state, counter : state.counter + 1 }
    case DECREASEMENT:
      return { ...state, counter : state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter : state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter : state.counter - action.num }
    case CHANGE_BANNERS:
      return { ...state, banners : action.banners }
    case CHANGE_RECOMMENDS:
        return { ...state, recommends : action.recommends }      
    default:
      return state; 
  }
}

export default reducer;
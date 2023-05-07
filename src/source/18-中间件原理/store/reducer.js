import { ADD_NUMBER, SUB_NUMBER,INCREASEMENT,DECREASEMENT,CHANGE_BANNERS,CHANGE_RECOMMENDS } from './constants.js'



// reducer主要是定义了各个action的实现
const reducer = (state = {},action) => {
  return {
    counterInfo : counterReducer(state.counterInfo,action),
    homeInfo : homeReducer(state.homeInfo,action)
  }
}

const counterInitData = {
  counter : 0
}
const counterReducer = (state = counterInitData,action) => {
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

const homeInitData = {
  banners : [],
  recommends : []
}
const homeReducer = (state = homeInitData,action) => {
  switch(action.type){
    case CHANGE_BANNERS:
      return { ...state, banners : action.banners }
    case CHANGE_RECOMMENDS:
        return { ...state, recommends : action.recommends }      
    default:
      return state; 
  }
}

export default reducer;
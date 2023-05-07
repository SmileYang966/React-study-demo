import {CHANGE_BANNERS,CHANGE_RECOMMENDS } from './constants.js'

const initData = {
  banners : [],
  recommends : []
}

// reducer主要是定义了各个action的实现
const reducer = (state = initData,action) => {
  console.log("state is ",state,action)
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
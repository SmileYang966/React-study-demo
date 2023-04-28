import { ADD_NUMBER, SUB_NUMBER, INCREASEMENT, DECREASEMENT} from './constants.js'

export const addAction = num => ({
  type : ADD_NUMBER,
  num
})

export const subAction = num => ({
  type : SUB_NUMBER,
  num
})

export const increasementAction = ()=>({
  type : INCREASEMENT
})

export const decreasementAction = () => ({
  type : DECREASEMENT
})
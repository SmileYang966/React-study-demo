import { ADD_NUMBER, SUB_NUMBER, INCREASEMENT, DECREASEMENT, CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants.js'

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

export const changeBannerAction = (banners) => ({
  type : CHANGE_BANNERS,
  banners
})

export const changeRecomendAction = (recommends) => ({
  type : CHANGE_RECOMMENDS,
  recommends 
})
import axios from 'axios'
import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants.js'

export const changeBannerAction = (banners) => ({
  type : CHANGE_BANNERS,
  banners
})

export const changeRecomendAction = (recommends) => ({
  type : CHANGE_RECOMMENDS,
  recommends 
})

export const getHomeMultidataAction = dispatch => {
  console.log("函数中--getHomeMultidataAction",dispatch);
  axios({
    url:'https://mockapi.eolink.com/U6CZxWM9cedf95a49b4284e3e1a7985c53f89a9ccda5d45/home/multidata?responseId=1233072',
  }).then(response=>{
    console.log("response is ",response);
    const recommends = response.data.totalData.recommends;
    const banners = response.data.totalData.banners;
    console.log(`recommends is ${JSON.stringify(recommends)},banners is ${JSON.stringify(banners)}`);

    dispatch(changeRecomendAction(recommends));
    dispatch(changeBannerAction(banners));
  })
}
import { takeEvery, put, all } from 'redux-saga/effects'
import { FETCH_HOME_MULTIDATA } from './constants';
import { changeBannerAction,changeRecomendAction } from './actionCreators';
import axios from 'axios';

// 定义生成器函数,生成器函数是在action和reducer之间做一些action的额外操作
function *mySaga(){
  // 执行一个生成器函数,对FETCH_HOME_MULTIDATA这个action进行拦截,拦截后并执行生成器函数
  yield takeEvery(FETCH_HOME_MULTIDATA,fetchHomeMultiData)
}

function *fetchHomeMultiData(){
  const result = yield axios({
    url:'https://mockapi.eolink.com/U6CZxWM9cedf95a49b4284e3e1a7985c53f89a9ccda5d45/home/multidata?responseId=1233072',
  });
  console.log("result is ",result);
  const recommends = result.data.totalData.recommends;
  const banners = result.data.totalData.banners;
  console.log(`recommends is ${JSON.stringify(recommends)},banners is ${JSON.stringify(banners)}`);

  // 写法1
  // yield put(changeRecomendAction(recommends))
  // yield put(changeBannerAction(banners))

  // 写法2
  yield all([
    yield put(changeRecomendAction(recommends)), 
    yield put(changeBannerAction(banners))
  ])
}

export default mySaga;
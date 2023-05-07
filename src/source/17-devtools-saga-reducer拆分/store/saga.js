import { takeEvery, put, all } from 'redux-saga/effects'
import { FETCH_HOME_MULTIDATA } from './constants';
import { changeBannerAction,changeRecomendAction } from './actionCreators';
import axios from 'axios';

// 总结：步骤5-定义一个生成器函数mySaga，其中的一个action为FETCH_HOME_MULTIDATA,第二个参数是执行的fetchHomeMultiData生成器函数
// 定义生成器函数,生成器函数是在action和reducer之间做一些action的额外操作
function *mySaga(){
  // 执行一个生成器函数,对FETCH_HOME_MULTIDATA这个action进行拦截,拦截后并执行生成器函数
  // takeEvery 和 takeLatest的区别
  // takeLatest:依次只能监听一个action
  // takeEvery:每一个都会执行
  yield takeEvery(FETCH_HOME_MULTIDATA,fetchHomeMultiData)
}

// 总结：步骤6-定义一个生成器函数fetchHomeMultiData生成器函数，yield all定义一个数组，执行所有的生成器函数
function *fetchHomeMultiData(){
  const result = yield axios({
    url:'https://mockapi.eolink.com/n7sRtWC2e04098bceaaeb69884a16f1839c565fc52d7804/home/multidata?responseId=1207149',
  });
  console.log("result is ",result);
  const recommends = result.data.totalData.recommends;
  const banners = result.data.totalData.banners;
  console.log(`recommends is ${JSON.stringify(recommends)},banners is ${JSON.stringify(banners)}`);

  // 写法1
  // yield put(changeRecomendAction(recommends))
  // yield put(changeBannerAction(banners))

  // 写法2
  // 总结：步骤7-yield all定义一个数组,执行所有的生成器函数
  yield all([
    yield put(changeRecomendAction(recommends)), 
    yield put(changeBannerAction(banners))
  ])
}

export default mySaga;
import React, { Component, PureComponent } from 'react'
import store from '../store/index.js';
import { addAction,increasementAction,changeBannerAction,changeRecomendAction,getHomeMultidataAction} from '../store/actionCreators.js'
// import { connect } from '../utils/connect.js';
import { connect } from 'react-redux';
import axios from 'axios';

class Home4 extends Component {
  render() {
    return (
      <div>
        Home
        <div>当前计数:{this.props.counter}</div>
        <button onClick={e=>{this.props.increasementNumber()}}>+1</button>
        <button onClick={e=>{this.props.plusNumber(5)}}>+5</button>
      </div>
    )
  }

  componentDidMount(){
    this.props.getHomeMultidata();
  }
}

const mapStateToProps = state => ({
  counter : state.counter 
});


const mapDispatchToProps = dispatch => ({
  plusNumber : function(num){
    dispatch(addAction(num))
  },
  increasementNumber : function(){
    // 这里的increasementAction()本质上返回的是一个对象
    dispatch(increasementAction())
  },

  // 这个中间件的目的，是在dispatch的action和我们最终到达的reducer之间，扩展自己的一些代码,
  // 这里需要返回的是一个函数，而非对象，因为函数里可以做一些网络请求处理，然后函数内部在执行dispatch调用
  getHomeMultidata(){
    // 这里我们需要传入一个函数
    dispatch(getHomeMultidataAction)
  }
}); 


export default connect(mapStateToProps,mapDispatchToProps)(Home4);

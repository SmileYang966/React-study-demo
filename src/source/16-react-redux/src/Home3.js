import React, { Component, PureComponent } from 'react'
import store from '../store/index.js';
import { addAction,increasementAction,changeBannerAction,changeRecomendAction} from '../store/actionCreators.js'
// import { connect } from '../utils/connect.js';
import { connect } from 'react-redux';
import axios from 'axios';

class Home3 extends Component {
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
    axios({
      url:'https://mockapi.eolink.com/U6CZxWM9cedf95a49b4284e3e1a7985c53f89a9ccda5d45/home/multidata?responseId=1233072',
    }).then(response=>{
      console.log("response is ",response);
      const recommends = response.data.totalData.recommends;
      const banners = response.data.totalData.banners;
      console.log(`recommends is ${JSON.stringify(recommends)},banners is ${JSON.stringify(banners)}`);

      this.props.changeRecommends(recommends);
      this.props.changeBanners(banners);
    })
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
    dispatch(increasementAction())
  },
  changeRecommends : function(recommends){
    dispatch(changeRecomendAction(recommends));
  },
  changeBanners : function(banners){
    dispatch(changeBannerAction(banners));
  }
}); 


export default connect(mapStateToProps,mapDispatchToProps)(Home3);

import React, { Component, PureComponent } from 'react'
import store from '../store/index.js';
import { addAction,increasementAction } from '../store/actionCreators.js'
// import { connect } from '../utils/connect.js';
import { connect } from 'react-redux';

class Home2 extends Component {
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
  }
}); 


export default connect(mapStateToProps,mapDispatchToProps)(Home2);

import React, { Component, PureComponent } from 'react'
import store from '../store/index.js';
import { addAction,increasementAction } from '../store/actionCreators.js'
import { connect } from '../utils/connect.js';

class Home1 extends Component {
  /*
  constructor(props){
    super(props);

    this.state = {
      counter : store.getState().counter
    }
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      console.log("Home 收到数据 ", store.getState().counter);
      this.setState({
        counter : store.getState().counter
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  plusNumber(num) {
    console.log("11122");
    store.dispatch(addAction(num))
  }

  increasementNumber(){
    store.dispatch(increasementAction())
  }
  */

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

/*
const mapStateToProps = state => {
  return {
    counter : state.counter
  }
}
*/
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


export default connect(mapStateToProps,mapDispatchToProps)(Home1);

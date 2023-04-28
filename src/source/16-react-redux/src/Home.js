import React, { Component, PureComponent } from 'react'
import store from '../store/index.js';
import { addAction } from '../store/actionCreators.js'

export default class Home extends Component {

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

  render() {
    return (
      <div>
        Home
        <div>当前计数:{this.state.counter}</div>
        <button onClick={e=>{this.plusNumber(1)}}>+1</button>
        <button onClick={e=>{this.plusNumber(5)}}>+5</button>
      </div>
    )
  }
}

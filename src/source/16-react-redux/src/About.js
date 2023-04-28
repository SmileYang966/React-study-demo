import React, { PureComponent } from 'react'
import store from '../store';
import { subAction } from '../store/actionCreators';

export default class About extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      counter : store.getState().counter
    }
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      console.log("About 收到数据 ", store.getState().counter);
      this.setState({
        counter : store.getState().counter
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  subValue(num){
    store.dispatch(subAction(num))
  }

  render() {
    return (
      <div>
        About
        <div>当前计数:{this.state.counter}</div>
        <button onClick={e=>this.subValue(1)}>-1</button>
        <button onClick={e=>this.subValue(5)}>-5</button>
      </div>
    )
  }
}

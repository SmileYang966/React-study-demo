import React, { PureComponent } from 'react'
import store from '../store';
import { subAction,decreasementAction } from '../store/actionCreators';
import { connect } from 'react-redux';

class About2 extends PureComponent {
  render() {
    return (
      <div>
        About
        <div>当前计数:{this.props.counter}</div>
        <button onClick={e=>this.props.decreasementValue()}>-1</button>
        <button onClick={e=>this.props.subValue(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter : state.counter
})

const mapDispatchToProps = dispatch => ({
  decreasementValue : function(){
    dispatch(decreasementAction());
  },
  subValue : function(num){
    dispatch(subAction(num));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(About2);

import React, { PureComponent } from 'react'
import store from '../store';
import { subAction,decreasementAction } from '../store/actionCreators';
import { connect } from 'react-redux';

class About4 extends PureComponent {
  componentDidMount(){
    console.log("this.props.recommends = ",JSON.stringify(this.props.recommends));
  }

  render() {
    return (
      <div>
        About
        <div>当前计数:{this.props.counter}</div>
        <button onClick={e=>this.props.decreasementValue()}>-1</button>
        <button onClick={e=>this.props.subValue(5)}>-5</button>
        <div>Banners</div>
        <ul>
        {
          this.props.banners.map((item,index)=>{
            return <li key={item.name}>{item.name + '--' + item.age}</li>
          })
        }
        </ul>

        <div>recommends</div>
        <ul>
        {
          this.props.recommends.map((item,index)=>{
            return <li key={item.name}>{item.name}</li>
          })
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter : state.counter,
  recommends : state.recommends,
  banners : state.banners
})

const mapDispatchToProps = dispatch => ({
  decreasementValue : function(){
    dispatch(decreasementAction());
  },
  subValue : function(num){
    dispatch(subAction(num));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(About4);

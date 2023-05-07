import React, { PureComponent } from 'react'
import { subAction,addAction,increasementAction,decreasementAction } from './store/actionCreators'
import store from './store'


export default class App extends PureComponent {

  componentDidMount(){
    // store.subscribe(()=>{
    //   console.log("store.getState() is ",store.getState());
    // })
  }

  increasementClicked = () => {
    // console.log("dispatch前---",addAction(10));
    // store.dispatch(increasementAction())
    // console.log("dispatch后---",store.getState());
  }

  addAction = ()=>{
    console.log("dispatch前---",addAction(10));
    store.dispatch(addAction(10))
    console.log("dispatch后---",store.getState());
  }

  render() {
    return (
      <div>
        <button onClick={this.increasementClicked} style={{width:'100%',height:40,marginTop:20}}>+1</button>
        <button onClick={this.addAction} style={{width:'100%',height:40,marginTop:20}} >+10</button>
      </div>
    )
  }
}

function patchLogginng(store){
  const next = store.dispatch;

  function dispatchAndLogginng(action){
    console.log("dispatch前---",action);
    next(action);
    console.log("dispatch后---",store.getState());
  }

  // store.dispatch = dispatchAndLogginng;
  return dispatchAndLogginng;
}

function patchThunk(store){
  const next = store.dispatch;

  function dispatchAndThunk(action){
    if(typeof action === "function"){
      action(store.dispatch,store.getState);
    }else{
      next(action);
    }
  }
  // store.dispatch = dispatchAndThunk;
  return dispatchAndThunk;
}

patchLogginng(store);
patchThunk(store);

function applyMiddlewares(...middlewares){
  middlewares.forEach((middleware)=>{
    store.dispatch = middleware(store)
  })
}

applyMiddlewares(patchLogginng,patchThunk)
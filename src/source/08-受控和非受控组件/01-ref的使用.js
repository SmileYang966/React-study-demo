import React, { PureComponent, createRef } from 'react'



class Counter extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
        counter : 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={this.changeCounter}>Click Me</button>
      </div>
    )
  }

  changeCounter = () => {
    this.setState({
        counter : this.state.counter + 1
    })
  }
}



export default class App extends PureComponent {

  constructor(props){
    super(props);

    //创建一个ref对象
    this.titleRef = createRef();

    this.titleEl = null;

    this.counterRef = createRef();
  }
    
  componentDidMount(){

  }


//   ref可以是字符串，对象以及函数 
  render() {
    return (
      <div>
        {/* 方式1 */}
        <h2 ref='titleRef'>aaa</h2>
        <button onClick={e => this.changeText()}>ref方式1-字符串</button>

        {/* 对象方式，目前React推荐的方式 */}
        <h3 ref={this.titleRef}>bbb</h3>
        <button onClick={e => this.changeText1()}>ref方式2-对象</button>

        {/* 回调函数 */}
        <h4 ref={arg => { this.titleEl = arg}}>ccc</h4>
        <button onClick={e => this.changeText2()}>ref方式3-回调函数</button>

        <hr/>

        <Counter ref={this.counterRef}/>

        <hr/>
        <button onClick={this.changeCounter}>App按钮点击-Counter</button>
      </div>
    )
  }

  //方式1:字符串
  changeText(){
     console.log("this.refs.titleRef = ",this.refs.titleRef);
     this.refs.titleRef.innerHTML = "Hello Evan Yang";
  }

  //方式2:对象方式
  changeText1(){
    this.titleRef.current.innerHTML = "Hello Shanchenng"
  }

  //方式3:函数方式
  changeText2(){
    this.titleEl.innerHTML = "Evan YANNG"
  }

  //App按钮点击-Counter
  changeCounter = ()=> {
    console.log(this.counterRef.current);
    //this.counterRef.current获取的是一个组件对象
    this.counterRef.current.changeCounter();
  }
}

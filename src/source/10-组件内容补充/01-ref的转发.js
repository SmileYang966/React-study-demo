import React, { createRef, forwardRef, PureComponent,  } from 'react'

class Home extends PureComponent{
    render(){
        return (
            <h2>Hello world</h2>

        )
    }
}

//这里需要用呢forwardRef来对函数组件进行封装
const Profile = forwardRef(
    function (props,ref){
        return (
            <h1 ref={ref}>Profile</h1>
        );
    }
)

export default class App extends PureComponent {
    constructor(props){
        super(props);

        this.titleRef = createRef();
        this.homeRef = createRef();
        this.profileRef = createRef();
    }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>1111</h2>
        <Home ref={this.homeRef}/>
        <Profile ref={this.profileRef}/>
        <button onClick={this.printInfo}>Click Me</button>
      </div>
    )
  }

  printInfo = ()=> {
    console.log("this.titleRef = ",this.titleRef.current);
    console.log("this.homeRef = ",this.homeRef.current);
    console.log("this.profileRef = ",this.profileRef.current);

  }
}

import React, { createRef, PureComponent, useRef } from 'react'

export default class App extends PureComponent {

    constructor(props){
        super(props);
        this.usernameRef = createRef();
    }
  render() {
    return ( 
      <div>
        <form onSubmit={this.submit}>
            <label htmlFor='username'>
                用户:<input type='text' id='username' ref={this.usernameRef}/>
            </label>
            <br/>
            <input type='submit' value='提交'/>
        </form>
      </div>
    )
  }

   submit = (event) => {
    event.preventDefault();
    //非受控组价，通过this.usernameRef.current.value可以获取input上的输入值
    console.log("this.usernameRef.current is ",this.usernameRef.current.value);
  }
 }

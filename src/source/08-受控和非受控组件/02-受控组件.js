import React, { PureComponent } from 'react'

export default class App extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }
  render() {
    return ( 
      <div>
        <form onSubmit={this.submit}>
            <label htmlFor='username'>
                用户:<input type='text' id='username' name='username' onChange={e => this.handleChange(e)} value={this.state.username}/>
            </label>
            <br/>
            <label htmlFor='password'>
                密码:<input type='password' id='password' name='password' onChange={e => this.handleChange(e)} value={this.state.password}/>
            </label>
            <br/>
            <input type='submit' value='提交'/>
        </form>
      </div>
    )
  }

   submit = (event) => {
    console.log("this.submit",this.state.username,this.state.password);
    event.preventDefault();
  }

   handleChange(event,type){
    console.log(event.target.value,event.target.name);
    this.setState({
        //计算属性名
        [event.target.name] : event.target.value
    })
   }
 }

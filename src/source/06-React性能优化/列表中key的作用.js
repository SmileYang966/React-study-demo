import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies : ['阿凡达','aaa','bbbb','cccddd']
    }
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
        {
          this.state.movies.map((item,index)=>{
            return (
              <li key={item}>{item}</li>
            );
          })
        }
        </ul>
        <button onClick={e=>this.addNew()}>添加电影</button>
      </div>
    )
  }

  addNew(){
    this.setState({
      movies : ['大话西游',...this.state.movies,]
    })
  }
}

import React, { PureComponent } from 'react'
import Home from './src/Home'
import About from './src/About'
import Home1 from './src/Home1'


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Home1/>
      </div>
    )
  }
}

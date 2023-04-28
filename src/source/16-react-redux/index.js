import React, { PureComponent } from 'react'
import Home from './src/Home'
import About from './src/About'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <About/>
      </div>
    )
  }
}

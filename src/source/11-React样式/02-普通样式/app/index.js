import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'

import './style.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <h1 className='title'>app</h1>
        <hr/>
        <Home/>
        <hr/>
        <Profile/>
      </div>
    )
  }
}
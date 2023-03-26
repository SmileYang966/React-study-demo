import React, { Component } from 'react'
import NavigationBar from './NavigationBar'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar leftSlot={<span>aaa</span>} centerSlot={<strong>bbbb</strong>} rightSlot={<a href='#'>ccc</a>}/>
      </div>
    )
  }
}

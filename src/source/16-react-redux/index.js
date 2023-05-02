import React, { PureComponent } from 'react'
import Home from './src/Home'
import About from './src/About'
import Home1 from './src/Home1'

import StoreContext from './utils/context'
import store from './store'

export default class App extends PureComponent {
  render() {
    return (
      <StoreContext.Provider value={store}>
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Home1/>
      </StoreContext.Provider>
    )
  }
}

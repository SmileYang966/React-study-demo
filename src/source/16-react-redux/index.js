import React, { PureComponent } from 'react'
import Home from './src/Home'
import About from './src/About'
import Home1 from './src/Home1'
import Home2 from './src/Home2'
import About2 from './src/About2'

import { Provider } from 'react-redux'
import StoreContext from './utils/context'
import store from './store'
import Home3 from './src/Home3'
import About3 from './src/About3'
import Home4 from './src/Home4-redux-thunk使用'
import About4 from './src/About4'

export default class App extends PureComponent {
  render() {
    return (
      // <StoreContext.Provider value={store}>
      //   <Home/>
      //   <hr/>
      //   <About/>
      //   <hr/>
      //   <Home1/>
      // </StoreContext.Provider>

      <Provider store={store}>
        <Home2/>
        <hr/>
        <About2/>
        
        {/* <h2>Home3</h2>
        <Home3/>
        <h2>About3</h2>
        <About3/> */}

        <h2>Home4</h2>
        <Home4/>
        <h2>About4</h2>
        <About4/>
      </Provider>
    )
  }
}

import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import StoreContext from './utils/context'
import store from './store'
import Home4 from './src/Home4-redux-thunk使用'
import About4 from './src/About4'
import Home5 from './src/Home5-redux-saga的使用'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <h2>Home4</h2>
        <Home5/>
        <h2>About4</h2>
        <About4/>
      </Provider>
    )
  }
}

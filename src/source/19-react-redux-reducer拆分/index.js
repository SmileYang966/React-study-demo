import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home4 from './src/Home4'
import About4 from './src/About4'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <h2>Home4</h2>
        <Home4/>
        <h2>About4</h2>
        <About4/>
      </Provider>
    )
  }
}

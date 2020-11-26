// App.js

import React from 'react';
import { Provider } from 'react-redux'
import Navigation from './stacks/Navigation'
import { store } from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
      
    )
  }
}
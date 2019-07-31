import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Messenger from '../Messenger';

import configureStore from '../../store';
let { store } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Messenger />
        </div>
      </Provider>
    );
  }
}
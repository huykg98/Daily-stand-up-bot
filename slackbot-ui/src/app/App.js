import React, { Component } from 'react';
import $ from 'jquery';
import Routes from './Routes';
import { Provider } from 'mobx-react';
import { getInstanceStores } from './stores/Store';
import {enableLogging} from 'mobx-logger';
require('./events/Listener');
let enableMobxTracker = false;
const config = { 
    predicate: () => enableMobxTracker,
    action: true,
    reaction: true,
    transaction: true,
    compute: true
};
enableLogging(config);

class App extends Component {
  render() {
    return (
      <Provider {...getInstanceStores()}>
        <Routes />
      </Provider>
    )
  }  
}

export default App

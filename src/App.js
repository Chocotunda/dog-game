import React, { Component } from 'react';
import './App.css';
import store from './store'
import ShuffleContainer from './ShuffleContainer'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <ShuffleContainer />
      </div>
      </Provider>
    );
  }
}

export default App;

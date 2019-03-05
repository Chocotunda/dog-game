import React, { Component } from 'react';
import './App.css';
import store from './store'
import AnswerListContainer from './AnswerListContainer'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Breaking Breeds</h1>
          <div>option 1</div>
          <div>option 2</div>
          <div>option 3</div>
          <AnswerListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

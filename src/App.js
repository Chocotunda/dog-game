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
       <AnswerListContainer />
      </div>
      </Provider>

    );
  }
}

export default App;




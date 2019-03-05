import React, { Component } from 'react';
import './App.css';
import store from './store'

import DogsBreedImagesContainer from './components/DogsBreedImagesContainer'
import { Provider } from 'react-redux'
import AnswerListContainer from './AnswerListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

       

        <div className="App">
      <DogsBreedImagesContainer />
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
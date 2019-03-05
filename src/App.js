import React, { Component } from 'react';
import './App.css';
import store from './store'
import DogsBreedImagesContainer from './components/DogsBreedImagesContainer'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <DogsBreedImagesContainer />
      </div>
      </Provider>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import DogsList from './components/DogsList';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1><DogsList DogsList=''/>
       </h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Image from './components/Image';
import Questions from './components/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Image/>
        </div>
        <div>
      <Questions/>
        </div>
      </div>
    );
  }
}

export default App;

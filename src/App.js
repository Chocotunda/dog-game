import React, { Component } from "react";
import "./App.css";
import store from "./store";
import DogsBreedImagesContainer from "./components/DogsBreedImagesContainer";
import { Provider } from "react-redux";
import AnswerListContainer from "./components/AnswerListContainer";
import Shuffle from "./components/Shuffle";

class App extends Component {

rightAnswer = () => {
  return console.log('Right Answer')
}  

  render() {

    
    return (
      <Provider store={store}>
        <div className="App">
          <DogsBreedImagesContainer />
          <Shuffle rightAnswer = {this.rightAnswer}/>
          <AnswerListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

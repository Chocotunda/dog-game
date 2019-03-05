import React, { Component } from "react";
import "./App.css";
import store from "./store";

import DogsBreedImagesContainer from "./components/DogsBreedImagesContainer";
import { Provider } from "react-redux";
import AnswerListContainer from "./components/AnswerListContainer";
import ShuffleContainer from "./components/ShuffleContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DogsBreedImagesContainer />
          <ShuffleContainer />
          <AnswerListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

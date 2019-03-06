import React, { Component } from "react";
import "./App.css";
import store from "./store";
import DogsBreedImagesContainer from "./components/DogsBreedImagesContainer";
import { Provider } from "react-redux";
import AnswerListContainer from "./components/AnswerListContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DogsBreedImagesContainer />

          <AnswerListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";
import Awnsers from "./components/Awnsers";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Image />
          </div>
          <div>
            <Awnsers />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

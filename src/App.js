import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";
import Awnsers from "./components/Awnsers";


class App extends Component {
  render() {
    return (

        <div className="App">
          <div>
            <Image />
          </div>
          <div>
            <Awnsers />
          </div>
        </div>

    );
  }
}

export default App;
